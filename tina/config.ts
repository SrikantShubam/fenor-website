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

















//works for footer and nav





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
//             // `relativePath` is something like "en/home.md" or "fr/about.md"
//             const [locale] = document._sys.relativePath.split('/');
//             const basename = document._sys.filename; // "home" or "about", etc.
        
//             // special-case “home” to map to “/{locale}/” instead of “/{locale}/home”
//             return basename === 'home'
//               ? `/${locale}/`
//               : `/${locale}/${basename}`;
//           },
//         },
        
//       },
//       {
//         name: "navigation",
//         label: "Navigation",
//         path: "content/navigation",
     
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
//       {
//         name: "footer",
//         label: "Footer",
//         path: "content/footer",
//         format: "json",

//         fields: [
//           {
//             type: "string",
//             name: "description",
//             label: "Description",
//             ui: {
//               component: "textarea",
//             },
//           },
//           {
//             type: "object",
//             name: "quickLinks",
//             label: "Quick Links",
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
//             ],
//           },
//           {
//             type: "object",
//             name: "aboutUs",
//             label: "About Us Links",
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
//             ],
//           },
//           {
//             type: "object",
//             name: "importantLinks",
//             label: "Important Links",
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
//             ],
//           },
//           {
//             type: "object",
//             name: "socials",
//             label: "Social Media",
//             list: true,
//             fields: [
//               {
//                 type: "string",
//                 name: "name",
//                 label: "Platform Name",
//                 required: true,
//               },
//               {
//                 type: "string",
//                 name: "url",
//                 label: "URL",
//                 required: true,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// });



// tina/config.js

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
//                 name: "textBoxWithImageAndButton",
//                 label: "Text Box with Image and Button",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "smallHeading",
//                     label: "Small Heading",
//                   },
//                   {
//                     type: "string",
//                     name: "bigHeading",
//                     label: "Big Heading",
//                   },
//                   {
//                     type: "rich-text",
//                     name: "paragraph",
//                     label: "Paragraph",
//                   },
//                   {
//                     type: "image",
//                     name: "image",
//                     label: "Image",
//                   },
//                   {
//                     type: "string",
//                     name: "buttonText",
//                     label: "Button Text",
//                   },
//                   {
//                     type: "string",
//                     name: "buttonUrl",
//                     label: "Button URL",
//                   },
//                   {
//                     type: "string",
//                     name: "layout",
//                     label: "Layout",
//                     options: [
//                       { value: "style-1", label: "Style 1 (e.g., image left)" },
//                       { value: "style-2", label: "Style 2 (e.g., image right)" },
//                     ],
//                   },
//                 ],
//               },
//               {
//                 name: "textBoxWithImage",
//                 label: "Text Box with Image",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "smallHeading",
//                     label: "Small Heading",
//                   },
//                   {
//                     type: "string",
//                     name: "bigHeading",
//                     label: "Big Heading",
//                   },
//                   {
//                     type: "rich-text",
//                     name: "paragraph",
//                     label: "Paragraph",
//                   },
//                   {
//                     type: "image",
//                     name: "image",
//                     label: "Image",
//                   },
//                 ],
//               },
//               {
//                 name: "textBoxWithButton",
//                 label: "Text Box with Button",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "smallHeading",
//                     label: "Small Heading",
//                   },
//                   {
//                     type: "string",
//                     name: "bigHeading",
//                     label: "Big Heading",
//                   },
//                   {
//                     type: "rich-text",
//                     name: "paragraph",
//                     label: "Paragraph",
//                   },
//                   {
//                     type: "string",
//                     name: "buttonText",
//                     label: "Button Text",
//                   },
//                   {
//                     type: "string",
//                     name: "buttonUrl",
//                     label: "Button URL",
//                   },
//                 ],
//               },
//               {
//                 name: "simpleTextBox",
//                 label: "Simple Text Box",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "bigHeading",
//                     label: "Big Heading",
//                   },
//                   {
//                     type: "rich-text",
//                     name: "paragraph",
//                     label: "Paragraph",
//                   },
//                 ],
//               },
//               {
          
