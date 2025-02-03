import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
}

export function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="inline-block rounded-md bg-blue-500 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-blue-600 transition-colors"
    >
      {children}
    </a>
  );
}