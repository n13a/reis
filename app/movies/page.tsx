import { movies } from "@/movies";
import MoviesNav from "../components/moviesNav";

export default function MoviesPage() {
  return (
    <div className="h-full md:flex gap-4  lg:p-0 leading-7">
      <MoviesNav movies={movies} />

      <div className="flex flex-col gap-4 w-full">
        {movies.map((movie, i) => (
          <section
            id={movie.title}
            key={i}
            className="lg:h-screen max-w-7xl flex-col py-4 lg:py-6 flex max-h-[1440px] justify-between items-center lg:items-start lg:flex-row gap-10 first:pt-8 md:first:pt-3 lg:first:pt-6"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl">{movie.title}</h1>
              <span className="block">{movie.year}</span>
              <ul className="flex flex-wrap md:space-x-2 md:divide-x">
                {movie.cast.map((name, i) => (
                  <li key={i} className="pl-2 first:pl-0">
                    {name}
                  </li>
                ))}
              </ul>
              <p className="max-w-lg ">{movie.synopsis}</p>
              <ul>
                {movie.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>

            <div className="h-4/5">
              <img
                className="w-full max-h-full max-w-lg object-contain"
                src={movie.imgUrl}
                alt=""
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
