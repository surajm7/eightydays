
export interface Place {
  place_id: string
  name: string
  description: string
  rating: number
  review_count: number
  categories: Array<{
    name: string
    is_primary: number
  }>
  cover_media: {
    small: string
    medium: string
    large: string
  }
  open_hours_text: string
}

// data/mockData.ts
export interface List {
  _id: string
  title: string
  short_description: string
  creator: {
    user_id: string
    username: string
    first_name: string
    last_name: string
    profile_photo: string
  }
  stats: {
    view_count: number
    place_count: number
    saved_count: number
    comment_count: number
  }
  cover_photo: {
    small: string
    medium: string
    large: string
  }
  // Add gallery images array
  gallery_images: Array<{
    id: string
    small: string
    medium: string
    large: string
    caption?: string
  }>
  countries: Array<{
    name: string
    country_code: string
  }>
  created_date: string
  updated_date: string
}

// Update the mockLists with gallery images for ALL lists
export const mockLists: List[] = [
  {
    _id: '1',
    title: 'Hiking In The Sahyadris',
    short_description: 'forts, hills, hikes and trails',
    creator: {
      user_id: '1',
      username: 'drashtivmistry',
      first_name: 'Drashti',
      last_name: 'Mistry',
      profile_photo: 'https://picsum.photos/100/100?random=1'
    },
    stats: {
      view_count: 827,
      place_count: 63,
      saved_count: 24,
      comment_count: 1
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=1',
      medium: 'https://picsum.photos/400/300?random=1',
      large: 'https://picsum.photos/400/300?random=1'
    },
    gallery_images: [
      {
        id: '1-1',
        small: 'https://picsum.photos/300/200?random=101',
        medium: 'https://picsum.photos/600/400?random=101',
        large: 'https://picsum.photos/1200/800?random=101',
        caption: 'Mountain view from the top'
      },
      {
        id: '1-2',
        small: 'https://picsum.photos/300/200?random=102',
        medium: 'https://picsum.photos/600/400?random=102',
        large: 'https://picsum.photos/1200/800?random=102',
        caption: 'Ancient fort ruins'
      },
      {
        id: '1-3',
        small: 'https://picsum.photos/300/200?random=103',
        medium: 'https://picsum.photos/600/400?random=103',
        large: 'https://picsum.photos/1200/800?random=103',
        caption: 'Trekking trail'
      },
      {
        id: '1-4',
        small: 'https://picsum.photos/300/200?random=104',
        medium: 'https://picsum.photos/600/400?random=104',
        large: 'https://picsum.photos/1200/800?random=104',
        caption: 'Sunset point'
      }
    ],
    countries: [
      {
        name: 'India',
        country_code: 'IN'
      }
    ],
    created_date: 'Created 1 year ago',
    updated_date: 'Updated 5 months ago'
  },
  {
    _id: '2',
    title: 'Go Goa',
    short_description: 'Beautiful beaches and vibrant nightlife',
    creator: {
      user_id: '2',
      username: 'anoopkp',
      first_name: 'Anoop',
      last_name: 'KP',
      profile_photo: 'https://picsum.photos/100/100?random=2'
    },
    stats: {
      view_count: 450,
      place_count: 15,
      saved_count: 12,
      comment_count: 3
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=2',
      medium: 'https://picsum.photos/400/300?random=2',
      large: 'https://picsum.photos/400/300?random=2'
    },
    gallery_images: [
      {
        id: '2-1',
        small: 'https://picsum.photos/300/200?random=201',
        medium: 'https://picsum.photos/600/400?random=201',
        large: 'https://picsum.photos/1200/800?random=201',
        caption: 'Beautiful beach sunset'
      },
      {
        id: '2-2',
        small: 'https://picsum.photos/300/200?random=202',
        medium: 'https://picsum.photos/600/400?random=202',
        large: 'https://picsum.photos/1200/800?random=202',
        caption: 'Beach party'
      },
      {
        id: '2-3',
        small: 'https://picsum.photos/300/200?random=203',
        medium: 'https://picsum.photos/600/400?random=203',
        large: 'https://picsum.photos/1200/800?random=203',
        caption: 'Portuguese architecture'
      }
    ],
    countries: [
      {
        name: 'India',
        country_code: 'IN'
      }
    ],
    created_date: 'Created 6 months ago',
    updated_date: 'Updated 1 month ago'
  },
  {
    _id: '3',
    title: 'Sacred South Indian Destinations',
    short_description: 'Spiritual journey through South Indian temples',
    creator: {
      user_id: '3',
      username: 'shivanirajput',
      first_name: 'Shivani',
      last_name: 'Rajput',
      profile_photo: 'https://picsum.photos/100/100?random=3'
    },
    stats: {
      view_count: 320,
      place_count: 8,
      saved_count: 18,
      comment_count: 2
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=3',
      medium: 'https://picsum.photos/400/300?random=3',
      large: 'https://picsum.photos/400/300?random=3'
    },
    gallery_images: [
      {
        id: '3-1',
        small: 'https://picsum.photos/300/200?random=301',
        medium: 'https://picsum.photos/600/400?random=301',
        large: 'https://picsum.photos/1200/800?random=301',
        caption: 'Ancient temple architecture'
      },
      {
        id: '3-2',
        small: 'https://picsum.photos/300/200?random=302',
        medium: 'https://picsum.photos/600/400?random=302',
        large: 'https://picsum.photos/1200/800?random=302',
        caption: 'Intricate carvings'
      },
      {
        id: '3-3',
        small: 'https://picsum.photos/300/200?random=303',
        medium: 'https://picsum.photos/600/400?random=303',
        large: 'https://picsum.photos/1200/800?random=303',
        caption: 'Temple rituals'
      },
      {
        id: '3-4',
        small: 'https://picsum.photos/300/200?random=304',
        medium: 'https://picsum.photos/600/400?random=304',
        large: 'https://picsum.photos/1200/800?random=304',
        caption: 'Spiritual ceremonies'
      },
      {
        id: '3-5',
        small: 'https://picsum.photos/300/200?random=305',
        medium: 'https://picsum.photos/600/400?random=305',
        large: 'https://picsum.photos/1200/800?random=305',
        caption: 'Traditional architecture'
      }
    ],
    countries: [
      {
        name: 'India',
        country_code: 'IN'
      }
    ],
    created_date: 'Created 8 months ago',
    updated_date: 'Updated 2 months ago'
  },
  {
    _id: '4',
    title: 'South Indian Road Trip Highlights',
    short_description: 'Amazing road trip destinations in South India',
    creator: {
      user_id: '4',
      username: 'athuvishu',
      first_name: 'Athul',
      last_name: 'Vishnu',
      profile_photo: 'https://picsum.photos/100/100?random=4'
    },
    stats: {
      view_count: 289,
      place_count: 12,
      saved_count: 15,
      comment_count: 4
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=4',
      medium: 'https://picsum.photos/400/300?random=4',
      large: 'https://picsum.photos/400/300?random=4'
    },
    gallery_images: [
      {
        id: '4-1',
        small: 'https://picsum.photos/300/200?random=401',
        medium: 'https://picsum.photos/600/400?random=401',
        large: 'https://picsum.photos/1200/800?random=401',
        caption: 'Scenic coastal road'
      },
      {
        id: '4-2',
        small: 'https://picsum.photos/300/200?random=402',
        medium: 'https://picsum.photos/600/400?random=402',
        large: 'https://picsum.photos/1200/800?random=402',
        caption: 'Hill station view'
      },
      {
        id: '4-3',
        small: 'https://picsum.photos/300/200?random=403',
        medium: 'https://picsum.photos/600/400?random=403',
        large: 'https://picsum.photos/1200/800?random=403',
        caption: 'Roadside waterfalls'
      }
    ],
    countries: [
      {
        name: 'India',
        country_code: 'IN'
      }
    ],
    created_date: 'Created 7 months ago',
    updated_date: 'Updated 3 weeks ago'
  },
  {
    _id: '5',
    title: 'Ho Chi Minh City Exploration Guide',
    short_description: 'Complete guide to exploring Ho Chi Minh City',
    creator: {
      user_id: '5',
      username: 'aaryann',
      first_name: 'Aaryan',
      last_name: 'Nair',
      profile_photo: 'https://picsum.photos/100/100?random=5'
    },
    stats: {
      view_count: 512,
      place_count: 20,
      saved_count: 32,
      comment_count: 7
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=5',
      medium: 'https://picsum.photos/400/300?random=5',
      large: 'https://picsum.photos/400/300?random=5'
    },
    gallery_images: [
      {
        id: '5-1',
        small: 'https://picsum.photos/300/200?random=501',
        medium: 'https://picsum.photos/600/400?random=501',
        large: 'https://picsum.photos/1200/800?random=501',
        caption: 'City skyline at night'
      },
      {
        id: '5-2',
        small: 'https://picsum.photos/300/200?random=502',
        medium: 'https://picsum.photos/600/400?random=502',
        large: 'https://picsum.photos/1200/800?random=502',
        caption: 'Street food market'
      },
      {
        id: '5-3',
        small: 'https://picsum.photos/300/200?random=503',
        medium: 'https://picsum.photos/600/400?random=503',
        large: 'https://picsum.photos/1200/800?random=503',
        caption: 'Historic landmarks'
      },
      {
        id: '5-4',
        small: 'https://picsum.photos/300/200?random=504',
        medium: 'https://picsum.photos/600/400?random=504',
        large: 'https://picsum.photos/1200/800?random=504',
        caption: 'Local markets'
      }
    ],
    countries: [
      {
        name: 'Vietnam',
        country_code: 'VN'
      }
    ],
    created_date: 'Created 4 months ago',
    updated_date: 'Updated 2 weeks ago'
  },
  {
    _id: '6',
    title: 'Himalayan Adventure Treks',
    short_description: 'Discover the thrill of trekking in the Himalayas',
    creator: {
      user_id: '6',
      username: 'trekkingguy',
      first_name: 'Rahul',
      last_name: 'Sharma',
      profile_photo: 'https://picsum.photos/100/100?random=6'
    },
    stats: {
      view_count: 678,
      place_count: 10,
      saved_count: 45,
      comment_count: 9
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=6',
      medium: 'https://picsum.photos/400/300?random=6',
      large: 'https://picsum.photos/400/300?random=6'
    },
    gallery_images: [
      {
        id: '6-1',
        small: 'https://picsum.photos/300/200?random=601',
        medium: 'https://picsum.photos/600/400?random=601',
        large: 'https://picsum.photos/1200/800?random=601',
        caption: 'Snow-capped peaks'
      },
      {
        id: '6-2',
        small: 'https://picsum.photos/300/200?random=602',
        medium: 'https://picsum.photos/600/400?random=602',
        large: 'https://picsum.photos/1200/800?random=602',
        caption: 'Mountain villages'
      },
      {
        id: '6-3',
        small: 'https://picsum.photos/300/200?random=603',
        medium: 'https://picsum.photos/600/400?random=603',
        large: 'https://picsum.photos/1200/800?random=603',
        caption: 'Alpine lakes'
      }
    ],
    countries: [
      {
        name: 'India',
        country_code: 'IN'
      }
    ],
    created_date: 'Created 1 year ago',
    updated_date: 'Updated 1 month ago'
  },
  {
    _id: '7',
    title: 'Kerala Backwaters Escape',
    short_description: 'Cruise through the tranquil backwaters of Kerala',
    creator: {
      user_id: '7',
      username: 'meenaraj',
      first_name: 'Meena',
      last_name: 'Raj',
      profile_photo: 'https://picsum.photos/100/100?random=7'
    },
    stats: {
      view_count: 423,
      place_count: 6,
      saved_count: 28,
      comment_count: 5
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=7',
      medium: 'https://picsum.photos/400/300?random=7',
      large: 'https://picsum.photos/400/300?random=7'
    },
    gallery_images: [
      {
        id: '7-1',
        small: 'https://picsum.photos/300/200?random=701',
        medium: 'https://picsum.photos/600/400?random=701',
        large: 'https://picsum.photos/1200/800?random=701',
        caption: 'Houseboat cruise'
      },
      {
        id: '7-2',
        small: 'https://picsum.photos/300/200?random=702',
        medium: 'https://picsum.photos/600/400?random=702',
        large: 'https://picsum.photos/1200/800?random=702',
        caption: 'Palm-fringed canals'
      },
      {
        id: '7-3',
        small: 'https://picsum.photos/300/200?random=703',
        medium: 'https://picsum.photos/600/400?random=703',
        large: 'https://picsum.photos/1200/800?random=703',
        caption: 'Traditional village life'
      }
    ],
    countries: [
      {
        name: 'India',
        country_code: 'IN'
      }
    ],
    created_date: 'Created 9 months ago',
    updated_date: 'Updated 2 months ago'
  },
  {
    _id: '8',
    title: 'European Capitals Tour',
    short_description: 'A curated list of must-see European capitals',
    creator: {
      user_id: '8',
      username: 'eurotraveller',
      first_name: 'Priya',
      last_name: 'Patel',
      profile_photo: 'https://picsum.photos/100/100?random=8'
    },
    stats: {
      view_count: 891,
      place_count: 14,
      saved_count: 67,
      comment_count: 12
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=8',
      medium: 'https://picsum.photos/400/300?random=8',
      large: 'https://picsum.photos/400/300?random=8'
    },
    gallery_images: [
      {
        id: '8-1',
        small: 'https://picsum.photos/300/200?random=801',
        medium: 'https://picsum.photos/600/400?random=801',
        large: 'https://picsum.photos/1200/800?random=801',
        caption: 'Paris cityscape'
      },
      {
        id: '8-2',
        small: 'https://picsum.photos/300/200?random=802',
        medium: 'https://picsum.photos/600/400?random=802',
        large: 'https://picsum.photos/1200/800?random=802',
        caption: 'Rome historic center'
      },
      {
        id: '8-3',
        small: 'https://picsum.photos/300/200?random=803',
        medium: 'https://picsum.photos/600/400?random=803',
        large: 'https://picsum.photos/1200/800?random=803',
        caption: 'London landmarks'
      },
      {
        id: '8-4',
        small: 'https://picsum.photos/300/200?random=804',
        medium: 'https://picsum.photos/600/400?random=804',
        large: 'https://picsum.photos/1200/800?random=804',
        caption: 'Berlin modern architecture'
      }
    ],
    countries: [
      {
        name: 'Europe',
        country_code: 'EU'
      }
    ],
    created_date: 'Created 1 year ago',
    updated_date: 'Updated 3 months ago'
  },
  {
    _id: '9',
    title: 'Beaches of Thailand',
    short_description: 'Explore the pristine beaches of Thailand',
    creator: {
      user_id: '9',
      username: 'mariah',
      first_name: 'Maria',
      last_name: 'Hernandez',
      profile_photo: 'https://picsum.photos/100/100?random=9'
    },
    stats: {
      view_count: 567,
      place_count: 9,
      saved_count: 38,
      comment_count: 6
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=9',
      medium: 'https://picsum.photos/400/300?random=9',
      large: 'https://picsum.photos/400/300?random=9'
    },
    gallery_images: [
      {
        id: '9-1',
        small: 'https://picsum.photos/300/200?random=901',
        medium: 'https://picsum.photos/600/400?random=901',
        large: 'https://picsum.photos/1200/800?random=901',
        caption: 'White sand beaches'
      },
      {
        id: '9-2',
        small: 'https://picsum.photos/300/200?random=902',
        medium: 'https://picsum.photos/600/400?random=902',
        large: 'https://picsum.photos/1200/800?random=902',
        caption: 'Crystal clear waters'
      },
      {
        id: '9-3',
        small: 'https://picsum.photos/300/200?random=903',
        medium: 'https://picsum.photos/600/400?random=903',
        large: 'https://picsum.photos/1200/800?random=903',
        caption: 'Island hopping'
      }
    ],
    countries: [
      {
        name: 'Thailand',
        country_code: 'TH'
      }
    ],
    created_date: 'Created 5 months ago',
    updated_date: 'Updated 1 week ago'
  },
  {
    _id: '10',
    title: 'Rajasthan Heritage',
    short_description: 'Journey through the forts and palaces of Rajasthan',
    creator: {
      user_id: '10',
      username: 'arvind',
      first_name: 'Arvind',
      last_name: 'Singh',
      profile_photo: 'https://picsum.photos/100/100?random=10'
    },
    stats: {
      view_count: 734,
      place_count: 11,
      saved_count: 52,
      comment_count: 8
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=10',
      medium: 'https://picsum.photos/400/300?random=10',
      large: 'https://picsum.photos/400/300?random=10'
    },
    gallery_images: [
      {
        id: '10-1',
        small: 'https://picsum.photos/300/200?random=1001',
        medium: 'https://picsum.photos/600/400?random=1001',
        large: 'https://picsum.photos/1200/800?random=1001',
        caption: 'Majestic forts'
      },
      {
        id: '10-2',
        small: 'https://picsum.photos/300/200?random=1002',
        medium: 'https://picsum.photos/600/400?random=1002',
        large: 'https://picsum.photos/1200/800?random=1002',
        caption: 'Royal palaces'
      },
      {
        id: '10-3',
        small: 'https://picsum.photos/300/200?random=1003',
        medium: 'https://picsum.photos/600/400?random=1003',
        large: 'https://picsum.photos/1200/800?random=1003',
        caption: 'Desert landscapes'
      },
      {
        id: '10-4',
        small: 'https://picsum.photos/300/200?random=1004',
        medium: 'https://picsum.photos/600/400?random=1004',
        large: 'https://picsum.photos/1200/800?random=1004',
        caption: 'Traditional culture'
      }
    ],
    countries: [
      {
        name: 'India',
        country_code: 'IN'
      }
    ],
    created_date: 'Created 1 year ago',
    updated_date: 'Updated 2 months ago'
  },
  {
    _id: '11',
    title: 'Tokyo City Guide',
    short_description: 'Best spots to experience modern and traditional Tokyo',
    creator: {
      user_id: '11',
      username: 'yuki',
      first_name: 'Yuki',
      last_name: 'Tanaka',
      profile_photo: 'https://picsum.photos/100/100?random=11'
    },
    stats: {
      view_count: 612,
      place_count: 18,
      saved_count: 41,
      comment_count: 11
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=11',
      medium: 'https://picsum.photos/400/300?random=11',
      large: 'https://picsum.photos/400/300?random=11'
    },
    gallery_images: [
      {
        id: '11-1',
        small: 'https://picsum.photos/300/200?random=1101',
        medium: 'https://picsum.photos/600/400?random=1101',
        large: 'https://picsum.photos/1200/800?random=1101',
        caption: 'Shibuya crossing'
      },
      {
        id: '11-2',
        small: 'https://picsum.photos/300/200?random=1102',
        medium: 'https://picsum.photos/600/400?random=1102',
        large: 'https://picsum.photos/1200/800?random=1102',
        caption: 'Traditional temples'
      },
      {
        id: '11-3',
        small: 'https://picsum.photos/300/200?random=1103',
        medium: 'https://picsum.photos/600/400?random=1103',
        large: 'https://picsum.photos/1200/800?random=1103',
        caption: 'Modern architecture'
      }
    ],
    countries: [
      {
        name: 'Japan',
        country_code: 'JP'
      }
    ],
    created_date: 'Created 8 months ago',
    updated_date: 'Updated 1 month ago'
  },
  {
    _id: '12',
    title: 'New York Must Visits',
    short_description: 'Top attractions in the Big Apple',
    creator: {
      user_id: '12',
      username: 'johndoe',
      first_name: 'John',
      last_name: 'Doe',
      profile_photo: 'https://picsum.photos/100/100?random=12'
    },
    stats: {
      view_count: 845,
      place_count: 13,
      saved_count: 59,
      comment_count: 14
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=12',
      medium: 'https://picsum.photos/400/300?random=12',
      large: 'https://picsum.photos/400/300?random=12'
    },
    gallery_images: [
      {
        id: '12-1',
        small: 'https://picsum.photos/300/200?random=1201',
        medium: 'https://picsum.photos/600/400?random=1201',
        large: 'https://picsum.photos/1200/800?random=1201',
        caption: 'Times Square'
      },
      {
        id: '12-2',
        small: 'https://picsum.photos/300/200?random=1202',
        medium: 'https://picsum.photos/600/400?random=1202',
        large: 'https://picsum.photos/1200/800?random=1202',
        caption: 'Central Park'
      },
      {
        id: '12-3',
        small: 'https://picsum.photos/300/200?random=1203',
        medium: 'https://picsum.photos/600/400?random=1203',
        large: 'https://picsum.photos/1200/800?random=1203',
        caption: 'Statue of Liberty'
      },
      {
        id: '12-4',
        small: 'https://picsum.photos/300/200?random=1204',
        medium: 'https://picsum.photos/600/400?random=1204',
        large: 'https://picsum.photos/1200/800?random=1204',
        caption: 'Brooklyn Bridge'
      }
    ],
    countries: [
      {
        name: 'USA',
        country_code: 'US'
      }
    ],
    created_date: 'Created 1 year ago',
    updated_date: 'Updated 2 weeks ago'
  },
  {
    _id: '14',
    title: 'New York Must Visits',
    short_description: 'Top attractions in the Big Apple',
    creator: {
      user_id: '12',
      username: 'johndoe',
      first_name: 'John',
      last_name: 'Doe',
      profile_photo: 'https://picsum.photos/100/100?random=12'
    },
    stats: {
      view_count: 845,
      place_count: 13,
      saved_count: 59,
      comment_count: 14
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=12',
      medium: 'https://picsum.photos/400/300?random=12',
      large: 'https://picsum.photos/400/300?random=12'
    },
    gallery_images: [
      {
        id: '14-1',
        small: 'https://picsum.photos/300/200?random=1401',
        medium: 'https://picsum.photos/600/400?random=1401',
        large: 'https://picsum.photos/1200/800?random=1401',
        caption: 'Manhattan skyline'
      },
      {
        id: '14-2',
        small: 'https://picsum.photos/300/200?random=1402',
        medium: 'https://picsum.photos/600/400?random=1402',
        large: 'https://picsum.photos/1200/800?random=1402',
        caption: 'Broadway shows'
      },
      {
        id: '14-3',
        small: 'https://picsum.photos/300/200?random=1403',
        medium: 'https://picsum.photos/600/400?random=1403',
        large: 'https://picsum.photos/1200/800?random=1403',
        caption: 'Museum mile'
      }
    ],
    countries: [
      {
        name: 'USA',
        country_code: 'US'
      }
    ],
    created_date: 'Created 1 year ago',
    updated_date: 'Updated 2 weeks ago'
  },
  {
    _id: '19',
    title: 'New York Must Visits',
    short_description: 'Top attractions in the Big Apple',
    creator: {
      user_id: '12',
      username: 'johndoe',
      first_name: 'John',
      last_name: 'Doe',
      profile_photo: 'https://picsum.photos/100/100?random=12'
    },
    stats: {
      view_count: 845,
      place_count: 13,
      saved_count: 59,
      comment_count: 14
    },
    cover_photo: {
      small: 'https://picsum.photos/400/300?random=12',
      medium: 'https://picsum.photos/400/300?random=12',
      large: 'https://picsum.photos/400/300?random=12'
    },
    gallery_images: [
      {
        id: '19-1',
        small: 'https://picsum.photos/300/200?random=1901',
        medium: 'https://picsum.photos/600/400?random=1901',
        large: 'https://picsum.photos/1200/800?random=1901',
        caption: 'Empire State Building'
      },
      {
        id: '19-2',
        small: 'https://picsum.photos/300/200?random=1902',
        medium: 'https://picsum.photos/600/400?random=1902',
        large: 'https://picsum.photos/1200/800?random=1902',
        caption: 'High Line Park'
      },
      {
        id: '19-3',
        small: 'https://picsum.photos/300/200?random=1903',
        medium: 'https://picsum.photos/600/400?random=1903',
        large: 'https://picsum.photos/1200/800?random=1903',
        caption: 'Wall Street'
      }
    ],
    countries: [
      {
        name: 'USA',
        country_code: 'US'
      }
    ],
    created_date: 'Created 1 year ago',
    updated_date: 'Updated 2 weeks ago'
  }
]

