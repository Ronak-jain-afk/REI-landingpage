import { Shield, Zap, Moon, FileText, Database, Package } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Zero Backend, Fully Local",
    description: "Your data never leaves your machine. Privacy by design with a local SQLite database.",
    icon: Shield,
  },
  {
    title: "Instant Search",
    description: "Powered by SQLite FTS5 for lightning-fast product and inventory lookups.",
    icon: Zap,
  },
  {
    title: "Precision Inventory",
    description: "Hierarchical management (Product → Brand → Sub-model) for complex catalogs.",
    icon: Package,
  },
  {
    title: "PDF & Native Print",
    description: "Export high-quality A4/A5 invoices or print directly with native OS dialogs.",
    icon: FileText,
  },
  {
    title: "Dark Mode Native",
    description: "Elegant dark theme built with CSS custom properties for eye comfort.",
    icon: Moon,
  },
  {
    title: "Local Backups",
    description: "One-click SQLite database backup and restoration directly from settings.",
    icon: Database,
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Built for <span className="text-primary underline decoration-primary/20 underline-offset-8">Reliability</span>
          </h2>
          <p className="mt-6 max-w-[800px] text-muted-foreground text-lg sm:text-xl font-medium">
            Everything you need to manage your inventory and billing without the complexity of cloud-based systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/5 bg-background/80 backdrop-blur-sm rounded-[2rem] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group">
              <CardHeader className="space-y-6">
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                  <feature.icon className="size-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-bold tracking-tight">{feature.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed font-medium">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
