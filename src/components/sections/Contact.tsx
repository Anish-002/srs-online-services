import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black transition-colors overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-srs-cyan font-bold uppercase tracking-widest text-sm"
              >
                Contact Us
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-heading font-black tracking-tighter leading-[0.9]"
              >
                Let’s Start <br />
                Your <span className="text-srs-cyan">Digital Journey</span>
              </motion.h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">
                Have a question or need a specific service? Reach out to us — our team is ready to help you save time and effort.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-srs-cyan/10 flex items-center justify-center text-srs-cyan group-hover:bg-srs-cyan group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Phone</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">+91 98765 43210</p>
                  <p className="text-slate-400 text-sm">Mon-Sat, 9AM to 7PM</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-srs-navy/10 flex items-center justify-center text-srs-navy group-hover:bg-srs-navy group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">support@srsonline.in</p>
                  <p className="text-slate-400 text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-srs-cyan/10 flex items-center justify-center text-srs-cyan group-hover:bg-srs-cyan group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Main Office</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">123 Digital Plaza, Sector 45</p>
                  <p className="text-slate-400 text-sm">New Delhi, India - 110001</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full h-14 px-8 shadow-xl shadow-green-500/20 group">
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="bg-slate-50/50 dark:bg-slate-900/50 p-10 rounded-[3rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl relative z-10">
              <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-slate-400 ml-2">Full Name</label>
                      <Input placeholder="Enter your name" className="bg-white dark:bg-slate-800 border-none h-14 rounded-2xl px-6 focus-visible:ring-srs-cyan transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-wider text-slate-400 ml-2">Phone Number</label>
                       <Input placeholder="+91 00000 00000" className="bg-white dark:bg-slate-800 border-none h-14 rounded-2xl px-6 focus-visible:ring-srs-cyan transition-all" />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-400 ml-2">Select Service</label>
                    <select className="flex h-14 w-full rounded-2xl border-none bg-white dark:bg-slate-800 px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-srs-cyan appearance-none">
                      <option>PAN Card</option>
                      <option>Aadhaar Update</option>
                      <option>Insurance</option>
                      <option>Banking Services</option>
                      <option>Passport Services</option>
                      <option>Other</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-400 ml-2">Message</label>
                    <Textarea placeholder="How can we help you?" className="bg-white dark:bg-slate-800 border-none min-h-[150px] rounded-2xl px-6 py-4 focus-visible:ring-srs-cyan transition-all" />
                 </div>

                 <Button className="w-full h-16 rounded-2xl bg-srs-cyan hover:bg-srs-navy text-white text-lg font-bold shadow-xl shadow-srs-cyan/20 transition-all duration-500 group">
                    Send Message
                    <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </Button>
              </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-srs-cyan/20 blur-[60px] rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-srs-navy/20 blur-[60px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
