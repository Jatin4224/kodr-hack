import React from 'react';

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {eyebrow && (
        <span className="text-xs font-mono uppercase text-[#FF5733] tracking-wider">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F5F5F5] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[#9E9EA8] mt-4 text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}