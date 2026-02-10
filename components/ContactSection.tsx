// import React, { useState } from 'react';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion, Variants } from 'framer-motion';
// import { Mail, Phone } from 'lucide-react';

// interface FormProps {
//   fullNameLabel?: string;
//   fullNamePlaceholder?: string;
//   emailLabel?: string;
//   emailPlaceholder?: string;
//   messageLabel?: string;
//   messagePlaceholder?: string;
//   sendButton?: string;
// }

// interface ContactSectionProps {
//   header?: string;
//   introText?: string | TinaMarkdownContent;
//   contactEmailLabel?: string;
//   contactEmail?: string;
//   phoneLabel?: string;
//   phoneNumber?: string;
//   tagline?: string;
//   form?: FormProps;
// }

// const fadeInLeft: Variants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const fadeInRight: Variants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const ContactSection: React.FC<ContactSectionProps> = ({
//   header = 'Get in – touch',
//   introText,
//   contactEmailLabel = 'Email',
//   contactEmail = 'info@fenor.org',
//   phoneLabel = 'Phone',
//   phoneNumber = '22650000',
//   tagline = 'Have questions or want to learn more about FENOR? Reach out to us—we’re here to help',
//   form = {
//     fullNameLabel: 'Full Name',
//     fullNamePlaceholder: 'Enter your full name',
//     emailLabel: 'Email',
//     emailPlaceholder: 'Enter your email address',
//     messageLabel: 'How can we help you?',
//     messagePlaceholder: 'Enter your message...',
//     sendButton: 'Send Message',
//   },
// }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

//  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   const form = event.currentTarget; // Capture the form element here
//   setIsSubmitting(true);
//   setSubmitStatus(null);

//   const formData = new FormData(form); // Use the captured form
//   const data = {
//     fullName: (formData.get('fullName') as string).trim(),
//     email: (formData.get('email') as string).trim(),
//     message: (formData.get('message') as string).trim(),
//   };

//   // Basic validations
//   if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 100) {
//     setSubmitStatus('error');
//     setIsSubmitting(false);
//     return;
//   }
//   if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//     setSubmitStatus('error');
//     setIsSubmitting(false);
//     return;
//   }
//   if (!data.message || data.message.length < 10 || data.message.length > 1000) {
//     setSubmitStatus('error');
//     setIsSubmitting(false);
//     return;
//   }

//   try {
//     const response = await fetch('/api/sendEmail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       setSubmitStatus('success');
//       form.reset(); // Use the captured form to reset
//     } else {
//       setSubmitStatus('error');
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     setSubmitStatus('error');
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Info */}
//         <motion.div
//           className="space-y-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInLeft}
//         >
//           <h2 className="text-[28px] md:text-[33px] lg:text-[48px] font-bold text-white tracking-tight">
//             {header} <span className="text-[#FFDA66]">us</span>
//           </h2>
//           {introText && (
//             <div className="mt-4">
//               {typeof introText === 'string' ? (
//                 <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{introText}</p>
//               ) : (
//                 <div className="text-white text-[13px] md:text-[16px] lg:text-[19px]">
//                   <TinaMarkdown content={introText} />
//                 </div>
//               )}
//             </div>
//           )}
//           <div className="flex items-start gap-4">
//             <Mail className="w-6 h-6 text-[#FFDA66] mt-1" />
//             <div>
//               <p className="text-sm font-medium text-white">{contactEmailLabel}</p>
//               <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
//                 {contactEmail}
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <Phone className="w-6 h-6 text-[#FFDA66] mt-1" />
//             <div>
//               <p className="text-sm font-medium text-white">{phoneLabel}</p>
//               <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
//                 {phoneNumber}
//               </p>
//             </div>
//           </div>
//           <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{tagline}</p>
//         </motion.div>

//         {/* Right Form */}
//         <motion.div
//           className="md:mt-[40px]"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInRight}
//         >
//           <div className="p-8 bg-white rounded-2xl">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.fullNameLabel}
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder={form.fullNamePlaceholder}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.emailLabel}
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder={form.emailPlaceholder}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.messageLabel}
//                 </label>
//                 <textarea
//                   name="message"
//                   placeholder={form.messagePlaceholder}
//                   rows={4}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <motion.button
//                 type="submit"
//                 className="w-full flex justify-center items-center rounded-lg bg-[#FFDA66] px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : form.sendButton}
//               </motion.button>
//               {submitStatus === 'success' && (
//                 <p className="text-green-600 mt-4">Message sent successfully!</p>
//               )}
//               {submitStatus === 'error' && (
//                 <p className="text-red-600 mt-4">Failed to send message. Please check your inputs and try again.</p>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;









