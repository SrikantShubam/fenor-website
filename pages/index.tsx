import { GetStaticProps } from 'next';
import { client } from '../tina/__generated__/client'; // Adjust path based on your project structure

// Define the props type for the Homepage component
interface HomepageProps {
  content: {
    title: string;
    // Add other fields based on your TinaCMS schema, e.g., body: string
  };
  locale: string;
}

export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
  try {
    // Fetch homepage content from TinaCMS for the specific locale
    const res = await client.queries.pages({ relativePath: `${locale}/home.md` });
    const content = res.data.pages;
    return {
      props: {
        content,
        locale: locale || 'en',
      },
    };
  } catch (error) {
    console.error('Error fetching TinaCMS data:', error);
    return {
      props: {
        content: { title: 'Error' }, // Fallback content
        locale: locale || 'en',
      },
    };
  }
};

const Homepage = ({ content, locale }: HomepageProps) => {
  return (
    <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <h1>{content.title}</h1>
      <p>This is a placeholder homepage.</p>
  
    </div>
  );
};

export default Homepage;