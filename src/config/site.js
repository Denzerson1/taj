// Single source of truth for business details used across the site, SEO and structured data.

export const SITE_URL = 'https://thetaj.at';

export const RESERVATION_BUSINESS_ID = 'taj-indian-restaurant-bar';
export const RESERVATION_URL = `https://reservier.at/de/${RESERVATION_BUSINESS_ID}`;
export const RESERVATION_WIDGET_SRC = 'https://reservier.at/widget/v1/widget.js';
export const RESERVATION_COLOR = '#020917';

// Spread onto an <a>: opens the reservier.at widget panel, or falls back to the booking page if the widget hasn't loaded.
export const BOOKING_LINK = { href: RESERVATION_URL, target: '_blank', rel: 'noopener noreferrer', 'open-widget': 'reservier.at' };

export const DIRECTIONS_URL = 'https://maps.app.goo.gl/TesETbkyUZdL7S9W6';

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.6887822435384!2d16.348972676913586!3d48.21291514160916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07d819e4938b%3A0xf458d4cad4b2fd32!2sTaj%20-%20Indian%20Restaurant%20%26%20Bar!5e0!3m2!1sde!2sat!4v1730961557347!5m2!1sde!2sat';

export const CONTACT = {
  name: 'Taj – Indian Restaurant & Bar',
  street: 'Kochgasse 9',
  postalCode: '1080',
  city: 'Wien',
  country: 'AT',
  phone: '+43 1 924 7141',
  phoneHref: 'tel:+4319247141',
  email: 'office@thetaj.at',
};

export const HOURS = { open: '17:00', close: '23:00' };

export const SOCIAL = {
  facebook: 'https://www.facebook.com/austriantaj/',
  instagram: 'https://www.instagram.com/austriantaj1080/',
};

export const DELIVERY = [
  { name: 'Wolt', href: 'https://wolt.com/de-at/aut/vienna/restaurant/taj-indian-restaurant-bar', logo: 'delivery/wolt' },
  { name: 'Lieferando', href: 'https://www.lieferando.at/speisekarte/the-taj-restaurant-bar', logo: 'delivery/lieferando' },
  { name: 'Foodora', href: 'https://www.foodora.at/restaurant/zwlp/taj', logo: 'delivery/foodora' },
];

export const MENUS = {
  food: '/FoodMenu.pdf',
  vegan: '/VeganMenu.pdf',
  vegetarian: '/VegetarianMenu.pdf',
  drinks: '/drinks.pdf',
};