export const featuredPlaces: Place[] = [
  {
    place_id: '1',
    name: 'Kothaligad Fort',
    description: 'A centuries-old hillside fort near Karjat, Maharashtra, beckons hikers with a blend of history and natural beauty.',
    rating: 4.6,
    review_count: 1803,
    categories: [
      {
        name: 'Culture',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=20',
      medium: 'https://picsum.photos/400/300?random=20',
      large: 'https://picsum.photos/400/300?random=20'
    },
    open_hours_text: 'Open 24 hours'
  },
  {
    place_id: '2',
    name: 'Harihar Fort',
    description: 'Historic fort with challenging trek and panoramic views',
    rating: 4.7,
    review_count: 4721,
    categories: [
      {
        name: 'Culture',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=21',
      medium: 'https://picsum.photos/400/300?random=21',
      large: 'https://picsum.photos/400/300?random=21'
    },
    open_hours_text: 'Open till 6:00PM'
  },
  {
    place_id: '3',
    name: 'Gorakhgad Fort',
    description: 'Beautiful trekking destination with ancient architecture',
    rating: 4.7,
    review_count: 1344,
    categories: [
      {
        name: 'Culture',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=22',
      medium: 'https://picsum.photos/400/300?random=22',
      large: 'https://picsum.photos/400/300?random=22'
    },
    open_hours_text: 'Open till 6:03PM'
  },
  {
    place_id: '4',
    name: 'Taj Mahal',
    description: 'Iconic symbol of love and Mughal architecture in Agra',
    rating: 4.9,
    review_count: 128934,
    categories: [
      {
        name: 'Culture',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=23',
      medium: 'https://picsum.photos/400/300?random=23',
      large: 'https://picsum.photos/400/300?random=23'
    },
    open_hours_text: 'Open till 5:30PM'
  },
  {
    place_id: '5',
    name: 'Eiffel Tower',
    description: 'World-famous Paris landmark with breathtaking views',
    rating: 4.8,
    review_count: 342109,
    categories: [
      {
        name: 'Landmark',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=24',
      medium: 'https://picsum.photos/400/300?random=24',
      large: 'https://picsum.photos/400/300?random=24'
    },
    open_hours_text: 'Open till 11:45PM'
  },
  {
    place_id: '6',
    name: 'Grand Canyon',
    description: 'Majestic natural wonder carved by the Colorado River',
    rating: 4.9,
    review_count: 210985,
    categories: [
      {
        name: 'Nature',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=25',
      medium: 'https://picsum.photos/400/300?random=25',
      large: 'https://picsum.photos/400/300?random=25'
    },
    open_hours_text: 'Open 24 hours'
  },
  {
    place_id: '7',
    name: 'Sydney Opera House',
    description: 'Famous performing arts center with unique architecture',
    rating: 4.7,
    review_count: 98763,
    categories: [
      {
        name: 'Culture',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=26',
      medium: 'https://picsum.photos/400/300?random=26',
      large: 'https://picsum.photos/400/300?random=26'
    },
    open_hours_text: 'Open till 8:30PM'
  },
  {
    place_id: '8',
    name: 'Santorini',
    description: 'Picturesque Greek island with whitewashed houses and sunsets',
    rating: 4.8,
    review_count: 73219,
    categories: [
      {
        name: 'Nature',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=27',
      medium: 'https://picsum.photos/400/300?random=27',
      large: 'https://picsum.photos/400/300?random=27'
    },
    open_hours_text: ''
  },
  {
    place_id: '9',
    name: 'Kyoto Temples',
    description: 'Historic temples and shrines in the heart of Japan',
    rating: 4.7,
    review_count: 56412,
    categories: [
      {
        name: 'Culture',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=28',
      medium: 'https://picsum.photos/400/300?random=28',
      large: 'https://picsum.photos/400/300?random=28'
    },
    open_hours_text: 'Open till 5:00PM'
  },
  {
    place_id: '10',
    name: 'Machu Picchu',
    description: 'Ancient Incan city nestled high in the Andes mountains',
    rating: 4.9,
    review_count: 65321,
    categories: [
      {
        name: 'Culture',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=29',
      medium: 'https://picsum.photos/400/300?random=29',
      large: 'https://picsum.photos/400/300?random=29'
    },
    open_hours_text: 'Open till 5:30PM'
  },
  {
    place_id: '11',
    name: 'Dubai Burj Khalifa',
    description: 'Tallest skyscraper in the world with observation decks',
    rating: 4.8,
    review_count: 145632,
    categories: [
      {
        name: 'Landmark',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=30',
      medium: 'https://picsum.photos/400/300?random=30',
      large: 'https://picsum.photos/400/300?random=30'
    },
    open_hours_text: 'Open till 11:00PM'
  },
  {
    place_id: '12',
    name: 'Niagara Falls',
    description: 'Massive waterfalls straddling the US-Canada border',
    rating: 4.9,
    review_count: 192384,
    categories: [
      {
        name: 'Nature',
        is_primary: 1
      }
    ],
    cover_media: {
      small: 'https://picsum.photos/400/300?random=31',
      medium: 'https://picsum.photos/400/300?random=31',
      large: 'https://picsum.photos/400/300?random=31'
    },
    open_hours_text: 'Open 24 hours'
  }
]