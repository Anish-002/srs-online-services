import * as React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, Send, MessageCircle, MessageSquareShare } from "lucide-react";
import { cn } from "@/lib/utils";



export function SocialSidebar() {

 const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
  >
    {/* 1. Background Green Circle */}
    <circle cx="12" cy="12" r="11" fill="#25D366" />
    
    {/* 2. White Speech Bubble */}
    <path d="M12 5a7 7 0 0 0-6.07 10.5L5 19l3.6-.95A7 7 0 1 0 12 5z" fill="#ffffff" />
    
    {/* 3. Green Phone Icon Inside */}
    <path d="M14.73 13.1c-.2-.1-.97-.48-1.12-.53-.15-.05-.26-.08-.37.08-.1.17-.42.53-.52.64-.1.11-.2.12-.4 0A5.1 5.1 0 0 1 10 11.4c-.8-.7-1.32-1.54-1.48-1.8-.16-.27-.02-.42.12-.55.12-.12.27-.3.4-.46.06-.08.1-.14.15-.22.05-.08.02-.16-.01-.22-.03-.06-.27-.65-.37-.9-.1-.24-.2-.2-.27-.2h-.26c-.1 0-.24.04-.37.18a2.53 2.53 0 0 0-.8 1.88c0 .85.42 1.67.6 1.9 1.15 1.5 2.54 2.5 4.3 3 .55.15 1.1.2 1.63.13.56-.07 1.14-.34 1.3-.8.16-.47.16-.88.11-.96-.04-.08-.15-.13-.35-.23z" fill="#25D366" />
  </svg>
);

  const SOCIAL_LINKS = [
  // {
  //   name: "Facebook",
  //   icon: Facebook,
  //   href: "#",
  //   color: "hover:bg-[#1877F2]",
  //   shadow: "hover:shadow-[#1877F2]/40",
  // },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/srsonlineservices",
    color: "hover:bg-[#E4405F]",
    shadow: "hover:shadow-[#E4405F]/40",
  },
  {
  name: "WhatsApp",
  icon: MessageSquareShare,
  href: "https://wa.me/919408190016?text=Hello%20SRS%20Online%20Service,%20mujhe%20aapki%20services%20ke%20baare%20mein%20jaankari%20chahiye.",
  color: "hover:bg-[#25D366]",
  shadow: "hover:shadow-[#25D366]/40",
},
  // {  
  //   name: "YouTube",
  //   icon: Youtube,
  //   href: "#",
  //   color: "hover:bg-[#FF0000]",
  //   shadow: "hover:shadow-[#FF0000]/40",
  // },
  // {
  //   name: "Telegram",
  //   icon: Send,
  //   href: "#",
  //   color: "hover:bg-[#0088CC]",
  //   shadow: "hover:shadow-[#0088CC]/40",
  // },
];
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
          <social.icon size={28} strokeWidth={2} />
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
