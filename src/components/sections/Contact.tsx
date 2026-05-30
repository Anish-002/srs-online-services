import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, Globe } from "lucide-react";

export function Contact() {
  const WhatsAppIcon = ({
    size = 24,
    className = "",
    ...props
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M19.11 17.2c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.51.07-.77.36-.26.29-1 1-.1 2.44.9 1.44 2.58 2.84 4.41 3.98 1.84 1.14 3.01 1.26 4.09 1.06.66-.12 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.34z" />

      <path d="M16.03 3C8.85 3 3 8.74 3 15.82c0 2.49.72 4.92 2.08 7L3 29l6.38-2.03a13.1 13.1 0 0 0 6.65 1.81h.01c7.18 0 13.03-5.74 13.03-12.82C29.07 8.74 23.21 3 16.03 3zm0 23.47h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.79 1.2 1.24-3.67-.25-.38a10.47 10.47 0 0 1-1.64-5.58c0-5.82 4.78-10.56 10.65-10.56 5.87 0 10.65 4.74 10.65 10.56 0 5.82-4.78 10.56-10.66 10.56z" />
    </svg>
  );
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
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">+91 94081 90016</p>
                  <p className="text-slate-400 text-sm">Mon-Sat, 9AM to 7PM</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-srs-navy/10 flex items-center justify-center text-srs-navy group-hover:bg-srs-navy group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">srsonlineservices008@gmail.com</p>
                  <p className="text-slate-400 text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-srs-cyan/10 flex items-center justify-center text-srs-cyan group-hover:bg-srs-cyan group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Main Office</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Pandesara, Surat</p>
                  <p className="text-slate-400 text-sm">Gujarat, India - 394221</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5">

              <a
                href="https://wa.me/919408190016?text=Hello%20SRS%20Online%20Service,%20mujhe%20aapki%20services%20ke%20baare%20mein%20jaankari%20chahiye."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Glow Background */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-[#25D366]/40 to-emerald-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

                {/* Main Button */}
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111827] px-7 py-5 min-w-[320px] shadow-[0_15px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_70px_rgba(37,211,102,0.35)]">

                  {/* Animated Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 via-transparent to-[#25D366]/10 opacity-0 group-hover:opacity-100 transition duration-700" />

                  <div className="relative flex items-center gap-5">

                    {/* WhatsApp Icon Box */}
                    <div className="relative flex items-center justify-center">

                      <div className="absolute inset-0 rounded-2xl bg-[#25D366] blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#1ebe5d] flex items-center justify-center shadow-lg">
                        <WhatsAppIcon
                          size={30}
                          className="text-white group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">

                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />

                        <span className="text-xs uppercase tracking-[0.25em] text-[#25D366] font-bold">
                          Online Now
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white leading-none">
                        WhatsApp Support
                      </h3>

                      <p className="text-sm text-slate-400 mt-2">
                        Fast response • Instant assistance • 24/7 support
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#25D366] transition-all duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white group-hover:translate-x-1 transition-transform duration-500"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
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
