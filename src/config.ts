import { INavbarItem } from "./types/general.types";

// ROUTES
export const paths = {
  home: "/",
  projects: { list: "/projects" },
  blogs: { list: "/blogs" },
  services: { list: "/services" },
  contactUs: "contact-us",
};
// NAVBAR CONFIG
export const NAVBAR: INavbarItem[] = [
  {
    id: 1,
    title: "Home",
    link: paths.home,
  },
  {
    id: 2,
    title: "Projects",
    link: paths.projects.list,
  },
  {
    id: 3,
    title: "Blogs",
    link: paths.blogs.list,
  },
  {
    id: 4,
    title: "Services",
    link: paths.services.list,
  },
  {
    id: 5,
    title: "Contact Us",
    link: paths.contactUs,
  },
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    icon: "spexup-instagram",
    title: "Instagram",
    link: process.env.SOCIAL_MEDIA_INSTAGRAM,
  },
  {
    id: 2,
    icon: "spexup-facebook",
    title: "Facebook",
    link: process.env.SOCIAL_MEDIA_FACEBOOK,
  },
  {
    id: 3,
    icon: "spexup-dribbble",
    title: "Dribble",
    link: process.env.SOCIAL_MEDIA_DRIBBLE,
  },
  {
    id: 4,
    icon: "spexup-Threads",
    title: "Threads",
    link: process.env.SOCIAL_MEDIA_THREADS,
  },
  {
    id: 5,
    icon: "spexup-linkedin",
    title: "LinkedIn",
    link: process.env.SOCIAL_MEDIA_LINKEDIN,
  },
  {
    id: 6,
    icon: "spexup-youtube",
    title: "Youtube",
    link: process.env.SOCIAL_MEDIA_YOUTUBE,
  },
  {
    id: 7,
    icon: "spexup-X",
    title: "Twitter",
    link: process.env.SOCIAL_MEDIA_TWITTER,
  },
];
