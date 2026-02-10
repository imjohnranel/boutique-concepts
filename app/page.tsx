import { Hero } from "@/components/home/hero";
import { ProductCarousel } from "@/components/products/product-carousel";
import { FEATURED_PRODUCTS } from "@/lib/placeholder-data";

export default function Home() {
  const weddingProducts = FEATURED_PRODUCTS.filter(p => p.theme === "Wedding");
  const animeProducts = FEATURED_PRODUCTS.filter(p => p.theme === "Anime");

  return (
    <div className="space-y-4">
      <Hero />

      <div className="space-y-12 pb-20">
        <ProductCarousel title="The Wedding Collection" products={weddingProducts} />
        <ProductCarousel title="Anime & Cosplay Essentials" products={animeProducts} />
      </div>
    </div>
  );
}

