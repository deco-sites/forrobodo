import Header from "$store/components/ui/SectionHeader.tsx";
import Button from "../../components/ui/Button.tsx";
import Image from "apps/website/components/Image.tsx";

const images = [
  {
    src:
      "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/historia-do-forro.jpeg",
    alt: "imagem do forró",
  },
];

export default function BlogTextWithImg() {
  return (
    <div class="w-full container lg:px-10 px-4 py-8">
      <Header
        title="Blog"
        fontSize="Large"
        alignment="left"
      />
      <div class="py-6">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={750}
          height={500}
          class="object-cover w-full h-full"
        />
        <h2 class="text-2xl font-medium mt-3">
          Dançar forró faz bem para saúde?
        </h2>
        <p class="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={750}
          height={500}
          class="object-cover w-full h-full"
        />
        <h2 class="text-2xl font-medium mt-3">
          Dançar forró faz bem para saúde?
        </h2>
        <p class="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div class="flex justify-center w-full my-5">
        <Button class="bg-black text-white hover:text-black">
          Ver mais posts
        </Button>
      </div>
    </div>
  );
}
