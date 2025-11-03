import { Search } from "lucide-react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8 pt-4">
          <h1 className="text-gray-800 mb-1">Movie Search</h1>
          <p className="text-gray-500">Find your favorite movies</p>
        </div>

        {/* Search Card */}
        <Card className="p-6 mb-6 border-2 border-gray-300 bg-white">
          <div className="space-y-4">
            {/* Search Input */}
            <div className="space-y-2">
              <label htmlFor="movie-search" className="text-gray-700 block">
                Search Movies
              </label>
              <Input
                id="movie-search"
                type="text"
                placeholder="Enter movie title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-gray-300"
              />
            </div>

            {/* Search Button - Stacked below input */}
            <Button
              onClick={handleSearch}
              className="w-full bg-gray-800 hover:bg-gray-700"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </Card>

        {/* Results Placeholder - Wireframe style */}
        <div className="space-y-4">
          <h2 className="text-gray-700">Results</h2>
          
          {/* Result Item 1 */}
          <Card className="p-4 border-2 border-dashed border-gray-300 bg-white">
            <div className="flex gap-4">
              <div className="w-16 h-24 bg-gray-200 border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-400 text-xs">Poster</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 border border-gray-300 w-3/4"></div>
                <div className="h-3 bg-gray-100 border border-gray-300 w-full"></div>
                <div className="h-3 bg-gray-100 border border-gray-300 w-5/6"></div>
              </div>
            </div>
          </Card>

          {/* Result Item 2 */}
          <Card className="p-4 border-2 border-dashed border-gray-300 bg-white">
            <div className="flex gap-4">
              <div className="w-16 h-24 bg-gray-200 border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-400 text-xs">Poster</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 border border-gray-300 w-2/3"></div>
                <div className="h-3 bg-gray-100 border border-gray-300 w-full"></div>
                <div className="h-3 bg-gray-100 border border-gray-300 w-4/5"></div>
              </div>
            </div>
          </Card>

          {/* Result Item 3 */}
          <Card className="p-4 border-2 border-dashed border-gray-300 bg-white">
            <div className="flex gap-4">
              <div className="w-16 h-24 bg-gray-200 border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-400 text-xs">Poster</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 border border-gray-300 w-3/5"></div>
                <div className="h-3 bg-gray-100 border border-gray-300 w-full"></div>
                <div className="h-3 bg-gray-100 border border-gray-300 w-5/6"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
