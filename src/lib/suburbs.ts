// The suburbs Polaris works in, close to its Macquarie Park base, each with
// its own page at /painters/<slug>. Every page says something true and local
// about the homes there and what that means for painting them, so it is
// worth reading on its own and is not a copy of the next one.

export interface Suburb {
  slug: string;
  name: string;
  /** the area a client would say it is in */
  region: 'Ryde' | 'Upper North Shore' | 'Lower North Shore' | 'Hills and Epping';
  /** one line for the page's meta description */
  summary: string;
  /** what the homes are like */
  homes: string;
  /** what that means for the job */
  approach: string;
  /** the kinds of work we see most there */
  focus: string[];
  nearby: string[];
}

export const SUBURBS: Suburb[] = [
  {
    slug: 'macquarie-park',
    name: 'Macquarie Park',
    region: 'Ryde',
    summary: 'Interior and exterior painting for apartments, townhouses and homes in Macquarie Park, from a painter based right here.',
    homes: 'Macquarie Park is home base for us. Around the business park and the station it is mostly apartments and townhouses, with older brick family homes on the quieter streets towards North Ryde and Marsfield.',
    approach: 'In apartments the work is about being tidy and quick to clear the lift and the common areas, and about matching what the building already has. In townhouses it is usually a full interior refresh between tenants or before a sale, done in a few days with the furniture protected and moved back.',
    focus: ['Apartment and townhouse interiors', 'Pre-sale and end-of-lease repaints', 'Strata common areas'],
    nearby: ['north-ryde', 'ryde', 'epping', 'eastwood'],
  },
  {
    slug: 'north-ryde',
    name: 'North Ryde',
    region: 'Ryde',
    summary: 'House painting in North Ryde for post-war brick homes, family renovations and townhouses, with preparation done properly.',
    homes: 'North Ryde is full of solid post-war and 1960s brick homes on good-sized blocks, plenty of them now being extended or renovated, alongside newer townhouses.',
    approach: 'Older homes here often have decades of paint on the timber windows, eaves and fascias. That is where the preparation goes: scraping and sanding back what is failing, priming bare timber and filling properly, so the new coats hold instead of lifting again in a few years.',
    focus: ['Exterior trims, eaves and fascias', 'Whole-house interiors', 'Renovation and extension painting'],
    nearby: ['macquarie-park', 'ryde', 'lane-cove', 'gladesville'],
  },
  {
    slug: 'ryde',
    name: 'Ryde',
    region: 'Ryde',
    summary: 'Painting in Ryde for older cottages, brick family homes and apartments, interior and exterior.',
    homes: 'Ryde is one of the older parts of Sydney, and it shows in the mix: weatherboard and brick cottages, mid-century family homes, and newer apartments around Top Ryde.',
    approach: 'With older cottages we check what is under the current paint before quoting, because surfaces that have been painted many times need a different preparation and primer to the newer homes nearby. With apartments it is clean, careful interior work around people living in the building.',
    focus: ['Cottage exteriors and weatherboards', 'Interiors for family homes', 'Apartments and strata'],
    nearby: ['north-ryde', 'eastwood', 'gladesville', 'macquarie-park'],
  },
  {
    slug: 'eastwood',
    name: 'Eastwood',
    region: 'Ryde',
    summary: 'House painters in Eastwood for brick homes, interwar cottages and new builds, with a free colour consultation.',
    homes: 'Eastwood has established brick homes and interwar cottages on the streets around the station, plus a good number of knockdown rebuilds and newer townhouses.',
    approach: 'New builds and rebuilds need fresh render and plaster sealed and painted right the first time. The older homes are more about careful repairs to cracks and timber before the colour goes on. Either way you get a written scope that lists every area, so you know exactly what is being done.',
    focus: ['New build and rebuild painting', 'Interior repaints', 'Render and exterior walls'],
    nearby: ['epping', 'ryde', 'macquarie-park', 'beecroft'],
  },
  {
    slug: 'epping',
    name: 'Epping',
    region: 'Hills and Epping',
    summary: 'Painting in Epping for Federation and interwar homes, family houses and apartments near the station.',
    homes: 'Epping has a lot of character: Federation and interwar homes on leafy streets, some of them in heritage conservation areas, and a growing apartment precinct around the station.',
    approach: 'For older homes we can help you choose a colour scheme that suits the period of the house, and we prepare the original timber and joinery with care rather than just painting over it. For apartments it is tidy, quick interior work.',
    focus: ['Period home exteriors', 'Heritage-style colour schemes', 'Apartment interiors'],
    nearby: ['beecroft', 'eastwood', 'pennant-hills', 'macquarie-park'],
  },
  {
    slug: 'beecroft',
    name: 'Beecroft',
    region: 'Hills and Epping',
    summary: 'Painting for Beecroft homes, from Federation and Arts and Crafts houses to family homes on leafy blocks.',
    homes: 'Beecroft is green and established, with Federation and Arts and Crafts houses, many in the Beecroft–Cheltenham heritage conservation area, and family homes on big leafy blocks.',
    approach: 'Lots of trees means shade and damp on the south side of a house, so we treat mould before painting and use products made to resist it. On period homes, the detail work on verandahs, fretwork and windows is where the time goes, and where the result shows.',
    focus: ['Weatherboard and timber exteriors', 'Verandahs and period detail', 'Mould treatment and prep'],
    nearby: ['epping', 'pennant-hills', 'eastwood', 'pymble'],
  },
  {
    slug: 'pennant-hills',
    name: 'Pennant Hills',
    region: 'Hills and Epping',
    summary: 'House painting in Pennant Hills for family homes on large, leafy blocks, inside and out.',
    homes: 'Pennant Hills is mostly 1960s to 1980s family homes on large blocks, many backing onto bushland, with plenty of exposed timber in decks, eaves and pergolas.',
    approach: 'Bush blocks are hard on timber and paint. We look closely at fascias, barge boards and decks for soft spots, fix what needs fixing before quoting the painting, and use exterior systems suited to the shade and the moisture.',
    focus: ['Exterior repaints', 'Timber fascias, eaves and decks', 'Interior refreshes'],
    nearby: ['beecroft', 'epping', 'wahroonga', 'turramurra'],
  },
  {
    slug: 'pymble',
    name: 'Pymble',
    region: 'Upper North Shore',
    summary: 'Premium house painting in Pymble and West Pymble for large family homes, period houses and mid-century designs.',
    homes: 'Pymble and West Pymble have some of the larger homes on the North Shore, from Federation houses to mid-century architect designs, set in gardens and bush.',
    approach: 'Big homes need a plan: which parts are done first, how the house is kept liveable while we work, and how the garden is protected. You get a written scope and an honest estimate of time, and the same person on site from start to finish.',
    focus: ['Large home exteriors', 'Full interior repaints', 'Feature walls and detailed joinery'],
    nearby: ['turramurra', 'gordon', 'st-ives', 'killara'],
  },
  {
    slug: 'turramurra',
    name: 'Turramurra',
    region: 'Upper North Shore',
    summary: 'House painters in Turramurra for timber and brick homes on leafy blocks, with careful preparation.',
    homes: 'Turramurra is leafy and established, with timber and brick homes, a lot of them on sloping blocks close to bushland.',
    approach: 'Shade, leaf litter and damp mean paint on the low and shaded parts of a house wears faster. We clean down, treat mould and prime properly before the topcoats, so the finish lasts on the hard-to-reach sides as well as the street front.',
    focus: ['Exterior repaints', 'Mould treatment and wash-down', 'Interior painting'],
    nearby: ['wahroonga', 'pymble', 'st-ives', 'pennant-hills'],
  },
  {
    slug: 'wahroonga',
    name: 'Wahroonga',
    region: 'Upper North Shore',
    summary: 'Premium painting in Wahroonga for Federation and Arts and Crafts homes, large family houses and heritage detail.',
    homes: 'Wahroonga is known for grand Federation and Arts and Crafts homes, wide verandahs and established gardens, with much of the suburb in heritage conservation areas.',
    approach: 'Homes like these deserve a colour scheme that respects their period and preparation that protects the original timber and leadlight. We take the time on the detail: fretwork, brackets, window sashes and doors, cut in by hand.',
    focus: ['Heritage and period exteriors', 'Detailed timber and joinery', 'Colour schemes for period homes'],
    nearby: ['turramurra', 'pymble', 'pennant-hills', 'st-ives'],
  },
  {
    slug: 'st-ives',
    name: 'St Ives',
    region: 'Upper North Shore',
    summary: 'House painting in St Ives for family homes on large blocks, interior and exterior repaints.',
    homes: 'St Ives is mostly roomy 1960s to 1980s family homes on large blocks, many of them due for a refresh inside and out, along with newer rebuilds.',
    approach: 'A lot of these homes have dated colour schemes that a well-chosen modern palette transforms. We can talk colours with you on site at no charge, then give you a written scope that covers every room and surface.',
    focus: ['Whole-house interiors', 'Exterior colour updates', 'Rebuild and renovation painting'],
    nearby: ['pymble', 'turramurra', 'gordon', 'killara'],
  },
  {
    slug: 'gordon',
    name: 'Gordon',
    region: 'Upper North Shore',
    summary: 'Painting in Gordon for Federation homes, family houses and apartments, with a 5-year workmanship warranty.',
    homes: 'Gordon mixes Federation and interwar homes on leafy streets with apartments close to the station and the shops.',
    approach: 'For houses, preparation is everything: older timber, plaster and render need the right repairs and primers before the colour. For apartments, we work cleanly around the building and its residents.',
    focus: ['Period home interiors and exteriors', 'Apartment repaints', 'Plaster and crack repairs'],
    nearby: ['killara', 'pymble', 'st-ives', 'lindfield'],
  },
  {
    slug: 'killara',
    name: 'Killara',
    region: 'Upper North Shore',
    summary: 'Premium house painting in Killara for Federation and interwar homes in heritage areas, inside and out.',
    homes: 'Killara is one of the most established parts of the North Shore, with Federation and interwar homes on wide, leafy streets, much of it in heritage conservation areas.',
    approach: 'Painting a home like this is mostly preparation and detail: original timber windows, decorative plaster, picture rails and joinery. We take it slowly where it matters, and help you settle on colours that suit the house and its street.',
    focus: ['Heritage home exteriors', 'Decorative plaster and joinery', 'Interior repaints'],
    nearby: ['lindfield', 'gordon', 'roseville', 'pymble'],
  },
  {
    slug: 'lindfield',
    name: 'Lindfield',
    region: 'Upper North Shore',
    summary: 'House painters in Lindfield for Federation homes, Californian bungalows and family houses.',
    homes: 'Lindfield has a lovely mix of Federation homes and Californian bungalows, many within heritage conservation areas, and family homes on quiet leafy streets.',
    approach: 'Bungalows and Federation homes have a lot of exposed timber in eaves, gables and verandahs. We repair and prime it properly before painting, and pay attention to the trim colours that make these houses look right.',
    focus: ['Bungalow and Federation exteriors', 'Trim and joinery colours', 'Interior repaints'],
    nearby: ['killara', 'roseville', 'gordon', 'chatswood'],
  },
  {
    slug: 'roseville',
    name: 'Roseville',
    region: 'Upper North Shore',
    summary: 'Painting in Roseville for Federation homes and family houses, with careful preparation and a free colour consultation.',
    homes: 'Roseville is quiet and established, with Federation and interwar homes, much of it in heritage conservation areas, and well-kept family homes.',
    approach: 'We spend the time on preparation that these older homes need and keep the work tidy for neighbours on close streets. You get a written scope and a 5-year workmanship warranty.',
    focus: ['Period home exteriors', 'Interior repaints', 'Windows, doors and joinery'],
    nearby: ['lindfield', 'chatswood', 'killara', 'lane-cove'],
  },
  {
    slug: 'chatswood',
    name: 'Chatswood',
    region: 'Lower North Shore',
    summary: 'House and apartment painters in Chatswood, from Federation homes and bungalows to high-rise apartments and strata.',
    homes: 'Chatswood has two sides: high-rise apartments and strata buildings around the centre, and streets of Federation homes and Californian bungalows a few blocks away, several of them in heritage conservation areas.',
    approach: 'In apartments we work cleanly and quickly around residents and building rules. On the houses, it is careful preparation of older timber and plaster and colours that suit the period. Either way, you deal with the owner directly.',
    focus: ['Apartment and strata painting', 'Federation and bungalow exteriors', 'Interior repaints'],
    nearby: ['roseville', 'lane-cove', 'lindfield', 'north-ryde'],
  },
  {
    slug: 'lane-cove',
    name: 'Lane Cove',
    region: 'Lower North Shore',
    summary: 'Painting in Lane Cove for family homes near the bush and the river, and for apartments and strata.',
    homes: 'Lane Cove has established family homes on leafy streets running down to the river and bushland, plus apartments and townhouses around the village.',
    approach: 'Homes close to the river and the bush deal with shade and damp, so we wash down, treat mould and use exterior coatings suited to it. Apartments and townhouses get tidy, efficient interior work.',
    focus: ['Exterior repaints and mould treatment', 'Townhouse and apartment interiors', 'Decks and timber'],
    nearby: ['chatswood', 'north-ryde', 'hunters-hill', 'roseville'],
  },
  {
    slug: 'hunters-hill',
    name: 'Hunters Hill',
    region: 'Lower North Shore',
    summary: 'Premium painting in Hunters Hill for heritage and sandstone homes, with preparation and colour done with care.',
    homes: 'Hunters Hill is known for its sandstone cottages, heritage homes and harbourside streets. Much of the suburb is heritage protected, and the homes are treated with real care by their owners.',
    approach: 'Heritage homes need a painter who prepares rather than covers up, uses the right products on old timber and render, and helps choose colours that suit the house. We can work with the period of your home and talk through the scheme on site before you commit.',
    focus: ['Heritage home exteriors', 'Period colour schemes', 'Detailed interior work'],
    nearby: ['gladesville', 'lane-cove', 'ryde', 'north-ryde'],
  },
  {
    slug: 'gladesville',
    name: 'Gladesville',
    region: 'Ryde',
    summary: 'House painters in Gladesville for Federation cottages, family homes and apartments near the river.',
    homes: 'Gladesville has Federation and interwar cottages, brick family homes on the streets running down to the river, and apartments along Victoria Road.',
    approach: 'Older cottages here often have timber that has been painted many times; we strip back what is failing and prime before painting so it lasts. For apartments, we keep the job tidy and quick.',
    focus: ['Cottage exteriors', 'Interior repaints', 'Apartment painting'],
    nearby: ['hunters-hill', 'ryde', 'north-ryde', 'lane-cove'],
  },
];

