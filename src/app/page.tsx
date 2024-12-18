"use client";
import dynamic from 'next/dynamic';
import NewProductCart from '@/components/assets/cart/new-product'

const NewProducts = dynamic(() => import('../components/assets/new-product'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="p-6">
      <NewProducts />
      <NewProductCart/>
    </div>
  );
}