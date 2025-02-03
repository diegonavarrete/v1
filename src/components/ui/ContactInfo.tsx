import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          ¿Por qué trabajar con nosotros?
        </h3>
        <ul className="space-y-4 text-gray-600">
          <li>✓ Incrementamos la rentabilidad en un 20% en promedio</li>
          <li>✓ Optimización continua basada en datos reales</li>
          <li>✓ Soporte dedicado y reportes personalizados</li>
        </ul>
      </div>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h4 className="text-lg font-medium text-gray-900">Email</h4>
            <p className="mt-1 text-gray-600">contacto@marketdata.cl</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
            <p className="mt-1 text-gray-600">+56 2 2123 4567</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h4 className="text-lg font-medium text-gray-900">Ubicación</h4>
            <p className="mt-1 text-gray-600">Santiago, Chile</p>
          </div>
        </div>
      </div>
    </div>
  );
}