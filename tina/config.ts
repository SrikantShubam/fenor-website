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



// import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
//   process.env.GITHUB_BRANCH ||
//   process.env.VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD ||
//   "main";

// export default defineConfig({
//   branch,

//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
//   token:  process.env.TINA_TOKEN,

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
//   schema: {
//     collections: [
//       {
//         name: "pages",
//         label: "Pages",
//         path: "content/pages",
//         i18n: true,
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "object",
//             name: "blocks",
//             label: "Page Blocks",
//             list: true,
//             templates: [
//               {
//                 name: "text",
//                 label: "Text Block",
//                 fields: [
//                   {
//                     type: "rich-text",
//                     name: "content",
//                     label: "Content",
//                   },
//                 ],
//               },
//               {
//                 name: "image",
//                 label: "Image Block",
//                 fields: [
//                   {
//                     type: "image",
//                     name: "src",
//                     label: "Image",
//                   },
//                   {
//                     type: "string",
//                     name: "alt",
//                     label: "Alt Text",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//         ui: {
//           router: ({ document }) => {
//             if (document._sys.filename === "home") {
//               return `/${document._sys.locale}/`;
//             } else {
//               return `/${document._sys.locale}/${document._sys.filename}`;
//             }
//           },
//         },
//       },
//     ],
//   },
// });










// import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
//   process.env.GITHUB_BRANCH ||
//   process.env.VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD ||
//   "main";

// export default defineConfig({
//   branch,

//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
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
//   schema: {
//     collections: [
//       {
//         name: "pages",
//         label: "Pages",
//         path: "content/pages",
//         i18n: true,
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "object",
//             name: "seo",
//             label: "SEO Settings",
//             fields: [
//               {
//                 type: "string",
//                 name: "title",
//                 label: "Meta Title",
//               },
//               {
//                 type: "string",
//                 name: "description",
//                 label: "Meta Description",
//               },
//               {
//                 type: "string",
//                 name: "keywords",
//                 label: "Meta Keywords",
//                 list: true,
//               },
//             ],
//           },
//           {
//             type: "object",
//             name: "blocks",
//             label: "Page Blocks",
//             list: true,
//             templates: [
//               {
//                 name: "text",
//                 label: "Text Block",
//                 fields: [
//                   {
//                     type: "rich-text",
//                     name: "content",
//                     label: "Content",
//                   },
//                 ],
//               },
//               {
//                 name: "image",
//                 label: "Image Block",
//                 fields: [
//                   {
//                     type: "image",
//                     name: "src",
//                     label: "Image",
//                   },
//                   {
//                     type: "string",
//                     name: "alt",
//                     label: "Alt Text",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//         ui: {
//           router: ({ document }) => {
//             if (document._sys.filename === "home") {
//               return `/${document._sys.locale}/`;
//             } else {
//               return `/${document._sys.locale}/${document._sys.filename}`;
//             }
//           },
//         },
//       },
//     ],
//   },
// });




























// import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
//   process.env.GITHUB_BRANCH ||
//   process.env.VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD ||
//   "main";

// export default defineConfig({
//   branch,

//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
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
//   schema: {
//     collections: [
//       {
//         name: "pages",
//         label: "Pages",
//         path: "content/pages",
//         i18n: true,
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "object",
//             name: "seo",
//             label: "SEO Settings",
//             fields: [
//               {
//                 type: "string",
//                 name: "title",
//                 label: "Meta Title",
//               },
//               {
//                 type: "string",
//                 name: "description",
//                 label: "Meta Description",
//               },
//               {
//                 type: "string",
//                 name: "keywords",
//                 label: "Meta Keywords",
//                 list: true,
//               },
//             ],
//           },
//           {
//             type: "object",
//             name: "blocks",
//             label: "Page Blocks",
//             list: true,
//             templates: [
//               {
//                 name: "text",
//                 label: "Text Block",
//                 fields: [
//                   {
//                     type: "rich-text",
//                     name: "content",
//                     label: "Content",
//                   },
//                 ],
//               },
//               {
//                 name: "image",
//                 label: "Image Block",
//                 fields: [
//                   {
//                     type: "image",
//                     name: "src",
//                     label: "Image",
//                   },
//                   {
//                     type: "string",
//                     name: "alt",
//                     label: "Alt Text",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//         ui: {
//           router: ({ document }) => {
//             if (document._sys.filename === "home") {
//               return `/${document._sys.locale}/`;
//             } else {
//               return `/${document._sys.locale}/${document._sys.filename}`;
//             }
//           },
//         },
//       },
//       {
//         name: "navigation",
//         label: "Navigation",
//         path: "content/navigation",
//         i18n: true,
//         format: "json", 
//         fields: [
//           {
//             type: "object",
//             name: "items",
//             label: "Menu Items",
//             list: true,
//             fields: [
//               {
//                 type: "string",
//                 name: "label",
//                 label: "Label",
//                 required: true,
//               },
//               {
//                 type: "string",
//                 name: "url",
//                 label: "URL",
//                 required: true,
//               },
//               {
//                 type: "boolean",
//                 name: "isDropdown",
//                 label: "Is Dropdown",
//               },
//             ],
//           },
//         ],
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
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Meta Title",
              },
              {
                type: "string",
                name: "description",
                label: "Meta Description",
              },
              {
                type: "string",
                name: "keywords",
                label: "Meta Keywords",
                list: true,
              },
            ],
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
      {
        name: "navigation",
        label: "Navigation",
        path: "content/navigation",
        i18n: true,
        format: "json",
        fields: [
          {
            type: "object",
            name: "items",
            label: "Menu Items",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
              {
                type: "boolean",
                name: "isDropdown",
                label: "Is Dropdown",
              },
            ],
          },
        ],
      },
      {
        name: "footer",
        label: "Footer",
        path: "content/footer",
        format: "json",

        fields: [
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "quickLinks",
            label: "Quick Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "aboutUs",
            label: "About Us Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "importantLinks",
            label: "Important Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "socials",
            label: "Social Media",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Platform Name",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});