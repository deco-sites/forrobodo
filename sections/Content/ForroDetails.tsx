import Image from "apps/website/components/Image.tsx";
import Button from "../../components/ui/Button.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Header from "../../components/ui/SectionHeader.tsx";

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

export default function ForroDetails() {
  return (
    <div class="w-full container lg:px-10 px-4 py-8">
      <Button class="btn btn-ghost items-center hover:bg-transparent px-0">
        <a href="/" class="flex items-center text-lg">
          <Icon id="ChevronLeft" size={18} strokeWidth={2} class="mr-3" />
          Voltar
        </a>
      </Button>
      <div>
        <Header
          title="Roda de Forró de Rabeca"
          fontSize="Large"
          alignment="left"
        />
        <div class="bg-black max-w-[250px] text-center mt-6 text-white text-lg py-3 px-4 rounded-lg">
          Rio de Janeiro, RJ
        </div>
        <div class="mt-8">
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
        <p class="mt-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <div class="border border-black rounded-lg flex flex-col w-full mx-auto max-w-sm mt-8">
          <div class="flex flex-row border-b border-black px-4 py-3 gap-4 items-center">
            <h2 class="text-lg font-semibold">Recorrência</h2>
            <span>
              Toda Quarta-feira
            </span>
          </div>
          <div class="flex flex-row border-b border-black bg-gray-100 px-4 py-3 gap-4 items-center">
            <h2 class="text-lg font-semibold">Horário</h2>
            <span>
              20:00 - 00:00
            </span>
          </div>
          <div class="flex flex-row border-b border-black px-4 py-3 gap-4">
            <h2 class="text-lg font-semibold">Local</h2>
            <span>
              Armazém do Campo<br />
              <span class="text-gray-400 italic">
                Av. Men de SG, 135 - Centro<br />
                Rio de Janeiro - RJ<br />
              </span>
              <a href="/" class="underline text-blue-400">
                Abrir no Google Maps
              </a>
            </span>
          </div>
          <div class="flex flex-row border-b border-black px-4 py-3 bg-gray-100 gap-4 items-center">
            <h2 class="text-lg font-semibold">Ingressos</h2>
            <span>
              Contribuição consciente
            </span>
          </div>
          <div class="flex flex-row border-black px-4 py-3 gap-4 items-center">
            <h2 class="text-lg font-semibold">Instagram</h2>
            <a href="/blog" class="text-blue-400">
              @forroderebacarj
            </a>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <h2 class="text-xl font-medium">Achou algum dado incompleto?</h2>
          <Button class="bg-black text-white mt-4 hover:text-black w-full max-w-[150px]">
            Sugerir Mudança
          </Button>
        </div>
      </div>
    </div>
  );
}
