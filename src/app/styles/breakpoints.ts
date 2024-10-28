interface MediaSizes {
  XS: string;
  SM: string;
  MD: string;
  LG: string;
  XL: string;
}

const maxXS = 599;
const minSM = 600;
const minMD = 961;
const minLG = 1440;
const minXL = 1920;

export const media: MediaSizes = {
  XS: `@media (max-width: ${maxXS}px)`,
  SM: `@media (min-width: ${minSM}px)`,
  MD: `@media (min-width: ${minMD}px)`,
  LG: `@media (min-width: ${minLG}px)`,
  XL: `@media (min-width: ${minXL}px)`,
};

export const mediaContained: MediaSizes = {
  XS: `@media (max-width: ${maxXS}px)`,
  SM: `@media (min-width: ${minSM}px) and (max-width: ${minMD - 1}px)`,
  MD: `@media (min-width: ${minMD}px) and (max-width: ${minLG - 1}px)`,
  LG: `@media (min-width: ${minLG}px) and (max-width: ${minXL - 1}px)`,
  XL: `@media (min-width: ${minXL}px)`,
};
