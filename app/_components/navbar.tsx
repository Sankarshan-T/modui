import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

export const Navbar = () => {
    return (
        <nav className="border-b border-border sticky px-6 py-3 flex justify-between items-center bg-background">
            <Link href="/">
                <span className="font-bold text-2xl tracking-tight">
                    mod<span className="text-blue-600">UI</span>
                </span>
            </Link>
            <div className="flex gap-3 text-sm font-medium text-muted-foreground">
                <Button variant={"ghost"}>
                    <Link href="/components">Components</Link>
                </Button>
                <Button variant={"ghost"}>
                    <Link href="/documentation">Documentation</Link>
                </Button>
            </div>
        </nav>
    );
};