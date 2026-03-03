import { Link } from "react-router-dom";
import { Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-red-500">Route</span>
                <span className="text-[#0407ae]">Pace</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-6">A product from Industry leaders in distribution and routing innovation. </p>
            <div className="flex gap-3">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <Share2 size={18} />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link to="/features" className="hover:text-[#0407ae] transition-colors">
                  Fleet Management
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#0407ae] transition-colors">
                  Route Optimization
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#0407ae] transition-colors">
                  Real-time Tracking
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#0407ae] transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link to="/about" className="hover:text-[#0407ae] transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <a href="#" className="hover:text-[#0407ae] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0407ae] transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#0407ae] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0407ae] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0407ae] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 RoutePace. All rights reserved</p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-400">United States</span>
            <span className="text-xs text-slate-400">English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
