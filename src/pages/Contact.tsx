import { motion } from "motion/react";
import { useState } from "react";
import { Headset, Phone, Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
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

  const handleDemoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsDemoOpen(false);
    alert("Your live demo request has been submitted!");
  };

  const handleContactSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const emailRaw = formData.get("businessEmail");
    const messageRaw = formData.get("message");

    const email = (emailRaw || "").toString().trim();
    const message = (messageRaw || "").toString().trim();

    if (!email) {
      alert("Please enter a business email to send the message to.");
      return;
    }

    const subject = encodeURIComponent("New message from RoutePace contact form");
    const body = encodeURIComponent(message || "No message provided.");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

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

          {/* <form className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6" onSubmit={handleContactSubmit}> */}
          {/* <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Company Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Business Email</label>
                <input
                  type="email"
                  name="businessEmail"
                  className="w-full rounded-lg border border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all"
                  placeholder="Enter your business email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Country</label>
                <select className="w-full rounded-lg border border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-2 outline-none transition-all">
                  <option value="">Select a country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Business Type</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all"
                  placeholder="Enter your business type"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex justify-between">
                Number of Salesmen/Drivers
                <span className="text-[#0407ae] font-bold">1-10</span>
              </label>
              <input type="range" min="1" max="100" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0407ae]" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea
                name="message"
                className="w-full rounded-lg border border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>

            <button className="w-full bg-[#0407ae] text-white font-bold py-4 rounded-lg hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-[#0407ae]/25">
              Send Message
            </button>
            <p className="text-xs text-center text-slate-500">
              By clicking send, you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>
              .
            </p>
          </form> */}
          <form className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg space-y-6" onSubmit={handleContactSubmit}>
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
              <input type="range" min="1" max="100" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0407ae]" />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae] px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button className="w-full bg-[#0407ae] text-white font-bold py-4 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#0407ae]/30">
              Send Message
            </button>
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
          {/* <div className="bg-[#0407ae] p-8 rounded-xl text-white shadow-2xl shadow-[#0407ae]/30">
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
              <button
                className="w-full bg-white text-[#0407ae] font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors"
                type="button"
                onClick={() => setIsDemoOpen(true)}
              >
                Book a Live Demo
              </button>
            </div>
          </div> */}

          {/* Support Card */}
          {/* <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
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
          </div> */}

          {/* Map Card */}
          {/* <div className="bg-white border border-slate-200 p-2 rounded-xl shadow-sm overflow-hidden">
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
          </div> */}
        </div>
      </div>

      {isDemoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="absolute inset-0" onClick={() => setIsDemoOpen(false)} />
          <div className="relative z-10 w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Book a Live Demo</h2>
                <p className="text-sm text-slate-500 mt-1">Share a few details and our team will schedule a personalized walkthrough of RoutePace.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsDemoOpen(false)}
                className="ml-4 text-slate-400 hover:text-slate-600 text-xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleDemoSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-3 py-2 outline-none text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Work Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-3 py-2 outline-none text-sm"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-3 py-2 outline-none text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Team Size</label>
                  <select
                    required
                    className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-3 py-2 outline-none text-sm"
                  >
                    <option value="">Select</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">What would you like to see?</label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border-slate-200 focus:ring-[#0407ae] focus:border-[#0407ae] px-3 py-2 outline-none text-sm"
                  placeholder="Share any specific workflows or challenges you want us to focus on."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0407ae] text-white font-bold py-3 rounded-lg hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-[#0407ae]/30 text-sm"
              >
                Confirm Demo Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
