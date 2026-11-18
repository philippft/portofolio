import { profile } from "@/content/content";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-extrabold">{profile.name}</h1>
    </main>
  );
}
