import { motion } from "motion/react";
import { 
  CreditCard, 
  UserRound, 
  CarFront, 
  ShieldAlert, 
  TrainFront, 
  Globe, 
  Vote, 
  FileText, 
  HeartPulse, 
  Zap, 
  Smartphone, 
  Building2, 
  Calculator, 
  LayoutList,
  ArrowUpRight,
  BadgeCheck,
  Bike,
  IdCard,
  Repeat,
  Train,
  Wallet
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "E-Train Ticket Booking",
    description: "Instant railway ticket booking assistance with confirmed and Tatkal ticket support.",
    details: ["Tatkal booking", "PNR status check", "Cancellation support"],
    icon: Train,
    color: "bg-sky-600",
  },
  {
    title: "New Licence Apply",
    description: "Apply for new driving licence with complete documentation guidance.",
    details: ["Learner licence", "Driving test booking", "Document assistance"],
    icon: CarFront,
    color: "bg-green-600",
  },
  {
    title: "Licence Update",
    description: "Update address, mobile number, and renew expired driving licence easily.",
    details: ["DL renewal", "Address update", "Duplicate licence"],
    icon: IdCard,
    color: "bg-purple-600",
  },
  {
    title: "PF KYC",
    description: "Update Aadhaar, PAN, and bank details in your EPF account quickly.",
    details: ["Aadhaar linking", "PAN update", "Bank verification"],
    icon: BadgeCheck,
    color: "bg-orange-600",
  },
  {
    title: "PF Withdrawal",
    description: "Get assistance for online PF withdrawal and claim status tracking.",
    details: ["Online PF claim", "Advance withdrawal", "Claim tracking"],
    icon: Wallet,
    color: "bg-rose-600",
  },
  {
    title: "PF Transfer",
    description: "Transfer your EPF balance smoothly when changing jobs or companies.",
    details: ["Old PF transfer", "UAN assistance", "Employer verification"],
    icon: Repeat,
    color: "bg-indigo-600",
  },
  {
    title: "2 Wheeler Insurance",
    description: "Affordable bike insurance renewal and new policy assistance from top brands.",
    details: ["Instant renewal", "Third-party insurance", "Comprehensive plans"],
    icon: Bike,
    color: "bg-red-500",
  },

  // Existing Services
  {
    title: "PAN Card",
    description: "New PAN application, correction, and reprint services with fast processing.",
    details: ["48-hour e-PAN delivery", "Correction in existing card", "Lost card reprint"],
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    title: "Aadhaar Update",
    description: "Correction of name, address, DOB, and mobile number in Aadhaar card.",
    details: ["Address change", "Name correction", "Mobile link assistance"],
    icon: UserRound,
    color: "bg-orange-500",
  },
  {
    title: "Insurance",
    description: "Vehicle, health, and life insurance from top companies at best premiums.",
    details: ["Instant policy", "Claims assistance", "Multi-brand options"],
    icon: ShieldAlert,
    color: "bg-indigo-500",
  },
  {
    title: "Voter ID",
    description: "New voter registration and correction services for digital voter card.",
    details: ["New registration", "Digital download", "Address transfer"],
    icon: Vote,
    color: "bg-red-500",
  },
  {
    title: "Passport",
    description: "Hassle-free passport application assistance and documentation guidance.",
    details: ["Appointment booking", "Document checklist", "Tatkal application"],
    icon: Globe,
    color: "bg-cyan-600",
  },
  {
    title: "Banking Services",
    description: "Money transfer, cash withdrawal, and new account opening assistance.",
    details: ["DMT / AePS", "Zero balance accounts", "Loan consultancy"],
    icon: Building2,
    color: "bg-emerald-600",
  },
  {
    title: "Government Schemes",
    description: "Application assistance for PM-Kisan, Ayushman Bharat, and state schemes.",
    details: ["Ayushman card", "Labour card", "Pension application"],
    icon: HeartPulse,
    color: "bg-pink-500",
  },
  {
    title: "Bill Payments",
    description: "Instant electricity, water, and gas bill payments with receipts.",
    details: ["Electricity bills", "Water/Gas tax", "Broadband payments"],
    icon: Zap,
    color: "bg-yellow-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-black transition-colors relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-srs-cyan/5 blur-[100px] rounded-full -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-srs-navy/5 blur-[100px] rounded-full translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="max-w-2xl space-y-4">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-srs-cyan uppercase tracking-[0.2em] font-black text-xs"
            >
              <LayoutList size={14} />
              <span>Discover Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-tight"
            >
              Essential <span className="text-srs-cyan">Digital Services</span> <br />
              Tailored for You
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              We offer a wide range of online services to cater to your daily needs, helping you save time and effort.
            </p>
          </div>
          <Button render={<a href="#services" />} nativeButton={false} variant="outline" className="rounded-full px-8 h-12 border-2 border-slate-200 dark:border-slate-800 hover:border-srs-cyan transition-all cursor-pointer">
            View All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <Card className="h-full border-2 border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-srs-cyan/30 transition-all duration-500 overflow-hidden relative flex flex-col">
                <CardHeader className="flex-1 space-y-4">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-700",
                    service.color,
                    "group-hover:rotate-[360deg] group-hover:scale-110"
                  )}>
                    <service.icon size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-black tracking-tight group-hover:text-srs-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                      {service.description}
                    </CardDescription>
                  </div>

                  {/* Details revealed smoothly with opacity only to prevent layout jumps */}
                  <div className="space-y-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-srs-cyan" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardHeader>
                
                <div className="p-6 pt-0 mt-auto">
                  <Button 
                    render={<a href="#contact" />} 
                    nativeButton={false}
                    variant="ghost" 
                    className="w-full justify-between rounded-xl hover:bg-srs-cyan hover:text-white group/btn cursor-pointer"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold">Process Now</span>
                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </Button>
                </div>

                {/* Decorative background number */}
                <div className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-100 dark:text-slate-900 select-none group-hover:text-srs-cyan/5 transition-colors">
                  0{i + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
