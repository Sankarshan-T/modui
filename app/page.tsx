import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-0 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold border-2 mb-6">
          modUi v1.0.0
        </span>

        <h1 className="text-5xl font-bold mb-6">The Webkit for modern interfaces.</h1>

        <p className="text-xl text-muted-foreground mb-10">
          A minimalist, accessible, and highly customizable UI kit built with
          Next.js and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Button variant={"primary"} className=" px-6 py-3">
            <Link href="/components" asChild className="h-full">
              Get Started
            </Link>
          </Button>
          <Button variant={"outline"} className="text-muted-foreground">
            <Link href="https://github.com/Sankarshan-T/herowebkit" className="h-full">
              View Github
            </Link>
          </Button>
        </div>

        <div className="mt-20 p-8 border border-border rounded-xl shadow-xl cursor-pointer bg-muted/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <p className="text-left font-mono text-sm text-muted-foreground">
            // Install modUI <br />
            <span className="text-blue-500">npx modui</span> add button
          </p>
        </div>
      </main>
      <footer className="absolute bottom-0 left-0 mb-0 py-2.5 w-full flex items-center justify-center bg-slate-100">
        © 2026 modUi made with 💖, coolcream
      </footer>
    </div>
  );
}