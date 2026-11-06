import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Compass, ShieldCheck, Navigation } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { schoolInfo } from '../data/schoolData';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const gradesList = [
    "Pre-KG",
    "LKG",
    "UKG",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10"
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent/Guardian name is required.";
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required.";
    }

    if (!formData.grade) {
      newErrors.grade = "Please select the grade interested in.";
    }

    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or enquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      parentName: '',
      studentName: '',
      grade: '',
      phone: '',
      email: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Connect with Mount Valley Public School campus administration, admissions office, and general inquiries desk."
      />

      <PageHeader
        title="Contact Mount Valley"
        subtitle="We welcome parents, guardians, and prospective visitors to connect with our administrative and admissions team."
        breadcrumb={[{ name: "Contact Us" }]}
      />

      {/* Contact Cards Overview */}
      <section className="py-12 bg-white border-b border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-brand-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1">
                Campus Location
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {schoolInfo.contact.address}
              </p>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-brand-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1">
                Phone Enquiries
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                <a href={`tel:${schoolInfo.contact.phone.split('/')[0].trim()}`} className="hover:text-brand-600">
                  {schoolInfo.contact.phone}
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-brand-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1">
                Email Desk
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                <a href={`mailto:${schoolInfo.contact.email}`} className="hover:text-brand-600">
                  {schoolInfo.contact.email}
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-brand-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1">
                Office Hours
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {schoolInfo.contact.officeHours}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Map Placeholder Section */}
      <section className="section-padding bg-slate-50 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-soft-lg">
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="badge-teal mb-3">Direct Communication</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Send Us an Enquiry
                  </h2>
                  <p className="text-sm text-slate-500">
                    Submit your query below. Our administrative desk will attend to your questions.
                  </p>

                  {/* Static Demo Notice */}
                  <div className="mt-4 p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Static Demo Notice:</span> This contact form operates in static frontend demonstration mode. Messages are validated on the client side until institutional backend email integrations are configured.
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {submittedData ? (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-8 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Demo Message Validated!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-slate-900">{submittedData.parentName}</span>. Your contact query regarding <span className="font-semibold text-slate-900">{submittedData.studentName}</span> ({submittedData.grade}) has been validated successfully in frontend demo mode.
                      </p>

                      <div className="p-4 bg-slate-50 rounded-xl max-w-sm mx-auto text-left text-xs text-slate-600 space-y-1.5 border border-slate-200">
                        <div><span className="font-semibold">Phone:</span> {submittedData.phone}</div>
                        <div><span className="font-semibold">Email:</span> {submittedData.email}</div>
                        <div><span className="font-semibold">Message:</span> {submittedData.message}</div>
                      </div>

                      <div className="pt-4">
                        <Button onClick={handleReset} variant="outline" size="sm">
                          Send Another Message
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Parent Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Parent / Guardian Name *
                          </label>
                          <input
                            type="text"
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            placeholder="e.g. Ramesh Chandra"
                            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                              errors.parentName ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                            }`}
                          />
                          {errors.parentName && (
                            <span className="text-xs text-red-600 mt-1 block">{errors.parentName}</span>
                          )}
                        </div>

                        {/* Student Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Student Name *
                          </label>
                          <input
                            type="text"
                            value={formData.studentName}
                            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                            placeholder="e.g. Ananya Chandra"
                            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                              errors.studentName ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                            }`}
                          />
                          {errors.studentName && (
                            <span className="text-xs text-red-600 mt-1 block">{errors.studentName}</span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Grade */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Class Interested In *
                          </label>
                          <select
                            value={formData.grade}
                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white ${
                              errors.grade ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                            }`}
                          >
                            <option value="">-- Select Grade --</option>
                            {gradesList.map((g) => (
                              <option key={g} value={g}>{g}</option>
                            ))}
                          </select>
                          {errors.grade && (
                            <span className="text-xs text-red-600 mt-1 block">{errors.grade}</span>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Contact Phone *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 9876543210"
                            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                              errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                            }`}
                          />
                          {errors.phone && (
                            <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. parent@example.com"
                          className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                            errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Enquiry Message *
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write your query regarding admissions, transportation, curriculum, or visiting timings..."
                          className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white ${
                            errors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                          }`}
                        />
                        {errors.message && (
                          <span className="text-xs text-red-600 mt-1 block">{errors.message}</span>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center"
                        showArrow={true}
                      >
                        Submit Enquiry
                      </Button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Map Placeholder Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-soft-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-600" />
                  Campus Location Map
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Mount Valley Public School campus is conveniently accessible via main road transportation links.
                </p>

                {/* Interactive Google Maps Embed */}
                <div className="w-full h-[260px] rounded-[12px] overflow-hidden border border-slate-200/90 shadow-sm relative bg-slate-100">
                  <iframe
                    title="Mount Valley Public School Location Map"
                    src="https://maps.google.com/maps?q=Mount+Valley+Public+School,+1/260A,+Arasamarathottam,+Arumuthampalayam,+Palladam,+Tamil+Nadu+641664&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Get Directions Link */}
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Palladam, Tamil Nadu</span>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Mount+Valley+Public+School,+1/260A,+Arasamarathottam,+Arumuthampalayam,+Palladam,+Tamil+Nadu+641664"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                    Visitor Campus Entry Guidelines:
                  </div>
                  <p>All visitors and prospective parents are requested to register at the main security gate upon arrival during office hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
