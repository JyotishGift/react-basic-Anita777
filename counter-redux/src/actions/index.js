
import { DEC, INC, CLR, UNIC } from './types';

export const increment = () => {
  return { type: INC };
};

export const decrement = () => {
  return { type: DEC };
};

export const clear = () => {
  return { type: CLR };
};

export const unicue = () => {
  return { type: UNIC };
};