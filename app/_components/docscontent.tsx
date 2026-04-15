import { COMPONENT_DOCS } from "@/constants/docs-config";
import { GenericDocs } from "./genericdocs";

interface DocsContentProps {
    componentName: string;
}

export const DocsContent = ({ componentName }: DocsContentProps) => {
    const name = componentName.toLowerCase();
    const data = COMPONENT_DOCS[name as keyof typeof COMPONENT_DOCS];

    if (!data) {
        return <div className="py-10 text-slate-500 text-center">Component documentation not found.</div>;
    }

    return <GenericDocs data={data} />;
};