//                 label: 'Text with Image Background',
//                 name: 'textWithImageBG',
//                 fields: [
//                   {
//                     type: 'string',
//                     label: 'Small Heading',
//                     name: 'smallHeading',
//                   },
//                   {
//                     type: 'string',
//                     label: 'Big Heading',
//                     name: 'bigHeading',
//                   },
//                   {
//                     type: 'rich-text',
//                     label: 'Paragraph',
//                     name: 'paragraph',
//                   },
//                   {
//                     type: 'string',
//                     label: 'Button Text',
//                     name: 'buttonText',
//                   },
//                   {
//                     type: 'string',
//                     label: 'Button URL',
//                     name: 'buttonUrl',
//                   },
//                   {
//                     type: 'image',
//                     label: 'Background Image',
//                     name: 'backgroundImage',
//                   },
//                 ],
//               },
              
//               {
//                 name: "textBoxWithList",
//                 label: "Text Box with List",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "smallHeading",
//                     label: "Small Heading",
//                   },
//                   {
//                     type: "string",
//                     name: "bigHeading",
//                     label: "Big Heading",
//                   },
//                   {
//                     type: "image",
//                     name: "image",
//                     label: "Image",
//                   },
//                   {
//                     type: "string",
//                     name: "listItems",
//                     label: "List Items",
//                     list: true,
//                   },
//                 ],
//               },
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
//               {
//                 name: "cardGroup",
//                 label: "Card Group",
//                 fields: [
//                   {
//                     type: "object",
//                     name: "cards",
//                     label: "Cards",
//                     list: true,
//                     fields: [
//                       {
//                         type: "image",
//                         name: "icon",
//                         label: "Icon",
//                       },
//                       {
//                         type: "string",
//                         name: "header",
//                         label: "Header",
//                       },
//                       {
//                         type: "rich-text",
//                         name: "text",
//                         label: "Text",
//                       },
//                     ],
//                   },
//                 ],
//               },
//               {
//                 name: "imageCardGroup",
//                 label: "Image Card Group",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "heading",
//                     label: "Heading",
//                   },
//                   {
//                     type: "object",
//                     name: "cards",
//                     label: "Cards",
//                     list: true,
//                     fields: [
//                       {
//                         type: "image",
//                         name: "image",
//                         label: "Image",
//                       },
//                       {
//                         type: "string",
//                         name: "alt",
//                         label: "Alt Text",
//                       },
//                     ],
//                   },
//                 ],
//               }
//             ],
//           },
//         ],
//         ui: {
//           router: ({ document }) => {
//             const [locale] = document._sys.relativePath.split('/');
//             const basename = document._sys.filename;
//             return basename === 'home'
//               ? `/${locale}/`
//               : `/${locale}/${basename}`;
//           },
//         },
//       },
//       {
//         name: "navigation",
//         label: "Navigation",
//         path: "content/navigation",
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
      
