export interface LinkItem {
  id: string;
  labelTh: string;
  labelEn: string;
  url: string;
  icon: string;
  color: string;
  featured: boolean;
}

export interface ServiceItem {
  icon: string;
  labelTh: string;
  labelEn: string;
  price: string;
}

export interface Config {
  profile: {
    name: string;
    nameEn: string;
    role: string;
    roleEn: string;
    bio: string;
    bioEn: string;
    avatar: string;
    verified: boolean;
    fastwork: string;
  };
  theme: Record<string, string>;
  links: LinkItem[];
  services: ServiceItem[];
}
