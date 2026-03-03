import React, { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, MapPin, Headset, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Demo() {
  const [drivers, setDrivers] = useState(50);
  const COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Côte d’Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    'Eswatini (fmr. "Swaziland")',
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ] as const;

  return (
    <div className="min-h-screen bg-[#f5f5f8] font-sans text-slate-900">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content & Value Props */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-[#0407AE]/10 text-[#0407AE] text-xs font-bold uppercase tracking-wider"
              >
                Logistics Intelligence
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900"
              >
                Transform Your <span className="text-[#0407AE]">Logistics</span> Operations Today
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                Experience the power of RoutePace. Join thousands of businesses optimizing their supply chain with our intelligent routing platform
                and automated workflows.
              </motion.p>
            </div>

            {/* Value Propositions */}
            <div className="grid gap-6 mt-4">
              {[
                {
                  title: "Faster Billing",
                  desc: "Automate your invoicing process and reduce payment cycles by up to 40%.",
                  icon: <CreditCard className="size-6" />,
                },
                {
                  title: "Real-Time Tracking",
                  desc: "Monitor every shipment in real-time with high-precision GPS and predictive ETAs.",
                  icon: <MapPin className="size-6" />,
                },
                {
                  title: "Expert Support",
                  desc: "Dedicated 24/7 technical support from logistics experts who understand your business.",
                  icon: <Headset className="size-6" />,
                },
              ].map((prop, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors group cursor-default"
                >
                  <div className="size-12 rounded-lg bg-[#0407AE]/10 flex items-center justify-center text-[#0407AE] group-hover:bg-[#0407AE] group-hover:text-white transition-all shrink-0">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{prop.title}</h3>
                    <p className="text-slate-600">{prop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-widest">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 opacity-50 grayscale">
                <div className="h-8 w-24 bg-slate-400 rounded-md"></div>
                <div className="h-8 w-24 bg-slate-400 rounded-md"></div>
                <div className="h-8 w-24 bg-slate-400 rounded-md"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Registration Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl shadow-[#0407AE]/5 p-8 lg:p-10 border border-slate-100"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Book Your Free Demo</h2>
              <p className="text-slate-500 text-sm mt-1">Fill in the details below and our team will get back to you.</p>
            </div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                {/* Company Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Company Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Business Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your business email"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Country Select */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Country</label>
                  <select className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all bg-white cursor-pointer text-slate-700">
                    <option value="" className="text-gray-400">
                      Select a country
                    </option>
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Business Type */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Business Type</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your business type"
                  />
                </div>
              </div>
              {/* Range Slider */}
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
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">Special Requirements</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  className="w-full py-4 bg-[#0407AE] text-white rounded-xl font-bold text-lg shadow-xl shadow-[#0407AE]/30 hover:shadow-[#0407AE]/40 hover:-translate-y-0.5 transition-all active:translate-y-0"
                  type="submit"
                >
                  Book My Demo
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                  By clicking "Book My Demo", you agree to our{" "}
                  <Link to="#" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="underline">
                    Privacy Policy
                  </Link>
                  . We'll handle your data with care.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      {/* Mobile Bottom Nav (Visible only on small screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-slate-200 bg-white/95 backdrop-blur-sm px-4 pb-4 pt-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">house</span>
          <p className="text-[10px] font-medium leading-normal tracking-wide">Home</p>
        </Link>
        <Link to="/features" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">list_alt</span>
          <p className="text-[10px] font-medium leading-normal tracking-wide">Features</p>
        </Link>
        <Link to="/demo" className="flex flex-1 flex-col items-center justify-center gap-1 text-[#0407AE]">
          <div className="size-10 mb-0.5 rounded-full bg-[#0407AE] flex items-center justify-center text-white shadow-md shadow-[#0407AE]/20">
            <CheckCircle2 size={20} />
          </div>
          <p className="text-[10px] font-bold leading-normal tracking-wide">Demo</p>
        </Link>
        <Link to="#" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">person</span>
          <p className="text-[10px] font-medium leading-normal tracking-wide">Profile</p>
        </Link>
      </div>
    </div>
  );
}
