
import { Car } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Eagle Auto Sales</h1>
              <p className="text-sm text-gray-500 -mt-1">LLC</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