export const AREAS_PAGE = '/painters';

export const suburbPath = (s: Suburb) => `${AREAS_PAGE}/${s.slug}`;

export function suburbBySlug(slug: string): Suburb | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}

export const REGIONS: Suburb['region'][] = ['Ryde', 'Lower North Shore', 'Upper North Shore', 'Hills and Epping'];

/** The page a path names: the areas list, one suburb, or neither. */
export function areaPageFor(path: string): { kind: 'areas' } | { kind: 'suburb'; suburb: Suburb } | null {
  if (path === AREAS_PAGE) return { kind: 'areas' };
  if (!path.startsWith(`${AREAS_PAGE}/`)) return null;
  const s = suburbBySlug(path.slice(AREAS_PAGE.length + 1));
  return s ? { kind: 'suburb', suburb: s } : null;
}

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

/** Title and description for each prerendered page. */
export function prerenderPages(): PageMeta[] {
  return [
    {
      path: AREAS_PAGE,
      title: 'Painters near Macquarie Park | Ryde, North Shore & Epping | Polaris Painting',
      description:
        'House and apartment painting across Ryde, the North Shore and Epping, from a Macquarie Park painter. Free written quotes and a 5-year workmanship warranty.',
    },
    ...SUBURBS.map((s) => ({
      path: suburbPath(s),
      title: `Painters ${s.name} | House & Apartment Painting | Polaris Painting`,
      description: `${s.summary} Free written quotes, 5-year workmanship warranty.`,
    })),
  ];
}
