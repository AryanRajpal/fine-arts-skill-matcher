import Link from "next/link";

export default function Home() {
  const title = "Fine Arts Skill Matcher";
  return (
  <div className="flex flex-col gap-4 items-center bg-zinc-50 font-sans dark:bg-black">
    <h1 className="text-6xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      {title}
    </h1>
    <p>Profiles → Opportunities → Matches</p>
    <div className="flex gap-4">
      <Link href="/profile">Create Profile</Link>
      <Link href="/opportunities">Opportunities</Link>
    </div>
  </div>
  );
}
