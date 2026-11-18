import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-md px-6 py-24 text-center">
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="mt-3">This page does not exist.</p>
      <Link href="/" className="mt-6 inline-block underline">
        Back to home
      </Link>
    </main>
  );
}
