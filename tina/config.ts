// import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
//   process.env.GITHUB_BRANCH ||
//   process.env.VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD ||
//   "main";

// export default defineConfig({
//   branch,

//   // Get this from tina.io
//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
//   // Get this from tina.io
//   token: process.env.TINA_TOKEN,

//   build: {
//     outputFolder: "admin",
//     publicFolder: "public",
//   },
//   media: {
//     tina: {
//       mediaRoot: "",
//       publicFolder: "public",
//     },
//   },
//   // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
//   schema: {
//     collections: [
//       {
//         name: "post",
//         label: "Posts",
//         path: "content/posts",
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "rich-text",
//             name: "body",
//             label: "Body",
//             isBody: true,
//           },
//         ],
//         ui: {
//           // This is an DEMO router. You can remove this to fit your site
//           router: ({ document }) => `/demo/blog/${document._sys.filename}`,
//         },
//       },
//     ],
//   },
// });
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        i18n: true,
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "blocks",
            label: "Page Blocks",
            list: true,
            templates: [
              {
                name: "text",
                label: "Text Block",
                fields: [
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                  },
                ],
              },
              {
                name: "image",
                label: "Image Block",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/${document._sys.locale}/`;
            } else {
              return `/${document._sys.locale}/${document._sys.filename}`;
            }
          },
        },
      },
    ],
  },
});