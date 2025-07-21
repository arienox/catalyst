import { faker } from '@faker-js/faker';
import { PortfolioItem } from '../types';

const tattooStyles = ['Neo-Traditional', 'Japanese Irezumi', 'Blackwork', 'Realism', 'Geometric', 'Fine Line'];

export const tattooData: PortfolioItem[] = Array.from({ length: 15 }, (_, i) => ({
  id: faker.string.uuid(),
  title: faker.word.words({ count: { min: 2, max: 4 } }).split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  style: faker.helpers.arrayElement(tattooStyles),
  imageUrl: `https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/101010/F5F5F5/png?text=${encodeURIComponent(faker.lorem.words(2))}`,
}));

export const paintingData: PortfolioItem[] = [];
