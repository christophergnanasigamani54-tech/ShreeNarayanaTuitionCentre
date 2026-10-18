import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import siteConfig from "../config/siteConfig";
import { buildWhatsAppLink, formatEnquiryMessage, getWhatsAppGroupLink } from "../config/whatsapp";

const initialForm = {
  studentName: "",
  parentName: "",
  studentClass: "",
  subject: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!form.parentName.trim()) newErrors.parentName = "Parent name is required";
    if (!form.studentClass.trim()) newErrors.studentClass = "Class is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatEnquiryMessage(form);
    const link = buildWhatsAppLink(message);
    window.open(link, "_blank", "noopener,noreferrer");

    setForm(initialForm);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Get In Touch"
            description="Have a question or want to enroll? Reach out to us directly or send an enquiry — we'll reply on WhatsApp right away."
          />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info + map */}
          <Reveal className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100 space-y-5">
              <InfoRow icon={MapPin} label="Address">
                {siteConfig.address.line1}, {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-brand-700">
                  {siteConfig.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-700">
                  {siteConfig.email}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} label="Opening Hours">
                <ul className="space-y-1">
                  {siteConfig.openingHours.map((slot) => (
                    <li key={slot.day} className="flex justify-between gap-4 text-sm">
                      <span>{slot.day}</span>
                      <span className="font-medium text-slate-700">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>

              <Button
                as="a"
                href={getWhatsAppGroupLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="w-full mt-2"
              >
                <MessageCircle size={18} /> Join Our WhatsApp Group
              </Button>
            </div>

            {/* Google Maps placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-soft border border-slate-100 h-64 sm:h-72">
              <iframe
                title={`${siteConfig.centreName} Location`}
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100"
            >
              <h3 className="text-xl font-semibold mb-1">Send an Enquiry</h3>
              <p className="text-sm text-slate-500 mb-6">
                Fill the form below and it will open WhatsApp with your details pre-filled.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Student Name"
                  name="studentName"
                  value={form.studentName}
                  onChange={handleChange}
                  error={errors.studentName}
                  placeholder="e.g. Aditya Sharma"
                />
                <Field
                  label="Parent Name"
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  error={errors.parentName}
                  placeholder="e.g. Rajesh Sharma"
                />
                <Field
                  label="Class"
                  name="studentClass"
                  value={form.studentClass}
                  onChange={handleChange}
                  error={errors.studentClass}
                  placeholder="e.g. Class 10"
                />
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder="e.g. Maths, Science"
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="e.g. 98765 43210"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us anything specific about your enquiry..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100 transition-all resize-none"
                  />
                </div>
              </div>

              <Button type="submit" variant="whatsapp" className="w-full sm:w-auto mt-6">
                <Send size={17} /> Send via WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon size={18} />
      </span>
      <div className="text-sm text-slate-600">
        <p className="font-semibold text-slate-800 mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = "text", className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border-slate-200 focus:border-brand-400 focus:ring-brand-100"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
