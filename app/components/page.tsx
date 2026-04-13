import { Button } from "@/components/ui/button";
import { Sidebar } from "../_components/sidebar";

export default function componenents() {
    return (
        <div className="min-h-[calc(100vh-64px)] font-sans">
            <main className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center p-5">
                <h1 className="text-muted-foreground text-xl">
                    Explore from a wide range of reusable react components...
                </h1>
                <div className="mt-7 p-8 min-h-[65vh] w-[80%] border border-border rounded-xl shadow-xl cursor-pointer bg-muted/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        Components
                    </div>
                    <div className="w-full h-px bg-muted border-2" />
                    <div className="flex items-center justify-center flex-wrap mt-4 gap-5">
                        <Button variant={"outline"}>
                            Button
                        </Button>
                        <Button variant={"outline"}>
                            Link
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
};