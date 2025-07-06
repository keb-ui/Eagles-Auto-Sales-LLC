
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Car = Database['public']['Tables']['cars']['Row'];

export const useCars = () => {
  return useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      console.log('Fetching cars from Supabase...');
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching cars:', error);
        throw error;
      }

      console.log('Cars fetched successfully:', data);
      return data as Car[];
    },
  });
};

export type { Car };
