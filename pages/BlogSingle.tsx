import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BlogSingle: React.FC = () => {
  return (
    <div className="bg-paper text-ink">
      <section className="bg-ink text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Single Post</p>
          <h1 className="font-display text-3xl md:text-5xl mt-4">Fix Your Cracked Phone Screen</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-3">July 16, 2025 / COSUN</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-white/80 bg-white">
          <img
            src="https://picsum.photos/seed/blogsingle-hero/1400/700"
            alt="Technician inspecting electronics"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-base text-slate-700 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat, eros ut congue bibendum, purus nibh
          tincidunt sapien, eget convallis enim elit at turpis. Donec varius sapien vitae ante vestibulum ultricies. Etiam
          tristique vestibulum felis, nec varius urna dapibus sit amet. Vestibulum lacinia, libero in posuere venenatis, justo
          urna luctus sapien, ut luctus est velit at orci.
        </p>
        <p className="mt-5 text-base text-slate-700 leading-7">
          Aenean venenatis, purus vitae volutpat convallis, orci elit convallis purus, ac pulvinar magna nibh eu leo. Aliquam
          posuere, lacus at venenatis efficitur, lacus risus egestas leo, in fermentum tortor lectus ac justo. Integer nec est
          euismod, vehicula nulla a, luctus lorem.
        </p>

        <div className="mt-8 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-white/80 bg-white">
          <img
            src="https://picsum.photos/seed/blogsingle-mid/1200/900"
            alt="Customer checking phone"
            className="w-full h-[320px] object-cover"
          />
        </div>

        <h2 className="font-display text-2xl md:text-3xl mt-8">Fix Your Cracked Phone Screen</h2>
        <p className="mt-4 text-base text-slate-700 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat, eros ut congue bibendum, purus nibh
          tincidunt sapien, eget convallis enim elit at turpis. Donec varius sapien vitae ante vestibulum ultricies. Etiam
          tristique vestibulum felis, nec varius urna dapibus sit amet. Vestibulum lacinia, libero in posuere venenatis, justo
          urna luctus sapien, ut luctus est velit at orci. Aenean venenatis, purus vitae volutpat convallis, orci elit convallis
          purus, ac pulvinar magna nibh eu leo.
        </p>

        <h3 className="font-display text-xl md:text-2xl mt-8">Tips To Keep Gadgets Running</h3>
        <p className="mt-4 text-base text-slate-700 leading-7">
          Curabitur efficitur auctor diam, in varius sapien hendrerit in. Fusce in nisi velit. Pellentesque imperdiet cursus
          lacus, ac fermentum tortor fermentum id. Nulla facilisi. Integer non nisi eros. Praesent fermentum leo ac nibh
          consequat, id consectetur sapien finibus.
        </p>
        <p className="mt-5 text-base text-slate-700 leading-7">
          Suspendisse nibh velit, posuere nec erat ut, blandit fermentum metus. Vivamus interdum sem nibh, a aliquet tellus
          dapibus sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc non
          finibus nulla. Pellentesque imperdiet cursus lacus, ac fermentum tortor fermentum id.
        </p>

        <div className="mt-10 border-t border-ink/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-500">
          <div>
            <span className="text-slate-400">Post Tags:</span> mobile , phone , repair
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Share:</span>
            {['f', 'x', 'in'].map((label) => (
              <span
                key={label}
                className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-xs font-semibold"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-text font-semibold hover:underline"
          >
            <ArrowLeft size={16} /> Back to Blog
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;
