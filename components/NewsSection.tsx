// // components/NewsSection.tsx
// import React from 'react';
// import Link from 'next/link';
// import NewsCard from './NewsCard';
// import Button from './Button';

// export interface NewsArticle {
//   title: string;
//   slug: string;
//   excerpt: string;
//   body: string;
//   image_alt: string;
//   featuredImage: string | null;
//   isHighlighted: boolean;
//   publishedDate: string;
//   eventType: string | null;
// }

// interface NewsSectionProps {
//   sectionTitle: string;
//   newsArticles: NewsArticle[];
//   limit?: number;
// }

// const NewsSection: React.FC<NewsSectionProps> = ({ sectionTitle, newsArticles, limit }) => {
//   const displayed = limit ? newsArticles.slice(0, limit) : newsArticles;

//   return (
//     <section className="news-section ">
//       <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {displayed.map((article) => (
//           <Link key={article.slug} href={`/press/${article.slug}`}>
         
//               <NewsCard
//                 title={article.title}
//                 excerpt={article.excerpt}
//                 imageUrl={article.featuredImage}
//                 publishedDate={article.publishedDate}
//                 eventType={article.eventType}
//                 isHighlighted={article.isHighlighted}
//               />
        
//           </Link>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4">
//         <Link href="/press">
//           <Button>See all news</Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;






















import React from 'react';
import Link from 'next/link';
import NewsCard from './NewsCard';
import Button from './Button';

export interface NewsArticle {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image_alt: string;
  featuredImage: string | null;
  isHighlighted: boolean;
  publishedDate: string;
  eventType: string | null;
}

interface NewsSectionProps {
  sectionTitle: string;
  newsArticles: NewsArticle[];
  limit?: number;
}

const NewsSection: React.FC<NewsSectionProps> = ({ sectionTitle, newsArticles, limit }) => {
  const displayed = limit ? newsArticles.slice(0, limit) : newsArticles;

  return (
    <section className="news-section">
      <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayed.map((article) => (
          <Link key={article.slug} href={`/press/${article.slug}`}>
            <NewsCard
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.featuredImage}
              publishedDate={article.publishedDate}
              eventType={article.eventType}
              isHighlighted={false} // Force all cards to be regular
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/press">
          <Button>See all news</Button>
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;