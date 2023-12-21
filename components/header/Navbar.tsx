import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import LanguageSwitcher from "./Buttons/Language.tsx";
import type { Country } from "./Buttons/Language.tsx";

function Navbar({ items, searchbar, logo, countryFlag }: {
  items: SiteNavigationElement[];
  searchbar?: SearchbarProps;
  logo?: { src: string; alt: string };
  countryFlag: Country[];
}) {
  const platform = usePlatform();

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full px-2 gap-2"
      >
        <MenuButton />

        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image src={logo.src} alt={logo.alt} width={126} height={25} />
          </a>
        )}
        <LanguageSwitcher countryFlag={countryFlag} />
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row min-h-full py-5 justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
        <div class="flex-none w-44">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 py-3 w-[160px]"
            >
              <Image src={logo.src} alt={logo.alt} width={126} height={25} />
            </a>
          )}
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none flex items-center justify-end gap-1 pr-0 w-auto">
          <LanguageSwitcher countryFlag={countryFlag} />
          {
            /* <SearchButton />
          <Searchbar searchbar={searchbar} /> */
          }
        </div>
      </div>
    </>
  );
}

export default Navbar;
