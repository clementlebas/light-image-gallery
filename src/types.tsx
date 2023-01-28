export type Data = {
  header?: Header;
  gallery?: Gallery;
  backgroundColor?: BackgroundColor;
};

export type BackgroundColor = {
  lightMode?: string;
  darkMode?: string;
};

export type Gallery = {
  category?: Category[];
};

export type Category = {
  name?: string;
  images?: Image[];
  params?: Params;
};

export type Image = {
  source?: string;
  description?: string;
};

export type Params = {
  row?: number;
  column?: number;
};

export type Header = {
  title?: string;
  description?: string;
  profile?: string;
  disabled?: boolean;
};
