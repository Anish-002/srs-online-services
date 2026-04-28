import { Rocket, Facebook, Instagram, Twitter, Youtube, Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 transition-colors">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-srs-navy to-srs-cyan rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Rocket size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-heading font-black tracking-tighter">
                SRS <span className="text-srs-cyan text-3xl">Online</span>
              </span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Your comprehensive digital partner for all government and private online services. Fast, secure, and reliable since 2018.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-srs-cyan hover:text-white hover:border-srs-cyan transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "About Us", href: "#about" },
                { name: "How it Works", href: "#process" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-srs-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Top Services</h4>
            <ul className="space-y-4">
              {["PAN Card", "Aadhaar Update", "Insurance", "Passport", "Voter ID", "Banking"].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-500 dark:text-slate-400 hover:text-srs-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <p className="text-slate-500 dark:text-slate-400">Subscribe to get the latest updates on government schemes.</p>
            <div className="relative group">
              <Input 
                placeholder="Email Address" 
                className="rounded-full bg-white dark:bg-slate-800 pr-12 h-12 focus-visible:ring-srs-cyan"
              />
              <Button className="absolute right-1 top-1 bottom-1 aspect-square p-0 rounded-full bg-srs-cyan hover:bg-srs-cyan/90">
                <Send size={18} />
              </Button>
            </div>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Phone size={16} className="text-srs-cyan" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Mail size={16} className="text-srs-cyan" />
                <span>support@srsonline.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} SRS Online Services. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-srs-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-srs-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
