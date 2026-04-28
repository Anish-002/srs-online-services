import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Users, Clock, MousePointer2 } from "lucide-react";

const stats = [
  { label: "Happy Customers", value: "5000+", icon: Users },
  { label: "Premium Services", value: "50+", icon: Star },
  { label: "Response Time", value: "24/7", icon: Clock },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            translateX: [0, 50, 0],
            translateY: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-srs-cyan/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            translateX: [0, -60, 0],
            translateY: [0, 40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-srs-navy/10 blur-[120px]" 
        />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-srs-cyan/10 text-srs-cyan px-4 py-2 rounded-full text-sm font-semibold border border-srs-cyan/20"
            >
              <ShieldCheck size={16} />
              <span>India's Most Trusted Digital Portal</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl font-heading font-black tracking-tighter leading-[0.95]"
            >
              Your Trusted <br />
              <span className="text-srs-cyan">Digital Service</span> <br />
              Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg"
            >
              Experience seamless, secure, and lightning-fast digital services. From PAN & Aadhaar to specialized banking & insurance solutions — we make it simple.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button render={<a href="#services" />} nativeButton={false} size="lg" className="bg-srs-navy hover:bg-srs-navy/90 text-white rounded-full h-16 px-8 text-lg group shadow-xl shadow-srs-navy/20 cursor-pointer">
                Explore Services
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button render={<a href="#contact" />} nativeButton={false} size="lg" variant="outline" className="rounded-full h-16 px-8 text-lg border-2 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer">
                Contact Now
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800"
            >
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-srs-navy dark:text-srs-cyan font-bold text-2xl md:text-3xl">
                    <span>{stat.value}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-[3rem] p-1 shadow-2xl group">
              <div className="absolute inset-1 bg-gradient-to-tr from-srs-navy/20 to-srs-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.8rem] z-10 pointer-events-none" />
              
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop" 
                alt="Digital Services Illustration" 
                className="w-full h-full object-cover rounded-[2.8rem]"
              />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px]"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Security</p>
                  <p className="font-bold">100% Encrypted</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-10 glass p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px]"
              >
                <div className="w-12 h-12 bg-srs-cyan rounded-full flex items-center justify-center text-white">
                  <Star strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Feedback</p>
                  <p className="font-bold">4.9/5 Rating</p>
                </div>
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-3xl rounded-full border border-white/30 flex items-center justify-center text-white shadow-inner animate-pulse">
                <MousePointer2 size={32} />
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-srs-navy/30 rounded-full blur-[60px] animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-srs-cyan/20 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-5 h-9 rounded-full border-2 border-slate-400 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-srs-cyan rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
