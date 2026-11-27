import { defineField, defineType } from "sanity";

export const servicesSectionType = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",

  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "What I Can Do For You",
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
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "sectionLabel",
    },
  },
});