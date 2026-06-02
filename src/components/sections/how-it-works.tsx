import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Setup Your Inventory",
    description: "Initialize your database by adding products, brands, and sub-models. RE-Invoice makes it easy to manage large catalogs with inline editing.",
    image: "/images/demo_inventory.png",
  },
  {
    title: "Create Billing Sessions",
    description: "Search for items using FTS5 search, select variants, and apply discounts. Your cart is persisted locally so you never lose your progress.",
    image: "/images/demo_billing.png",
  },
  {
    title: "Export & Print Invoices",
    description: "Generate professional A4 or A5 PDF invoices instantly. Print them using your system's native dialog for perfect alignment every time.",
    image: "/images/demo_settings.png",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen animate-blob">
         <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent blur-[180px] rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-28">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-[1.2]">
            Modern solutions for <br />
            <span className="text-primary italic">your business workflow</span>
          </h2>
          <p className="mt-8 max-w-[800px] text-muted-foreground text-xl font-medium leading-relaxed">
            From inventory setup to final invoice generation, RE-Invoice keeps your business data organized and accessible.
          </p>
        </div>
        
        <div className="space-y-40">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col gap-16 lg:flex-row lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.1em] shadow-lg shadow-primary/20">
                   {index + 1} • Workflow Step
                </div>
                <h3 className="text-4xl font-extrabold tracking-tight">{step.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  {step.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 p-4 rounded-[1.5rem] bg-secondary/50 border border-primary/5">
                      <CheckCircle2 className="size-6 text-primary" />
                      <span className="font-bold text-sm">Optimized Speed</span>
                   </div>
                   <div className="flex items-center gap-3 p-4 rounded-[1.5rem] bg-secondary/50 border border-primary/5">
                      <CheckCircle2 className="size-6 text-primary" />
                      <span className="font-bold text-sm">Intuitive UI</span>
                   </div>
                </div>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-2 blur-2xl group-hover:rotate-0 transition-transform duration-700" />
                <div className="relative aspect-[16/10] rounded-[2rem] border border-primary/10 bg-card p-3 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                   <Image 
                     src={step.image} 
                     alt={step.title} 
                     fill 
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     className="object-cover rounded-[1.5rem]"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