// import React, { useState } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Mail, Phone } from 'lucide-react';

// interface FormProps {
//   fullNameLabel?: string;
//   fullNamePlaceholder?: string;
//   emailLabel?: string;
//   emailPlaceholder?: string;
//   messageLabel?: string;
//   messagePlaceholder?: string;
//   sendButton?: string;
// }

// interface ContactSectionProps {
//   header?: string;
//   introText?: string;
//   contactEmailLabel?: string;
//   contactEmail?: string;
//   phoneLabel?: string;
//   phoneNumber?: string;
//   tagline?: string;
//   form?: FormProps;
// }

// const fadeInLeft: Variants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const fadeInRight: Variants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const ContactSection: React.FC<ContactSectionProps> = ({
//   header = 'Get in – touch',
//   introText,
//   contactEmailLabel = 'Email',
//   contactEmail = 'info@fenor.org',
//   phoneLabel = 'Phone',
//   phoneNumber = '22650000',
//   tagline = 'Have questions or want to learn more about FENOR? Reach out to us—we’re here to help',
//   form = {
//     fullNameLabel: 'Full Name',
//     fullNamePlaceholder: 'Enter your full name',
//     emailLabel: 'Email',
//     emailPlaceholder: 'Enter your email address',
//     messageLabel: 'How can we help you?',
//     messagePlaceholder: 'Enter your message...',
//     sendButton: 'Send Message',
//   },
// }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     const formData = new FormData(form);
//     const data = {
//       fullName: (formData.get('fullName') as string).trim(),
//       email: (formData.get('email') as string).trim(),
//       message: (formData.get('message') as string).trim(),
//     };

//     // Basic validations
//     if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 100) {
//       setSubmitStatus('error');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//       setSubmitStatus('error');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!data.message || data.message.length < 10 || data.message.length > 1000) {
//       setSubmitStatus('error');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch('/api/sendEmail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         form.reset();
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Info */}
//         <motion.div
//           className="space-y-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInLeft}
//         >
//           <h2 className="text-[28px] md:text-[33px] lg:text-[48px] font-bold text-white tracking-tight">
//             {header} <span className="text-[#FFDA66]">us</span>
//           </h2>
//           {introText && (
//             <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{introText}</p>
//           )}
//           <div className="flex items-start gap-4">
//             <Mail className="w-6 h-6 text-[#FFDA66] mt-1" />
//             <div>
//               <p className="text-sm font-medium text-white">{contactEmailLabel}</p>
//               <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
//                 {contactEmail}
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <Phone className="w-6 h-6 text-[#FFDA66] mt-1" />
//             <div>
//               <p className="text-sm font-medium text-white">{phoneLabel}</p>
//               <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
//                 {phoneNumber}
//               </p>
//             </div>
//           </div>
//           <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{tagline}</p>
//         </motion.div>

//         {/* Right Form */}
//         <motion.div
//           className="md:mt-[40px]"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInRight}
//         >
//           <div className="p-8 bg-white rounded-2xl">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.fullNameLabel}
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder={form.fullNamePlaceholder}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.emailLabel}
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder={form.emailPlaceholder}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.messageLabel}
//                 </label>
//                 <textarea
//                   name="message"
//                   placeholder={form.messagePlaceholder}
//                   rows={4}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <motion.button
//                 type="submit"
//                 className="w-full flex justify-center items-center rounded-lg bg-[#FFDA66] px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : form.sendButton}
//               </motion.button>
//               {submitStatus === 'success' && (
//                 <p className="text-green-600 mt-4">Message sent successfully!</p>
//               )}
//               {submitStatus === 'error' && (
//                 <p className="text-red-600 mt-4">Failed to send message. Please check your inputs and try again.</p>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

















// import React, { useState } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Mail, Phone } from 'lucide-react';

