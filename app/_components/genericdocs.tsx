import { CodeBlock } from "@/components/ui/codeblock";

interface PropRow {
    name: string;
    type: string;
    default: string;
    desc: string;
}

export const GenericDocs = ({ data }: { data: any }) => {
    return (
        <div className="w-full py-6 space-y-8">
            <div className="space-y-4">
                <h1 className="font-bold text-2xl text-slate-900">Properties</h1>
                <div className="overflow-hidden border border-slate-200 rounded-lg">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-4 py-3 font-semibold text-slate-700">Prop</th>
                                <th className="px-4 py-3 font-semibold text-slate-700">Type</th>
                                <th className="px-4 py-3 font-semibold text-slate-700">Default</th>
                                <th className="px-4 py-3 font-semibold text-slate-700">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {data.props.map((prop: PropRow) => (
                                <tr key={prop.name} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-3 font-mono text-blue-600 font-medium">{prop.name}</td>
                                    <td className="px-4 py-3 text-slate-600">{prop.type}</td>
                                    <td className="px-4 py-3 text-slate-400">{prop.default}</td>
                                    <td className="px-4 py-3 text-slate-600">{prop.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="max-w-2xl space-y-10">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Usage</h2>
                    <p className="text-slate-500">Follow these steps to add and use {data.title}.</p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[12px] font-medium text-white">1</span>
                        <h3 className="font-medium text-slate-900">Install</h3>
                    </div>
                    <div className="ml-9">
                        <CodeBlock language="terminal">{data.installCmd}</CodeBlock>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[12px] font-medium text-white">2</span>
                        <h3 className="font-medium text-slate-900">Implement</h3>
                    </div>
                    <div className="ml-9">
                        <CodeBlock language="typescript">{data.usageCode}</CodeBlock>
                    </div>
                </div>
            </div>
        </div>
    );
};