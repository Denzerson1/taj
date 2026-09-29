import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { RESERVATION_BUSINESS_ID, RESERVATION_COLOR, RESERVATION_WIDGET_SRC } from '../config/site';

// On phones/tablets the MobileActionBar already has a "Book" button, so the widget's own floating
// launcher (which would sit on top of that bar) is hidden there. The booking panel itself is untouched.
const SHADOW_CSS = '@media (max-width: 1023px) { .fab-stack { display: none !important; } }';

function loadWidgetScript() {
  if (document.querySelector(`script[src="${RESERVATION_WIDGET_SRC}"]`)) return;
  const script = document.createElement('script');
  script.src = RESERVATION_WIDGET_SRC;
  script.async = true;
  document.body.appendChild(script);
}

/**
 * reservier.at booking widget. Any element with `open-widget="reservier.at"` (see BOOKING_LINK) opens its panel.
 * The script is ~380 KB, so it loads once the page is idle instead of delaying the first paint.
 */
export default function ReservationWidget() {
  const { language } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    const load = () => {
      loadWidgetScript();
      customElements.whenDefined('reservier-widget').then(() => {
        const root = ref.current?.shadowRoot;
        if (root && !root.querySelector('style[data-taj]')) {
          const style = document.createElement('style');
          style.dataset.taj = '';
          style.textContent = SHADOW_CSS;
          root.appendChild(style);
        }
      });
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(load, 1500);
    return () => clearTimeout(id);
  }, []);

  return <reservier-widget ref={ref} business-id={RESERVATION_BUSINESS_ID} locale={language.toLowerCase()} primary-color={RESERVATION_COLOR} />;
}
