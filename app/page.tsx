"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const product = {
    name: "BELOXY Flour Sifter/Atta Chhani Hand Press Design Stainless Steel Flour Sifter Corrosion Resistant Large Capacity Flour Sieve Cup for Sugar Flour (1)",
    price: "₹284",
    image: "/products/atta-channi.png", // image in /public/products/
    url: "https://amzn.to/4h2oyET", // actual product link
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-fuchsia-900 text-white px-4 py-12 flex flex-col items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      {/* Profile Section */}
      <section className="relative z-10 flex flex-col items-center text-center mb-10">
        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-fuchsia-400/30 shadow-lg">
          <Image src="/profile.jpg" alt="Sonalixfinds" fill className="object-cover" />
        </div>

        <h1 className="mt-4 text-3xl font-bold text-white">Sonalixfinds</h1>
        <p className="mt-2 max-w-xl text-purple-100">
          Discovering smart tools, trending finds, and hidden gems that actually make life better.
        </p>
      </section>

      {/* Product Section */}
      <section className="relative z-10 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Featured Product
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="w-full max-w-xs bg-white/10 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
            {/* Clickable Image */}
            <Link href={product.url} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full aspect-[4/3] bg-white/10 cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-3"
                />
              </div>
            </Link>

            {/* Product Info */}
            <div className="p-4 text-sm text-purple-100 text-center">
              <h3 className="font-semibold text-white line-clamp-3">{product.name}</h3>
              <p className="mt-2 font-bold text-fuchsia-300">{product.price}</p>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
