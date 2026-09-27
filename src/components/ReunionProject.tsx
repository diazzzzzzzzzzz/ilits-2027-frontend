"use client";

import { useState } from "react";
import Typography from "./Typography";

export default function ReunionProject() {
  const [believers, setBelievers] = useState(12847);

  function handleBelieve() {
    setBelievers((current) => current + 1);
  }

  return (
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#B76E79] p-6 text-white sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
        <div>
          <Typography
            variant="display"
            as="h2"
            className="max-w-3xl text-5xl text-white sm:text-7xl"
          >
            Five members.
            <br />
            One more stage.
          </Typography>

          <Typography
            variant="body"
            className="mt-6 max-w-xl text-white/80"
          >
            The official unofficial reunion manifestation
            project. Highly scientific. Completely unbiased.
          </Typography>

          <button
            type="button"
            onClick={handleBelieve}
            className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-[#263B5A] transition hover:-translate-y-1"
          >
            I Believe
          </button>
        </div>

        <div className="rounded-3xl bg-black/10 p-6">
          <Typography variant="label" className="text-white/60">
            BELIEVERS
          </Typography>

          <Typography
            variant="display"
            className="mt-2 text-5xl text-white"
          >
            {believers.toLocaleString("en-US")}
          </Typography>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[78%] rounded-full bg-white" />
          </div>

          <Typography variant="body" className="mt-3 text-sm text-white/70">
            Reunion manifestation: 78%
          </Typography>
        </div>
      </div>
    </div>
  );
}