import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  number: number;
  isLast: boolean;
}

export function ProcessStep({ title, description, icon: Icon, number, isLast }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="relative">
          <Icon className="h-12 w-12 text-blue-600" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
            {number}
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="absolute top-6 left-1/2 w-full h-0.5 bg-blue-200 hidden md:block" />
      )}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}