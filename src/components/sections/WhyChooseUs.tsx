import { motion } from "motion/react";
import { Zap, ShieldCheck, Heart, Clock, Award, Headphones } from "lucide-react";

const features = [
  {
    title: "Instant Processing",
    description: "We value your time. Most of our digital applications are processed within minutes.",
    icon: Zap,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "100% Secure",
    description: "Your data is encrypted and handled with extreme privacy. Security is our priority.",
    icon: ShieldCheck,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Trusted by Many",
    description: "Over 5000+ satisfied customers trust SRS Online for their essential services.",
    icon: Heart,
    color: "from-red-400 to-red-600",
  },
  {
    title: "Real-time Updates",
    description: "Get instant status updates on your applications via SMS and WhatsApp.",
    icon: Clock,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Expert Assistance",
    description: "Highly experienced team to guide you through complex documentation and rules.",
    icon: Award,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "24/7 Support",
    description: "Need help at midnight? Our automated system and team are here for you always.",
    icon: Headphones,
    color: "from-pink-400 to-pink-600",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-srs-cyan font-bold uppercase tracking-widest text-sm"
          >
            Why Choose SRS Online
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black tracking-tighter"
          >
            Built for <span className="text-srs-cyan">Reliability</span> & Speed
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-slate-500 dark:text-slate-400 text-lg"
          >
            We've revolutionized the way digital services are delivered in India, focusing on a premium user experience and transparent processes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 hover:border-srs-cyan/30 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none relative group overflow-hidden"
            >
              {/* Background Accent */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-[0.03] group-hover:opacity-[0.08] rounded-full transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-black/10 group-hover:rotate-12 transition-transform duration-500`}>
                <feature.icon size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-srs-cyan transition-colors">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                {feature.description}
              </p>
              
              {/* Bottom Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
