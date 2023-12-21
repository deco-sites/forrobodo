import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  subTitle: string;
  image: {
    src: ImageWidget;
    alt: string;
  };
}

export default function Hero({ title, subTitle, image }: Props) {
  return (
    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          width={924}
          height={520}
          class="object-cover w-full h-full rounded-md md:mr-6 mr-0 max-w-3xl"
        />
      </div>
      <div class="w-full lg:w-1/2">
        <h1 class="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl">
          {title}
        </h1>
        <p class="flex items-center font-medium -mx-2 text-gray-700 mt-8 space-y-5">
          <span class="mx-2">{subTitle}</span>
        </p>
      </div>
    </div>
  );
}
