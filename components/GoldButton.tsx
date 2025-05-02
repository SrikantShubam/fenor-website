// components/GoldButton.tsx
import React, { useState, useEffect, ButtonHTMLAttributes } from 'react';
import axios from 'axios';

type GoldButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function GoldButton({
  className = '',
  ...restProps
}: GoldButtonProps) {
  const [goldPrice, setGoldPrice] = useState<string | null>(null);

  useEffect(() => {
    const KEY = 'goldPrice';
    const TS  = 'goldPriceTs';
    const DAY = 24 * 60 * 60 * 1000;

    const saved = localStorage.getItem(KEY);
    const ts    = Number(localStorage.getItem(TS) || 0);
    const now   = Date.now();

    if (saved && now - ts < DAY) {
      setGoldPrice(saved);
      return;
    }

    (async () => {
      try {
        const { data } = await axios.get('https://www.gold-api.com/api/XAU/USD');
        const price = data.price?.toFixed(2);
        if (price) {
          localStorage.setItem(KEY, price);
          localStorage.setItem(TS, now.toString());
          setGoldPrice(price);
        }
      } catch (err) {
        console.error('Failed to fetch gold price', err);
      }
    })();
  }, []);

  // base styles
  const baseClasses =
    'bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn ' +
    'hover:bg-special transition-colors duration-200';

  return (
    <button
      id="gold-btn"
      className={`${baseClasses} ${className}`}
      {...restProps}
    >
      Gold: ${goldPrice ?? '...'} / oz
    </button>
  );
}
