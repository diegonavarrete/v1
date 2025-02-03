import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function BenefitCard({ title, description, icon: Icon }: BenefitCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative p-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none">
        <Icon className="h-12 w-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}