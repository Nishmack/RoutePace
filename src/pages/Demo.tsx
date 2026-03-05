import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, MapPin, Headset, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { demoAPI } from "../services/api"; // ← adjust path as needed

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  country: string;
  businessType: string;
  numberOfDrivers: number;
  specialRequirements: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  country?: string;
  businessType?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Belgium",
  "Bolivia",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Denmark",
  "Ecuador",
  "Egypt",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
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
  "Kuwait",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Mexico",
  "Morocco",
  "Myanmar (formerly Burma)",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Singapore",
  "Slovakia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tanzania",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
] as const;

const BUSINESS_TYPES = [
  "Last Mile Delivery",
  "Third-Party Logistics",
  "FMCG Distribution",
  "Beverage Distribution",
  "Pharma Distribution",
  "Grocery Distribution",
  "Dairy Distribution",
  "Freight Forwarding",
  "Courier Service",
  "Other",
];

const DRIVER_LABELS: Record<number, string> = {
  1: "1–10",
  2: "11–25",
  3: "26–50",
  4: "51–100",
  5: "101–250",
  6: "251–500",
  7: "500+",
};

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required";
  if (!form.companyName.trim()) errors.companyName = "Company name is required";
  if (!form.businessEmail.trim()) {
    errors.businessEmail = "Business email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(form.businessEmail)) {
    errors.businessEmail = "Please enter a valid email";
  }
  if (!form.phoneNumber.trim()) errors.phoneNumber = "Phone number is required";
  if (!form.country) errors.country = "Please select a country";
  if (!form.businessType.trim()) errors.businessType = "Business type is required";
  return errors;
}

// ─── Success Screen ───────────────────────────────────────────────────────────
function SuccessScreen({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        className="size-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6"
      >
        <CheckCircle2 className="size-10 text-emerald-500" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-black text-slate-900 mb-2"
      >
        Demo Booked!
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-slate-500 mb-1">
        Thanks, <span className="font-semibold text-slate-700">{name}</span>!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-slate-500 text-sm max-w-xs"
      >
        Our team will reach out to you within <strong>24 hours</strong> to schedule your personalized demo.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link to="/" className="px-6 py-3 rounded-xl bg-[#0407AE] text-white font-semibold text-sm hover:bg-[#0407AE]/90 transition-colors">
          Back to Home
        </Link>
        <Link
          to="/pricing"
          className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
        >
          View Pricing
        </Link>
      </motion.div>
    </motion.div>
  );
}

// ─── Field Component ──────────────────────────────────────────────────────────
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1 text-xs text-red-500 font-medium"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass = (error?: string) =>
  `w-full rounded-lg border shadow-sm px-4 py-3 outline-none transition-all placeholder:text-gray-400 text-slate-800 text-sm
  ${
    error ? "border-red-400 focus:ring-2 focus:ring-red-300 bg-red-50/30" : "border-gray-300 focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae]"
  }`;

