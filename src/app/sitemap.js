import { siteConfig } from "@/data/site";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
