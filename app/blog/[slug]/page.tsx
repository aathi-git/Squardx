import { client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Navbar from "@/app/components/Navbar";

export const revalidate = 2;

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

    const data = await client.fetch(query);
    return data;
}

export default async function BlogAritcle({
    params,
}: {
    params: { slug: string };
}) {
    const data: fullBlog = await getData(params.slug);

    return (
        <div>
            <Navbar />
            <div className=" container mx-auto flex justify-center items-center mt-8">
                <div>
                    
                    <h1>
                        <span className=" block text-base text-center text-primary font-semibold tracking-wide uppercase">
                          
                        </span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-light sm:text-4xl">
                            {data.title}
                        </span>
                    </h1>

                    <Image
                        src={urlFor(data.titleImage).url()}
                        width={800}
                        height={800}
                        alt="Title Image"
                        priority
                        className="rounded-lg mt-8 border"
                    />

                    <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
                        <PortableText value={data.content} />
                    </div>
                </div>
            </div>

        </div>
    );
}