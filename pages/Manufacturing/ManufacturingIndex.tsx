import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Link } from 'react-router-dom';
import { Factory, Truck, Settings, PenTool, ArrowRight } from 'lucide-react';

const ManufacturingIndex: React.FC = () => {
  return (
    <div>
      <div className="relative bg-slate-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/manufacturing/1920/800" 
            alt="Manufacturing" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Manufacturing & R&D</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
             A supplier can make a good sample. A factory partner can make the same product - again and again - on schedule. COSUN combines manufacturing discipline with practical engineering support.
          </p>
        </div>
      </div>

      <Section light>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Our Capabilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            COSUN combines manufacturing discipline with practical engineering support so you can launch faster and scale with confidence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Link to="/manufacturing/factory" className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
            <div className="h-64 relative overflow-hidden">
                <img src="https://picsum.photos/seed/factory_over/800/600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Factory Overview"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <Factory size={48} className="text-brand mb-2" />
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-700 transition-colors flex items-center justify-between">
                    Factory Overview <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"/>
                </h3>
                <p className="text-slate-600 text-lg">Production areas and quality checkpoints designed for repeatability. See our facility organization.</p>
            </div>
          </Link>

          <Link to="/manufacturing/lines" className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
             <div className="h-64 relative overflow-hidden">
                <img src="https://picsum.photos/seed/lines/800/600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Lines"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <Settings size={48} className="text-brand mb-2" />
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-700 transition-colors flex items-center justify-between">
                    Production Lines <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"/>
                </h3>
                <p className="text-slate-600 text-lg">Process control for consistency. 10 dedicated lines optimized for automotive accessory assembly.</p>
            </div>
          </Link>

          <Link to="/manufacturing/capacity" className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
             <div className="h-64 relative overflow-hidden">
                <img src="https://picsum.photos/seed/logistics/800/600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Capacity"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <Truck size={48} className="text-brand mb-2" />
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-700 transition-colors flex items-center justify-between">
                    Capacity & Lead Time <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"/>
                </h3>
                <p className="text-slate-600 text-lg">Predictable scheduling and scale support. Understand our standard lead times and planning.</p>
            </div>
          </Link>

          <Link to="/manufacturing/engineering" className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
             <div className="h-64 relative overflow-hidden">
                <img src="https://picsum.photos/seed/rd_lab/800/600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Engineering"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <PenTool size={48} className="text-brand mb-2" />
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-700 transition-colors flex items-center justify-between">
                    Engineering & Lab <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"/>
                </h3>
                <p className="text-slate-600 text-lg">Prototyping, DFM, and validation support. How we help you launch faster.</p>
            </div>
          </Link>
        </div>
        
        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request a Factory Capability Pack",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical overview and next steps.",
            linkLabel: "Request Pack",
            href: "/contact",
          }}
          secondary={{
            title: "Request a Prototype Plan",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Plan",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default ManufacturingIndex;