//       {
//         name: "footer",
//         label: "Footer",
//         path: "content/footer",
//         format: "json",
//         fields: [
//           {
//             type: "string",
//             name: "description",
//             label: "Description",
//             ui: {
//               component: "textarea",
//             },
//           },
//           {
//             type: "object",
//             name: "quickLinks",
//             label: "Quick Links",
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
//             ],
//           },
//           {
//             type: "object",
//             name: "aboutUs",
//             label: "About Us Links",
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
//             ],
//           },
//           {
//             type: "object",
//             name: "importantLinks",
//             label: "Important Links",
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
//             ],
//           },
//           {
//             type: "object",
//             name: "socials",
//             label: "Social Media",
//             list: true,
//             fields: [
//               {
//                 type: "string",
//                 name: "name",
//                 label: "Platform Name",
//                 required: true,
//               },
//               {
//                 type: "string",
//                 name: "url",
//                 label: "URL",
//                 required: true,
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
                name: "textBoxWithImageAndButton",
                label: "Text Box with Image and Button",
                fields: [
                  {
                    type: "string",
                    name: "smallHeading",
                    label: "Small Heading",
                  },
                  {
                    type: "string",
                    name: "bigHeading",
                    label: "Big Heading",
                  },
                  {
                    type: "rich-text",
                    name: "paragraph",
                    label: "Paragraph",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                  },
                  {
                    type: "string",
                    name: "buttonUrl",
                    label: "Button URL",
                  },
                  {
                    type: "string",
                    name: "layout",
                    label: "Layout",
                    options: [
                      { value: "style-1", label: "Style 1 (e.g., image left)" },
                      { value: "style-2", label: "Style 2 (e.g., image right)" },
                    ],
                  },
                ],
              },
              {
                name: "textBoxWithImage",
                label: "Text Box with Image",
                fields: [
                  {
                    type: "string",
                    name: "smallHeading",
                    label: "Small Heading",
                  },
                  {
                    type: "string",
                    name: "bigHeading",
                    label: "Big Heading",
                  },
                  {
                    type: "rich-text",
                    name: "paragraph",
                    label: "Paragraph",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
              },
                // Add TextImageCenter template
                {
                  name: 'textImageCenter',
                  label: 'Text Image Center',
                  fields: [
                    {
                      type: 'image',
                      name: 'image',
                      label: 'Image',
                      
                      description: 'Upload or provide a URL to an image',
                    },
                    {
                      type: 'string',
                      name: 'bigHeading',
                      label: 'Big Heading',
                    },
                    {
                      type: 'rich-text',
                      name: 'paragraph',
                      label: 'Paragraph',
                    },
                  ],
                },
              {
                name: "textBoxWithButton",
                label: "Text Box with Button",
                fields: [
                  {
                    type: "string",
                    name: "smallHeading",
                    label: "Small Heading",
                  },
                  {
                    type: "string",
                    name: "bigHeading",
                    label: "Big Heading",
                  },
                  {
                    type: "rich-text",
                    name: "paragraph",
                    label: "Paragraph",
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                  },
                  {
                    type: "string",
                    name: "buttonUrl",
                    label: "Button URL",
                  },
                ],
              },
              {
                name: "simpleTextBox",
                label: "Simple Text Box",
                fields: [
                  {
                    type: "string",
                    name: "bigHeading",
                    label: "Big Heading",
                  },
                  {
                    type: "rich-text",
                    name: "paragraph",
                    label: "Paragraph",
                  },
                ],
              },
              {
                label: "Text with Image Background",
                name: "textWithImageBG",
                fields: [
                  {
                    type: "string",
                    label: "Small Heading",
                    name: "smallHeading",
                  },
                  {
                    type: "string",
                    label: "Big Heading",
                    name: "bigHeading",
                  },
                  {
                    type: "rich-text",
                    label: "Paragraph",
                    name: "paragraph",
                  },
                  {
                    type: "string",
                    label: "Button Text",
                    name: "buttonText",
                  },
                  {
                    type: "string",
                    label: "Button URL",
                    name: "buttonUrl",
                  },
                  {
                    type: "image",
                    label: "Background Image",
                    name: "backgroundImage",
                  },
                ],
              },
              {
                name: "textBoxWithList",
                label: "Text Box with List",
                fields: [
                  {
                    type: "string",
                    name: "smallHeading",
                    label: "Small Heading",
                  },
                  {
                    type: "string",
                    name: "bigHeading",
                    label: "Big Heading",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "listItems",
                    label: "List Items",
                    list: true,
                  },
                ],
              },
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
              {
                name: "cardGroup",
                label: "Card Group",
                fields: [
                  {
                    type: "object",
                    name: "cards",
                    label: "Cards",
                    list: true,
                    fields: [
                      {
                        type: "image",
                        name: "icon",
                        label: "Icon",
                      },
                      {
                        type: "string",
                        name: "header",
                        label: "Header",
                      },
                      {
                        type: "rich-text",
                        name: "text",
                        label: "Text",
                      },
                    ],
                  },
                ],
              },
              {
                name: "imageCardGroup",
                label: "Image Card Group",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "object",
                    name: "cards",
                    label: "Cards",
                    list: true,
                    fields: [
                      {
                        type: "image",
                        name: "image",
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
              {
                name: "textwVideo",
                label: "Text with Video",
                fields: [
                  {
                    type: "string",
                    name: "bigHeading",
                    label: "Big Heading",
                  },
                  {
                    type: "string",
                    name: "smallHeading",
                    label: "Small Heading",
                  },
                  {
                    type: "string",  // Store video path as a string
                    name: "video",
                    label: "Video",
                  
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => {
            const [locale] = document._sys.relativePath.split("/");
            const basename = document._sys.filename;
            return basename === "home"
              ? `/${locale}/`
              : `/${locale}/${basename}`;
          },
        },
      },
      {
        name: "navigation",
        label: "Navigation",
        path: "content/navigation",
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