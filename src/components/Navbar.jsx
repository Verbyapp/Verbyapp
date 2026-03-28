import React, { useState } from 'react';
import { ChevronDown, Zap, Swords, Flame, Coffee, Brain, Sprout } from 'lucide-react';

const Navbar = () => {
  const [isModesOpen, setIsModesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F0EFEB]/85 border-b border-gray-100 transition-all duration-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3" aria-label="Global">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0 font-bold text-2xl tracking-tighter text-[#EB3514] font-sans">
            VERBY.
          </a>

          {/* Main Nav Items */}
          <div className="hidden lg:flex lg:gap-8 lg:items-center">

            {/* Modes Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsModesOpen(true)}
              onMouseLeave={() => setIsModesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-400 hover:text-[#333333] transition-colors font-mono text-sm"
              >
                Modes
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isModesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* The actual Dropdown Menu */}
              <div className={`absolute left-0 top-full pt-2 transition-all duration-150 ${isModesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                <div className="w-64 rounded-lg border border-[#F1F0EC] bg-white shadow-xl p-1.5">
                  <DropdownItem icon={<Zap size={16} className="text-[#333333]"/>} title="Blitz" desc="60-second conjugation bursts" />
                  <DropdownItem icon={<Swords size={16} className="text-[#EB3514]"/>} title="Ranked Duels" desc="Climb the global ladder" />
                  <DropdownItem icon={<Flame size={16} className="text-[#EB3514]"/>} title="Verby Streak" desc="One mistake ends it all" />
                  <DropdownItem icon={<Coffee size={16} className="text-[#6366F1]"/>} title="Zen Mode" desc="Practice at your own pace" />
                  <DropdownItem icon={<Brain size={16} className="text-[#059669]"/>} title="SDL Blitz" desc="Grammar in 60 seconds" />
                  <DropdownItem icon={<Sprout size={16} className="text-[#10B981]"/>} title="SDL Zen" desc="Learn with explanations" />
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-400 hover:text-[#333333] transition-colors font-mono text-sm">Leaderboard</a>
            <a href="https://github.com/Verbyapp" className="text-gray-400 hover:text-[#333333] transition-colors font-mono text-sm">Open Source</a>
          </div>
        </div>

        {/* Auth CTAs */}
        <div className="flex items-center gap-2">
          <a href="/arena" className="hidden lg:block text-[#333333] px-3 py-1.5 rounded-lg transition-colors font-mono text-sm bg-white border border-gray-200 hover:border-gray-400">
            Arena
          </a>
          <a href="#" className="bg-[#EB3514] hover:bg-[#EB3514]/90 text-white font-bold rounded-md transition-colors font-mono px-4 py-1.5 text-sm shadow-sm">
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
};

const DropdownItem = ({ icon, title, desc }) => (
  <a href="/arena" className="group flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-[#F0EFEB]">
    <div className="mt-0.5">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-[#333333] font-mono font-bold leading-none">{title}</span>
      <span className="text-[11px] text-gray-400 font-mono mt-1">{desc}</span>
    </div>
  </a>
);

export default Navbar;
