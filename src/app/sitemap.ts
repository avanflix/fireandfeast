import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.fireandfeast.in",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.fireandfeast.in/menu",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.fireandfeast.in/gallery",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.fireandfeast.in/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}