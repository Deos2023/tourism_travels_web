// components/TourCard.js
"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TourCard({ tour, basePath = "" }) {
  return (
    <motion.div
      className="relative w-[300px] overflow-hidden shadow-lg bg-white"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={tour.image}
        alt={tour.title}
        width={300}
        height={200}
        className="object-cover"
      />
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
        <h2 className="text-xl font-bold">{tour.title}</h2>
        {tour.subTitle && <p className="italic text-yellow-400">{tour.subTitle}</p>}
        <div className="flex gap-2 items-center mt-1">
          {tour.oldPrice && (
            <span className="line-through text-gray-400">${tour.oldPrice}</span>
          )}
          <span className="text-yellow-400 font-bold">${tour.price}</span>
        </div>
        <p className="text-sm mt-1">{tour.description.slice(0, 60)}...</p>
        <Link
          href={`/${basePath}/${tour.slug}`}
          className="text-yellow-300 text-sm underline mt-2 inline-block"
        >
          Explore Tour
        </Link>
      </div>
    </motion.div>
  );
}
