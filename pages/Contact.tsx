import React from 'react';
import { Section } from '../components/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
       <div className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
             <img src="https://picsum.photos/seed/contact_hero/1920/600" className="w-full h-full object-cover opacity-20" alt="Contact"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">
            Tell us your project needs and we will come back with a practical quote - spec, MOQ, lead time, customization options, and next steps.
          </p>
          <p className="text-sm text-slate-400 mt-4">Response target: within 24 hours on business days.</p>
        </div>
      </div>

      <Section light>
        <div className="grid lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote (RFQ)</h2>
                <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-lg">
                    <p className="mb-4 text-sm text-slate-500">Please include the following for a faster response:</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-8 text-sm">
                        <li>Product page link / product type</li>
                        <li>Quantity (trial + monthly forecast)</li>
                        <li>Target market (EU/US/UK/...) and required labels or marks</li>
                        <li>Customization scope (logo, packaging, structure, port configuration)</li>
                        <li>Timeline and delivery destination</li>
                    </ul>
                    
                    {/* Visual-only form */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand" />
                            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand" />
                        </div>
                        <input type="text" placeholder="Product Interest" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand" />
                        <textarea placeholder="Message / Project Details" rows={4} className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand"></textarea>
                        <button className="bg-brand text-slate-900 px-8 py-4 rounded font-bold hover:bg-brand-hover w-full transition-colors text-lg shadow-md">
                            Send Request
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Details</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-100 p-4 rounded-full text-brand-text"><Mail /></div>
                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-slate-600 text-lg">info@cosunglobal.com</p>
                                <p className="text-xs text-slate-500 mt-1">Response target: within 24 hours on business days.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-100 p-4 rounded-full text-brand-text"><Phone /></div>
                            <div>
                                <h3 className="font-bold text-lg">Phone / WhatsApp</h3>
                                <p className="text-slate-600 text-lg">+86-13189394111 / +86-13189394111</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-100 p-4 rounded-full text-brand-text"><MapPin /></div>
                            <div>
                                <h3 className="font-bold text-lg">Factory Address</h3>
                                <p className="text-slate-600">[Insert Address]</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow rounded-xl overflow-hidden shadow-lg min-h-[300px] relative">
                     <img src="https://picsum.photos/seed/map/800/600" alt="Map Location" className="absolute inset-0 w-full h-full object-cover" />
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <MapPin size={48} className="text-brand drop-shadow-lg" fill="currentColor"/>
                     </div>
                </div>

                <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-lg mb-2">Get Samples</h3>
                    <p className="text-slate-600 text-sm mb-4">Prefer to validate first? We support stock samples and branded samples depending on your timeline.</p>
                    <button className="text-yellow-700 font-bold border-2 border-yellow-600 px-6 py-2 rounded hover:bg-yellow-50 transition-colors">Request Samples</button>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

