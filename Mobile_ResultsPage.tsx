import { useState } from 'react';
import { Grid, List } from 'lucide-react';
import { MovieCard } from './components/MovieCard';
import { Button } from './components/ui/button';

const movies = [
  { id: 1, title: 'The Shawshank Redemption', year: '1994', poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400' },
  { id: 2, title: 'The Godfather', year: '1972', poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
  { id: 3, title: 'The Dark Knight', year: '2008', poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400' },
  { id: 4, title: 'Pulp Fiction', year: '1994', poster: 'https://images.unsplash.com/photo-1574267432644-f74f8ec55d1e?w=400' },
  { id: 5, title: 'Forrest Gump', year: '1994', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400' },
  { id: 6, title: 'Inception', year: '2010', poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400' },
  { id: 7, title: 'The Matrix', year: '1999', poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400' },
  { id: 8, title: 'Goodfellas', year: '1990', poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400' },
  { id: 9, title: 'The Silence of the Lambs', year: '1991', poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400' },
  { id: 10, title: 'Interstellar', year: '2014', poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400' },
  { id: 11, title: 'Parasite', year: '2019', poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400' },
  { id: 12, title: 'Gladiator', year: '2000', poster: 'https://images.unsplash.com/photo-1568876694728-451bbf694b83?w=400' },
];

export default function App() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 z-10">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-gray-900">Movies</h1>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
              className="h-9 w-9"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
              className="h-9 w-9"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-md mx-auto p-4">
        <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'flex flex-col gap-3'}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
              viewMode={viewMode}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
