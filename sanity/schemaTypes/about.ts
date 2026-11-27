
import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About",
  type: "document",

  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "About / The Person Behind",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heading",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    
defineField({
  name: "highlightText",
  title: "Highlight Text",
  type: "string",
  description: "Optional. Leave empty for a plain heading.",
}),
    defineField({
      name: "paragraphOne",
      title: "First Paragraph",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "paragraphTwo",
      title: "Second Paragraph",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "highlights",
      title: "Profile Highlights",
      type: "array",
      of: [
        defineField({
          name: "highlight",
          title: "Highlight",
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    }),

    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "heading",
      media: "profileImage",
    },
  },
});
