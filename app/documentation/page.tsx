import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import componentsData from "@/lib/registry-manifest.json";

interface ComponentMetadata {
    name: string;
    href: string;
}

export default function documentation() {
    const components = componentsData as ComponentMetadata[];
    return (
        <div className="min-h-[calc(100vh-64px)] font-sans">
            <main className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center p-5">
                <h1 className="text-muted-foreground text-xl">
                    Look for documentation available for componenents...
                </h1>
                <div className="mt-7 p-8 min-h-[65vh] w-[80%] border border-border rounded-xl shadow-xl cursor-pointer bg-muted/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        Available Components
                    </div>
                    <div className="w-full h-px bg-muted border-2" />
                    <div className="flex items-center justify-center flex-wrap mt-4 gap-5">
                        {components.map((component: any) => (
                            <Link
                                key={component.name}
                                href={component.href}
                                className="flex items-center"
                            >
                                <Button variant={"outline"} className="w-full flex items-center justify-between">
                                    {component.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}