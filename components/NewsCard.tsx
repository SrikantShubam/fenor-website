import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl: string | null;
  publishedDate: string;
  eventType: string | null;
  isHighlighted?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  imageUrl,
  publishedDate,
  eventType,
  isHighlighted = false,
}) => {
  const formattedExcerpt = excerpt?.trim() || '';
  const resolvedImageSrc = imageUrl
    ? imageUrl.startsWith('//')
      ? `https:${imageUrl}`
      : imageUrl
    : null;

  const publishedDateObj = publishedDate ? new Date(publishedDate) : null;
  const hasPublishedDate = Boolean(
    publishedDateObj && !Number.isNaN(publishedDateObj.getTime())
  );

  const formattedDate =
    hasPublishedDate && publishedDateObj
      ? publishedDateObj
          .toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          })
          .replace(/ /g, '-')
          .replace(',', '')
      : '';

  const { locale } = useRouter();
  const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
  const localeKey =
    langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

  return (
    <article className={`fenor-news-card ${isHighlighted ? 'fenor-news-card-highlight' : ''}`}>
      {resolvedImageSrc && (
        <div className="fenor-news-image-wrap">
          <Image
            src={resolvedImageSrc}
            alt={title}
            fill
            className="fenor-news-image"
            style={{ objectFit: 'cover' }}
          />
          <div className="fenor-news-image-shade" />

          {eventType && localeKey !== 'Fr' && localeKey !== 'Ar' && (
            <span className="fenor-news-badge">
              {eventType}
            </span>
          )}
        </div>
      )}

      <div className="fenor-news-content">
        {hasPublishedDate && (
          <p className="fenor-news-date">
            {formattedDate}
          </p>
        )}

        <h3 className="fenor-news-title">
          {title}
        </h3>

        <p className="fenor-news-excerpt">
          {formattedExcerpt}
        </p>
      </div>
    </article>
  );
};

export default NewsCard;
