import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Smartphone, BarChart3, CloudIcon, ShieldCheck, Users, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = React.useState(true);

  return (
    <div className="w-full py-16 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Choose the plan that's right for your business and start optimizing your routes today. No hidden fees, no complex contracts.
        </p>
        
        {/* Billing Toggle */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <span className={!isYearly ? "text-sm font-bold text-slate-900" : "text-sm font-medium text-slate-600"}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-[#0407ae]/20 rounded-full p-1 transition-colors focus:outline-none"
          >
            <div className={`w-5 h-5 bg-[#0407ae] rounded-full shadow-sm transition-transform ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
          </button>
          <span className={isYearly ? "text-sm font-bold text-slate-900" : "text-sm font-medium text-slate-600"}>
            Yearly
            <span className="ml-2 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Save 20%</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
        {/* Startup Plan */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col shadow-sm">
          <div className="mb-8">
            <h3 className="text-[#0407ae] font-bold uppercase tracking-widest text-xs mb-2">Startup</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900">${isYearly ? '24' : '29'}</span>
              <span className="text-slate-500 font-medium">/mo</span>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Perfect for individual couriers and local startups getting off the ground.
            </p>
          </div>
          <button className="w-full py-3 px-4 rounded-lg bg-slate-100 text-slate-900 font-bold text-sm hover:bg-slate-200 transition-colors mb-8">
            Get Started Free
          </button>
          <div className="space-y-4 flex-grow">
            {['Basic route optimization', '100 stops per month', 'Mobile app access', 'Standard email support', 'Daily route history'].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#0407ae] mt-0.5" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growing Plan (Highlighted) */}
        <div className="bg-white rounded-xl border-2 border-[#0407ae] p-8 flex flex-col shadow-xl relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0407ae] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="text-[#0407ae] font-bold uppercase tracking-widest text-xs mb-2">Growing</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900">${isYearly ? '64' : '79'}</span>
              <span className="text-slate-500 font-medium">/mo</span>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Our most robust plan for scaling delivery teams and logistics businesses.
            </p>
          </div>
          <button className="w-full py-3 px-4 rounded-lg bg-[#0407ae] text-white font-bold text-sm hover:bg-opacity-90 transition-all shadow-lg shadow-[#0407ae]/20 mb-8">
            Start 14-Day Free Trial
          </button>
          <div className="space-y-4 flex-grow">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#0407ae] mt-0.5" />
              <span className="text-sm font-semibold text-slate-900">Everything in Startup, plus:</span>
            </div>
            {['Unlimited stops per month', 'Real-time driver tracking', 'Automated SMS notifications', 'Priority 24/7 support', 'Proof of delivery (Photo/Sign)'].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#0407ae] mt-0.5" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col shadow-sm">
          <div className="mb-8">
            <h3 className="text-[#0407ae] font-bold uppercase tracking-widest text-xs mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900">Custom</span>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Tailored solutions for large fleets, freight forwarders, and logistics enterprises.
            </p>
          </div>
          <button className="w-full py-3 px-4 rounded-lg bg-slate-900 text-white font-bold text-sm hover:bg-opacity-90 transition-colors mb-8">
            Contact Sales
          </button>
          <div className="space-y-4 flex-grow">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#0407ae] mt-0.5" />
              <span className="text-sm font-semibold text-slate-900">Everything in Growing, plus:</span>
            </div>
            {['Full API & Webhook access', 'Single Sign-On (SSO/SAML)', 'Dedicated Account Manager', 'Custom reporting & BI sync', 'White-labeled mobile app'].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#0407ae] mt-0.5" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-[#0407ae]/5 rounded-2xl p-10 md:p-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What’s Included in All Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
          {[
            { title: 'Mobile App Access', desc: 'Available on iOS and Android for all your drivers to view assigned routes in real-time.', icon: <Smartphone /> },
            { title: 'Basic Analytics', desc: 'Get insights into completion times, distance covered, and fuel usage efficiency.', icon: <BarChart3 /> },
            { title: 'Cloud Syncing', desc: 'Your data is synced instantly across all devices so dispatchers stay informed.', icon: <CloudIcon /> },
            { title: 'Data Security', desc: 'Enterprise-grade encryption and daily backups to keep your sensitive route data safe.', icon: <ShieldCheck /> },
            { title: 'Help Center Access', desc: 'Access to our comprehensive library of tutorials, guides, and video walkthroughs.', icon: <HelpCircle /> },
            { title: 'Multi-User Support', desc: 'Collaborate with your team. Add unlimited secondary users with read-only permissions.', icon: <Users /> },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="bg-[#0407ae]/10 p-2 rounded-lg text-[#0407ae]">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.' },
            { q: 'Is there a long-term commitment?', a: 'No, RoutePace is a month-to-month service. You can cancel at any time without any penalties or hidden fees.' },
            { q: 'What qualifies as a "stop"?', a: 'A stop is any unique location added to a route for optimization or delivery. Your start and end points do not count as stops.' },
          ].map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-4">
              <h5 className="font-semibold mb-2">{faq.q}</h5>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
