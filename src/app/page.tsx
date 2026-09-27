import Image from "next/image";
import Navbar from "@/components/Navbar";
import Typography from "@/components/Typography";
import MemberCard from "@/components/MemberCard";
import AlbumCard from "@/components/AlbumCard";
import ReunionProject from "@/components/ReunionProject";
import RegistrationForm from "@/components/RegistrationForm";

const members = [
  {
    name: "Harry Styles",
    role: "Vocals",
    number: "01",
    image: "/images/harrystyles.jpg",
    width: 500,
    height: 675,
    description:
      "Known for his distinctive voice, fearless style, and effortless stage presence.",
  },
  {
    name: "Liam Payne",
    role: "Vocals",
    number: "02",
    image: "/images/liampayne.jpg",
    width: 500,
    height: 690,
    description:
      "A powerful vocalist and songwriter who helped shape the band's sound.",
  },
  {
    name: "Louis Tomlinson",
    role: "Vocals",
    number: "03",
    image: "/images/louistomlinson.jpg",
    width: 736,
    height: 1030,
    description:
      "The outspoken one, known for his energy, honesty, and unmistakable voice.",
  },
  {
    name: "Niall Horan",
    role: "Vocals",
    number: "04",
    image: "/images/nialhoran.jpg",
    width: 583,
    height: 809,
    description:
      "The Irish voice with a love for guitars, golf, and good melodies.",
  },
  {
    name: "Zayn Malik",
    role: "Vocals",
    number: "05",
    image: "/images/zaynmalik.jpg",
    width: 600,
    height: 800,
    description:
      "A powerful vocalist recognized for his incredible range and tone.",
  },
];

