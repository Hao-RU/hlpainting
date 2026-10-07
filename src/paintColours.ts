// Dulux Australia whites used as section backgrounds, each labelled with a paint chip.
// Hex values: dulux.com.au (Vivid White, Lexicon Quarter) and paintdb.com (the rest).
// Screen colours are approximations of the real paint.
export interface PaintColour {
  name: string;
  code: string;
  hex: string;
}

const VIVID_WHITE: PaintColour = { name: 'Vivid White', code: 'SW1G1', hex: '#F7F8F4' };
const LEXICON_QUARTER: PaintColour = { name: 'Lexicon Quarter', code: 'SW1E1', hex: '#F1F2F1' };
const LEXICON_HALF: PaintColour = { name: 'Lexicon Half', code: 'SW1G2', hex: '#EDEFEE' };
const WHITE_ON_WHITE: PaintColour = { name: 'White on White', code: 'SW1E2', hex: '#ECEFF0' };
const LEXICON: PaintColour = { name: 'Lexicon', code: 'SW1E3', hex: '#E7EAEA' };

// Which white each section is "painted" in, ordered by popularity: the top five
// from Dulux's "Most Loved Whites" list (dulux.com.au/mostlovedwhites), in the
// order Dulux shows them, running down the page, then repeating the top two.
export const WALLS = {
  intro: VIVID_WHITE,
  services: WHITE_ON_WHITE,
  process: LEXICON_QUARTER,
  gallery: LEXICON_HALF,
  testimonials: LEXICON,
  quote: VIVID_WHITE,
  faq: WHITE_ON_WHITE,
} satisfies Record<string, PaintColour>;
