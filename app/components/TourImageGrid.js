"use client";
import Link from "next/link";

export default function TourImageGrid({ data = [], basePath = "" }) {
  if (!Array.isArray(data)) return null; // Safe guard

  const imageEntries = data
    .map((tour) =>
      (tour?.images || []).map((img) => ({ img, slug: tour.slug }))
    )
    .flat(); // Manual flattening instead of flatMap

  const shuffled = imageEntries
    .sort(() => 0.5 - Math.random())
    .slice(0, 6); // Pick 6 random images

  const gridStyles = [
    "col-span-3 row-span-2", // Big
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-2 h-[600px]">
      {shuffled.map((entry, i) => (
        <Link
          key={i}
          href={`${basePath}/tours/${entry.slug}`}
          className={`relative overflow-hidden ${gridStyles[i]} group`}
        >
          <img
            src={entry.img}
            alt={`Tour ${entry.slug}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
        </Link>
      ))}
    </div>
  );
}
