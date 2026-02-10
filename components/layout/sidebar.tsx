import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn("pb-12 w-64 border-r hidden md:block print:hidden", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight font-serif">
                        Collections
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start text-base" asChild>
                            <Link href="/products?category=wedding">
                                Wedding
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-base" asChild>
                            <Link href="/products?category=cosplay">
                                Cosplay
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-base" asChild>
                            <Link href="/products?category=accessories">
                                Accessories
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight font-serif">
                        Filters
                    </h2>
                    {/* Placeholder for filters */}
                    <div className="px-4 text-sm text-muted-foreground">
                        Coming soon...
                    </div>
                </div>
            </div>
        </div>
    )
}
