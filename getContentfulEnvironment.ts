import contentful from 'contentful-management';

// Load environment variables from your local environment
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';

if (!CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_SPACE_ID) {
  throw new Error('Contentful access token or space ID is missing in environment variables.');
}

const client = contentful.createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export default async function getContentfulEnvironment() {
  const space = await client.getSpace(CONTENTFUL_SPACE_ID);
  return space.getEnvironment(CONTENTFUL_ENVIRONMENT);
}