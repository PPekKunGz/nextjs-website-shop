'use client'

import Link from 'next/link'
import { Menu, Bell, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, } from '@/components/ui/sheet'

export default function NavBar() {
  return (
    <header className="border-b w-full">
      <div className="flex h-16 items-center justify-between px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link href="/shop" className="text-sm font-medium">
                Shop
              </Link>
              <Link href="/faqs" className="text-sm font-medium">
                FAQs
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="md:hidden flex-1 flex justify-center">
          <Link href="/" className="font-bold text-xl">
            SHOP
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            SHOP-NAME
          </Link>
          
          <nav className="flex items-center gap-6 mx-6">
            <Link href="/#shop" className="text-sm font-medium">
              Shop
            </Link>
            <Link href="/faqs" className="text-sm font-medium">
              FAQs
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}