import professionalIcon from '../../assets/img/professional.svg';
import generalIcon from '../../assets/img/general.svg';
import businessIcon from '../../assets/img/business.svg';
import cyberIcon from '../../assets/img/cyber.svg';
import inhouseIcon from '../../assets/img/inhouse.svg';
import airplayIcon from '../../assets/img/airplay.svg';
import yesIcon from '../../assets/img/yes.svg';
import noIcon from '../../assets/img/no.svg';
import geicoIcon from '../../assets/img/geico.svg';
import progressiveIcon from '../../assets/img/progressive.svg';
import statefarmIcon from '../../assets/img/statefarm.png';

export const titles = [
  "What type of insurance do you want?",
  "What's the name of your business?",
  "What's the phone number?",
  "What state do you operate from?",
  "Do you do your own design?",
  "Include building coverage?",
  "When did your business begin?",
];

export const insurances = [
  {
    icon: professionalIcon,
    title: 'Professional Liability',
    text: 'Errors & Omissions (E&O insurance)',
  },
  {
    icon: generalIcon,
    title: 'General Liability',
    text: 'Help mitigate against loss (CGL insurance)',
  },
  {
    icon: businessIcon,
    title: "Business Owner's Policy",
    text: 'The complete package (BOP)',
  },
  {
    icon: cyberIcon,
    title: 'Cyber',
    text: 'Internet-based risks (CLIC)',
  },
];

export const designs = [
  {
    icon: inhouseIcon,
    title: "Yes",
    text: 'We do designs in-house',
  },
  {
    icon: airplayIcon,
    title: 'No',
    text: 'We’re gonna need some assistance',
  },
];

export const coverages = [
  {
    icon: yesIcon,
    title: "Yes",
  },
  {
    icon: noIcon,
    title: 'No',
  },
];

export const prices = [
  {
    icon: progressiveIcon,
    rating: 4.4,
    monthly: 120,
    annually: 1440,
  },
  {
    icon: geicoIcon,
    rating: 4,
    monthly: 125,
    annually: 1500,
  },
  {
    icon: statefarmIcon,
    rating: 3.4,
    monthly: 120,
    annually: 1440,
  },
]

export const states = [
  { id: "AL", label: "Alabama" },
  { id: "AK", label: "Alaska" },
  { id: "AS", label: "American Samoa" },
  { id: "AZ", label: "Arizona" },
  { id: "AR", label: "Arkansas" },
  { id: "CA", label: "California" },
  { id: "CO", label: "Colorado" },
  { id: "CT", label: "Connecticut" },
  { id: "DE", label: "Delaware" },
  { id: "DC", label: "District Of Columbia" },
  { id: "FM", label: "Federated States Of Micronesia" },
  { id: "FL", label: "Florida" },
  { id: "GA", label: "Georgia" },
  { id: "GU", label: "Guam" },
  { id: "HI", label: "Hawaii" },
  { id: "ID", label: "Idaho" },
  { id: "IL", label: "Illinois" },
  { id: "IN", label: "Indiana" },
  { id: "IA", label: "Iowa" },
  { id: "KS", label: "Kansas" },
  { id: "KY", label: "Kentucky" },
  { id: "LA", label: "Louisiana" },
  { id: "ME", label: "Maine" },
  { id: "MH", label: "Marshall Islands" },
  { id: "MD", label: "Maryland" },
  { id: "MA", label: "Massachusetts" },
  { id: "MI", label: "Michigan" },
  { id: "MN", label: "Minnesota" },
  { id: "MS", label: "Mississippi" },
  { id: "MO", label: "Missouri" },
  { id: "MT", label: "Montana" },
  { id: "NE", label: "Nebraska" },
  { id: "NV", label: "Nevada" },
  { id: "NH", label: "New Hampshire" },
  { id: "NJ", label: "New Jersey" },
  { id: "NM", label: "New Mexico" },
  { id: "NY", label: "New York" },
  { id: "NC", label: "North Carolina" },
  { id: "ND", label: "North Dakota" },
  { id: "MP", label: "Northern Mariana Islands" },
  { id: "OH", label: "Ohio" },
  { id: "OK", label: "Oklahoma" },
  { id: "OR", label: "Oregon" },
  { id: "PW", label: "Palau" },
  { id: "PA", label: "Pennsylvania" },
  { id: "PR", label: "Puerto Rico" },
  { id: "RI", label: "Rhode Island" },
  { id: "SC", label: "South Carolina" },
  { id: "SD", label: "South Dakota" },
  { id: "TN", label: "Tennessee" },
  { id: "TX", label: "Texas" },
  { id: "UT", label: "Utah" },
  { id: "VT", label: "Vermont" },
  { id: "VI", label: "Virgin Islands" },
  { id: "VA", label: "Virginia" },
  { id: "WA", label: "Washington" },
  { id: "WV", label: "West Virginia" },
  { id: "WI", label: "Wisconsin" },
  { id: "WY", label: "Wyoming" },
]
