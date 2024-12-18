import Image from 'next/image';
import React from 'react'


function cart_newProduct() {
    const product = Array.from({ length: 5 });

    return (
        <div id='shop' className='w-full h-[100dvh]'>
            <div className='flex items-center justify-center'>
                <h1 className='text-3xl underline decoration-1'>Products</h1>
                <span className='text-sm dark:text-orange-400 rounded-md border px-1 py-[0.2px] translate-x-1 -translate-y-1.5'>*New</span>
            </div>
            <div className='flex flex-wrap items-center justify-center mt-5 gap-4'>
                {product.map((_, index) => (
                    <div key={index} className="border w-64 h-64 p-2 rounded-md">
                        <Image
                            src={"https://dummyimage.com/1500x625/000000/fff.jpg&text=512x512"}
                            alt=""
                            width={0}
                            height={0}
                            className="w-full h-full rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default cart_newProduct;