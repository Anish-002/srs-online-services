import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to get a new PAN card?",
    answer: "Typically, it takes about 10-15 business days for the physical card to reach your address. However, we can help you get an e-PAN (digital copy) within 48 hours in most cases.",
  },
  {
    question: "Is vehicle insurance coverage instant?",
    answer: "Yes! Once the payment is successful and documents are verified, the policy copy is generated instantly and shared with you on WhatsApp.",
  },
  {
    question: "Can I apply for government schemes online from home?",
    answer: "Absolutely. You can share your documents with us via our secure portal or WhatsApp, and we will handle the entire application process on your behalf.",
  },
  {
    question: "What documents are required for an Aadhaar update?",
    answer: "Usually, a Proof of Identity (POI) and Proof of Address (POA) are required. Valid documents include Voter ID, Passport, Ration Card, etc. We can guide you on the specific requirements for your update.",
  },
  {
    question: "What are the payment methods accepted?",
    answer: "We accept all major UPI players (GPAY, PhonePe, Paytm), Net Banking, Debit/Credit cards, and cash payments at our local service centers.",
  },
  {
    question: "Do you provide tracking for my applications?",
    answer: "Yes, we provide real-time status updates via SMS and WhatsApp. You can also contact our support team anytime for a detailed status report.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-srs-cyan/10 rounded-2xl flex items-center justify-center text-srs-cyan mx-auto mb-4"
          >
            <HelpCircle size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black tracking-tighter"
          >
            Got <span className="text-srs-cyan">Questions?</span> <br />
            We've Got Answers
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Find quick answers to common queries about our digital services and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4 border-none">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem value={`item-${i}`} className="border-2 border-slate-100 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 overflow-hidden px-6 transition-all hover:border-srs-cyan/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline text-lg font-bold hover:text-srs-cyan group">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 dark:text-slate-400 text-lg pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
