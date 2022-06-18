import { CardProps } from '../components/Card';
import { cards } from '../data/cards';

const keyGen = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const duplicateArray = <T>(array: T[]): T[] => {
  return array.concat(array);
};

export const sortArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

export const regenerateCard = (cards: CardProps[]): CardProps[] => {
  return cards.map((card) => ({ ...card, id: keyGen() }));
};

export const duplicateRegenerateSortArray = (
  cards: CardProps[],
): CardProps[] => {
  return sortArray(regenerateCard(duplicateArray(cards)));
};

console.log(duplicateRegenerateSortArray(cards));
