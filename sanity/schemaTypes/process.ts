
import { defineField, defineType } from "sanity";

export const processType = defineType({
  name: "process",
  title: "Process",
  type: "document",

  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "How I Work",
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
  description: "Optional. Leave empty for a plain heading.",
}),

    defineField({
      name: "introDescription",
      title: "Introduction Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        defineField({
          name: "step",
          title: "Step",
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Step Number",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Step Title",
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
          ],
          preview: {
  select: {
    title: "sectionLabel",
    subtitle: "heading",
  },
},
        }),
      ],
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
      subtitle: "headingLineOne",
    },
  },
});