// interface FormProps {
//   fullNameLabel?: string;
//   fullNamePlaceholder?: string;
//   emailLabel?: string;
//   emailPlaceholder?: string;
//   messageLabel?: string;
//   messagePlaceholder?: string;
//   sendButton?: string;
//   successMessage?: string;
//   errorMessage?: string;
// }

// interface ContactSectionProps {
//   header?: string;
//   introText?: string;
//   contactEmailLabel?: string;
//   contactEmail?: string;
//   phoneLabel?: string;
//   phoneNumber?: string;
//   tagline?: string;
//   form?: FormProps;
// }

// const fadeInLeft: Variants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const fadeInRight: Variants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const ContactSection: React.FC<ContactSectionProps> = ({
//   header = 'Get in – touch',
//   introText,
//   contactEmailLabel = 'Email',
//   contactEmail = 'info@fenor.org',
//   phoneLabel = 'Phone',
//   phoneNumber = '22650000',
//   tagline = 'Have questions or want to learn more about FENOR? Reach out to us—we’re here to help',
//   form = {
//     fullNameLabel: 'Full Name',
//     fullNamePlaceholder: 'Enter your full name',
//     emailLabel: 'Email',
//     emailPlaceholder: 'Enter your email address',
//     messageLabel: 'How can we help you?',
//     messagePlaceholder: 'Enter your message...',
//     sendButton: 'Send Message',
//     successMessage: 'Message sent successfully!',
//     errorMessage: 'Failed to send message. Please check your inputs and try again.',
//   },
// }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     const formData = new FormData(form);
//     const data = {
//       fullName: (formData.get('fullName') as string).trim(),
//       email: (formData.get('email') as string).trim(),
//       message: (formData.get('message') as string).trim(),
//     };

//     // Basic validations
//     if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 100) {
//       setSubmitStatus('error');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//       setSubmitStatus('error');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!data.message || data.message.length < 10 || data.message.length > 1000) {
//       setSubmitStatus('error');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch('/api/sendEmail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         form.reset();
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Info */}
//         <motion.div
//           className="space-y-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInLeft}
//         >
//           <h2 className="text-[28px] md:text-[33px] lg:text-[48px] font-bold text-white tracking-tight">
//             {header} <span className="text-[#FFDA66]">us</span>
//           </h2>
//           {introText && (
//             <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{introText}</p>
//           )}
//           <div className="flex items-start gap-4">
//             <Mail className="w-6 h-6 text-[#FFDA66] mt-1" />
//             <div>
//               <p className="text-sm font-medium text-white">{contactEmailLabel}</p>
//               <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
//                 {contactEmail}
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <Phone className="w-6 h-6 text-[#FFDA66] mt-1" />
//             <div>
//               <p className="text-sm font-medium text-white">{phoneLabel}</p>
//               <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
//                 {phoneNumber}
//               </p>
//             </div>
//           </div>
//           <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{tagline}</p>
//         </motion.div>

//         {/* Right Form */}
//         <motion.div
//           className="md:mt-[40px]"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInRight}
//         >
//           <div className="p-8 bg-white rounded-2xl">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.fullNameLabel}
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder={form.fullNamePlaceholder}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.emailLabel}
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder={form.emailPlaceholder}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">
//                   {form.messageLabel}
//                 </label>
//                 <textarea
//                   name="message"
//                   placeholder={form.messagePlaceholder}
//                   rows={4}
//                   className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
//                   required
//                 />
//               </div>
//               <motion.button
//                 type="submit"
//                 className="w-full flex justify-center items-center rounded-lg bg-[#FFDA66] px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : form.sendButton}
//               </motion.button>
//               {submitStatus === 'success' && (
//                 <p className="text-green-600 mt-4">{form.successMessage}</p>
//               )}
//               {submitStatus === 'error' && (
//                 <p className="text-red-600 mt-4">{form.errorMessage}</p>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;








import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

interface FormProps {
  fullNameLabel?: string;
  fullNamePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  sendButton?: string;
  successMessage?: string;
  errorMessage?: string;
}

