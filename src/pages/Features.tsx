import { motion } from 'motion/react';
import { 
  Route, 
  Smartphone, 
  Package, 
  Wallet, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  Zap,
  Printer,
  WifiOff,
  Database,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function Features() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0407ae]/20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Powerful Features for <br/>
              <span className="text-[#0407ae]">Modern Distribution</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Everything you need to manage routes, inventory, and sales in one unified platform. Built for speed, reliability, and scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0407ae] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-[#0407ae]/20">
                Get a Free Demo
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Beat & Route Management */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0407ae]/10 flex items-center justify-center text-[#0407ae]">
              <Route size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Beat & Route Management</h3>
            <p className="text-slate-600 leading-relaxed">
              Define and manage sales beats with precision. Assign specific customers to routes and optimize delivery sequences for maximum efficiency.
            </p>
            <ul className="space-y-3">
              {['Dynamic route planning', 'Customer geo-tagging', 'Visit frequency settings'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-[#0407ae]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Billing App */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0407ae]/10 flex items-center justify-center text-[#0407ae]">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Mobile Billing App</h3>
            <p className="text-slate-600 leading-relaxed">
              Empower your field staff with a robust mobile application that works even without an active internet connection.
            </p>
            <ul className="space-y-3">
              {['Instant invoice generation', 'Bluetooth thermal printing', 'Offline data synchronization'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-[#0407ae]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Inventory & Stock Control */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0407ae]/10 flex items-center justify-center text-[#0407ae]">
              <Package size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Inventory & Stock Control</h3>
            <p className="text-slate-600 leading-relaxed">
              Track stock levels across multiple warehouses and vehicles. Automated alerts for low stock and expiry dates.
            </p>
            <ul className="space-y-3">
              {['Van stock management', 'Batch & Expiry tracking', 'Stock transfer workflows'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-[#0407ae]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Collection Management */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0407ae]/10 flex items-center justify-center text-[#0407ae]">
              <Wallet size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Collection Management</h3>
            <p className="text-slate-600 leading-relaxed">
              Streamline payment collections with support for cash, cheques, and digital payments. Automated receipt generation.
            </p>
            <ul className="space-y-3">
              {['Outstanding tracking', 'Cheque aging reports', 'Payment reconciliation'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-[#0407ae]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sales & Business Reports */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0407ae]/10 flex items-center justify-center text-[#0407ae]">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Sales & Business Reports</h3>
            <p className="text-slate-600 leading-relaxed">
              Gain deep insights with comprehensive reporting. Monitor sales targets, collection efficiency, and outlet performance.
            </p>
            <ul className="space-y-3">
              {['Daily sales summary', 'Target vs Achievement', 'Profitability analysis'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-[#0407ae]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0407ae]/10 flex items-center justify-center text-[#0407ae]">
              <Layers size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Integrations</h3>
            <p className="text-slate-600 leading-relaxed">
              Connect RoutePace with your existing ERP, accounting software, or CRM for a seamless flow of data across your organization.
            </p>
            <ul className="space-y-3">
              {['RESTful API access', 'Tally/SAP integration', 'Custom data exports'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-[#0407ae]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                Designed for the <span className="text-[#0407ae]">Frontline</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand that your field staff needs tools that are fast and reliable. RoutePace is optimized for low-bandwidth environments and high-speed operations.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0407ae] shrink-0">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Ultra-Fast Performance</h4>
                    <p className="text-sm text-slate-500">Native mobile experience with minimal loading times.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0407ae] shrink-0">
                    <WifiOff size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Offline-First Architecture</h4>
                    <p className="text-sm text-slate-500">Never lose a sale due to poor connectivity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0407ae] shrink-0">
                    <Printer size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Wireless Printing</h4>
                    <p className="text-sm text-slate-500">Support for all major Bluetooth thermal printers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#0407ae]/10 rounded-full blur-3xl transform scale-125"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpqHiq3RknwfEsugLRdmJJs4MElzcmV-z34sdXE-7zAB8dtjdJgIyKLo7ApQ-xlbQ8HJe66VavlaOsGV47gE2D4Az2q73vEYPCsWxUBOKJYVHGPNSfuuU39kFx4ksVIStMCeT-itDGAeZhHTC7DlLvVCm4RvOLNa1eeJ4isT7qfQtrK6XmRFIBpNs2BJOBbBdhY4UnDShkeEa-2ifZdR6TlnTTaoGAMwoHr8jsO4IcxRIj3iT-dzNdWh2TfdvSh49PLLhc4lURrCh3" 
                alt="Mobile App" 
                className="relative z-10 rounded-3xl shadow-2xl border border-white/20 max-w-md mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Technical Specifications</h2>
          <p className="text-slate-500">Built on a modern, secure, and scalable stack.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm">
            <Database className="text-[#0407ae] mb-4" size={24} />
            <h4 className="font-bold mb-2">Cloud Hosting</h4>
            <p className="text-xs text-slate-500">AWS/Azure infrastructure with 99.9% uptime guarantee.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm">
            <ShieldCheck className="text-[#0407ae] mb-4" size={24} />
            <h4 className="font-bold mb-2">Data Security</h4>
            <p className="text-xs text-slate-500">AES-256 encryption for data at rest and in transit.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm">
            <Smartphone className="text-[#0407ae] mb-4" size={24} />
            <h4 className="font-bold mb-2">Cross-Platform</h4>
            <p className="text-xs text-slate-500">Native performance on both Android and iOS devices.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm">
            <Zap className="text-[#0407ae] mb-4" size={24} />
            <h4 className="font-bold mb-2">Real-time Sync</h4>
            <p className="text-xs text-slate-500">WebSocket-based instant synchronization of data.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0407ae] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-6">Experience the Power of RoutePace</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of businesses that have transformed their distribution with our platform.
          </p>
          <button className="bg-white text-[#0407ae] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2 mx-auto">
            Book a Demo Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
