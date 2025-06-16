'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Home,
  MapPin,
  Route,
  BookText,
  Layers,
  FileText,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  {
    label: 'Home',
    icon: Home,
    path: '/', // Added path for Home
  },
  {
    label: 'Destination',
    icon: MapPin,
    submenu: [
      { label: 'Destination List', path: '/destinations/list' },
      { label: 'Destination Item', path: '/destinations/item' },
    ],
  },
  {
    label: 'Tours',
    icon: Route,
    submenu: [
      { label: 'Standard List', path: '/tours/standard-list' },
      { label: 'Tour Item', path: '/tours/tour-item' },
    ],
  },
  {
    label: 'Blog',
    icon: BookText,
    submenu: [
      { label: 'Blog Grid', path: '/blog/grid' },
      { label: 'Blog Single', path: '/blog/single' },
    ],
  },
  {
    label: 'Elements',
    icon: Layers,
    path: '/elements',
  },
  {
    label: 'Pages',
    icon: FileText,
    submenu: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'What We Offer', path: '/offerings' },
    ],
  },
  {
    label: 'Search',
    icon: Search,
    path: '/search',
  },
];

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [sidebarHover, setSidebarHover] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target)) {
        setActiveItem(null);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <aside
      onMouseEnter={() => setSidebarHover(true)}
      onMouseLeave={() => {
        setSidebarHover(false);
        setHoveredItem(null);
      }}
      className="fixed top-0 left-0 h-full w-20 z-50 flex flex-col justify-between py-8 bg-transparent transition-all duration-500 ease-in-out"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out pointer-events-none ${
          sidebarHover
            ? 'opacity-100 bg-gradient-to-r from-black to-transparent'
            : 'opacity-0'
        }`}
      />

      {/* Logo */}
      <div className="flex justify-center relative z-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center gap-6 mt-4 relative z-10">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const hasSubmenu = !!item.submenu;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={(e) => {
                e.stopPropagation();
                if (hasSubmenu) {
                  setActiveItem((prev) =>
                    prev === item.label ? null : item.label
                  );
                }
              }}
            >
              {item.path && !hasSubmenu ? (
                <Link href={item.path}>
                  <Icon
                    size={16}
                    className="text-white transition-transform duration-300"
                  />
                </Link>
              ) : (
                <Icon
                  size={16}
                  className="text-white transition-transform duration-300"
                />
              )}

              <span
                className={`mt-1 text-[10px] text-white px-2 py-0.5 rounded transition-opacity duration-300 ${
                  sidebarHover ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {item.label}
              </span>

              {hasSubmenu &&
                (hoveredItem === item.label || activeItem === item.label) && (
                  <div
                    ref={submenuRef}
                    className="absolute left-20 top-0 -ml-4 bg-black/90 text-white text-sm rounded-lg p-3 shadow-xl py-6 space-y-2 w-44 z-50"
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        href={subItem.path}
                        key={subIndex}
                        className="block hover:text-sky-200 cursor-pointer transition"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          );
        })}
      </nav>

      <div className="h-10" />
    </aside>
  );
};

export default Sidebar;
