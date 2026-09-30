import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building, Mail, Phone, User } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    spendCategory: 'Packaging & Cartons'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#07152e] text-white border border-slate-700/60 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-[#1d6bf3]/20 rounded-xl text-[#38bdf8]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#38bdf8] uppercase tracking-wider">
                Procucev Autonomous Platform
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Schedule a 15-Min Live Platform Demo
            </h3>
            <p className="text-sm text-slate-300 mt-2 mb-6 leading-relaxed">
              Experience zero human intervention from PR to supplier quotation comparison. Saving at procurement is direct profit for your company.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1d6bf3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Official Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1d6bf3]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1d6bf3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Retail Enterprises Ltd"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1d6bf3]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Primary Procurement Category
                </label>
                <select
                  value={formData.spendCategory}
                  onChange={(e) => setFormData({ ...formData, spendCategory: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1d6bf3]"
                >
                  <option value="Packaging & Cartons">Packaging & Corrugated Cartons</option>
                  <option value="Raw Materials & Metals">Raw Materials & Industrial Metals</option>
                  <option value="Logistics & Freight">Logistics & Transportation</option>
                  <option value="Chemicals & Ingredients">Chemicals & Ingredients</option>
                  <option value="MRO & Consumables">MRO & Indirect Supplies</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1d6bf3] hover:bg-[#1255cc] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 text-sm"
                >
                  Confirm Live Demo Booking <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Zero Upfront Fee • Gain-Share Model Available</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Demo Booking Confirmed!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our procurement solution architect will contact you at <strong className="text-white">{formData.email}</strong> shortly with your customized demo link.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
