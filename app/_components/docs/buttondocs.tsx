import { CodeBlock } from "@/components/ui/codeblock"

export const ButtonDocs = () => {
    return (
        <div className="w-full py-6">
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
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">variant</td>
                                <td className="px-4 py-3 text-slate-600">"primary" | "outline" | "secondary" | "danger" | "ghost"</td>
                                <td className="px-4 py-3 text-slate-400">"primary"</td>
                                <td className="px-4 py-3 text-slate-600">The visual style of the button.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">size</td>
                                <td className="px-4 py-3 text-slate-600">"sm" | "md" | "lg" </td>
                                <td className="px-4 py-3 text-slate-400">"md"</td>
                                <td className="px-4 py-3 text-slate-600">The visual size of the button.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">onClick</td>
                                <td className="px-4 py-3 text-slate-600">"() =&gt; void"</td>
                                <td className="px-4 py-3 text-slate-400">-</td>
                                <td className="px-4 py-3 text-slate-600">What the button must do when clicked</td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">ref</td>
                                <td className="px-4 py-3 text-slate-600">string</td>
                                <td className="px-4 py-3 text-slate-400">-</td>
                                <td className="px-4 py-3 text-slate-600">The reference for the button</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="space-y-4 flex justify-start flex-col">
                    <h1 className="font-bold text-2xl text-slate-900">Usage</h1>
                    <div className="w-full flex flex-col items-center justify-center">
                        <p>First Install the component with the cli tool</p>
                        <CodeBlock language="typescript" className="w-auto whitespace-pre-wrap">
                            {
                                `import { Button } from '@/components/ui/button'

<Button variant="outline" size="sm">
    Click Me
</Button>`
                            }
                        </CodeBlock>
                    </div>
                </div>
            </div>
        </div>
    )
}