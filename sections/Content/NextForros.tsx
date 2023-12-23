import Icon from "../../components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Button from "deco-sites/forrobodo/components/ui/Button.tsx";

export interface City {
  label: string;
  state: string;
}

export interface Forro {
  label: string;
  location: string;
  time: string;
}

export interface Props {
  title?: string;
  fontSize?: "Large" | "Normal";
  layout?: "left" | "center";
  cities: City[];
  forros: Forro[];
}

export default function NextForros(
  { title, fontSize, layout, cities, forros }: Props,
) {
  return (
    <div class="w-full container lg:px-10 px-4">
      <Header
        title={title ?? "Próximos forrós"}
        fontSize={fontSize ?? "Large"}
        alignment={layout ?? "center"}
      />
      <div class="w-full flex justify-center py-4">
        <details class="dropdown w-full max-w-[200px]">
          <summary class="btn px-0 md:px-2 items-center flex flex-row md:flex-nowrap border justify-normal bg-transparent hover:bg-transparent uppercase text-base font-normal">
            <div class="flex flex-row items-center">
              <span class="mr-5 capitalize">
                {cities[0].label}, {cities[0].state}
              </span>
            </div>
            <Icon
              id="ChevronDown"
              size={15}
              strokeWidth={2}
              fill="none"
            />
          </summary>
          <ul class="p-2 shadow menu w-auto dropdown-content z-[1] bg-base-100 rounded-box">
            {cities.map((city) => {
              return (
                <button class="cursor-pointer m-1 flex justify-center items-center uppercase gap-2 h-8 px-0 flex-row flex-nowrap border-none hover:border-none bg-transparent hover:bg-transparent w-max text-base font-normal">
                  {city.label}, {city.state}
                </button>
              );
            })}
          </ul>
        </details>
      </div>
      <div>
        <Header
          title="Terça-feira (20/12)"
          fontSize="Normal"
          alignment="center"
        />
        <ul class="py-4 gap-2 flex flex-col w-full">
          {forros.map((forro) => (
            <li class="border border-black justify-between rounded-lg flex flex-row w-full max-w-md items-center mx-auto">
              <div class="flex flex-col py-4 px-4">
                <p class="font-medium">{forro.label}</p>
                <p class="text-gray-400 italic">
                  {forro.location} - {forro.time}
                </p>
              </div>
              <a href="/" class="px-2 py-2 bg-black text-white rounded-lg mx-4">
                + info
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class="w-full flex justify-center my-6">
        <Button class="bg-black text-white hover:text-black">
          + Descubra mais 23 forrós
        </Button>
      </div>
    </div>
  );
}
