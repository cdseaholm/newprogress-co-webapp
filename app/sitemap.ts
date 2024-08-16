import { getBaseUrl } from "@/utils/helpers/helpers";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: `daily`
    },
    {
      url: `${getBaseUrl()}/harbor`,
      lastModified: new Date().toISOString(),
      priority: 0.7,
      changeFrequency: `weekly`
    },
    {
      url: `${getBaseUrl()}/npapps`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: `daily`
    },
    {
      url: `${getBaseUrl()}/webdevelopment`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: `weekly`
    },
    {
      url: `${getBaseUrl()}/contact`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: `weekly`
    },
  ]
}