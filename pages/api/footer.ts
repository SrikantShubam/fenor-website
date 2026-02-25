import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const SUPPORTED_LOCALES = new Set(['en', 'fr', 'ar']);

const toLocale = (value: unknown): 'en' | 'fr' | 'ar' => {
  if (typeof value !== 'string') return 'en';
  const normalized = value.toLowerCase();
  if (SUPPORTED_LOCALES.has(normalized)) return normalized as 'en' | 'fr' | 'ar';
  return 'en';
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const locale = toLocale(req.query.locale);
  const filePath = path.join(process.cwd(), 'content', 'footer', `${locale}.json`);

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(raw);
    return res.status(200).json(data);
  } catch {
    return res.status(200).json({});
  }
}

