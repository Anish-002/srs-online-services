import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Users, Clock, MousePointer2 } from "lucide-react";

const stats = [
  { label: "Happy Customers", value: "500+", icon: Users },
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
  initial={{ opacity: 0, scale: 0.85, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1, type: "spring", bounce: 0.3 }}
  className="relative hidden lg:block"
>
  {/* Glow Effects */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-srs-cyan/20 blur-[100px] rounded-full" />
  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-srs-navy/20 blur-[100px] rounded-full" />

  {/* Main Image Card */}
  <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] group">

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-srs-navy/30 via-transparent to-srs-cyan/20 opacity-80 z-10" />

    {/* Shine Effect */}
    <div className="absolute inset-0 overflow-hidden z-20">
      <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-white/10 blur-2xl group-hover:left-[140%] transition-all duration-1000" />
    </div>

    {/* Image */}
    <img
      src="/images/heroimage.png"
      alt="SRS Online Services"
      className="w-full aspect-square object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
    />

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent z-20" />

    {/* Glass Badge */}
    <div className="absolute top-6 left-6 z-30 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-5 py-3 shadow-xl">
      <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
        Trusted Digital Services
      </p>

      <h3 className="text-white font-black text-xl mt-1">
        SRS Online
      </h3>
    </div>
  </div>
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
