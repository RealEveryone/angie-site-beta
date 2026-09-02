// schemas/muffin.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "muffin",
  title: "Muffin",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "details", title: "Details" },
    { name: "shop", title: "Shop" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "content",
      description: "e.g. Blueberry Bliss, Double Chocolate, Salted Caramel Crumble",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "string",
      group: "content",
      description: "One line shown on the product card (max ~60 characters).",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "description",
      title: "Full description",
      type: "text",
      group: "content",
      rows: 4,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      group: "content",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Best Seller", value: "best-seller" },
          { title: "New", value: "new" },
          { title: "Seasonal", value: "seasonal" },
          { title: "Vegan", value: "vegan" },
          { title: "Gluten-Free", value: "gluten-free" },
          { title: "Nut-Free", value: "nut-free" },
        ],
      },
    }),

    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery images",
      type: "array",
      group: "media",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "flavorProfile",
      title: "Flavor profile",
      type: "string",
      group: "details",
      description: "e.g. Sweet & fruity, Rich & chocolatey, Warm & spiced",
    }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      group: "details",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "allergens",
      title: "Allergens",
      type: "array",
      group: "details",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Gluten", value: "gluten" },
          { title: "Dairy", value: "dairy" },
          { title: "Eggs", value: "eggs" },
          { title: "Nuts", value: "nuts" },
          { title: "Soy", value: "soy" },
        ],
      },
    }),
    defineField({
      name: "nutritionalInfo",
      title: "Nutritional info",
      type: "object",
      group: "details",
      fields: [
        defineField({ name: "calories", title: "Calories", type: "number" }),
        defineField({ name: "servingSize", title: "Serving size", type: "string" }),
      ],
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      group: "shop",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "stock",
      title: "In stock",
      type: "number",
      group: "shop",
      initialValue: 0,
    }),
    defineField({
      name: "isBestSeller",
      title: "Show in \"Most Loved Flavors\"",
      type: "boolean",
      group: "shop",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on homepage hero",
      type: "boolean",
      group: "shop",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      group: "shop",
      description: "Lower numbers show first in the grid.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "flavorProfile",
      media: "image",
    },
  },
});