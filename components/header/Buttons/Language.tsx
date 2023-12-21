import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Country {
  countryLabel: string;
  languageAbbreviation: string;
  countryImg: {
    img: ImageWidget;
    alt: string;
  };
}

export default function LanguageSwitcher({ countryFlag }: {
  countryFlag: Country[];
}) {
  return (
    <>
      <details class="dropdown">
        <summary class="btn px-0 md:px-2 flex flex-row md:flex-nowrap border-none hover:border-none justify-normal bg-transparent hover:bg-transparent uppercase text-base font-normal">
          <div class="flex flex-row items-center">
            <Image
              src={countryFlag[0].countryImg.img}
              alt={countryFlag[0].countryImg.alt}
              width={19}
              height={12}
              class="w-[19px] h-3 mr-3"
            />
            <span>{countryFlag[0].countryLabel}</span>
          </div>
          <Icon
            id="ChevronDown"
            size={11}
            strokeWidth={2}
            fill="none"
          />
        </summary>
        <ul class="p-2 shadow menu w-auto dropdown-content z-[1] bg-base-100 rounded-box">
          {countryFlag.map((iten) => {
            return (
              <button class="cursor-pointer m-1 flex justify-center items-center uppercase gap-2 h-8 px-0 flex-row flex-nowrap border-none hover:border-none bg-transparent hover:bg-transparent w-max text-base font-normal">
                <Image
                  src={iten.countryImg.img}
                  alt={iten.countryImg.alt}
                  width={19}
                  height={12}
                  loading={"eager"}
                />
                {iten.countryLabel}
              </button>
            );
          })}
        </ul>
      </details>
    </>
  );
}
