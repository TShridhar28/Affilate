"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const products = [
    {
      name: "BELOXY Flour Sifter/Atta Chhani Hand Press Design Stainless Steel Flour Sifter Corrosion Resistant Large Capacity Flour Sieve Cup for Sugar Flour (1)",
      price: "₹284",
      image: "/products/atta-channi.png",
      url: "https://amzn.to/4h2oyET",
    },
    {
      name: "REFULGIX 16 Colors Changing Sunset Projection Lamp with Remote | Romantic LED Night Light for Bedroom, Couples, Kids, Adults | Mood Lighting for Home, Living Room, Party (Multicolor, Plastic)",
      price: "₹259",
      image: "/products/sunset-lamp.png",
      url: "https://amzn.to/46WqIB8",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-gray-900 px-4 py-12 flex flex-col items-center">
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-5 pointer-events-none" />

      {/* Profile Section */}
      <section className="relative z-10 flex flex-col items-center text-center mb-12">
        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-gray-200 shadow-md">
          <Image src="/profile.jpg" alt="Sonalixfinds" fill className="object-cover" />
        </div>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">Sonalixfinds</h1>
        <p className="mt-2 max-w-xl text-gray-600">
          Discovering smart tools, trending finds, and hidden gems that actually make life better.
        </p>
      </section>

      {/* Product Section */}
      <section className="relative z-10 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">
          Featured Products
        </h2>

        {/* ✅ Changed grid: always 2 columns, 3 on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              {/* Clickable Image */}
              <Link href={product.url} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full aspect-[4/3] bg-gray-50 cursor-pointer transition-transform duration-300 hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-5 text-sm text-center">
                <h3 className="font-semibold text-gray-900 line-clamp-3">{product.name}</h3>
                <p className="mt-3 font-bold text-fuchsia-600 text-lg">{product.price}</p>
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-fuchsia-600 text-white font-medium transition-colors duration-200 hover:bg-fuchsia-700"
                >
                  BUY
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
