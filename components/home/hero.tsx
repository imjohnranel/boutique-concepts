import { HeroCarousel } from "./hero-carousel"
import { TestimonialCarousel } from "./testimonial-carousel"

export function Hero() {
    return (
        <section className="relative w-full py-6">
            <div className="container mx-auto px-4">
                <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
                    {/* Main Prominent Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-muted shadow-2xl ring-1 ring-border aspect-[16/9] lg:aspect-auto lg:h-[600px]">
                        <HeroCarousel />
                    </div>

                    {/* Secondary Social Proof Card */}
                    <div className="hidden lg:flex flex-col rounded-2xl border bg-card shadow-xl ring-1 ring-border/50 h-[600px]">
                        <TestimonialCarousel />
                    </div>
                </div>

                {/* Mobile Testimonials (Visible only on mobile) */}
                <div className="mt-8 lg:hidden rounded-2xl border bg-card p-4 shadow-lg ring-1 ring-border/50">
                    <TestimonialCarousel />
                </div>
            </div>

            {/* Background Aesthetic */}
            <div className="absolute top-0 left-0 -z-10 h-full w-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
            </div>
        </section>
    )
}

