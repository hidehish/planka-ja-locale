import fromPairs from 'lodash/fromPairs';

import cs from './cs/embed';
import de from './de/embed';
import en from './en/embed';
import es from './es/embed';
import fr from './fr/embed';
import pl from './pl/embed';
import ru from './ru/embed';
import ja from './ja/embed';

const localePairs = [
  ['cs', cs],
  ['de', de],
  ['en', en],
  ['es', es],
  ['fr', fr],
  ['pl', pl],
  ['ru', ru],
  ['ja', ja],
];

export const languages = localePairs.map((locale) => locale[0]);

export const embedLocales = fromPairs(localePairs);
