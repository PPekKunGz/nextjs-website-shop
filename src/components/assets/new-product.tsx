"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";

const NewProducts = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <div className="w-full h-[100dvh] flex">
            <Carousel plugins={[plugin.current]} className="w-full h-full" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                <CarouselContent className="h-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="lg:h-[80dvh] h-[60vh]">
                            <div className="p-1 h-full">
                                <Card className="h-full">
                                    <CardContent className="flex items-center justify-center p-6 h-full">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default NewProducts;