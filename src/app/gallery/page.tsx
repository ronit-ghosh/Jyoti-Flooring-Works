"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { AllPhotos } from "@/lib/images";

export default function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = AllPhotos