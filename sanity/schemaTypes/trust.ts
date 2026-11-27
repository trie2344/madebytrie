
import { defineField, defineType } from "sanity";

export const trustType = defineType({
  name: "trust",
  title: "Trust & Benefits",
  type: "document",

  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "Why Work With Me",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
  name: "heading",
  title: "Heading",
  type: "string",
  description: "Enter the complete section heading.",
  validation: (Rule) => Rule.required(),
}),

defineField({
  name: "highlightText",
  title: "Highlight Text",
  type: "string",
  description: "Enter the exact word or phrase you want to highlight.",
}),
    defineField({
      name: "introDescription",
      title: "Introduction Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "trustItems",
      title: "Trust Cards",
      type: "array",
      of: [
        defineField({
          name: "trustItem",
          title: "Trust Item",
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "size",
              title: "Card Width",
              type: "string",
              options: {
                list: [
                  { title: "1 Column", value: "lg:col-span-1" },
                  { title: "2 Columns", value: "lg:col-span-2" },
                ],
                layout: "radio",
              },
              initialValue: "lg:col-span-1",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "number",
            },
          },
        }),
      ],
    }),

    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    }),

    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
    }),

    defineField({
      name: "ctaHighlight",
      title: "CTA Highlight",
      type: "string",
    }),

    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
    }),

    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "string",
    }),

    defineField({
      name: "bottomStatements",
      title: "Bottom Statements",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
  select: {
    title: "sectionLabel",
    subtitle: "heading",
  },
},
});
