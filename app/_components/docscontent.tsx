import { BadgeDocs } from "./docs/badgedocs";
import { ButtonDocs } from "./docs/buttondocs";
import { CodeDocs } from "./docs/codedocs";
import { Linkdocs } from "./docs/linkdocs";

interface DocsContentProps {
    componentName: string;
}

export const DocsContent = ({
    componentName,
}: DocsContentProps) => {
    const name = componentName.toLowerCase();
    return (
        <>
            {name === "button" ? (
                <ButtonDocs />
            ) : ""}
            {name === "link" ? (
                <Linkdocs />
            ) : ""}
            {name === "codeblock" ? (
                <CodeDocs />
            ) : ""}
            {name === "badge" ? (
                <BadgeDocs />
            ) : ""}
        </>
    )
}