
import { defineField, defineType } from "sanity";

export const testimonialsSectionType = defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",

  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "Client Feedback",
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
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "sectionLabel",
    },
  },
});
