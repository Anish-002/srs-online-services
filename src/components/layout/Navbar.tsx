import * as React from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: scrollY.get() > 50 ? "blur(12px)" : "none",
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 xl:px-12 flex items-center justify-between border-b",
        "border-transparent"
      )}
    >
      <a href="#home" className="flex items-center gap-2 group cursor-pointer">
  <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-srs-navy/20 group-hover:scale-110 transition-transform">
    <img
      src="/images/logo.svg"
      alt="SRS Online Service Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <span className="text-2xl font-heading font-black tracking-tighter">
    SRS <span className="text-srs-cyan">ONLINE SERVICES</span>
  </span>
</a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium hover:text-srs-cyan transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-srs-cyan transition-all group-hover:w-full" />
          </a>
        ))}
        <div className="flex items-center gap-4 ml-4">
          <ThemeToggle />
          <Button render={<a href="#services" />} nativeButton={false} className="bg-srs-navy hover:bg-srs-navy/90 text-white rounded-full px-6 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-srs-navy/20 cursor-pointer">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="rounded-full" />}>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
             <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold hover:text-srs-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button render={<a href="#contact" onClick={() => setIsOpen(false)} />} nativeButton={false} className="bg-srs-navy hover:bg-srs-navy/90 text-white rounded-full py-6 text-lg mt-4 shadow-lg shadow-srs-navy/20 cursor-pointer">
                Contact Us Now
              </Button>
             </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
