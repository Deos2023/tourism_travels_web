'use client';

import Image from 'next/image';
import tourData from '../../lib/tour-data';

const getRandomTours = (count) => {
  const allTours = [
    ...(tourData.national || []),
    ...(tourData.international || []),
    ...(tourData.jungle || [])
  ];

  const shuffled = allTours.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const DestinationCard = ({ tour }) => {
  const image = tour.images?.[2] || '/placeholder.jpg';

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={tour.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
        <h3 className="text-xl md:text-2xl font-bold">{tour.name}</h3>
        <p className="text-sm italic">Just Beautiful</p>
      </div>
    </div>
  );
};

export default function DestinationsPage() {
  const tours = getRandomTours(12);
  const heroImage = '/beautiful.jpg'; // Replace or make dynamic if needed

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20  bg-cover bg-center bg-no-repeat bg-fixed h-[60vh] w-full"
      style={{
        backgroundImage: "url('/beautiful.jpg')", // Adjust path based on your `public` folder
      }}
      >
        {/* <Image
          src={heroImage}
          alt="Destinations Hero"
          fill
          className="object-cover"
        /> */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Destinations List</h1>
          <p className="mt-2 text-lg md:text-xl italic">
            Modern & Beautiful Places for all Kinds of Travel and Tourism
          </p>
        </div>
      </div>

      {/* Destination Cards Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <DestinationCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
}
