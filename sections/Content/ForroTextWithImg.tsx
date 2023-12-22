import Header from "$store/components/ui/SectionHeader.tsx";
import Button from "../../components/ui/Button.tsx";
import Image from "apps/website/components/Image.tsx";

const images = [
  {
    src:
      "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/historia-do-forro.jpeg",
    alt: "imagem do forró",
  },
  {
    src:
      "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/historia-do-forro.jpeg",
    alt: "imagem do forró",
  },
  {
    src:
      "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/historia-do-forro.jpeg",
    alt: "imagem do forró",
  },
  {
    src:
      "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/historia-do-forro.jpeg",
    alt: "imagem do forró",
  },
  {
    src:
      "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/historia-do-forro.jpeg",
    alt: "imagem do forró",
  },
];

export default function ForroTextWithImg() {
  return (
    <div class="w-full container lg:px-10 px-4">
      <Header
        title="Forró"
        fontSize="Large"
        alignment="left"
      />
      <p class="py-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
        random text. It has roots in a piece of classical Latin literature from
        45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature, discovered
        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </p>
      <div class="flex justify-center w-full my-5">
        <Button class="bg-black text-white hover:text-black">
          Leia mais
        </Button>
      </div>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={750}
          height={500}
          class="object-cover w-full h-full"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 py-5 w-full">
          {images.map((img, index) => (
            index > 0
              ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={320}
                  height={210}
                />
              )
              : null
          ))}
        </div>
      </div>
    </div>
  );
}
