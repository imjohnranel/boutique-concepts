import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl font-bold">Boutique Concepts</h3>
                        <p className="text-sm text-muted-foreground">
                            Elegant Otaku fashion & Premium Rental services. Your gateway to sophisticated cosplay and wedding attire.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Collections</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/collections/wedding" className="text-muted-foreground hover:text-primary transition-colors">Wedding</Link></li>
                            <li><Link href="/collections/cosplay" className="text-muted-foreground hover:text-primary transition-colors">Cosplay</Link></li>
                            <li><Link href="/collections/formal" className="text-muted-foreground hover:text-primary transition-colors">Formal Wear</Link></li>
                            <li><Link href="/collections/accessories" className="text-muted-foreground hover:text-primary transition-colors">Accessories</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/rental-policy" className="text-muted-foreground hover:text-primary transition-colors">Rental Policy</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Newsletter</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to receive updates on new collections and special offers.
                        </p>
                        {/* Newsletter placeholder */}
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Boutique Concepts. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
