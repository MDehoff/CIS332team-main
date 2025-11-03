import { MovieCard } from "./components/MovieCard";

interface Movie {
  id: number;
  poster: string;
  title: string;
  year: number;
  plot: string;
  rating: number;
  cast: string[];
}

const movies: Movie[] = [
  {
    id: 1,
    poster: "https://images.unsplash.com/photo-1753944847480-92f369a5f00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNpbmVtYXxlbnwxfHx8fDE3NjIxOTE3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "The Great Adventure",
    year: 2024,
    plot: "A thrilling journey through uncharted territories where a group of explorers discovers ancient secrets that could change the world forever. Filled with action, mystery, and unexpected twists.",
    rating: 8.5,
    cast: ["Emma Stone", "Ryan Gosling", "Michael B. Jordan", "Zendaya"]
  },
  {
    id: 2,
    poster: "https://images.unsplash.com/photo-1620153850780-0883dd907257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcG9zdGVyJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzYyMjA1MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Shadows of Yesterday",
    year: 2023,
    plot: "A psychological thriller about a detective haunted by memories of an unsolved case from her past. As new clues emerge, she must confront her own demons to catch a dangerous criminal.",
    rating: 7.8,
    cast: ["Viola Davis", "Oscar Isaac", "Tilda Swinton"]
  },
  {
    id: 3,
    poster: "https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBzY3JlZW4lMjB0aGVhdGVyfGVufDF8fHx8MTc2MjIwNTA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Beyond the Stars",
    year: 2025,
    plot: "In a future where humanity has colonized Mars, a young scientist discovers a signal from deep space that suggests we are not alone in the universe. A race begins to decode the message.",
    rating: 9.1,
    cast: ["Timothée Chalamet", "Florence Pugh", "Idris Elba", "Lupita Nyong'o"]
  },
  {
    id: 4,
    poster: "https://images.unsplash.com/photo-1753944847480-92f369a5f00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNpbmVtYXxlbnwxfHx8fDE3NjIxOTE3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Echoes in Time",
    year: 2024,
    plot: "A romantic drama spanning three different time periods, following the same two souls as they find each other across centuries. Love transcends time in this epic tale of destiny and connection.",
    rating: 8.2,
    cast: ["Tom Holland", "Anya Taylor-Joy", "Dev Patel"]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <h1 className="text-gray-900 text-center">Movie Details</h1>
      </header>

      {/* Scrollable Movie List */}
      <main className="max-w-md mx-auto p-4">
        <div className="space-y-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster}
              title={movie.title}
              year={movie.year}
              plot={movie.plot}
              rating={movie.rating}
              cast={movie.cast}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 p-4 mt-8">
        <p className="text-gray-500 text-center">Scroll to view more movies</p>
      </footer>
    </div>
  );
}
