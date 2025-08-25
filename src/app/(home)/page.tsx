import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="text-2xl font-bold">Engine User Settings</h1>
            <span className="text-fd-muted-foreground py-4">
                Optimize your game has never been easier
            </span>
            <div className="flex justify-center gap-2">
                <Link
                    className="bg-black dark:bg-white px-3 py-1 rounded-full text-center text-white dark:text-black flex gap-1"
                    href="https://github.com/Cesio137/InternetProtocol"
                    target="_blank"
                >
                    Github
                </Link>
                <Link
                    className="bg-neutral-700 px-3 py-1 rounded-full text-center text-white flex gap-1"
                    href="/docs"
                >
                    Read the docs
                </Link>
                <Link
                    className="bg-blue-700 px-3 py-1 rounded-full text-center text-white flex gap-1"
                    href="https://discord.gg/DBNATxA6Jx"
                    target="_blank"
                >
                    Discord
                </Link>
            </div>
    </main>
  );
}
