import { Header, Social, Galleries } from "../types";

export const header: Header = {
  title: "Hey, I'm Clément Le Bas.",
  description: "Welcome to my AI image gallery generated with MidJourney !",
  image: require("./profile.png"),
  disabled: false,
};

export const social: Social = {
  github: "https://github.com/clementlebas",
  twitter: "https://twitter.com/clemitodev",
  linkedin: "https://www.linkedin.com/in/clement-lebas/",
  disabled: false,
};

export const galleries: Galleries = [
  {
    name: "Gallery 1",
    images: [
      {
        name: "image (19).png",
        description:
          "Prompt: circular logo, new technology, laptop, Pixel Art, outrun colors",
      },
      {
        name: "image (2).png",
        description:
          "Prompt: circular logo, new technology, laptop, Pixel Art, outrun colorsPrompt: circular logo, new technology, laptop, Pixel Art, outrun colors",
      },
      {
        name: "image (3).png",
        description: "Prompt: image (3)",
      },
      {
        name: "image (4).png",
        description: "Prompt: ",
      },
      {
        name: "image (5).png",
        description: "Prompt: ",
      },
      {
        name: "image (6).png",
        description: "Prompt: ",
      },
      {
        name: "image (7).png",
        description: "Prompt: ",
      },
      {
        name: "image (8).png",
        description: "Prompt: ",
      },
      {
        name: "image (9).png",
        description: "Prompt: ",
      },
      {
        name: "image (10).png",
        description: "Prompt: ",
      },
      {
        name: "image (11).png",
        description: "Prompt: ",
      },
      {
        name: "image (12).png",
        description: "Prompt: ",
      },
      {
        name: "image (13).png",
        description: "Prompt: ",
      },
      {
        name: "image (13).png",
        description: "Prompt: ",
      },
    ],
  },
  {
    name: "Gallery 2",
    images: [
      {
        name: "image (17).png",
        description: "Prompt: ",
      },
      {
        name: "image (18).png",
        description: "Prompt: ",
      },
      {
        name: "image (1).png",
        description: "Prompt: ",
      },
      {
        name: "image (20).png",
        description: "Prompt: ",
      },
      {
        name: "image (21).png",
        description: "Prompt: ",
      },
    ],
  },
];
