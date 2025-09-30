export interface List {
  id: string
  title: string
  description: string
  owner: string
  country: string
  placeCount: number
  coverImage: string
}

export interface Destination {
  id: string
  title: string
  description: string
  image: string
  owner: string
  country: string
  rating: number
  reviewCount: number
}

export const mockLists: List[] = [
  {
    id: '1',
    title: 'Go Goa',
    description: 'Beautiful beaches and vibrant nightlife in Goa',
    owner: 'anoopkp',
    country: 'India',
    placeCount: 15,
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400'
  },
  {
    id: '2',
    title: 'Sacred South Indian Destinations',
    description: 'Spiritual journey through South Indian temples',
    owner: 'shivanirajput',
    country: 'India',
    placeCount: 8,
    coverImage: 'https://images.unsplash.com/photo-1588614959060-4d144f28b207?w=400'
  },
  {
    id: '3',
    title: 'South Indian Road Trip Highlights',
    description: 'Amazing road trip destinations in South India',
    owner: 'athuvishu',
    country: 'India',
    placeCount: 12,
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400'
  },
  {
    id: '4',
    title: 'Ho Chi Minh City Exploration Guide',
    description: 'Complete guide to exploring Ho Chi Minh City',
    owner: 'aaryann',
    country: 'Vietnam',
    placeCount: 20,
    coverImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400'
  },
  {
    id: '5',
    title: 'Himalayan Adventure Treks',
    description: 'Discover the thrill of trekking in the Himalayas',
    owner: 'trekkingguy',
    country: 'India',
    placeCount: 10,
    coverImage: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b2?w=400'
  },
  {
    id: '6',
    title: 'Kerala Backwaters Escape',
    description: 'Cruise through the tranquil backwaters of Kerala',
    owner: 'meenaraj',
    country: 'India',
    placeCount: 6,
    coverImage: 'https://images.unsplash.com/photo-1601297183305-6f7aa98f71f7?w=400'
  },
  {
    id: '7',
    title: 'European Capitals Tour',
    description: 'A curated list of must-see European capitals',
    owner: 'eurotraveller',
    country: 'Europe',
    placeCount: 14,
    coverImage: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400'
  },
  {
    id: '8',
    title: 'Beaches of Thailand',
    description: 'Explore the pristine beaches of Thailand',
    owner: 'mariah',
    country: 'Thailand',
    placeCount: 9,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400'
  },
  {
    id: '9',
    title: 'Rajasthan Heritage',
    description: 'Journey through the forts and palaces of Rajasthan',
    owner: 'arvind',
    country: 'India',
    placeCount: 11,
    coverImage: 'https://images.unsplash.com/photo-1584956863564-ffb994bcb597?w=400'
  },
  {
    id: '10',
    title: 'Tokyo City Guide',
    description: 'Best spots to experience modern and traditional Tokyo',
    owner: 'yuki',
    country: 'Japan',
    placeCount: 18,
    coverImage: 'https://images.unsplash.com/photo-1518544889280-cf8e6fc5a3c9?w=400'
  },
  {
    id: '11',
    title: 'New York Must Visits',
    description: 'Top attractions in the Big Apple',
    owner: 'johndoe',
    country: 'USA',
    placeCount: 13,
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400'
  },
  {
    id: '12',
    title: 'Australian Outback Journey',
    description: 'Explore the rugged beauty of Australia’s outback',
    owner: 'sarah',
    country: 'Australia',
    placeCount: 7,
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400'
  }
]

