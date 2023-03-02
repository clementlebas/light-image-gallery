import { Header, Social, Galleries } from "../types";

export const header: Header = {
  title: "Hey there, I'm Billy Crawford.",
  description: "Welcome to my images gallery !",
  image: require("./profile.png"),
  disabled: false,
};

export const social: Social = {
  github: "https://github.com/billycrawford",
  twitter: "https://twitter.com/billycrawford",
  linkedin: "https://www.linkedin.com/in/billycrawford",
  disabled: false,
};

export const galleries: Galleries = [
  {
    category: "Category name",
    images: [
      {
        name: "image.png", // Important: specify the extension
        description: "Description of image 1",
      }, // duplicate image object for more
    ],
  }, // duplicate gallery object for more
];
