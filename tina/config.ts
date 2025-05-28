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
    { type: "string", name: "title", label: "Meta Title" },
    { type: "string", name: "description", label: "Meta Description" },
   
  ]
}
,
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
                    // Removed required: true
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
                      {
                        value: "style-2",
                        label: "Style 2 (e.g., image right)",
                      },
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
                    // Already optional
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
  name: "investContact",
  label: "Invest Contact Section",
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header"
    },
    {
      type: "rich-text",
      name: "paragraph",
      label: "Paragraph"
    },
    {
      type: "string",
      name: "timings",
      label: "Timings"
    },
    {
      type: "object",
      name: "button",
      label: "Button",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label"
        },
        {
          type: "string",
          name: "url",
          label: "URL"
        }
      ]
    },
    {
      type: "object",
      name: "email",
      label: "Email",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label"
        },
        {
          type: "string",
          name: "email",
          label: "Email Address"
        }
      ]
    },
    {
      type: "object",
      name: "phone",
      label: "Phone",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label"
        },
        {
          type: "string",
          name: "phone",
          label: "Phone Number"
        }
      ]
    },
    {
      type: "string",
      name: "socialsHeading",
      label: "Socials Heading"
    },
    {
      type: "object",
      name: "socialMedia",
      label: "Social Media",
      list: true,
      fields: [
        {
          type: "string",
          name: "platform",
          label: "Platform",
          required: true, // Make platform required
          options: [
            { value: "facebook", label: "Facebook" },
            { value: "twitter", label: "Twitter" },
            { value: "linkedin", label: "LinkedIn" },
            { value: "instagram", label: "Instagram" },
            { value: "youtube", label: "YouTube" }
          ]
        },
        {
          type: "string",
          name: "link",
          label: "Link",
          required: true // Make link required
        }
      ]
    }
  ]
},
 {
  label: 'Contact Page',
  name: 'contact',
  fields: [
    // Big Header
    {
      type: 'rich-text',
      label: 'Big Header',
      name: 'bigHeader'
    },
    // Contact Paragraph (renamed from 'paragraph')
    {
      type: 'rich-text',
      label: 'Contact Paragraph',
      name: 'contactParagraph',
      
    },
    // Form Labels
    {
      type: 'string',
      label: 'Name Label',
      name: 'nameLabel'
    },
    {
      type: 'string',
      label: 'Email Label',
      name: 'emailLabel'
    },
    {
      type: 'string',
      label: 'Message Label',
      name: 'messageLabel'
    },
    // Button Text
    {
      type: 'string',
      label: 'Button Text',
      name: 'buttonText'
    },
    // Image
    {
      type: 'image',
      label: 'Image',
      name: 'image'
    },
    // Map Image
    {
      type: 'image',
      label: 'Map Image',
      name: 'mapImage'
    },
     {
      type: 'string',
      label: 'map link',
      name: 'mapLink'
    },
    // Address
    {
      type: 'object',
      label: 'Address',
      name: 'address',
      fields: [
        {
          type: 'string',
          label: 'Label',
          name: 'label'
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text'
        }
      ]
    },
    // Email
    {
      type: 'object',
      label: 'Email',
      name: 'email',
      fields: [
        {
          type: 'string',
          label: 'Label',
          name: 'label'
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text'
        }
      ]
    },
    // Phone
    {
      type: 'object',
      label: 'Phone',
      name: 'phone',
      fields: [
        {
          type: 'string',
          label: 'Label',
          name: 'label'
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text'
        }
      ]
    },
    // Contact Timings (renamed from 'timings')
    {
      type: 'object',
      label: 'Contact Timings',
      name: 'contactTimings',
      fields: [
        {
          type: 'string',
          label: 'Label',
          name: 'label'
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text'
        }
      ]
    },
    // Follow Section
    {
      type: 'string',
      label: 'Follow Label',
      name: 'followLabel'
    },
    // Social Media Links (renamed from 'socialMedia')
    {
      type: "object",
      name: "socialMedia",
      label: "Social Media",
      list: true,
      fields: [
        {
          type: "string",
          name: "platform",
          label: "Platform",
          required: true, // Make platform required
          options: [
            { value: "facebook", label: "Facebook" },
            { value: "twitter", label: "Twitter" },
            { value: "linkedin", label: "LinkedIn" },
            { value: "instagram", label: "Instagram" },
            { value: "youtube", label: "YouTube" }
          ]
        },
        {
          type: "string",
          name: "link",
          label: "Link",
          required: true // Make link required
        }
      ]
    }
  ]
},
              {
                name: "textBoxWithButton",
                label: "Text Box with Button",
                fields: [
                  {
                    type: "string",
                    name: "smallHeading",
                    label: "Small Heading",
                    // Already optional
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
                    name: "smallHeading",
                    label: "Small Heading",
                    // Already optional
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
                name: "InvestmentSection",
                label: "Investment Section",
                fields: [
                  {
                    type: "string",
                    name: "smallHeading",
                    label: "Heading Small",
                  },
                  { type: "string", name: "bigHeading", label: "Heading Big" },
                  {
                    type: "rich-text",
                    name: "paragraph",
                    label: "Paragraph Content",
                  }, // Corrected from "string" to "paragraph"
                  { type: "image", name: "image", label: "Image Event" },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "buttonUrl", label: "Button Link" },
                ],
              },
              {
                label: "News Section",
                name: "newsSection",
                fields: [
                  {
                    name: "sectionTitle",
                    label: "Section Title",
                    type: "string",
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
                    // Already optional
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
                    // Removed required: true
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
                    type: "object",
                    name: "listItems",
                    label: "List Items",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "text",
                        label: "Text",
                      },
                      {
                        type: "image",
                        name: "icon",
                        label: "Icon",
                      },
                      {
                        type: "boolean",
                        name: "showButton",
                        label: "Show Button",
                      },
                      {
                        type: "object",
                        name: "button",
                        label: "Button",
                        fields: [
                          {
                            type: "string",
                            name: "text",
                            label: "Button Text",
                          },
                          {
                            type: "string",
                            name: "url",
                            label: "Button URL",
                          },
                        ],
                      },
                    ],
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
                    required: true,
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
                    // Removed required: true
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
                    description:
                      "Introductory text, e.g., 'We’re here to help!'",
                    ui: { component: "textarea" },
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
                    description:
                      "The email address, e.g., 'support@yourwebsite.com'",
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
                      {
                        type: "string",
                        name: "successMessage",
                        label: "Success Message",
                        description:
                          "Message displayed when the form is submitted successfully",
                      },
                      {
                        type: "string",
                        name: "errorMessage",
                        label: "Error Message",
                        description:
                          "Message displayed when there's an error submitting the form",
                      },
                    ],
                  },
                ],
              },
              {
                name: "chairmanIntro",
                label: "Chairman Introduction",
                fields: [
                  {
                    type: "image",
                    name: "chairmanImage",
                    label: "Chairman Image",
                    required: true,
                  },
                  {
                    type: "rich-text",
                    name: "quote",
                    label: "Quote",
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                    required: true,
                  },
                  {
                    type: "image",
                    name: "signatureImage",
                    label: "Signature Image",
                  },
                  {
                    type: "string",
                    name: "chairmanName",
                    label: "Chairman Name",
                  },
                  {
                    type: "string",
                    name: "designation",
                    label: "Designation",
                  },
                  {
                    type: "object",
                    name: "button",
                    label: "Button",
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Button Label",
                      },
                      {
                        type: "string",
                        name: "link",
                        label: "Button Link",
                      },
                    ],
                  },
                ],
              },
              {
                label: "History Section",
                name: "contentWithHeaderDateIcon",
                fields: [
                  {
                    type: "string",
                    label: "Section Header",
                    name: "sectionHeader",
                    required: true,
                  },
                  {
                    type: "object",
                    label: "Timeline Items",
                    name: "timelineItems",
                    list: true,
                    fields: [
                      {
                        type: "datetime",
                        label: "Date",
                        name: "date",
                        required: true,
                      },
                      {
                        type: "image",
                        label: "Icon",
                        name: "icon",
                        description:
                          "Enter a FontAwesome icon name (e.g., fa-star) or image path",
                        required: true,
                      },
                      {
                        type: "string",
                        label: "Paragraph for History",
                        name: "paragraph_for_history",
                        isBody: true,
                        required: true,
                      },
                      {
                        type: "image",
                        label: "Image for Tags",
                        name: "image_for_tags",
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
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "boolean",
          name: "isDropdown",
          label: "Is Dropdown",
          description: "Toggle on if this item should show dropdown links",
        },
        {
          type: "object",
          name: "dropdownLinks",
          label: "Dropdown Links",
          list: true,
          description: "Add as many dropdown entries as you like",
          fields: [
            {
              type: "string",
              name: "label",
              label: "Dropdown Label",
            },
            {
              type: "string",
              name: "url",
              label: "Dropdown URL",
            },
          ],
        },
      ],
    },
  ],
}
,
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
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
  type: "object",
  name: "labels",
  label: "Section Labels",
  fields: [
    { type: "string", name: "quickLinks", label: "Quick Links Label" },
    { type: "string", name: "aboutUs", label: "About Us Label" },
    { type: "string", name: "importantLinks", label: "Important Links Label" },
    { type: "string", name: "ourSocials", label: "Our Socials Label" },
  ]
}
,
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
              },
              {
                type: "string",
                name: "url",
                label: "URL",
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
              },
              {
                type: "string",
                name: "url",
                label: "URL",
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
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
        ],
      },
    ],
  },
});