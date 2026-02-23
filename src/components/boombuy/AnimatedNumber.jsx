import React, { useState, useEffect } from 'react';
import { useSpring } from 'framer-motion';

export default function AnimatedNumber({ value, formatter = (v) => Math.round(v).toLocaleString() }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(formatter(value));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(formatter(latest));
    });
  }, [spring, formatter]);

  return <span>{display}</span>;
}