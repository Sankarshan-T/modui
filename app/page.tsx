import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <nav className="border-b border-border px-6 py-4 flex justify-between items-center bg-background">
        <span className="font-bold text-xl tracking-tight">mod<span className="text-blue-600">UI</span></span>
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">Components</a>
          <a href="#" className="hover:text-foreground transition">Documentation</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold mb-6">
          modUi v1.0.0
        </span>

        <h1 className="text-5xl font-bold mb-6">The Webkit for modern interfaces.</h1>

        <p className="text-xl text-muted-foreground mb-10">
          A minimalist, accessible, and highly customizable UI kit built with
          Next.js and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Button variant={"primary"} className=" px-6 py-3">
            Get Started
          </Button>
          <Button variant={"outline"} className="text-muted-foreground">
            View Github
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
      <footer className="w-full py-1.5 mt-9 flex items-center justify-center bg-muted">
        © 2026 modUi made with 💖, coolcream
      </footer>
    </div>
  );
}