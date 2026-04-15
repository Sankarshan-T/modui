"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/codeblock";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { Image } from "lucide-react";

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
            {name === "codeblock" ? (
                <CodeBlock>
                    {`This is a piece of copyable code. Anything can be written here.\nClick on the copy button on the top right corner of the box`}
                </CodeBlock>
            ) : ""}
            {name === "badge" ? (
                <div className="space-x-4">
                    <Badge variant="default">
                        Default!
                    </Badge>
                    <Badge variant="success">
                        Success!
                    </Badge>
                    <Badge variant="failure">
                        Failure!
                    </Badge>
                    <Badge variant="warning" size="md">
                        warning | medium
                    </Badge>
                    <Badge variant="outline" size="xl">
                        Outline | large
                    </Badge>
                </div>
            ) : ""}
            {name === "callout" ? (
                <Callout title="Title for callout" color="green">
                    A small info msg in green
                </Callout>
            ) : ""}
            {name === "input" ? (
                <Input icon={Image} />
            ) : ""}
            {name === "card" ? (
                <Card
                    title="Card 1!"
                    subtitle="A card description"
                    footer="footer"
                    action={
                        <Button>
                            Hi!
                        </Button>
                    }
                >
                    This is a card!
                </Card>
            ) : ""}
        </>
    )
}