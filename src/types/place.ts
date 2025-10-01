export interface Category {
  id: string
  name: string
  icon?: string
}

export interface CoverMedia {
  small: string
  medium: string
  large: string
}

export interface Location {
  latitude: number
  longitude: number
  address: string
  city: string
  state: string
  country: string
}

export interface Place {
  id: string
  name: string
  description: string
  rating: number
  review_count: number
  categories: Category[]
  cover_media: CoverMedia
  location: Location
  open_hours_text?: string
  price_level?: number
  website?: string
  phone?: string
  is_featured?: boolean
  is_popular?: boolean
  created_at: string
  updated_at: string
}

export interface PlaceCardProps {
  place: Place
  onClick: () => void
  showDescription?: boolean
}