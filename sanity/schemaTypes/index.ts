
import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./project";
import { serviceType } from "./service";
import { servicesSectionType } from "./servicesSection";
import { aboutType } from "./about";
import { trustType } from "./trust";
import { processType } from "./process";
import { heroType } from "./hero";
import { testimonialType } from "./testimonial";
import { testimonialsSectionType } from "./testimonialsSection";
import { contactType } from "./contact";
import { footerType } from "./footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    
    heroType,
    projectType,
    serviceType,
    servicesSectionType,
    aboutType,
    trustType,
    processType,
    testimonialType,
    testimonialsSectionType,
    contactType,
    footerType,

  ],
};

