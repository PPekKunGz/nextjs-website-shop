'use client'

import Link from 'next/link'
import { Menu, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const currentPath = usePathname();
    return (
        <header className="w-full bg-black">
            <div className="flex h-[84px] items-center justify-between px-4 max-w-full mx-16">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-black">
                        <nav className="flex flex-col gap-4">
                            <Link href="/about" className="text-sm font-medium text-white hover:text-pink-400">
                                Shop
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                <div className="md:hidden flex-1 flex">
                    <Link href="/" className="font-bold text-2xl text-pink-400">
                        SHOP.NAME
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-start">
                    <Link href="/" className={"font-bold text-2xl text-pink-400"}>
                        SHOP.NAME
                    </Link>
                    <nav className="flex items-center gap-6 mx-8">
                        <Link href="/" className={"font-bold text-sm hover:text-pink-400" + (currentPath === "/" ? " text-pink-400" : " text-white")}>
                            Home
                        </Link>
                        <Link href="/shop" className={"text-sm font-bold hover:text-pink-400" + (currentPath === "/shop" ? " text-pink-400" : " text-white")}>
                            Shop
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link href={"/cart?=current" + currentPath.split("/")[1]} className="text-white">
                        <Button variant="ghost" size="icon" className="text-white">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="text-white">
                        <User className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}