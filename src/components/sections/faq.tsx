import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my data really private?",
    answer: "Yes. RE-Invoice is a local-only application. All your inventory and billing data is stored in a SQLite database on your own computer. No data is ever uploaded to the cloud or shared with third parties.",
  },
  {
    question: "Which operating systems are supported?",
    answer: "Currently, we provide official installers for Windows (.exe) and Linux (.deb). Since it's built with Tauri, macOS support is technically possible and may be added in the future.",
  },
  {
    question: "Can I use it offline?",
    answer: "Absolutely. RE-Invoice is designed as an offline-first tool. The only time it uses the internet is to optionally fetch the current time from a world time API to ensure billing accuracy, but it falls back to system time if you're offline.",
  },
  {
    question: "How do I backup my data?",
    answer: "You can create a full backup of your SQLite database with one click in the Settings tab. To restore, simply select your backup file and the app will reload with your data intact.",
  },
  {
    question: "Is RE-Invoice free to use?",
    answer: "Yes, it is completely free and open source under the MIT License. You can use it for your business without any subscriptions or hidden fees.",
  },
]

export function FAQ() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-muted-foreground text-xl font-medium max-w-2xl">
            Everything you need to know about the privacy, security, and usage of RE-Invoice.
          </p>
        </div>
        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-primary/5 bg-background/50 backdrop-blur-sm rounded-[2rem] px-8 py-2 overflow-hidden transition-all duration-300 hover:border-primary/20">
              <AccordionTrigger className="text-left text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-medium pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 size-[500px] bg-primary/5 blur-[120px] rounded-full" />
    </section>
  )
}
