import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Users, PenTool, ClipboardCheck, Box } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div>
      <div className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The difference between a smooth project and a stressful one is rarely the product - it is communication. Our team is structured around fast decisions and clear handoffs between engineering, sourcing, QC, and customer support.
          </p>
        </div>
      </div>

      <Section light className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group">
            <div className="rounded-xl overflow-hidden mb-4 h-64 shadow-md">
              <img src="/images/team_engineering.png" alt="Engineering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center relative -mt-12 mx-4 shadow-lg border border-slate-100">
              <div className="mx-auto bg-white p-3 rounded-full w-fit -mt-10 mb-2 shadow-sm text-brand ring-4 ring-slate-50">
                <PenTool size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">Engineering</h3>
              <p className="text-sm text-slate-600">DFM, prototyping, and performance alignment.</p>
            </div>
          </div>

          <div className="group">
            <div className="rounded-xl overflow-hidden mb-4 h-64 shadow-md">
              <img src="/images/team_quality.png" alt="Quality" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center relative -mt-12 mx-4 shadow-lg border border-slate-100">
              <div className="mx-auto bg-white p-3 rounded-full w-fit -mt-10 mb-2 shadow-sm text-brand ring-4 ring-slate-50">
                <ClipboardCheck size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">Quality</h3>
              <p className="text-sm text-slate-600">Incoming, in-process, and final inspections.</p>
            </div>
          </div>

          <div className="group">
            <div className="rounded-xl overflow-hidden mb-4 h-64 shadow-md">
              <img src="/images/team_ops.png" alt="Operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center relative -mt-12 mx-4 shadow-lg border border-slate-100">
              <div className="mx-auto bg-white p-3 rounded-full w-fit -mt-10 mb-2 shadow-sm text-brand ring-4 ring-slate-50">
                <Box size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">Operations</h3>
              <p className="text-sm text-slate-600">Scheduling, packing, and shipping coordination.</p>
            </div>
          </div>

          <div className="group">
            <div className="rounded-xl overflow-hidden mb-4 h-64 shadow-md">
              <img src="/images/team_sales.png" alt="Sales" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center relative -mt-12 mx-4 shadow-lg border border-slate-100">
              <div className="mx-auto bg-white p-3 rounded-full w-fit -mt-10 mb-2 shadow-sm text-brand ring-4 ring-slate-50">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">Sales Support</h3>
              <p className="text-sm text-slate-600">Documentation, photos, and practical timelines.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-8 border-brand p-8 md:p-12 rounded-r-lg">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">Your Day-to-Day Experience</h3>
          <p className="text-yellow-800 text-lg leading-relaxed">
            Expect quick replies, clear questions, and clear next steps. We keep the project moving because your timeline is your revenue.
            Our sales team works directly with the factory floor, not through layers of bureaucracy.
          </p>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Contact Our Team",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical quote and clear next steps.",
            linkLabel: "Contact Us",
            href: "/contact",
          }}
          secondary={{
            title: "Request Samples",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Samples",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default Team;
