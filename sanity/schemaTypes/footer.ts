
import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer Section",
  type: "document",

  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "madebytrie",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Professional Role",
      type: "string",
      initialValue: "Independent Web Designer & Developer",
    }),

    defineField({
      name: "description",
      title: "Brand Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Based in Indonesia · Working Worldwide",
    }),

    defineField({
      name: "availabilityTitle",
      title: "Availability Title",
      type: "string",
      initialValue: "Availability",
    }),

    defineField({
      name: "availabilityDescription",
      title: "Availability Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "availabilityLinkText",
      title: "Availability Link Text",
      type: "string",
      initialValue: "Start a Project",
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),

    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    }),

    defineField({
      name: "creatorName",
      title: "Creator Name",
      type: "string",
      initialValue: "Trie",
    }),
  ],

  preview: {
    select: {
      title: "brandName",
      subtitle: "role",
    },
  },
});
