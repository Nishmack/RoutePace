import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { contactAPI } from "../services/api"; // ← adjust path as needed

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  country: string;
  businessType: string;
  numberOfSalesmenDrivers: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  country?: string;
  businessType?: string;
  message?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
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
  "Côte d'Ivoire",
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
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

// ─── Field Component ──────────────────────────────────────────────────────────
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
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
  `w-full rounded-lg border shadow-sm px-4 py-3 outline-none transition-all placeholder:text-gray-400
  ${
    error ? "border-red-400 focus:ring-2 focus:ring-red-300 bg-red-50/30" : "border-gray-300 focus:ring-2 focus:ring-[#0407ae] focus:border-[#0407ae]"
  }`;

// ─── Main Contact Page ────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    country: "",
    businessType: "",
    numberOfSalesmenDrivers: "1",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(1);

  // ─── Handlers ──────────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setApiError(null);
  };

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSliderValue(val);
    setForm((prev) => ({ ...prev, numberOfSalesmenDrivers: DRIVER_LABELS[val] || "1–10" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      document.querySelector("[data-error='true']")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setLoading(true);
    setApiError(null);

    try {
      // ✅ API call to POST /api/contact
      await contactAPI.submit({
        fullName: form.fullName.trim(),
        companyName: form.companyName.trim(),
        businessEmail: form.businessEmail.trim().toLowerCase(),
        phoneNumber: form.phoneNumber.trim(),
        country: form.country,
        businessType: form.businessType.trim(),
        numberOfSalesmenDrivers: form.numberOfSalesmenDrivers,
        message: form.message.trim(),
      });

      setSubmitted(true);
    } catch (err: any) {
      setApiError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Success State ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto flex flex-col items-center text-center py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="size-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6"
          >
            <CheckCircle2 className="size-10 text-emerald-500" />
          </motion.div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h2>
          <p className="text-slate-500 mb-1">
            Thanks, <span className="font-semibold text-slate-700">{form.fullName}</span>!
          </p>
          <p className="text-slate-500 text-sm max-w-xs">
            Our team will get back to you within <strong>24 hours</strong>.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                fullName: "",
                companyName: "",
                businessEmail: "",
                phoneNumber: "",
                country: "",
                businessType: "",
                numberOfSalesmenDrivers: "1",
                message: "",
              });
            }}
            className="mt-8 px-6 py-3 rounded-xl bg-[#0407AE] text-white font-semibold text-sm hover:bg-[#0407AE]/90 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </main>
    );
  }

  // ─── Render Form ────────────────────────────────────────────────────────────
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

          <form className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Global API Error */}
            <AnimatePresence>
              {apiError && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <p>{apiError}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Row 1: Full Name + Company Name */}
            <div className="grid md:grid-cols-2 gap-6">
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

            {/* Row 2: Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
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

            {/* Row 3: Country + Business Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Country" error={errors.country}>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass(errors.country) + " cursor-pointer bg-white"}
                  data-error={!!errors.country}
                >
                  <option value="">Select a country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Business Type" error={errors.businessType}>
                <input
                  type="text"
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  placeholder="Enter your business type"
                  className={inputClass(errors.businessType)}
                  data-error={!!errors.businessType}
                />
              </Field>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex justify-between items-center">
                <span>Number of Salesmen/Drivers</span>
                <span className="text-[#0407ae] font-bold bg-[#0407AE]/10 px-2.5 py-0.5 rounded-full text-xs">{DRIVER_LABELS[sliderValue]}</span>
              </label>
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={sliderValue}
                onChange={handleSlider}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0407ae]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium px-0.5">
                {Object.values(DRIVER_LABELS).map((label) => (
                  <span key={label}>{label.split("–")[0]}</span>
                ))}
              </div>
            </div>

            {/* Message */}
            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                className={inputClass(errors.message) + " resize-none"}
                data-error={!!errors.message}
              />
            </Field>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0407ae] text-white font-bold py-4 rounded-lg hover:brightness-110
                active:scale-95 transition-all shadow-lg shadow-[#0407ae]/30
                disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100
                flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <p className="text-xs text-center text-slate-500">
              By clicking send, you agree to our{" "}
              <a href="/privacy" className="underline hover:text-slate-700">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="underline hover:text-slate-700">
                Terms of Service
              </a>
              .
            </p>
          </form>

          <div className="pt-8 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center lg:text-left">Trusted by global leaders</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-50 grayscale">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-24 bg-slate-300 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — kept empty matching your original commented-out state */}
        <div className="lg:col-span-5" />
      </div>
    </main>
  );
}
