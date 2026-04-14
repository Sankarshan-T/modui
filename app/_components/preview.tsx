import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import chalk from "chalk";

interface PreviewProps {
    componentName: string;
}

export const Preview = ({
    componentName,
}: PreviewProps) => {
    const name = componentName.toLowerCase();
    return (
        <>
            {name === "button" ? (
                <div className="space-x-4">
                    <Button>
                        Primary!
                    </Button>
                    <Button variant={"secondary"}>
                        Secondary!
                    </Button>
                    <Button variant={"danger"}>
                        Danger!
                    </Button>
                    <Button variant={"outline"}>
                        Outline!
                    </Button>
                    <Button variant={"ghost"}>
                        Ghost!
                    </Button>
                </div>
            ) : ""}
            {name === "link" ? (
                <Link href="/documentation/" >
                    This will lead you to the docs page
                </Link>
            ) : ""}
        </>
    )
}