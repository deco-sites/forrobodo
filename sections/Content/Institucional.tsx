import Header from "$store/components/ui/SectionHeader.tsx";
import Button from "../../components/ui/Button.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";

export interface Post {
  src?: ImageWidget;
  alt?: string;
  /** @format html */
  label?: string;
  /** @format html */
  text: string;
}

export interface Props {
  title?: string;
  fontSize?: "Large" | "Normal";
  layout?: "left" | "center";
  blogPost: Post[];
}

export default function Institucional(
  { title, fontSize, layout, blogPost }: Props,
) {
  return (
    <div class="w-full container lg:px-10 px-4 py-8">
      <Button class="btn btn-ghost items-center hover:bg-transparent px-0">
        <a href="/" class="flex items-center text-lg">
          <Icon id="ChevronLeft" size={18} strokeWidth={2} class="mr-3" />
          Voltar
        </a>
      </Button>
      <div class="mt-5">
        <Header
          title={title ?? "Blog"}
          fontSize={fontSize ?? "Large"}
          alignment={layout ?? "left"}
        />
        {blogPost.map((post) => (
          <div class="py-6">
            {post.src
              ? (
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={750}
                  height={500}
                  class="object-cover w-full h-full"
                />
              )
              : null}
            {post.label && (
              <h2
                class="text-2xl font-medium mt-3"
                dangerouslySetInnerHTML={{ __html: post.label }}
              />
            )}
            <p
              class="py-4"
              dangerouslySetInnerHTML={{ __html: post.text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
