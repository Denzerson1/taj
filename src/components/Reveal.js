import { m, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const OFFSETS = {
  left: { x: '-100%' },
  right: { x: '100%' },
  bottom: { y: 28 },
};

/**
 * Animates its children into place the first time they scroll into view:
 * `from="left"` / `from="right"` slide in from the side, the default fades up from below.
 */
export default function Reveal({ as = 'div', from = 'bottom', delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Component = m[as];
  const sideways = from === 'left' || from === 'right';

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...OFFSETS[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: sideways ? '0px' : '0px 0px -12% 0px' }}
      transition={{ duration: sideways ? 0.8 : 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
