import Header from "$store/components/ui/SectionHeader.tsx";
import Button from "../../components/ui/Button.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface SecundaryImages {
  src: ImageWidget;
  alt: string;
}

export interface Props {
  title?: string;
  fontSize?: "Large" | "Normal";
  layout?: "left" | "center";
  /** @format html */
  text: string;
  mainImage: {
    src: ImageWidget;
    alt: string;
  };
  secundaryImages: SecundaryImages[];
}

export default function ForroTextWithImg(
  { title, fontSize, layout, text, mainImage, secundaryImages }: Props,
) {
  return (
    <div class="w-full container lg:px-10 px-4">
      <Header
        title={title ?? "Forró"}
        fontSize={fontSize ?? "Large"}
        alignment={layout ?? "left"}
      />
      <p class="py-4" dangerouslySetInnerHTML={{ __html: text }} />
      <div class="flex justify-center w-full my-5">
        <a href="/institucional/forro">
          <Button class="bg-black text-white hover:text-black">
            Leia mais
          </Button>
        </a>
      </div>
      <div>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          width={750}
          height={500}
          class="object-cover w-full h-full"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 py-5 w-full">
          {secundaryImages.map((img) => (
            (
              <Image
                src={img.src}
                alt={img.alt}
                width={320}
                height={210}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}
