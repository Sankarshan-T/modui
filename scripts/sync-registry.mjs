import fs from 'fs';
import path from 'path';

const UI_DIR = path.join(process.cwd(), 'components/ui');
const OUTPUT_FILE = path.join(process.cwd(), 'lib/registry-manifest.json');

function generateRegistry() {
    if (!fs.existsSync(UI_DIR)) {
        console.log("X UI directory not found. Skipping registry sync.");
        return;
    }

    const files = fs.readdirSync(UI_DIR);

    const components = files
        .filter(file => file.endsWith('.tsx'))
        .map(file => {
            const name = file.replace('.tsx', '');
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
            return {
                name: formattedName,
                href: `/documentation/${name.toLowerCase()}`,
            };
        });

    const libDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(libDir)) {
        fs.mkdirSync(libDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(components, null, 2));
    console.log(`the registry got synced that means the code is working!: ${components.length} components found.`);
}

generateRegistry();