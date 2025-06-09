import React, { useState, useEffect, ButtonHTMLAttributes } from 'react';
import axios from 'axios';
import Link from 'next/link';
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
      // Sanitize the saved value to ensure no decimal places
      const parsedSaved = parseFloat(saved);
      const sanitizedPrice = Math.floor(parsedSaved).toString();
      setGoldPrice(sanitizedPrice);
      return;
    }

    (async () => {
      try {
        const { data } = await axios.get('https://api.gold-api.com/price/XAU');
        const parsedPrice = parseFloat(data.price); // Convert to number
        const price = Math.floor(parsedPrice).toString(); // Truncate decimals and convert to string
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
    <Link href="https://www.apmex.com/gold-price" target='_blank'>
    <button
      id="gold-btn"
      className={`${baseClasses} ${className}`}
      {...restProps}
    >
      Gold: ${goldPrice ?? '...'} / oz
    </button>
    </Link>
  );
}