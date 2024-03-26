import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Next.js Link

export const revalidate = 1;

async function getData() {
  const query = `            
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Blogs() {
  const data: simpleBlogCard[] = await getData();

  // Slice the data to include only the first three elements
  const limitedData = data.slice(0, 3);

  return (
    <div className="h-[40rem] bg-slate-950 relative flex flex-wrap justify-center items-center md:space-x-5 space-y-3">
      {limitedData.map((post) => (
        <DirectionAwareHover key={post.currentSlug} imageUrl={urlFor(post.titleImage).url()}>
          <div className="text-white mb-8 md:mb-0"> {/* Added margin bottom for spacing on mobile */}
            <p className="font-bold text-xl">{post.title}</p>
            <p className="font-normal text-sm">{post.smallDescription}</p>
            <Button asChild className="dark:bg-blue-600 dark:hover:bg-blue-500 bg-blue-600 hover:bg-blue-700 mt-4">
              <Link href={`/blog/${post.currentSlug}`}> 
                Read More
              </Link>
            </Button>
          </div>
        </DirectionAwareHover>
      ))}
    </div>
  );
}
