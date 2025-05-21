import { ElementType } from 'react';
import BrikzContainer from './container';
import BrikzPage from './page';
import BrikzSection from './section';
import BrikzHero from './hero';

export const BRIKZ_COMPONENTS: Record<string, ElementType> = {
  page: BrikzPage,
  container: BrikzContainer,
  section: BrikzSection,
  hero: BrikzHero,
};
