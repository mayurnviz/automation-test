export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Welcome to Next.js
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Configured with App Router, TypeScript, and TailwindCSS.
        </p>
      </main>
    </div>
  );
}
