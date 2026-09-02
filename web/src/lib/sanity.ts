import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "jyv9xdem",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

/** Site-wide settings, e.g. the homepage hero image. */
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    heroImage,
    heroImageAlt
  }
`;

/** All muffins, most-loved first, for the homepage grid. */
export const MUFFINS_QUERY = `
  *[_type == "muffin"] | order(isBestSeller desc, order asc) {
    _id,
    name,
    "slug": slug.current,
    price,
    shortDescription,
    "imageUrl": image.asset->url,
    "categoryTitle": category->title,
    isBestSeller,
    isFeatured,
    tags
  }
`;

/** Single muffin by slug, for a product detail page. */
export const MUFFIN_BY_SLUG_QUERY = `
  *[_type == "muffin" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    price,
    description,
    shortDescription,
    "imageUrl": image.asset->url,
    "galleryUrls": gallery[].asset->url,
    "categoryTitle": category->title,
    ingredients,
    allergens,
    isBestSeller,
    isFeatured,
    stock
  }
`;