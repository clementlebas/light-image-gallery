export type Header = {
  title?: string;
  description?: string;
  image?: string;
  disabled: boolean;
};

export type Social = {
  github?: string;
  twitter?: string;
  linkedin?: string;
  disabled: boolean;
};

export type Galleries = Gallery[];

export type Gallery = {
  name?: string;
  images?: Image[];
};

export type Image = {
  name: string;
  description?: string;
};
