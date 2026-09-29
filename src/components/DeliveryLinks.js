import { DELIVERY } from '../config/site';
import Img from './Img';

export default function DeliveryLinks({ className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-4 ${className}`}>
      {DELIVERY.map(({ name, href, logo }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-sm border border-cream/10 bg-cream/[0.03] px-5 py-4 transition-colors duration-300 hover:border-gold/50"
          >
            <Img name={logo} alt="" className="h-12 w-12 rounded-full object-contain transition-transform duration-500 ease-smooth group-hover:scale-110" />
            <span className="text-sm text-cream/80 group-hover:text-cream">{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
