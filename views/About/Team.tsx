'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Users, PenTool, ClipboardCheck, Box } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const Team: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.about.team;
  const teamIcons = [PenTool, ClipboardCheck, Box, Users];

  return (
    <div>
      <div className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.intro.description}</p>
        </div>
      </div>

      <Section light className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {content.teams.map((team, index) => {
            const Icon = teamIcons[index] ?? Users;
            return (
              <div key={`${team.title}-${index}`} className="group">
                <div className="rounded-xl overflow-hidden mb-4 h-64 shadow-md">
                  <img src={team.image} alt={team.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="bg-slate-50 p-6 rounded-lg text-center relative -mt-12 mx-4 shadow-lg border border-slate-100">
                  <div className="mx-auto bg-white p-3 rounded-full w-fit -mt-10 mb-2 shadow-sm text-brand ring-4 ring-slate-50">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{team.title}</h3>
                  <p className="text-sm text-slate-600">{team.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-yellow-50 border-l-8 border-brand p-8 md:p-12 rounded-r-lg">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">{content.highlight.title}</h3>
          <p className="text-yellow-800 text-lg leading-relaxed">{content.highlight.description}</p>
        </div>

        <CtaBlock
          title={content.cta.title}
          primary={content.cta.primary}
          secondary={content.cta.secondary}
        />
      </Section>
    </div>
  );
};

export default Team;
