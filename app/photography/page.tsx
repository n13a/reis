import MoviesNav from "../components/moviesNav";

export default function PhotographyPage() {
  return (
    <div className="h-full min-h-[95vh] md:flex gap-4 lg:p-0 leading-7">
      <MoviesNav />

      <div className="flex justify-center items-center w-full">
        <div className="max-w-3xl lg:p-12">
          <h1 className="text-8xl">COMING SOON...</h1>
        </div>
      </div>
    </div>
  );
}
