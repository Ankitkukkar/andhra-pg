import React, { useState } from 'react';
import { 
  Users, 
  Maximize2, 
  Wind, 
  Check, 
  PhoneCall, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Bed,
  ShieldCheck,
  Zap,
  Droplets
} from 'lucide-react';
import { ROOMS_DATA, PG_INFO } from '../data/pgData';
import { RoomType } from '../types';

interface RoomCardsProps {
  onContactPricing: (room: RoomType) => void;
}

export const RoomCards: React.FC<RoomCardsProps> = ({ onContactPricing }) => {
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [roomId: string]: number }>({
    'single-sharing': 0,
    'double-sharing': 0,
    'triple-sharing': 0,
  });

  const nextImage = (roomId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % max,
    }));
  };

  const prevImage = (roomId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + max) % max,
    }));
  };

  return (
    <section id="rooms" className="py-24 bg-white text-stone-900 text-left relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#722F37]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-stone-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#722F37] bg-[#722F37]/10 border border-[#722F37]/20 px-3.5 py-1 rounded-full inline-block">
            Choose Your Room
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 font-heading tracking-tight">
            Premium Single, Double & Triple Sharing
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            All rooms come fully furnished with attached washrooms, geysers, 3-time unlimited meals, 300 Mbps WiFi, daily housekeeping, and 0% brokerage.
          </p>
        </div>

        {/* 3 Columns Room Grid: Single, Double, Triple */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room) => {
            const currentImgIndex = activeImageIndexes[room.id] || 0;

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-[#722F37]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#722F37]/5 flex flex-col group"
              >
                {/* Image Section with Carousel Controls */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                  <img
                    src={room.images[currentImgIndex]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Badge */}
                  {room.badge && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="text-[11px] font-black uppercase tracking-wider bg-white/95 text-[#722F37] border border-[#E8CCD1] px-3 py-1 rounded-full shadow-xs backdrop-blur-xs">
                        {room.badge}
                      </span>
                    </div>
                  )}

                  {/* Sharing Pill */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-bold bg-white/95 text-stone-800 px-3 py-1 rounded-full shadow-xs border border-stone-200 backdrop-blur-xs flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#722F37]" />
                      {room.sharingCount === 1 ? '1 Person (Private)' : `${room.sharingCount} Persons Sharing`}
                    </span>
                  </div>

                  {/* Carousel Next/Prev Controls */}
                  {room.images.length > 1 && (
                    <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                      <button
                        onClick={(e) => prevImage(room.id, room.images.length, e)}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center pointer-events-auto transition-colors border border-white/20"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => nextImage(room.id, room.images.length, e)}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center pointer-events-auto transition-colors border border-white/20"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Image Indicator Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                    {room.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all ${
                          currentImgIndex === idx ? 'w-5 bg-[#722F37]' : 'w-1.5 bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-950 font-heading">
                        {room.name}
                      </h3>
                      <p className="text-xs text-[#722F37] font-semibold mt-1">
                        {room.tagline}
                      </p>
                    </div>

                    {/* Room Quick Specs Bar */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-[#FAF7F5] rounded-2xl border border-stone-200/80 text-center">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">Space</span>
                        <span className="text-xs font-black text-stone-900">{room.sizeSqFt} sq.ft</span>
                      </div>
                      <div className="border-x border-stone-200">
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">Cooling</span>
                        <span className="text-xs font-black text-stone-900">AC / Fan</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">Meals</span>
                        <span className="text-xs font-black text-[#722F37]">Included</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-1">
                      {room.features.slice(0, 5).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                          <Check className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Clean CTA Button: "Contact for Pricing" */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    <button
                      onClick={() => onContactPricing(room)}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#722F37] hover:bg-[#58111A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#722F37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Contact for Pricing</span>
                    </button>

                    <p className="text-[11px] text-center text-stone-500 font-medium">
                      ⚡ Instant quotes • 0% Brokerage • Free Mess Tasting
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
