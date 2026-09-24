export type MegaMenuLink = {
  label: string;
  href: string;
  description?: string;
};

export type MegaMenuColumn = {
  heading: string;
  links: MegaMenuLink[];
};

export type MegaMenu = {
  key: string;
  label: string;
  width: number;
  columns: MegaMenuColumn[];
};

export type Language = {
  code: string;
  name: string;
  flag: string;
  flagCode: string;
};