import Image from "next/image";
import Typography from "./Typography";

type MemberCardProps = {
  name: string;
  role: string;
  number: string;
  image: string;
  width: number;
  height: number;
  description: string;
};

export default function MemberCard({
  name,
  role,
  number,
  image,
  width,
  height,
  description,
}: MemberCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[#29262B]/10 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#DCE3EA]">
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* NUMBER */}
        <Typography
          variant="display"
          className="absolute bottom-3 left-4 text-6xl text-white/80"
        >
          {number}
        </Typography>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <Typography variant="label">
          {role}
        </Typography>

        <Typography
          variant="display"
          as="h3"
          className="mt-2 text-2xl"
        >
          {name}
        </Typography>

        <Typography
          variant="body"
          className="mt-3 text-sm"
        >
          {description}
        </Typography>
      </div>
    </article>
  );
}