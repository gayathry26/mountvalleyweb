import React from 'react';
import HeroAnimation from './HeroAnimation';

export default function Hero({ introFinished = true }) {
  return <HeroAnimation introFinished={introFinished} />;
}
