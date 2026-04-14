import { Sidebar } from "../_components/sidebar";

export default function DocumentationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-[calc(100vh-64px)]">
            <Sidebar />
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}