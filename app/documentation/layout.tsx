import { Sidebar } from "../_components/sidebar";

export default function DocumentationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body>
            <Sidebar />
            {children}
        </body>
    );
}