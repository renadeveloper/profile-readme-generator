import {
  PieChart,
  Share2,
  Github,
  Image,
  MessageSquare,
  Type,
  Activity,
  FileText,
  Music,
} from '@styled-icons/feather';

import { Sections } from 'types';

const contents = [
  {
    icon: Type,
    sectionType: Sections.TEXT,
    name: 'Text',
  },
  {
    icon: PieChart,
    sectionType: Sections.STATS,
    name: 'Stats',
  },
  {
    icon: Share2,
    sectionType: Sections.TECHS,
    name: 'Techs',
  },
  {
    icon: Github,
    sectionType: Sections.PROFILE_VIEWS,
    name: 'Profile views',
  },
  {
    icon: Image,
    sectionType: Sections.IMAGE,
    name: 'Image',
  },
  {
    icon: MessageSquare,
    sectionType: Sections.SOCIALS,
    name: 'Social media',
  },
  {
    icon: Activity,
    sectionType: Sections.SNAKE,
    name: 'Snake',
  },
  {
    icon: FileText,
    sectionType: Sections.ACTIVITIES,
    name: 'My activities',
  },
  {
    icon: Music,
    sectionType: Sections.MUSIC,
    name: 'Music',
  },
];

export { contents };
