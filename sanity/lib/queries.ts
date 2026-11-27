
import { defineQuery } from "next-sanity";


export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(_createdAt asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    description,
    theme,
    status,
    liveUrl,
    toolsUsed,
    image {
      asset,
      hotspot,
      crop
    }
  }
`);



export const SERVICES_QUERY = defineQuery(`
  *[_type == "service" && isActive == true] | order(order asc) {
    _id,
    number,
    title,
    description,
    detail,
    order
  }
`);
export const SERVICES_SECTION_QUERY = defineQuery(`
  *[_type == "servicesSection"][0] {
    _id,
    sectionLabel,
    heading,
    highlightText
  }
`);

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"][0] {
    _id,
    sectionLabel,
heading,
highlightText,
paragraphOne,
    paragraphTwo,
    profileImage {
      alt,
      asset
    },
    highlights[] {
      value,
      label
    },
    capabilities,
    ctaText,
    ctaLink
  }
`);


export const TRUST_QUERY = defineQuery(`
  *[_type == "trust"][0] {
    _id,
    sectionLabel,
    heading,
highlightText,
    introDescription,
    trustItems[] {
      number,
      title,
      description,
      size
    },
    ctaLabel,
    ctaHeading,
    ctaHighlight,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
    bottomStatements
  }
`);


export const PROCESS_QUERY = defineQuery(`
  *[_type == "process"][0] {
    _id,
    sectionLabel,
    heading,
highlightText,
    introDescription,
    steps[] {
      number,
      title,
      description
    },
    bottomStatements
  }
`);


export const HERO_QUERY = defineQuery(`
  *[_type == "hero"][0] {
    _id,
    availabilityText,
    headingLineOne,
    headingLineTwo,
    headingLineThree,
    highlightText,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    bottomLeftText,
    bottomRightText
  }
`);



export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial" && isActive == true] | order(order asc) {
    _id,
    quote,
    clientName,
    clientRole,
    clientImage {
      asset,
      hotspot,
      crop
    },
    order
  }
    
`);
export const TESTIMONIALS_SECTION_QUERY = defineQuery(`
  *[_type == "testimonialsSection"][0] {
    _id,
    sectionLabel,
    heading,
    highlightText,
    description
  }
`);
export const CONTACT_QUERY = defineQuery(`
  *[_type == "contact"][0] {
    _id,
    sectionLabel,
    heading,
    highlightText,
    description,
    email,
    buttonText
  }
`);
export const FOOTER_QUERY = defineQuery(`
  *[_type == "footer"][0] {
    _id,
    brandName,
    role,
    description,
    location,
    availabilityTitle,
    availabilityDescription,
    availabilityLinkText,
    email,
    copyrightText,
    creatorName
  }
`);