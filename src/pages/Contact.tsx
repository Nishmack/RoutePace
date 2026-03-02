import { motion } from 'motion/react';
import { Headset, Phone, Mail, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Get in touch with the <span className="text-[#0407ae]">RoutePace</span> team
            </h1>
            <p className="text-lg text-slate-600">
              Fill out the form below and our team will get back to you within 24 hours. We're excited to help you optimize your fleet.
            </p>
          </div>
          
          <form className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Company Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all" 
                  placeholder="RoutePace Inc." 
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Business Email</label>
                <input 
                  type="email" 
                  className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all" 
                  placeholder="john@company.com" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all" 
                  placeholder="+1 (555) 000-0000" 
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Country</label>
                <select className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Business Type</label>
                <select className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all">
                  <option>Last Mile Delivery</option>
                  <option>Freight/Trucking</option>
                  <option>Field Services</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex justify-between">
                Number of Salesmen/Drivers
                <span className="text-[#0407ae] font-bold">1-10</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="100" 
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0407ae]" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea 
                className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all" 
                placeholder="How can we help your business grow?" 
                rows={4}
              ></textarea>
            </div>
            
            <button className="w-full bg-[#0407ae] text-white font-bold py-4 rounded-lg hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-[#0407ae]/25">
              Send Message
            </button>
            <p className="text-xs text-center text-slate-500">
              By clicking send, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
            </p>
          </form>
          
          <div className="pt-8 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center lg:text-left">Trusted by global leaders</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-50 grayscale">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-24 bg-slate-300 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Info Panel */}
        <div className="lg:col-span-5 space-y-6 sticky top-24">
          {/* Sales Card */}
          <div className="bg-[#0407ae] p-8 rounded-xl text-white shadow-2xl shadow-[#0407ae]/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-lg">
                <Headset size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Talk to Sales</h3>
                <p className="text-blue-100 text-sm">Have specific questions about our enterprise plans?</p>
              </div>
            </div>
            <div className="space-y-4">
              <a href="tel:+15557688372" className="flex items-center gap-3 text-2xl font-bold hover:text-blue-200 transition-colors">
                <Phone size={24} />
                +1 (555) ROUTE-PC
              </a>
              <button className="w-full bg-white text-[#0407ae] font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Book a Live Demo
              </button>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[#0407ae]">
                <MessageSquare size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Need Support?</h3>
                <p className="text-slate-500 text-sm">We're here to help you 24/7 with technical issues.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-[#0407ae]/10 transition-colors border border-transparent hover:border-[#0407ae]/20">
                <Mail size={20} className="text-[#0407ae] mb-2" />
                <span className="text-xs font-bold">Email Us</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-[#0407ae]/10 transition-colors border border-transparent hover:border-[#0407ae]/20">
                <MessageSquare size={20} className="text-[#0407ae] mb-2" />
                <span className="text-xs font-bold">Live Chat</span>
              </a>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white border border-slate-200 p-2 rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-48 w-full rounded-lg bg-slate-200 mb-4 overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ZBrWxBqTbNAG9OUqXL-kza_yCrY3agzntnO0CRFxKex2lK927xMjawv-ohLgW4LPVppVnRhxvnjL51UvTgrgzbg_nDfbKXLBJiq52ThPLWPkjiQw2U9L1U0qqCu0jPUFvEalSI4wJQBQpE-yFKQJX-pGVMpUEGcPeEROY0bxKzUhfG_eHNiRhKgtivuMFnHY2x1oz1SnLzEveif2mCW8arDd8lMW4C6k2tCNWwyazvybLmV9ySDsXN5zhyE4syelM-DOGnfo2iD1" 
                alt="Map" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#0407ae] text-white p-2 rounded-full shadow-lg border-4 border-white">
                  <MapPin size={24} />
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <h3 className="font-bold text-slate-900 mb-1">Headquarters</h3>
              <p className="text-sm text-slate-500 flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                123 Logistics Way, Tech City, CA 94043
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
