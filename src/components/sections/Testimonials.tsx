import { motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Local Business Owner",
    text: "SRS Online simplified my GST registration process. I was worried about the complexity, but their team handled everything within 48 hours. Highly recommended!",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    text: "Got my PAN card correction and Aadhaar update done without standing in queues. The real-time WhatsApp updates kept me informed every second. Amazing service!",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=20"
  },
  {
    name: "Amit Patel",
    role: "Student",
    text: "The application for my state scholarship was handled perfectly. They even guided me on the required documents which I had no idea about. Truly expert support.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Sunita Devi",
    role: "Home Maker",
    text: "Applied for my Ayushman card. The team was very patient and explained the benefits clearly. Very soft spoken and professional people.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=32"
  }
];

export function Testimonials() {
  const [active, setActive] = React.useState(0);

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3 space-y-8 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-srs-cyan font-bold uppercase tracking-widest text-sm"
            >
              Voices of Trust
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black tracking-tighter"
            >
              What Our <br />
              <span className="text-srs-cyan">Customers</span> Say
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              We take pride in the success stories of our clients. Your trust drives our commitment to excellence.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-14 h-14 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-srs-cyan hover:text-srs-cyan transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setActive(prev => (prev + 1) % testimonials.length)}
                className="w-14 h-14 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-srs-cyan hover:text-srs-cyan transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 relative">
            <div className="flex transition-transform duration-500 ease-in-out gap-8 overflow-hidden py-10 px-4">
               {testimonials.map((t, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                      opacity: active === i ? 1 : 0,
                      x: (i - active) * 100 + "%",
                      scale: active === i ? 1 : 0.9,
                      zIndex: active === i ? 10 : 0
                    }}
                    className={cn(
                      "absolute inset-0 w-full h-full p-10 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl transition-all duration-500",
                      active === i ? "block" : "hidden pointer-events-none"
                    )}
                 >
                    <Quote className="text-srs-cyan/20 absolute top-10 right-10" size={120} />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="space-y-6">
                        <div className="flex gap-1 text-yellow-500">
                          {[...Array(t.rating)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                        </div>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-slate-700 dark:text-slate-200">
                           "{t.text}"
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <img src={t.img} alt={t.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-800 shadow-xl" />
                        <div>
                          <h4 className="text-xl font-bold">{t.name}</h4>
                          <p className="text-srs-cyan font-medium">{t.role}</p>
                        </div>
                      </div>
                    </div>
                 </motion.div>
               ))}
            </div>
            {/* Height Spacer */}
            <div className="p-10 opacity-0 pointer-events-none">
              <p className="text-2xl py-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