const albums = [
  {
    year: "2011",
    title: "Up All Night",
    songs: ["What Makes You Beautiful", "One Thing", "More Than This"],
  },
  {
    year: "2012",
    title: "Take Me Home",
    songs: ["Live While We're Young", "Little Things", "Kiss You"],
  },
  {
    year: "2013",
    title: "Midnight Memories",
    songs: ["Best Song Ever", "Story of My Life", "You & I"],
  },
  {
    year: "2014",
    title: "FOUR",
    songs: ["Steal My Girl", "Night Changes", "No Control"],
  },
  {
    year: "2015",
    title: "Made in the A.M.",
    songs: ["Drag Me Down", "Perfect", "History"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F1EA] text-[#29262B]">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl scroll-mt-20 items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-16"
      >
        <div>
          <Typography variant="label">
            A FICTIONAL FAN COMMUNITY
          </Typography>

          <Typography
            variant="display"
            as="h1"
            className="mt-4 max-w-3xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            One Direction Society
          </Typography>

          <Typography
            variant="body"
            className="mt-8 max-w-xl text-lg"
          >
            Five voices. One direction. Still. A community for Directioners
            who never really left the era.
          </Typography>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="rounded-full bg-[#263B5A] px-6 py-3 font-semibold text-white transition hover:-translate-y-1"
            >
              Join the Society
            </a>

            <a
              href="#music"
              className="rounded-full border border-[#29262B] px-6 py-3 font-semibold transition hover:bg-[#29262B] hover:text-white"
            >
              Explore the Music
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#29262B]/20 pt-6">
            <div>
              <Typography variant="display" className="text-3xl">
                5
              </Typography>
              <Typography variant="label" className="mt-1">
                Members
              </Typography>
            </div>

            <div>
              <Typography variant="display" className="text-3xl">
                5
              </Typography>
              <Typography variant="label" className="mt-1">
                Albums
              </Typography>
            </div>

            <div>
              <Typography variant="display" className="text-3xl">
                ∞
              </Typography>
              <Typography variant="label" className="mt-1">
                Memories
              </Typography>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="absolute -right-3 -top-3 z-0 h-full w-full rotate-3 rounded-[2rem] bg-[#B76E79]" />

          <div className="relative z-10 rotate-[-2deg] overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-2xl">
            <Image
              src="/images/onedirection2.jpg"
              alt="One Direction"
              width={736}
              height={1105}
              className="aspect-[4/5] h-full w-full object-cover"
              priority
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#F6F1EA]/90 px-4 py-2 backdrop-blur">
              <Typography variant="label">
                THE DIRECTION
              </Typography>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#17171B]/75 p-5 backdrop-blur-sm">
              <Typography
                variant="display"
                className="text-3xl text-white sm:text-4xl"
              >
                Five voices.
              </Typography>

              <Typography
                variant="display"
                className="mt-1 text-3xl text-[#DCE3EA] sm:text-4xl"
              >
                One story.
              </Typography>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-6 z-20 hidden rotate-[-6deg] rounded-xl bg-white px-5 py-4 shadow-xl sm:block">
            <Typography variant="label">
              EST. 2010
            </Typography>

            <Typography variant="body" className="mt-1 text-xs">
              Still manifesting.
            </Typography>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-[#29262B]/10 bg-white px-6 py-20 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <Typography variant="label">
                01 / ABOUT THE SOCIETY
              </Typography>

              <Typography
                variant="display"
                as="h2"
                className="mt-4 max-w-2xl text-4xl sm:text-5xl"
              >
                A place for people who still know every lyric.
              </Typography>
            </div>

            <div className="lg:pt-10">
              <Typography
                variant="body"
                className="text-base leading-7"
              >
                One Direction Society is a fictional fan community concept
                created for Directioners who want to celebrate the music,
                memories, and chaos that came with being part of the fandom.
              </Typography>

              <Typography
                variant="body"
                className="mt-5 text-base leading-7"
              >
                From late-night playlists to reunion manifestations, this
                society exists for one very simple reason: we are not ready to
                let the story end.
              </Typography>
            </div>
          </div>

          {/* ABOUT IMAGE COLLAGE */}
          <div className="relative mt-14 min-h-[260px] md:min-h-[360px]">
            <div className="absolute left-0 top-4 w-[78%] rotate-[-2deg] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl md:w-[62%]">
              <Image
                src="/images/1d_concert.jpg"
                alt="One Direction performing on stage"
                width={735}
                height={485}
                className="h-[260px] w-full object-cover md:h-[360px]"
              />
            </div>

            <div className="absolute right-0 top-0 w-[45%] rotate-[5deg] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl md:w-[34%]">
              <Image
                src="/images/onedirection1.jpg"
                alt="One Direction group photo"
                width={736}
                height={656}
                className="h-[200px] w-full object-cover md:h-[280px]"
              />
            </div>

            <div className="absolute bottom-3 right-[18%] z-20 rotate-[-4deg] rounded-xl bg-[#263B5A] px-5 py-4 text-white shadow-xl">
              <Typography
                variant="label"
                className="text-white/60"
              >
                ARCHIVE NOTE
              </Typography>

              <Typography
                variant="body"
                className="mt-1 text-sm text-white"
              >
                Five members. Zero chill.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section
        id="members"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16"
      >
        <Typography variant="label">
          02 / THE FIVE
        </Typography>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Typography
            variant="display"
            as="h2"
            className="max-w-2xl text-5xl sm:text-6xl"
          >
            Meet the direction.
          </Typography>

          <Typography
            variant="body"
            className="max-w-sm"
          >
            Five members. Five personalities. One unforgettable chapter.
          </Typography>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </section>

      {/* MUSIC */}
      <section
        id="music"
        className="bg-[#263B5A] px-6 py-20 text-white md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Typography
            variant="label"
            className="text-white/60"
          >
            03 / THE MUSIC
          </Typography>

          <Typography
            variant="display"
            as="h2"
            className="mt-4 text-5xl text-white sm:text-6xl"
          >
            Five albums.
            <br />
            Too many memories.
          </Typography>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {albums.map((album) => (
              <AlbumCard
                key={album.title}
                {...album}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REUNION */}
      <section
        id="reunion"
        className="px-6 py-20 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Typography variant="label">
            04 / THE REUNION PROJECT
          </Typography>

          <ReunionProject />
        </div>
      </section>

      {/* JOIN */}
      <section
        id="join"
        className="bg-[#DCE3EA] px-6 py-20 md:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Typography variant="label">
              05 / JOIN THE SOCIETY
            </Typography>

            <Typography
              variant="display"
              as="h2"
              className="mt-4 text-5xl sm:text-6xl"
            >
              Become a Directioner.
            </Typography>

            <Typography
              variant="body"
              className="mt-6 max-w-lg text-base leading-7"
            >
              Tell us your favorite member, album, and song. Your answers may
              or may not influence our highly scientific reunion research.
            </Typography>
          </div>

          <RegistrationForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#17171B] px-6 py-10 text-white md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Typography
            variant="label"
            className="text-white"
          >
            ONE DIRECTION SOCIETY
          </Typography>

          <Typography
            variant="body"
            className="text-white/50"
          >
            Fictional fan community concept · Not affiliated with One Direction
          </Typography>
        </div>
      </footer>
    </main>
  );
}