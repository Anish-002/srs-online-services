import * as React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
    color: "hover:bg-[#1877F2]",
    shadow: "hover:shadow-[#1877F2]/40",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "hover:bg-[#E4405F]",
    shadow: "hover:shadow-[#E4405F]/40",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
    color: "hover:bg-[#FF0000]",
    shadow: "hover:shadow-[#FF0000]/40",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "#",
    color: "hover:bg-[#0088CC]",
    shadow: "hover:shadow-[#0088CC]/40",
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-3">
      {SOCIAL_LINKS.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          whileHover={{ x: 8, scale: 1.1 }}
          className={cn(
            "w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all duration-300 shadow-xl group",
            social.color,
            social.shadow,
            "hover:text-white hover:border-transparent"
          )}
          title={social.name}
        >
          <social.icon size={22} strokeWidth={2} />
        </motion.a>
      ))}
      
      {/* Decorative Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 40 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-0.5 bg-slate-200 dark:bg-slate-800 mx-auto mt-2 rounded-full"
      />
    </div>
  );
}
