// @ts-check
import { validateProfile } from "./validate.mjs";
/** @type {import("./types.ts").Profile} */
export const profile = {
  name: "Your Name",
  role: "Developer",
  title: "Software Developer",
  organization: "",
  location: "",
  email: "",
  githubUsername: "",
  summary: "A short introduction to your work and interests.",
  focus: [],
  home: {
    introduction: "Building useful things and sharing what I learn.",
    description: "Projects and writing by Your Name.",
  },
  about: {
    description: "About the author of this site.",
    lead: "Introduce yourself here.",
    paragraphs: [],
  },
  experiences: [],
  skills: [],
  education: { institution: "", description: "" },
};
validateProfile(profile);
