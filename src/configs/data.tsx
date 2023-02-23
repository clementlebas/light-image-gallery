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
        name: "image (8).png",
        description:
          "Prompt: Gigantic moon shadow, space, man walking, outrun color",
      },
      {
        name: "image (11).png",
        description:
          "Prompt: Katsuhiro Otomo, galaxy of the Large Magellanic Clouds",
      },
      {
        name: "image (12).png",
        description:
          "Prompt: Aurora borealis, light, 3 small majestic dove flying, night, view from the mountains, minimalism, astrophotography",
      },
      {
        name: "image (1).png",
        description:
          "Prompt: Hubble, robot, space, stars, galaxy, infinite, outrun style",
      },
      {
        name: "image (6).png",
        description:
          "Prompt: Magic realism, spaceship with human in it, mars in background, close to a black hole, Clockwork Orange",
      },
      {
        name: "image (7).png",
        description: "Prompt: Hubble, robot, space, stars, galaxy, infinite",
      },
      {
        name: "image (2).png",
        description: "Prompt: Milky way in fire, neon, darkness",
      },
      {
        name: "image (4).png",
        description:
          "Prompt: Astral light, star birth, bunch of color, dark space, HDR",
      },
      {
        name: "image (13).png",
        description:
          "Prompt: sJeffrey Lebowski astronaut, Embarassed, meteorite crashing, movie poster, Panfuturism",
      },
      {
        name: "image (5).png",
        description:
          "Prompt: Extreme nuclear fission from earth, space, green and yellow light, explosion, acid green, romanticism",
      },
      {
        name: "image (17).png",
        description:
          "Prompt: Astrophotography, lion with open jaw, roars, horsehead nebulae, Concept art",
      },
      {
        name: "image (15).png",
        description:
          "Prompt: Pioneer plaque discovered by aliens, confused, space, Surrealism",
      },
      {
        name: "image (9).png",
        description: "Prompt: Blender the iron giant",
      },
      {
        name: "image (10).png",
        description: "Prompt: Woodblock, Hokusai, space, star birth",
      },
    ],
  },
  {
    name: "Tech",
    images: [
      {
        name: "image (3).png",
        description:
          "Prompt: circular logo, new technology, laptop, Pixel Art, outrun colors",
      },
      {
        name: "image (2).png",
        description:
          "Prompt: circular logo, new technology, laptop, Pixel Art, outrun colorsPrompt: circular logo, new technology, laptop, Pixel Art, outrun colors",
      },
    ],
  },
];
