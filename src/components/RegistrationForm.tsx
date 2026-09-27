"use client";

import { FormEvent, useState } from "react";
import Typography from "./Typography";

type FormData = {
  name: string;
  email: string;
  member: string;
  album: string;
  song: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  member: "",
  album: "",
  song: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>(initialForm);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const payload = {
      title: form.name,
      price: 0,
      description: `${form.member} | ${form.album} | ${form.song}`,
      category: "directioner",
    };

    try {
      const response = await fetch(
        "https://fakestoreapi.com/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();

      console.log("API response:", data);

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">
        <Typography variant="label">
          Registration complete
        </Typography>

        <Typography
          variant="display"
          as="h3"
          className="mt-4 text-4xl"
        >
          Welcome to the Society!
        </Typography>

        <Typography variant="body" className="mt-5">
          Your registration has been submitted.
          The reunion manifestation committee thanks you.
        </Typography>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full bg-[#263B5A] px-6 py-3 font-semibold text-white"
        >
          Register another Directioner
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-10"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-[#29262B]/15 bg-[#F6F1EA] px-4 py-3 outline-none transition focus:border-[#263B5A] focus:ring-2 focus:ring-[#DCE3EA]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-[#29262B]/15 bg-[#F6F1EA] px-4 py-3 outline-none transition focus:border-[#263B5A] focus:ring-2 focus:ring-[#DCE3EA]"
          />
        </div>

        <div>
          <label
            htmlFor="member"
            className="text-sm font-semibold"
          >
            Favorite Member
          </label>

          <select
            id="member"
            name="member"
            value={form.member}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-xl border border-[#29262B]/15 bg-[#F6F1EA] px-4 py-3 outline-none"
          >
            <option value="">Choose one</option>
            <option value="Harry Styles">Harry Styles</option>
            <option value="Liam Payne">Liam Payne</option>
            <option value="Louis Tomlinson">Louis Tomlinson</option>
            <option value="Niall Horan">Niall Horan</option>
            <option value="Zayn Malik">Zayn Malik</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="album"
            className="text-sm font-semibold"
          >
            Favorite Album
          </label>

          <select
            id="album"
            name="album"
            value={form.album}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-xl border border-[#29262B]/15 bg-[#F6F1EA] px-4 py-3 outline-none"
          >
            <option value="">Choose one</option>
            <option value="Up All Night">Up All Night</option>
            <option value="Take Me Home">Take Me Home</option>
            <option value="Midnight Memories">
              Midnight Memories
            </option>
            <option value="FOUR">FOUR</option>
            <option value="Made in the A.M.">
              Made in the A.M.
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="song"
            className="text-sm font-semibold"
          >
            Favorite Song
          </label>

          <input
            id="song"
            name="song"
            value={form.song}
            onChange={handleChange}
            required
            placeholder="e.g. Night Changes"
            className="mt-2 w-full rounded-xl border border-[#29262B]/15 bg-[#F6F1EA] px-4 py-3 outline-none transition focus:border-[#263B5A] focus:ring-2 focus:ring-[#DCE3EA]"
          />
        </div>

        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-[#263B5A] px-6 py-4 font-semibold text-white transition hover:bg-[#B76E79] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading"
            ? "Joining..."
            : "Join the Society"}
        </button>
      </div>
    </form>
  );
}