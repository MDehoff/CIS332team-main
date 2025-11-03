import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Star } from "lucide-react";

interface Movie {
  title: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  plot: string;
  director: string;
  cast: { name: string; role: string }[];
  posterUrl: string;
}

export function MovieDetails() {
  // Mock movie data array
  const movies: Movie[] = [
    {
      title: "The Midnight Chronicles",
      year: 2024,
      rating: 8.4,
      duration: "2h 28min",
      genre: ["Sci-Fi", "Thriller", "Drama"],
      plot: "In a world where time has become the ultimate currency, a rogue scientist discovers a way to manipulate temporal boundaries. As powerful corporations hunt him down, he must navigate through shifting timelines to protect the secret that could either save humanity or destroy it forever.",
      director: "Alexandra Chen",
      cast: [
        { name: "Michael Sterling", role: "Dr. James Webb" },
        { name: "Sarah Rodriguez", role: "Agent Maya Torres" },
        { name: "David Kim", role: "Victor Chronos" },
        { name: "Emma Watson", role: "Dr. Lisa Harper" },
        { name: "Chris Johnson", role: "Marcus Steel" }
      ],
      posterUrl: "https://images.unsplash.com/photo-1753944847480-92f369a5f00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNpbmVtYXxlbnwxfHx8fDE3NjIxOTE3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Steel Vengeance",
      year: 2023,
      rating: 7.8,
      duration: "2h 15min",
      genre: ["Action", "Adventure", "Crime"],
      plot: "When a retired special forces operative's daughter is kidnapped by an international crime syndicate, he must use his lethal skills one last time. Racing against the clock across multiple continents, he uncovers a conspiracy that reaches the highest levels of government.",
      director: "Marcus Blake",
      cast: [
        { name: "Ryan Cooper", role: "Jack Morrison" },
        { name: "Isabella Martinez", role: "Agent Sofia Reyes" },
        { name: "Tom Harrison", role: "Viktor Petrov" },
        { name: "Jennifer Lane", role: "Rebecca Morrison" }
      ],
      posterUrl: "https://images.unsplash.com/photo-1761948245185-fc300ad20316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjIxNjAwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Whispers in the Rain",
      year: 2024,
      rating: 9.1,
      duration: "2h 42min",
      genre: ["Drama", "Romance", "Mystery"],
      plot: "Set in 1950s Paris, a war-torn journalist returns home to find his childhood love married to his best friend. As old wounds resurface and new secrets emerge, three lives become entangled in a web of love, betrayal, and redemption that spans decades.",
      director: "Sophie Laurent",
      cast: [
        { name: "James McAllister", role: "Thomas Beaumont" },
        { name: "Catherine Dubois", role: "Marguerite Rousseau" },
        { name: "Pierre Moreau", role: "Henri Laurent" },
        { name: "Anne-Marie Fontaine", role: "Claudette" },
        { name: "Robert Mitchell", role: "Colonel Winters" }
      ],
      posterUrl: "https://images.unsplash.com/photo-1761993419168-6c2efb805165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGZpbG0lMjBwb3N0ZXJ8ZW58MXx8fHwxNzYyMjA0NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "The Haunting of Blackwood Manor",
      year: 2023,
      rating: 7.2,
      duration: "1h 58min",
      genre: ["Horror", "Thriller", "Mystery"],
      plot: "A paranormal investigator and her team spend the night in an abandoned Victorian mansion with a dark history. As supernatural events escalate and team members start disappearing, they realize they're not investigating the haunting—they're part of it.",
      director: "Daniel Graves",
      cast: [
        { name: "Emily Hart", role: "Dr. Rachel Kane" },
        { name: "Jake Peterson", role: "Mark Sullivan" },
        { name: "Olivia Chen", role: "Sarah Chen" },
        { name: "Marcus Williams", role: "Detective James Cross" }
      ],
      posterUrl: "https://images.unsplash.com/photo-1712456298333-5747a9506a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjIxODA1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="space-y-12">
      {movies.map((movie, movieIndex) => (
        <div key={movieIndex} className="max-w-7xl mx-auto bg-white border-2 border-gray-300 rounded-lg p-8">
          <div className="grid grid-cols-[400px_1fr] gap-8">
            {/* Left side - Movie Poster */}
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right side - Movie Details */}
            <div className="flex flex-col gap-6">
              {/* Title and Year */}
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                <h1 className="text-gray-900 mb-2">{movie.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  <span className="text-gray-900">{movie.rating}/10</span>
                </div>
                <div className="flex gap-2">
                  {movie.genre.map((g) => (
                    <Badge key={g} variant="outline" className="border-gray-300">
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Plot */}
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                <h2 className="text-gray-900 mb-3">Plot Summary</h2>
                <p className="text-gray-700 leading-relaxed">{movie.plot}</p>
              </div>

              {/* Director */}
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                <h3 className="text-gray-900 mb-2">Director</h3>
                <p className="text-gray-700">{movie.director}</p>
              </div>

              {/* Cast */}
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                <h3 className="text-gray-900 mb-4">Cast</h3>
                <div className="space-y-3">
                  {movie.cast.map((actor, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-900">{actor.name}</span>
                        <span className="text-gray-600 text-right">{actor.role}</span>
                      </div>
                      {index < movie.cast.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
