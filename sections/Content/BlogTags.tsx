import Header from "$store/components/ui/SectionHeader.tsx";

export interface Tag {
  label: string;
  href: string;
}

export interface Props {
  title?: string;
  description?: string;
  tags: Tag[];
  layout?: "center" | "left";
}

function BlogTags(props: Props) {
  const {
    title,
    description,
    tags,
    layout,
  } = props;

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-12 lg:py-10 lg:px-10">
      <Header
        title={title}
        description={description}
        alignment={layout ? layout : "center"}
      />
      <div class="w-full items-center">
        {tags.map((tag) => (
          <div class="pr-4 inline-block align-middle mt-3">
            <a
              href={tag.href}
              class="btn btn-square rounded-lg px-4 bg-black hover:text-black text-white flex w-full h-full items-center justify-center"
            >
              {tag.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogTags;