export const featuredDestinations: Destination[] = [
  {
    id: '1',
    title: 'Kothaligad Fort',
    description: 'A centuries-old hillside fort near Karjat, Maharashtra, beckons hikers with a blend of history and natural beauty.',
    image: 'https://d3iq0vcqnt2b9k.cloudfront.net/google-places/65a127a1f96aa10a03f0f3b4/photos/medium/65a127a1f96aa10a03f0f3b4-1748256619611',
    owner: 'drashtivmistry',
    country: 'India',
    rating: 4.6,
    reviewCount: 1803
  },
  {
    id: '2',
    title: 'Harihar Fort',
    description: 'Historic fort with challenging trek and panoramic views',
    image: 'https://d3iq0vcqnt2b9k.cloudfront.net/google-places/666ae8bc57f6f0dc787e1cc7/photos/medium/666ae8bc57f6f0dc787e1cc7-1718282428521',
    owner: 'drashtivmistry',
    country: 'India',
    rating: 4.7,
    reviewCount: 4721
  },
  {
    id: '3',
    title: 'Gorakhgad Fort',
    description: 'Beautiful trekking destination with ancient architecture',
    image: 'https://d3iq0vcqnt2b9k.cloudfront.net/google-places/666ae8bb57f6f0dc787e1cc6/photos/medium/666ae8bb57f6f0dc787e1cc6-1718282428597',
    owner: 'drashtivmistry',
    country: 'India',
    rating: 4.7,
    reviewCount: 1344
  },
  {
    id: '4',
    title: 'Taj Mahal',
    description: 'Iconic symbol of love and Mughal architecture in Agra',
    image: 'https://images.unsplash.com/photo-1570169460693-8c91e198adf1?w=400',
    owner: 'arvind',
    country: 'India',
    rating: 4.9,
    reviewCount: 128934
  },
  {
    id: '5',
    title: 'Eiffel Tower',
    description: 'World-famous Paris landmark with breathtaking views',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400',
    owner: 'lucie',
    country: 'France',
    rating: 4.8,
    reviewCount: 342109
  },
  {
    id: '6',
    title: 'Grand Canyon',
    description: 'Majestic natural wonder carved by the Colorado River',
    image: 'https://images.unsplash.com/photo-1508264165352-258a6c05b1a7?w=400',
    owner: 'mike',
    country: 'USA',
    rating: 4.9,
    reviewCount: 210985
  },
  {
    id: '7',
    title: 'Sydney Opera House',
    description: 'Famous performing arts center with unique architecture',
    image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?w=400',
    owner: 'sarah',
    country: 'Australia',
    rating: 4.7,
    reviewCount: 98763
  },
  {
    id: '8',
    title: 'Santorini',
    description: 'Picturesque Greek island with whitewashed houses and sunsets',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    owner: 'nikos',
    country: 'Greece',
    rating: 4.8,
    reviewCount: 73219
  },
  {
    id: '9',
    title: 'Kyoto Temples',
    description: 'Historic temples and shrines in the heart of Japan',
    image: 'https://images.unsplash.com/photo-1552635206-14f1a0a7b7b2?w=400',
    owner: 'yuki',
    country: 'Japan',
    rating: 4.7,
    reviewCount: 56412
  },
  {
    id: '10',
    title: 'Machu Picchu',
    description: 'Ancient Incan city nestled high in the Andes mountains',
    image: 'https://images.unsplash.com/photo-1505672678657-cc7037095e2c?w=400',
    owner: 'sofia',
    country: 'Peru',
    rating: 4.9,
    reviewCount: 65321
  },
  {
    id: '11',
    title: 'Dubai Burj Khalifa',
    description: 'Tallest skyscraper in the world with observation decks',
    image: 'https://images.unsplash.com/photo-1543340713-8b1f71d2db2d?w=400',
    owner: 'ahmed',
    country: 'UAE',
    rating: 4.8,
    reviewCount: 145632
  },
  {
    id: '12',
    title: 'Niagara Falls',
    description: 'Massive waterfalls straddling the US-Canada border',
    image: 'https://images.unsplash.com/photo-1516905041604-7935af78fdae?w=400',
    owner: 'mike',
    country: 'USA/Canada',
    rating: 4.9,
    reviewCount: 192384
  }
]