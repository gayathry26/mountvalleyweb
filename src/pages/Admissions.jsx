import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, Calendar, FileText, Phone, Mail, AlertCircle, Send, Sparkles } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { schoolInfo } from '../data/schoolData';

export default function Admissions() {
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

  const steps = [
    {
      step: "01",
      title: "Online or Campus Enquiry",
      desc: "Submit the online enquiry form below or visit the Mount Valley campus office to learn about admission openings and criteria."
    },
    {
      step: "02",
      title: "Campus Interaction & Tour",
      desc: "Parents and students are invited for a personalized campus walk-through to view our classrooms and laboratory facilities."
    },
    {
      step: "03",
      title: "Application & Documentation",
      desc: "Complete the formal application registration with necessary documents (birth certificate, previous academic records, photographs)."
    },
    {
      step: "04",
      title: "Enrollment & Welcome",
      desc: "Upon verification, finalize admission formalities and receive uniform, timetable, and academic session commencement details."
    }
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
      newErrors.phone = "Contact phone number is required.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
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
        title="Admissions 2026-27"
        description="Enrol your child at Mount Valley Public School. Step-by-step admission process, fee guidance, and static enquiry form."
      />

      <PageHeader
        title="Admissions 2026-27"
        subtitle="Begin your child's journey at Mount Valley Public School with our transparent, student-centered admission procedure."
        breadcrumb={[{ name: "Admissions" }]}
      />

      {/* Section 1: Admission Introduction */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-teal mb-3">Welcoming Future Leaders</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Admissions Open for the Upcoming Academic Year
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Mount Valley Public School welcomes students who are eager to learn, explore, and thrive in an intellectually stimulating and value-guided environment. We maintain a fair, transparent, and parent-friendly admission procedure.
            </p>
          </div>

          {/* Admission Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full bg-slate-50 hover:bg-white hover:border-brand-300 relative group">
                  <span className="text-3xl font-extrabold text-brand-500/30 group-hover:text-brand-500 transition-colors block mb-3 font-serif">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Enquiry Form & Contact Info */}
      <section id="enquiry-form" className="section-padding bg-slate-50 border-t border-slate-200/60 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Checklist */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-0.5 bg-brand-500" />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                    Connect With Us
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Admissions Office & Inquiries
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  Our admissions counselors are available Monday through Saturday to answer questions about curricula, fee structures, and campus life.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-soft-sm flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Admissions Helplines</span>
                      <a href={`tel:${schoolInfo.contact.phone.split('/')[0].trim()}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-brand-600">
                        {schoolInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-soft-sm flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Admissions Email</span>
                      <a href={`mailto:${schoolInfo.contact.email}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-brand-600">
                        {schoolInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-soft-sm flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Visiting & Desk Hours</span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 block">
                        {schoolInfo.contact.officeHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div className="p-5 rounded-xl bg-brand-50/70 border border-brand-200/60">
                  <h4 className="text-sm font-bold text-brand-900 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-600" />
                    Required for Enrollment:
                  </h4>
                  <ul className="text-xs text-brand-800 space-y-1.5 list-disc list-inside">
                    <li>Copy of student birth certificate</li>
                    <li>Transfer certificate (TC) from previous institution</li>
                    <li>Recent passport-sized photographs</li>
                    <li>Previous year academic progress report</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-soft-lg"
              >
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Online Admission Enquiry Form
                  </h3>
                  <p className="text-sm text-slate-500">
                    Fill out the form below to register your interest. All fields marked with * are required.
                  </p>

                  {/* Static Demo Mode Notice (Required by Section 9) */}
                  <div className="mt-4 p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Static Demo Notice:</span> This enquiry form is currently running in static frontend preview mode. Submitted inquiries demonstrate client-side validation until school email services are connected.
                    </div>
                  </div>
                </div>

                {/* Success feedback state */}
                <AnimatePresence mode="wait">
                  {submittedData ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-8 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">
                        Demo Enquiry Recorded!
                      </h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-slate-900">{submittedData.parentName}</span>. Your enquiry for <span className="font-semibold text-slate-900">{submittedData.studentName}</span> ({submittedData.grade}) has been validated successfully in static demo mode.
                      </p>

                      <div className="p-4 bg-slate-50 rounded-xl max-w-sm mx-auto text-left text-xs text-slate-600 space-y-1.5 border border-slate-200">
                        <div><span className="font-semibold">Phone:</span> {submittedData.phone}</div>
                        <div><span className="font-semibold">Email:</span> {submittedData.email}</div>
                        {submittedData.message && (
                          <div><span className="font-semibold">Query:</span> {submittedData.message}</div>
                        )}
                      </div>

                      <div className="pt-4">
                        <Button onClick={handleReset} variant="outline" size="sm">
                          Submit Another Enquiry
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
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
                            placeholder="e.g. Rajesh Kumar"
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
                            Student Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.studentName}
                            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                            placeholder="e.g. Aarav Kumar"
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
                        {/* Class Interested In */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Grade / Class Interested In *
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
                            Contact Phone Number *
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
                          Additional Query or Message (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us any specific requirements or questions regarding your child's enrollment..."
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center"
                        showArrow={true}
                      >
                        Submit Admission Enquiry
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