interface ContactSectionProps {
  header?: string;
  introText?: string;
  contactEmailLabel?: string;
  contactEmail?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  tagline?: string;
  form?: FormProps;
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ContactSection: React.FC<ContactSectionProps> = ({
  header = 'Get in – touch',
  introText,
  contactEmailLabel = 'Email',
  contactEmail = 'info@fenor.org',
  phoneLabel = 'Phone',
  phoneNumber = '22650000',
  tagline = 'Have questions or want to learn more about FENOR? Reach out to us—we’re here to help',
  form = {
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email address',
    messageLabel: 'How can we help you?',
    messagePlaceholder: 'Enter your message...',
    sendButton: 'Send Message',
    successMessage: 'Message sent successfully!',
    errorMessage: 'Failed to send message. Please check your inputs and try again.',
  },
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const renderHeader = (header: string) => {
    const words = header.trim().split(/\s+/);
    if (words.length > 1) {
      const mainText = words.slice(0, -1).join(' ');
      const lastWord = words[words.length - 1];
      return (
        <>
          <span className="text-white">{mainText} </span>
          <span className="text-[#FFDA66]">{lastWord}</span>
        </>
      );
    } else {
      return <span className="text-[#FFDA66]">{header}</span>;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(form);
    const data = {
      fullName: (formData.get('fullName') as string).trim(),
      email: (formData.get('email') as string).trim(),
      message: (formData.get('message') as string).trim(),
    };

    // Basic validations
    if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 100) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    if (!data.message || data.message.length < 10 || data.message.length > 1000) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Info */}
        <motion.div
          className="max-w-[620px] space-y-8 md:space-y-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.08] tracking-tight">
            {renderHeader(header)}
          </h2>
          {introText && (
            <p className="max-w-[56ch] text-[14px] leading-relaxed text-white/88 md:text-[16px] lg:text-[18px]">
              {introText}
            </p>
          )}
          <div className="flex items-start gap-3 border-l-2 border-[#FFDA66]/75 pl-4">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-[#FFDA66]" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-white/75">{contactEmailLabel}</p>
              <p className="mt-1 break-all text-[21px] font-semibold leading-tight text-white md:text-[23px] lg:text-[26px]">
                {contactEmail}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-l-2 border-[#FFDA66]/75 pl-4">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-[#FFDA66]" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-white/75">{phoneLabel}</p>
              <p className="mt-1 text-[21px] font-semibold leading-tight text-white md:text-[23px] lg:text-[26px]">
                {phoneNumber}
              </p>
            </div>
          </div>
          <p className="max-w-[56ch] text-[14px] leading-relaxed text-white/80 md:text-[16px] lg:text-[18px]">{tagline}</p>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="md:mt-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-b from-[#F8F8F8] to-[#ECECEC] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-9">
            <div className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full bg-[#FFDA66]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#EBBA7F]/20 blur-3xl" />
            <form className="relative space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-[0.9rem] font-semibold tracking-[0.01em] text-[#101010]">
                  {form.fullNameLabel}
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder={form.fullNamePlaceholder}
                  className="block w-full rounded-xl border border-[#D6D8DE] bg-white/90 px-4 py-3.5 text-[16px] text-[#1F2430] placeholder:text-[#8C94A9] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-200 focus:border-[#EBBA7F] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FFDA66]/25"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-[0.9rem] font-semibold tracking-[0.01em] text-[#101010]">
                  {form.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={form.emailPlaceholder}
                  className="block w-full rounded-xl border border-[#D6D8DE] bg-white/90 px-4 py-3.5 text-[16px] text-[#1F2430] placeholder:text-[#8C94A9] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-200 focus:border-[#EBBA7F] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FFDA66]/25"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-[0.9rem] font-semibold tracking-[0.01em] text-[#101010]">
                  {form.messageLabel}
                </label>
                <textarea
                  name="message"
                  placeholder={form.messagePlaceholder}
                  rows={5}
                  className="block w-full resize-none rounded-xl border border-[#D6D8DE] bg-white/90 px-4 py-3.5 text-[16px] text-[#1F2430] placeholder:text-[#8C94A9] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-200 focus:border-[#EBBA7F] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FFDA66]/25"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="mt-1 flex w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-[#F4D774] to-[#EBBA7F] px-6 py-3.5 text-base font-semibold text-black shadow-[0_8px_24px_rgba(235,186,127,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(235,186,127,0.34)] focus:outline-none focus:ring-4 focus:ring-[#FFDA66]/35 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : form.sendButton}
              </motion.button>
              {submitStatus === 'success' && (
                <p className="mt-3 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                  {form.successMessage}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                  {form.errorMessage}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
