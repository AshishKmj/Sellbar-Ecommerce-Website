'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '7717517777';
  const displayPhone = '+91 77175 17777';
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hi%20Sellbar%2C%20I%20have%20an%20inquiry%20regarding%20buyback%20or%20refurbished%20devices.`;

  return (
    <aside
      aria-label="WhatsApp & Phone Support"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 print:hidden"
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-white text-gray-900 border border-emerald-100 shadow-2xl rounded-2xl p-3.5 max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-gray-900">Sellbar Live Support</span>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 p-0.5 rounded cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-gray-600 mb-2.5 leading-snug">
            Need instant help with device valuation, doorstep pickup, or order warranty?
          </p>
          <div className="flex flex-col gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:+91${phoneNumber}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition"
            >
              <Phone className="w-3 h-3 text-[#13b59b]" />
              <span>Call {displayPhone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          aria-label={`Chat with Sellbar on WhatsApp at ${displayPhone}`}
          className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          {/* Subtle Ping Indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
          </span>

          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="text-xs font-bold tracking-wide">
            WhatsApp
          </span>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-white/90 border-l border-white/30 pl-2">
            7717517777
          </span>
        </a>
      </div>
    </aside>
  );
}
