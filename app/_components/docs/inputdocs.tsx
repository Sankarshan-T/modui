import { CodeBlock } from "@/components/ui/codeblock"

export const InputDocs = () => {
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
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">placeholder</td>
                                <td className="px-4 py-3 text-slate-600"> string </td>
                                <td className="px-4 py-3 text-slate-400">"Input text here..."</td>
                                <td className="px-4 py-3 text-slate-600">The placeholder displayed when text hasn't been entered yet.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">icon</td>
                                <td className="px-4 py-3 text-slate-600"> Lucide icon </td>
                                <td className="px-4 py-3 text-slate-400">Search</td>
                                <td className="px-4 py-3 text-slate-600">The visual icon displayed on the right.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">onChange</td>
                                <td className="px-4 py-3 text-slate-600">{"() => { }"}</td>
                                <td className="px-4 py-3 text-slate-400">-</td>
                                <td className="px-4 py-3 text-slate-600">What has to be done when text has been entered.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-4 py-3 font-mono text-blue-600 font-medium">className</td>
                                <td className="px-4 py-3 text-slate-600">string</td>
                                <td className="px-4 py-3 text-slate-400">default classes</td>
                                <td className="px-4 py-3 text-slate-600">Any tailwind classes to modify the look of the badge</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="max-w-2xl space-y-8 py-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Usage</h2>
                        <p className="text-slate-500">
                            Follow these steps to add and use the component in your project.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[12px] font-medium text-white">
                                    1
                                </span>
                                <h3 className="font-medium text-slate-900">Install the component</h3>
                            </div>
                            <p className="text-sm text-slate-600 ml-9">
                                Run the following command in your terminal to add the button to your project.
                            </p>
                            <div className="ml-9">
                                <CodeBlock language="terminal" className="w-full">
                                    {`npx modui-uikit@latest add input`}
                                </CodeBlock>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[12px] font-medium text-white">
                                    2
                                </span>
                                <h3 className="font-medium text-slate-900">Usage</h3>
                            </div>
                            <p className="text-sm text-slate-600 ml-9">
                                Import the button component and use it within your React components.
                            </p>
                            <div className="ml-9">
                                <CodeBlock language="typescript" className="w-full">
                                    {`import { Input } from '@/components/ui/input';
import { Image } from 'lucide-react';

export default function Example() {
  return (
    <Input 
        placeholder="This is a placeholder..."
        icon={Image}
    />
  )
}`}
                                </CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}