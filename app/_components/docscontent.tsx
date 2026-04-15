import { BadgeDocs } from "./docs/badgedocs";
import { ButtonDocs } from "./docs/buttondocs";
import { CalloutDocs } from "./docs/calloutdocs";
import { CodeDocs } from "./docs/codedocs";
import { InputDocs } from "./docs/inputdocs";
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
            {name === "callout" ? (
                <CalloutDocs />
            ) : ""}
            {name === "input" ? (
                <InputDocs />
            ) : ""}
        </>
    )
}