
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Project Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
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
      name: "theme",
      title: "Visual Theme",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "light",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Client Project", value: "client" },
          { title: "Self-initiated Redesign", value: "self-initiated" },
          { title: "Concept Project", value: "concept" },
        ],
      },
    }),

    defineField({
      name: "liveUrl",
      title: "Live Project URL",
      type: "url",
    }),
    defineField({
  name: "toolsUsed",
  title: "Tools Used",
  description: "Add the tools and technologies used in this project.",
  type: "array",
  of: [
    {
      type: "string",
    },
  ],
  options: {
    layout: "tags",
  },
}),

    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
});
