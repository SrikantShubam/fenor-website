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
//                 name: "textImageCenter",
//                 label: "Text Image Center",
//                 fields: [
//                   {
//                     type: "image",
//                     name: "image",
//                     label: "Image",
//                     description: "Upload or provide a URL to an image",
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
//                 label: "Text with Image Background",
//                 name: "textWithImageBG",
//                 fields: [
//                   {
//                     type: "string",
//                     label: "Small Heading",
//                     name: "smallHeading",
//                   },
//                   {
//                     type: "string",
//                     label: "Big Heading",
//                     name: "bigHeading",
//                   },
//                   {
//                     type: "rich-text",
//                     label: "Paragraph",
//                     name: "paragraph",
//                   },
//                   {
//                     type: "string",
//                     label: "Button Text",
//                     name: "buttonText",
//                   },
//                   {
//                     type: "string",
//                     label: "Button URL",
//                     name: "buttonUrl",
//                   },
//                   {
//                     type: "image",
//                     label: "Background Image",
//                     name: "backgroundImage",
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
//               },
//               {
//                 name: "textwVideo",
//                 label: "Text with Video",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "bigHeading",
//                     label: "Big Heading",
//                   },
//                   {
//                     type: "string",
//                     name: "smallHeading",
//                     label: "Small Heading",
//                   },
//                   {
//                     type: "string",
//                     name: "video",
//                     label: "Video",
//                   },
//                 ],
//               },
//               {
//                 name: "contactUs",
//                 label: "Contact Us Section",
//                 fields: [
//                   {
//                     type: "string",
//                     name: "header",
//                     label: "Header",
//                     description: "The main title, e.g., 'Contact Us'",
//                   },
//                   {
//                             type: "string",
//                     name: "paragraph",
//                     label: "Paragraph",
//                     description: "Introductory text, e.g., 'We’re here to help!'",
//                        ui: { component: "textarea" }
//                   },
//                   {
//                     type: "string",
//                     name: "contactEmailLabel",
//                     label: "Contact Email Label",
//                     description: "Label for email, e.g., 'Email'",
//                   },
//                   {
//                     type: "string",
//                     name: "contactEmail",
//                     label: "Contact Email",
//                     description: "The email address, e.g., 'support@yourwebsite.com'",
//                   },
//                   {
//                     type: "string",
//                     name: "phoneLabel",
//                     label: "Phone Label",
//                     description: "Label for phone, e.g., 'Phone'",
//                   },
//                   {
//                     type: "string",
//                     name: "phoneNumber",
//                     label: "Phone Number",
//                     description: "The phone number, e.g., '+1-800-123-4567'",
//                   },
//                   {
//                     type: "string",
//                     name: "tagline",
//                     label: "Tagline",
//                     description: "A catchy phrase, e.g., 'We’ve got your back'",
//                   },
//                   {
//                     type: "object",
//                     name: "form",
//                     label: "Form",
//                     fields: [
//                       {
//                         type: "string",
//                         name: "fullNameLabel",
//                         label: "Full Name Label",
//                         description: "e.g., 'Full Name'",
//                       },
//                       {
//                         type: "string",
//                         name: "fullNamePlaceholder",
//                         label: "Full Name Placeholder",
//                         description: "e.g., 'Enter your name'",
//                       },
//                       {
//                         type: "string",
//                         name: "emailLabel",
//                         label: "Email Label",
//                         description: "e.g., 'Email'",
//                       },
//                       {
//                         type: "string",
//                         name: "emailPlaceholder",
//                         label: "Email Placeholder",
//                         description: "e.g., 'Enter your email'",
//                       },
//                       {
//                         type: "string",
//                         name: "messageLabel",
//                         label: "Message Label",
//                         description: "e.g., 'How can we help you?'",
//                       },
//                       {
//                         type: "string",
//                         name: "messagePlaceholder",
//                         label: "Message Placeholder",
//                         description: "e.g., 'Type your message here'",
//                       },
//                       {
//                         type: "string",
//                         name: "sendButton",
//                         label: "Send Button",
//                         description: "e.g., 'Send'",
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//         ui: {
//           router: ({ document }) => {
//             const [locale] = document._sys.relativePath.split("/");
//             const basename = document._sys.filename;
//             return basename === "home"
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
              {
                name: "textImageCenter",
                label: "Text Image Center",
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                    description: "Upload or provide a URL to an image",
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
                    type: "string",
                    name: "video",
                    label: "Video",
                  },
                ],
              },
              {
                name: "contactUs",
                label: "Contact Us Section",
                fields: [
                  {
                    type: "string",
                    name: "header",
                    label: "Header",
                    description: "The main title, e.g., 'Contact Us'",
                  },
                  {
                    type: "string",
                    name: "introText",
                    label: "Introductory Text",
                    description: "Introductory text, e.g., 'We’re here to help!'",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "contactEmailLabel",
                    label: "Contact Email Label",
                    description: "Label for email, e.g., 'Email'",
                  },
                  {
                    type: "string",
                    name: "contactEmail",
                    label: "Contact Email",
                    description: "The email address, e.g., 'support@yourwebsite.com'",
                  },
                  {
                    type: "string",
                    name: "phoneLabel",
                    label: "Phone Label",
                    description: "Label for phone, e.g., 'Phone'",
                  },
                  {
                    type: "string",
                    name: "phoneNumber",
                    label: "Phone Number",
                    description: "The phone number, e.g., '+1-800-123-4567'",
                  },
                  {
                    type: "string",
                    name: "tagline",
                    label: "Tagline",
                    description: "A catchy phrase, e.g., 'We’ve got your back'",
                  },
                  {
                    type: "object",
                    name: "form",
                    label: "Form",
                    fields: [
                      {
                        type: "string",
                        name: "fullNameLabel",
                        label: "Full Name Label",
                        description: "e.g., 'Full Name'",
                      },
                      {
                        type: "string",
                        name: "fullNamePlaceholder",
                        label: "Full Name Placeholder",
                        description: "e.g., 'Enter your name'",
                      },
                      {
                        type: "string",
                        name: "emailLabel",
                        label: "Email Label",
                        description: "e.g., 'Email'",
                      },
                      {
                        type: "string",
                        name: "emailPlaceholder",
                        label: "Email Placeholder",
                        description: "e.g., 'Enter your email'",
                      },
                      {
                        type: "string",
                        name: "messageLabel",
                        label: "Message Label",
                        description: "e.g., 'How can we help you?'",
                      },
                      {
                        type: "string",
                        name: "messagePlaceholder",
                        label: "Message Placeholder",
                        description: "e.g., 'Type your message here'",
                      },
                      {
                        type: "string",
                        name: "sendButton",
                        label: "Send Button",
                        description: "e.g., 'Send'",
                      },
                    ],
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