// ─── Main Demo Page ───────────────────────────────────────────────────────────
export default function Demo() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    country: "",
    businessType: "",
    numberOfDrivers: 1,
    specialRequirements: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // ─── Handlers ──────────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setApiError(null);
  };

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, numberOfDrivers: Number(e.target.value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setLoading(true);
    setApiError(null);

    try {
      // Map slider value to string range for API
      const payload = {
        fullName: form.fullName.trim(),
        companyName: form.companyName.trim(),
        businessEmail: form.businessEmail.trim().toLowerCase(),
        phoneNumber: form.phoneNumber.trim(),
        country: form.country,
        businessType: form.businessType,
        numberOfDrivers: DRIVER_LABELS[form.numberOfDrivers] || "1–10",
        specialRequirements: form.specialRequirements.trim(),
        source: "homepage", // identifies which page the form came from
      };

      // ✅ API call to POST /api/demos
      await demoAPI.book(payload);
      setSubmitted(true);
    } catch (err: any) {
      setApiError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f5f5f8] font-sans text-slate-900">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Value Props ─────────────────────────────────────────── */}
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
                <div className="h-8 w-24 bg-slate-400 rounded-md" />
                <div className="h-8 w-24 bg-slate-400 rounded-md" />
                <div className="h-8 w-24 bg-slate-400 rounded-md" />
              </div>
            </div>
          </div>

          {/* ── Right: Form Card ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl shadow-[#0407AE]/5 border border-slate-100 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessScreen key="success" name={form.fullName} />
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8 lg:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">Book Your Free Demo</h2>
                    <p className="text-slate-500 text-sm mt-1">Fill in the details below and our team will get back to you.</p>
                  </div>

                  {/* Global API Error */}
                  <AnimatePresence>
                    {apiError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mb-5 flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                      >
                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                        <p>{apiError}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Full Name" error={errors.fullName}>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={inputClass(errors.fullName)}
                          data-error={!!errors.fullName}
                          autoComplete="name"
                        />
                      </Field>
                      <Field label="Company Name" error={errors.companyName}>
                        <input
                          type="text"
                          name="companyName"
                          value={form.companyName}
                          onChange={handleChange}
                          placeholder="Enter your company name"
                          className={inputClass(errors.companyName)}
                          data-error={!!errors.companyName}
                          autoComplete="organization"
                        />
                      </Field>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Business Email" error={errors.businessEmail}>
                        <input
                          type="email"
                          name="businessEmail"
                          value={form.businessEmail}
                          onChange={handleChange}
                          placeholder="Enter your business email"
                          className={inputClass(errors.businessEmail)}
                          data-error={!!errors.businessEmail}
                          autoComplete="email"
                        />
                      </Field>
                      <Field label="Phone Number" error={errors.phoneNumber}>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={form.phoneNumber}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className={inputClass(errors.phoneNumber)}
                          data-error={!!errors.phoneNumber}
                          autoComplete="tel"
                        />
                      </Field>
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Country" error={errors.country}>
                        <select
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          className={inputClass(errors.country) + " cursor-pointer bg-white"}
                          data-error={!!errors.country}
                        >
                          <option value="">Select a country</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Business Type</label>
                        <input
                          type="text"
                          name="businessType"
                          value={form.businessType}
                          onChange={handleChange}
                          placeholder="Enter your business type"
                          className={inputClass(errors.businessType)}
                          data-error={!!errors.businessType}
                        />
                      </div>
                    </div>

                    {/* Slider */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 flex justify-between items-center">
                        <span>Number of Salesmen/Drivers</span>
                        <span className="text-[#0407ae] font-bold bg-[#0407AE]/10 px-2.5 py-0.5 rounded-full text-xs">
                          {DRIVER_LABELS[form.numberOfDrivers]}
                        </span>
                      </label>
                      <input
                        type="range"
                        name="numberOfDrivers"
                        min={1}
                        max={7}
                        step={1}
                        value={form.numberOfDrivers}
                        onChange={handleSlider}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0407ae]"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-medium px-0.5">
                        {Object.values(DRIVER_LABELS).map((label) => (
                          <span key={label}>{label.split("–")[0]}</span>
                        ))}
                      </div>
                    </div>

                    {/* Special Requirements */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">
                        Special Requirements <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="specialRequirements"
                        value={form.specialRequirements}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your specific needs..."
                        className={inputClass() + " resize-none"}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-[#0407AE] text-white rounded-xl font-bold text-lg shadow-xl
                          shadow-[#0407AE]/30 hover:shadow-[#0407AE]/40 hover:-translate-y-0.5 transition-all
                          active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed
                          disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="size-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Book My Demo"
                        )}
                      </button>
                      <p className="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                        By clicking "Book My Demo", you agree to our{" "}
                        <Link to="/terms" className="underline hover:text-slate-600">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="underline hover:text-slate-600">
                          Privacy Policy
                        </Link>
                        . We'll handle your data with care.
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
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
        <Link to="/profile" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">person</span>
          <p className="text-[10px] font-medium leading-normal tracking-wide">Profile</p>
        </Link>
      </div>
    </div>
  );
}
