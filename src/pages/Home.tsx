import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp, Smartphone, Boxes, Map, BarChart4, CheckSquare, CloudOff, Route, Clipboard, ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0407ae]/10 text-[#0407ae] text-xs font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0407ae] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0407ae]"></span>
                </span>
                New: AI Route Optimization
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 tracking-tight">
                Smarter Route Sales.
                <br />
                <span className="text-[#0407ae]">Faster Billing.</span>
                <br />
                Better Collections.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                RoutePace helps distributors automate route billing, inventory, and collections through a powerful mobile and web platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/demo"
                  className="bg-[#0407ae] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-[#0407ae]/25 hover:bg-[#0407ae]/90 transition-all flex items-center gap-2"
                >
                  Book a Free Demo
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/features"
                  className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Explore Features
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">Trusted by 500+ distributors worldwide</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[#0407ae]/5 rounded-full blur-3xl transform scale-150"></div>
              <div className="relative z-10 w-full">
                <div className="bg-white rounded-xl shadow-2xl p-4 border border-slate-200 overflow-hidden group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpqHiq3RknwfEsugLRdmJJs4MElzcmV-z34sdXE-7zAB8dtjdJgIyKLo7ApQ-xlbQ8HJe66VavlaOsGV47gE2D4Az2q73vEYPCsWxUBOKJYVHGPNSfuuU39kFx4ksVIStMCeT-itDGAeZhHTC7DlLvVCm4RvOLNa1eeJ4isT7qfQtrK6XmRFIBpNs2BJOBbBdhY4UnDShkeEa-2ifZdR6TlnTTaoGAMwoHr8jsO4IcxRIj3iT-dzNdWh2TfdvSh49PLLhc4lURrCh3"
                    alt="Dashboard"
                    className="rounded-lg w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-10 -left-10 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-[240px] hidden xl:block border border-white/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-500/20 text-green-600 rounded-lg">
                        <TrendingUp size={18} />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase">Daily Collections</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">$42,850.00</div>
                    <div className="text-xs text-green-600 font-bold mt-1">+12% from yesterday</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#0407ae] font-bold text-sm tracking-widest uppercase mb-4">Key Benefits</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Streamline Your Distribution</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Powerful tools designed specifically for modern route sales management and field operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Faster Billing",
                desc: "Generate professional, accurate invoices instantly on the field and print them wirelessly or send via WhatsApp.",
                icon: <Smartphone />,
              },
              {
                title: "Real-Time Inventory",
                desc: "Track stock levels across all vehicles and central warehouses in real-time. Never miss a sale due to out-of-stock items.",
                icon: <Boxes />,
              },
              {
                title: "Smart Beat Planning",
                desc: "Optimize routes with AI-driven beat planning for maximum efficiency, fuel savings, and outlet coverage.",
                icon: <Map />,
              },
              {
                title: "Accurate Reports",
                desc: "Get deep insights into sales performance, collection efficiency, and outlet-wise profitability with one click.",
                icon: <BarChart4 />,
              },
              {
                title: "Reduced Mismatch",
                desc: "Eliminate discrepancies between physical stock and digital records with automated end-of-day reconciliation.",
                icon: <CheckSquare />,
              },
              {
                title: "Offline Mode",
                desc: "Continue sales operations without internet. Data syncs automatically once the device is back online.",
                icon: <CloudOff />,
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#0407ae]/30 transition-all hover:shadow-xl hover:shadow-[#0407ae]/5 group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#0407ae]/10 flex items-center justify-center text-[#0407ae] mb-6 group-hover:bg-[#0407ae] group-hover:text-white transition-all">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#0407ae] font-bold text-sm tracking-widest uppercase mb-4">The Process</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">How RoutePace Works</h3>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 relative">
            {[
              { step: "1", title: "Plan Routes", desc: "Assign customers and products to routes from the web dashboard in minutes.", icon: <Route /> },
              {
                step: "2",
                title: "Execute Sales",
                desc: "Field staff process orders, manage stock, and collect payments via the mobile app.",
                icon: <Clipboard />,
              },
              {
                step: "3",
                title: "Sync & Collect",
                desc: "Monitor progress live and get automated reconciliation reports at end-of-day.",
                icon: <ArrowLeftRight />,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-[#0407ae] text-white flex items-center justify-center text-3xl font-black shadow-xl shadow-[#0407ae]/30 mb-8 border-4 border-white">
                  {item.step}
                </div>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm w-full">
                  <div className="text-[#0407ae] mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-6 tracking-tight">Built for Every Industry</h3>
            <p className="text-slate-400 text-lg">Tailored solutions for various distribution sectors.</p>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["FMCG", "Beverage", "Pharma", "Grocery", "Dairy"].map((industry) => (
              <div
                key={industry}
                className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center gap-4 hover:bg-white/10 transition-all cursor-default"
              >
                <span className="font-bold text-lg">{industry}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-[#0407ae] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-[#0407ae]/40">
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Ready to optimize your routes?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
            Join over 2,000+ businesses using RoutePace to manage their field operations efficiently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="bg-white text-[#0407ae] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors w-full sm:w-auto">
              Get Started for Free
            </button>
            <button className="bg-[#0407ae]/20 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
