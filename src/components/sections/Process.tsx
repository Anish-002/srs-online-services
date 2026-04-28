import { motion } from "motion/react";
import { MessageSquare, FileUp, ShieldCheck, Rocket, PackageCheck } from "lucide-react";

const steps = [
  {
    title: "Request Service",
    description: "Select the service you need and reach out via our contact form or WhatsApp button.",
    icon: MessageSquare,
  },
  {
    title: "Share Documents",
    description: "Upload and share the required documents securely through our encrypted portal.",
    icon: FileUp,
  },
  {
    title: "Verification",
    description: "Our experts verify all documents to ensure 100% accuracy and approval chances.",
    icon: ShieldCheck,
  },
  {
    title: "Processing",
    description: "We initiate the application process with the respective department immediately.",
    icon: Rocket,
  },
  {
    title: "Delivery",
    description: "Receive your digital card or certificate directly on your email or mobile.",
    icon: PackageCheck,
  },
];

export function Process() {
  return (
    <section className="py-24 bg-srs-navy dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-srs-cyan font-bold uppercase tracking-[0.3em] text-xs"
          >
            How it Works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-white"
          >
            Simple 5-Step <span className="text-srs-cyan">Success Path</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg"
          >
            We've streamlined the entire application journey to be simple, fast, and completely stress-free for you.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block" />
          <motion.div 
             initial={{ width: "0%" }}
             whileInView={{ width: "100%" }}
             viewport={{ once: true }}
             transition={{ duration: 2, ease: "easeInOut" }}
             className="absolute top-1/2 left-0 h-1 bg-srs-cyan -translate-y-1/2 hidden lg:block z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center mb-8 relative z-20 shadow-2xl group-hover:scale-110 transition-transform duration-500 ring-8 ring-transparent group-hover:ring-srs-cyan/20">
                  <step.icon size={32} className="text-srs-navy dark:text-srs-cyan group-hover:text-srs-cyan transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-srs-cyan text-white font-bold text-sm flex items-center justify-center">
                    0{i + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-srs-cyan uppercase tracking-tight italic">
                  {step.title}
                </h3>
                <p className="text-white/50 group-hover:text-white/80 transition-colors leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
