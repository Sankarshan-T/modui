export const COMPONENT_DOCS = {
  button: {
    title: "Button",
    installCmd: "npx modui-uikit@latest add button",
    usageCode: `import { Button } from '@/components/ui/button'
  
  export default function Example() {
    return (
      <Button variant="outline" size="sm">
        Click Me
      </Button>
    )
  }`,
    props: [
      { name: "variant", type: '"primary" | "outline" | "secondary" | "danger" | "ghost"', default: '"primary"', desc: "The visual style of the button." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', desc: "The visual size of the button." },
      { name: "onClick", type: "() => void", default: "-", desc: "Function called when clicked." },
      { name: "ref", type: "string", default: "-", desc: "The reference for the button." },
    ]
  },
  badge: {
    title: "Badge",
    installCmd: "npx modui-uikit@latest add badge",
    usageCode: `import { Badge } from '@/components/ui/badge'
  
  export default function Example() {
    return (
      <Badge variant="warning" size="md">
        badge of size: medium, variant: warning
      </Badge>
    )
  }`,
    props: [
      { name: "variant", type: "'default' | 'success' | 'failure' | 'warning' | 'outline'", default: '"default"', desc: "The visual style of the badge." },
      { name: "size", type: "'sm' | 'md' | 'xl'", default: '"sm"', desc: "The visual size of the badge." },
      { name: "className", type: "string", default: "default classes", desc: "Any tailwind classes to modify the look." },
    ]
  },
  codeblock: {
    title: "Code Block",
    installCmd: "npx modui-uikit@latest add codeblock",
    usageCode: `import { Codeblock } from '@/components/ui/codeblock'
  
  export default function Example() {
    return (
      <Codeblock language="C#">
        This is some random piece of code. It can copied
      </Codeblock>
    )
  }`,
    props: [
      { name: "language", type: "string", default: '"code"', desc: "Displays the language name on the top bar." },
      { name: "className", type: "string", default: "default look", desc: "Visual overrides for the container." },
      { name: "windowed", type: "boolean", default: "true", desc: "Displays the window-style dots on the top left." },
    ]
  },
  input: {
    title: "Input",
    installCmd: "npx modui-uikit@latest add input",
    usageCode: `import { Input } from '@/components/ui/input';
  import { Image } from 'lucide-react';
  
  export default function Example() {
    return (
      <Input 
          placeholder="This is a placeholder..."
          icon={Image}
      />
    )
  }`,
    props: [
      { name: "placeholder", type: "string", default: '"Input text here..."', desc: "Text displayed when empty." },
      { name: "icon", type: "LucideIcon", default: "Search", desc: "The visual icon displayed on the right." },
      { name: "onChange", type: "() => void", default: "-", desc: "Function called when text changes." },
      { name: "className", type: "string", default: "default classes", desc: "Tailwind overrides." },
    ]
  },
  link: {
    title: "Link",
    installCmd: "npx modui-uikit@latest add link",
    usageCode: `import { Link } from '@/components/ui/link'
  
  export default function Example() {
    return (
      <Link href="github.com">
        This link will redirect user to github.com
      </Link>
    )
  }`,
    props: [
      { name: "href", type: "string", default: "-", desc: "The destination URL." },
      { name: "className", type: "string", default: "default classes", desc: "Visual styling." },
      { name: "asChild", type: "boolean", default: "false", desc: "Disables default classes for custom child rendering." },
    ]
  },
  callout: {
    title: "Callout",
    installCmd: "npx modui-uikit@latest add callout",
    usageCode: `import { Callout } from '@/components/ui/callout'
  
  export default function Example() {
    return (
      <Callout title="Info callout" color="blue">
        This is an important piece of information.
      </Callout>
    )
  }`,
    props: [
      { name: "title", type: "string", default: "-", desc: "The heading of the callout." },
      { name: "color", type: '"red" | "blue" | "green" | "yellow"', default: '"blue"', desc: "The visual theme." },
    ]
  },
  card: {
    title: "Card",
    installCmd: "npx modui-uikit@latest add card",
    usageCode: `import { Card } from '@/components/ui/card'

export default function Example() {
  return (
    <Card 
      title="Project Alpha"
      color="red"
      subtitle="A new web application."
      footer="A footer!"
      action={
        <button>
          Hello!
        </button>
      }
    >
      This is the main content of the card.
    </Card>
  )
}`,
    props: [
      { name: "title", type: "string", default: "-", desc: "Headline of the card." },
      { name: "description", type: "string", default: "-", desc: "Sub-text below the title." },
      { name: "footer", type: "ReactNode", default: "-", desc: "Content at the bottom." },
      { name: "className", type: "string", default: "default classes", desc: "To add your own style." },
      { name: "color", type: '"red" | "blue" | "green" | "yellow"', default: "blue", desc: "Color of the effect of the card." },
    ]
  },
  switch: {
    title: "Switch",
    installCmd: "npx modui-uikit@latest add switch",
    usageCode: `import { Switch } from '@/components/ui/switch'

export default function Example() {
  return <Switch label="Enable Notifications" defaultChecked={true} />
}`,
    props: [
      { name: "label", type: "string", default: "-", desc: "Text shown next to the switch." },
      { name: "defaultChecked", type: "boolean", default: "false", desc: "The initial state." },
    ]
  },
  accordion: {
    title: "Accordion",
    installCmd: "npx modui-uikit@latest add accordion",
    usageCode: `import { Accordion } from '@/components/ui/accordion'

export default function Example() {
  return (
    <Accordion title="Title for accordion?">
      Yeah the content you can write inside here
    </Accordion>
  )
}`,
    props: [
      { name: "title", type: "string", default: "-", desc: "The visible header of the item." },
      { name: "children", type: "ReactNode", default: "-", desc: "The content hidden inside." },
    ]
  },
};