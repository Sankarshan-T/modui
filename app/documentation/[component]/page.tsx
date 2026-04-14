import { DocsContent } from "@/app/_components/docscontent";
import { Preview } from "@/app/_components/preview";
import components from "@/lib/registry-manifest.json";

export default async function ComponentsPage({
    params
}: {
    params: Promise<{ component: string }>
}) {
    const { component } = await params;

    const componentInfo = components.find(
        (c) => c.name.toLowerCase() === component.toLowerCase()
    );

    if (!componentInfo) {
        return <div className="p-10 text-red-500">Component "{component}" not found in registry.</div>;
    }

    return (
        <div className="w-[calc(100vw-256px)] h-[calc(100vh-64px)]">
            <div className="w-full flex items-center justify-center flex-col p-5">
                <h1 className="text-4xl font-extrabold mb-2 capitalize">{componentInfo.name}</h1>
                <p className="text-gray-500 mb-8">
                    Documentation and examples for the {componentInfo.name} component.
                </p>

                <section className="space-y-4 w-full flex items-center justify-center flex-col">
                    <h2 className="text-xl font-semibold">Preview</h2>
                    <div className="border rounded-xl p-12 flex items-center justify-center bg-white shadow-sm">
                        <Preview componentName={componentInfo.name} />
                    </div>
                    <DocsContent componentName={componentInfo.name} />
                </section>
            </div>
        </div>
    )
}