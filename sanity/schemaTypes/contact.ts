
import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",

  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "Get In Touch",
    }),

    defineField({
      name: "heading",
      title: "Heading",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Let's Talk",
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "sectionLabel",
    },
  },
});
