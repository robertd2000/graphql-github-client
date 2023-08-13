import {
  BadgeCheck,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Square,
  Twitch,
  Twitter,
  WalletCards,
  Youtube,
} from 'lucide-react'
import { ReactNode } from 'react'

export const socialAccountProviders: {
  [key: string]: ReactNode
} = {
  GENERIC: <BadgeCheck className="text-gray-500" />,
  FACEBOOK: <Facebook className="text-gray-500" />,
  HOMETOWN: <Home className="text-gray-500" />,
  INSTAGRAM: <Instagram className="text-gray-500" />,
  LINKEDIN: <Linkedin className="text-gray-500" />,
  MASTODON: <Square className="text-gray-500" />,
  REDDIT: <WalletCards className="text-gray-500" />,
  TWITCH: <Twitch className="text-gray-500" />,
  TWITTER: <Twitter className="text-gray-500" />,
  YOUTUBE: <Youtube className="text-gray-500" />,
}
