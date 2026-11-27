
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",

  fields: [
    defineField({
      name: "availabilityText",
      title: "Availability Text",
      type: "string",
    }),

    defineField({
      name: "headingLineOne",
      title: "Heading - First Line",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "headingLineTwo",
      title: "Heading - Second Line",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "headingLineThree",
      title: "Heading - Third Line",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "highlightText",
      title: "Highlight Text",
      type: "string",
      description: "Optional. Enter any word or phrase from the heading.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    }),

    defineField({
      name: "primaryButtonLink",
      title: "Primary Button Link",
      type: "string",
    }),

    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    }),

    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button Link",
      type: "string",
    }),

    defineField({
      name: "bottomLeftText",
      title: "Bottom Left Text",
      type: "string",
    }),

    defineField({
      name: "bottomRightText",
      title: "Bottom Right Text",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "headingLineOne",
      subtitle: "availabilityText",
    },
  },
});
