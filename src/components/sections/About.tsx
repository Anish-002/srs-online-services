import { motion } from "motion/react";
import { CheckCircle2, Award, History, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl skew-y-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880212319-78443396aa70?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Vision" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-4xl font-black font-heading mb-2">Since 2018</p>
                <p className="opacity-80">Empowering millions with digital growth.</p>
              </div>
            </motion.div>
            
            {/* Floating Trust Card */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="absolute top-20 -right-10 glass p-8 rounded-3xl shadow-2xl z-20 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-srs-cyan rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-lg leading-tight uppercase">ISO Certified <br /> Excellence</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Recognized for delivering secure and reliable government services across India.</p>
            </motion.div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <motion.p
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-srs-cyan font-bold uppercase tracking-widest text-sm"
              >
                Our Legacy & Mission
              </motion.p>
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-tight"
              >
                Transforming the Way <br />
                <span className="text-srs-cyan">Digital Services</span> Work
              </motion.h2>
              <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
              >
                At SRS Online Services, we believe that accessing government and banking services shouldn't be a struggle. Our mission is to bridge the gap between technology and the common citizen.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-srs-navy dark:text-srs-cyan">
                  <Target size={20} strokeWidth={3} />
                  <h4 className="font-bold text-xl capitalize">Our Vision</h4>
                </div>
                <p className="text-slate-500 dark:text-slate-400">To become the backbone of digital transformation in every Indian household.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-srs-navy dark:text-srs-cyan">
                  <History size={20} strokeWidth={3} />
                  <h4 className="font-bold text-xl capitalize">The Journey</h4>
                </div>
                <p className="text-slate-500 dark:text-slate-400">Started as a small kiosk, now serving over 50k+ applications annually.</p>
              </div>
            </div>

            <ul className="space-y-4 pt-6">
              {[
                "Government Authorized Service Center",
                "Advanced Security Protocols for Data",
                "Dedicated Customer Success Managers",
                "Transparent Pricing with no hidden costs"
              ].map((item, i) => (
                <motion.li 
                   key={i} 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
