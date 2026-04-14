import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import componentsData from "@/lib/registry-manifest.json";
import { ArrowBigRight } from "lucide-react";

interface ComponentMetadata {
    name: string;
    href: string;
}

export const Sidebar = () => {
    const components = componentsData as ComponentMetadata[];

    return (
        <aside className="w-64 min-h-[calc(100vh-64px)] sticky bg-background border-r border-border flex flex-col">
            <div className="px-6 py-8">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Library
                </h2>
                <h1 className="text-xl font-medium tracking-tight text-foreground">
                    <span className="font-bold">mod</span>
                    <span className="text-blue-600 font-bold">UI</span>
                    <span className="ml-2 text-muted-foreground font-normal">Components</span>
                </h1>
            </div>

            <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
                <div className="px-3 py-2 text-sm text-muted-foreground flex flex-col">
                    {components.map((component: any) => (
                        <Link
                            key={component.name}
                            href={component.href}
                            className="flex items-center"
                        >
                            <Button variant={"ghost"} className="w-full flex items-center justify-between">
                                {component.name}
                                <ArrowBigRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="p-2.5 border-t border-border">
                <div className="bg-muted/50 rounded-lg p-2 text-xs text-muted-foreground">
                    <p className="font-medium text-foreground">ModUI Webkit</p>
                    <p>v1.0.0</p>
                </div>
            </div>
        </aside>
    );
};