import { motion } from "motion/react";
import { CheckCircle2, Target, Eye, Zap, ShieldCheck, Lightbulb, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0407ae]/10 text-[#0407ae] text-xs font-bold uppercase tracking-wider w-fit">
              Our Story
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Optimizing Every Mile with <span className="text-[#0407ae]">RoutePace</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              RoutePace is a product dedicated to delivering industry-leading logistics and routing solutions through precision engineering.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0407ae]">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-slate-200 mx-4"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0407ae]">2.5k</span>
                <span className="text-sm text-slate-500">Global Partners</span>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-[#0407ae]/5 border border-white/20">
              <img
                className="w-full h-full object-cover opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAamfYnPitgOGZck9slxEJ-q2yZLFmYpXWi3nHlnVApZO6D7lprVhItXnIYWMuBf3eWE5OWBIfuasyPJKqrEd2KSbjCaziXMiKjLMivYsriBafxtqtl_rLetiLURXnhMd0g96S6LF4NPXk9dCPNRWWGWNmQhu-TbofmbSmHuPdVNZJjD-PpgAdBl_NJr76im2dr5MuxLC6Ajj_Kf2EZfnmRvlyJKKglPqU_nsUQwY6ysZ7jS-zJ_l8WBD_z44UP3lh5PpvCNiFa5tmZ"
                alt="Logistics"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-lg shadow-xl border border-slate-100 max-w-xs">
              <p className="text-sm italic text-slate-600">
                "Leveraging decades of expertise to build the future of logistics and intelligent pacing."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation Banner */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#0407ae] flex items-center justify-center text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">A product for Distribution and Route sales.</h3>
              <p className="text-sm text-slate-500">Reliable. Scalable. Innovative Engineering.</p>
            </div>
          </div>
          {/* <a className="flex items-center gap-2 text-[#0407ae] font-bold hover:underline" href="#">
            Visit Polosys Corporate Site
            <ArrowRight size={20} />
          </a> */}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Our Purpose</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Driving innovation in pacing and delivery technology through expert engineering and a commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-10 rounded-xl bg-white border border-slate-200 hover:border-[#0407ae]/50 transition-all shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-xl bg-[#0407ae]/10 text-[#0407ae] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide efficient routing and logistics solutions that empower businesses to scale seamlessly. We strive to remove complexity from
                global supply chains using intelligent data and automation.
              </p>
            </div>
            <div className="group p-10 rounded-xl bg-white border border-slate-200 hover:border-[#0407ae]/50 transition-all shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-xl bg-[#0407ae]/10 text-[#0407ae] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To become the global leader in pacing technology, setting the standard for reliability and speed. We envision a world where every
                delivery is perfectly timed and every route is fully optimized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-black mb-4">Core Values</h2>
              <p className="text-slate-500 text-sm">The pillars that uphold our commitment to excellence.</p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <div className="text-[#0407ae]">
                  <Zap size={24} />
                </div>
                <h4 className="font-bold">Agility</h4>
                <p className="text-sm text-slate-500">Quickly adapting to the ever-changing logistics landscape.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[#0407ae]">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold">Trust</h4>
                <p className="text-sm text-slate-500">Building lasting partnerships through transparency.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[#0407ae]">
                  <Lightbulb size={24} />
                </div>
                <h4 className="font-bold">Innovation</h4>
                <p className="text-sm text-slate-500">Using AI and data to solve tomorrow's routing problems today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
