import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Search } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center mb-8">
          <h1 className="text-white mb-4">Find Your Favorite Movies</h1>
          <p className="text-white/80">Search through thousands of movies and discover something new</p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-12 py-6 bg-white/95 backdrop-blur-sm border-none text-gray-900 placeholder:text-gray-500"
            />
          </div>
          <Button 
            onClick={handleSearch}
            className="py-6 px-8 bg-red-600 hover:bg-red-700 text-white"
          >
            Search Movies
          </Button>
        </div>
      </div>
    </div>
  );
}
