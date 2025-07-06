
-- Create cars table to store vehicle inventory
CREATE TABLE public.cars (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  mileage INTEGER NOT NULL,
  images TEXT[] DEFAULT '{}',
  image TEXT,
  features TEXT[] DEFAULT '{}',
  condition TEXT,
  description TEXT,
  craigslist_url TEXT,
  engine_type TEXT,
  transmission TEXT,
  fuel_economy TEXT,
  fuel_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  role TEXT DEFAULT 'customer',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create inquiries table for customer inquiries about cars
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  car_id UUID REFERENCES public.cars(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS TEXT
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.profiles WHERE id = user_id;
$$;

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY definer SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  );
  RETURN new;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS Policies for cars table
-- Allow everyone to view cars (public inventory)
CREATE POLICY "Anyone can view cars" ON public.cars
  FOR SELECT USING (true);

-- Only admin/staff can insert cars
CREATE POLICY "Only admin can insert cars" ON public.cars
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    public.get_user_role(auth.uid()) IN ('admin', 'staff')
  );

-- Only admin/staff can update cars
CREATE POLICY "Only admin can update cars" ON public.cars
  FOR UPDATE USING (
    auth.uid() IS NOT NULL AND 
    public.get_user_role(auth.uid()) IN ('admin', 'staff')
  );

-- Only admin can delete cars
CREATE POLICY "Only admin can delete cars" ON public.cars
  FOR DELETE USING (
    auth.uid() IS NOT NULL AND 
    public.get_user_role(auth.uid()) = 'admin'
  );

-- RLS Policies for profiles table
-- Users can view their own profile, admin can view all
CREATE POLICY "Users can view own profile, admin can view all" ON public.profiles
  FOR SELECT USING (
    auth.uid() = id OR 
    public.get_user_role(auth.uid()) IN ('admin', 'staff')
  );

-- Users can update their own profile, admin can update all
CREATE POLICY "Users can update own profile, admin can update all" ON public.profiles
  FOR UPDATE USING (
    auth.uid() = id OR 
    public.get_user_role(auth.uid()) = 'admin'
  );

-- Only system can insert profiles (via trigger)
CREATE POLICY "System can insert profiles" ON public.profiles
  FOR INSERT WITH CHECK (true);

-- RLS Policies for inquiries table
-- Users can view their own inquiries, admin/staff can view all
CREATE POLICY "Users can view own inquiries, staff can view all" ON public.inquiries
  FOR SELECT USING (
    auth.uid() = user_id OR 
    public.get_user_role(auth.uid()) IN ('admin', 'staff')
  );

-- Anyone can insert inquiries (even non-authenticated users)
CREATE POLICY "Anyone can create inquiries" ON public.inquiries
  FOR INSERT WITH CHECK (true);

-- Users can update their own inquiries, admin/staff can update all
CREATE POLICY "Users can update own inquiries, staff can update all" ON public.inquiries
  FOR UPDATE USING (
    auth.uid() = user_id OR 
    public.get_user_role(auth.uid()) IN ('admin', 'staff')
  );

-- Only admin can delete inquiries
CREATE POLICY "Only admin can delete inquiries" ON public.inquiries
  FOR DELETE USING (
    public.get_user_role(auth.uid()) = 'admin'
  );

-- Insert your existing car data
INSERT INTO public.cars (make, model, year, price, mileage, images, image, features, condition, description, craigslist_url, engine_type, transmission, fuel_economy, fuel_type) VALUES
('Toyota', 'Camry LE', 2009, 5600, 134000, 
 ARRAY['/lovable-uploads/ba47ede7-f2e5-4576-9fb7-444bdc87a6da.png', '/lovable-uploads/b5716a01-0495-4524-815b-4ddbe24d884a.png', '/lovable-uploads/0c7413b2-6886-4801-b77d-d23834d76952.png', '/lovable-uploads/6923c175-46b0-43d1-95f1-49775391d4d2.png', '/lovable-uploads/d6ad3405-318e-4d5f-b2cf-54c5e9677365.png', '/lovable-uploads/7d42d6e3-3ab4-4b08-bddb-b494101c9268.png', '/lovable-uploads/b67a8835-6ef8-4fd0-ac06-b396f42051f2.png', '/lovable-uploads/a91fa663-fdb7-48dc-8542-989239487e38.png'],
 '/lovable-uploads/ba47ede7-f2e5-4576-9fb7-444bdc87a6da.png',
 ARRAY['Clean Title', 'Excellent Mechanical Condition', 'NC Inspection Passed', 'Automatic Transmission', 'Air Conditioning', 'Power Windows', 'Cruise Control', 'Clean Interior', 'Smooth Ride'],
 'Excellent',
 'This 2009 Toyota LE has been is in excellent mechanical condition. Has clean title and clean service records. Has a Automatic Transmission. All the features are in great working condition such as A/C heat, cruise control windows. Clean interior & has smooth ride. Clean car with clean title with 134k mileage it runs like new no issues. NC inspection passed and ready to go',
 'https://raleigh.craigslist.org/ctd/d/raleigh-2009-toyota-camry-le/7857380414.html',
 '4-Cylinder', 'Automatic', '28 city / 35 highway', 'Gasoline'),

('Toyota', 'Tundra SR5', 2000, 5500, 241000,
 ARRAY['/lovable-uploads/58803bd9-482e-45b8-a1e7-9681103b5b57.png', '/lovable-uploads/53483910-be76-4071-ab5d-234f4cb3c7fd.png', '/lovable-uploads/14a1ef5f-2874-4682-bf8d-b058c45a9a7d.png', '/lovable-uploads/16c4ce2b-0281-4745-897a-95cb87eab744.png', '/lovable-uploads/e7f5e8d9-a9bc-4525-9200-5dc3e59ff2bc.png', '/lovable-uploads/8c453e41-e06c-4cce-b8b7-d41abb7286e3.png', '/lovable-uploads/02f366f1-1d83-47dc-b4cf-951df38d52ac.png', '/lovable-uploads/2f8e884d-3d4f-4150-8ebd-547c2777a900.png', '/lovable-uploads/ec5a9aa0-53d2-4da0-ad8d-5b228be48324.png'],
 '/lovable-uploads/58803bd9-482e-45b8-a1e7-9681103b5b57.png',
 ARRAY['Clean Title', 'Excellent Mechanical Condition', 'NC Inspection Passed', 'Automatic Transmission', 'Air Conditioning', 'Power Steering', '4WD Capability', 'Towing Package'],
 'Good',
 'This 2000 Toyota Tundra has been is in excellent mechanical condition. Has clean title and clean service records. Has a Automatic Transmission. All the features are in great working condition such as A/C heat. 241k Miles. NC inspection passed and ready to go.',
 'https://raleigh.craigslist.org/ctd/d/raleigh-2000-toyota-tundra-sr5/7857386739.html',
 'V8', 'Automatic', '15 city / 20 highway', 'Gasoline');
