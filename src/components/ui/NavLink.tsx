import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors"
    >
      {label}
    </a>
  );
}