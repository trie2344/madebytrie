
import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services",
  type: "document",

  fields: [
    defineField({
      name: "number",
      title: "Service Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "detail",
      title: "Target Client / Detail",
      type: "string",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "number",
    },
  },
});
