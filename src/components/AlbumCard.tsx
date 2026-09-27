import Typography from "./Typography";

type AlbumCardProps = {
  year: string;
  title: string;
  songs: string[];
};

export default function AlbumCard({
  year,
  title,
  songs,
}: AlbumCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15">
      <Typography variant="label" className="text-white/50">
        {year}
      </Typography>

      <Typography
        variant="display"
        as="h3"
        className="mt-3 text-3xl text-white"
      >
        {title}
      </Typography>

      <div className="mt-8 space-y-3">
        {songs.map((song, index) => (
          <div
            key={song}
            className="flex items-center gap-3 border-t border-white/10 pt-3"
          >
            <span className="text-xs text-white/40">
              0{index + 1}
            </span>

            <span className="text-sm text-white/80">
              {song}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}