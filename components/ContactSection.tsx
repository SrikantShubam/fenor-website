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
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <h2 className="text-[28px] md:text-[33px] lg:text-[48px] font-bold tracking-tight">
            {renderHeader(header)}
          </h2>
          {introText && (
            <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{introText}</p>
          )}
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#FFDA66] mt-1" />
            <div>
              <p className="text-sm font-medium text-white">{contactEmailLabel}</p>
              <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
                {contactEmail}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-[#FFDA66] mt-1" />
            <div>
              <p className="text-sm font-medium text-white">{phoneLabel}</p>
              <p className="mt-1 font-bold text-[23px] md:text-[28px] lg:text-[33px] text-white">
                {phoneNumber}
              </p>
            </div>
          </div>
          <p className="text-white text-[13px] md:text-[16px] lg:text-[19px]">{tagline}</p>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="md:mt-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <div className="p-8 bg-white rounded-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  {form.fullNameLabel}
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder={form.fullNamePlaceholder}
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  {form.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={form.emailPlaceholder}
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  {form.messageLabel}
                </label>
                <textarea
                  name="message"
                  placeholder={form.messagePlaceholder}
                  rows={4}
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-shadow"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full flex justify-center items-center rounded-lg bg-[#FFDA66] px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : form.sendButton}
              </motion.button>
              {submitStatus === 'success' && (
                <p className="text-green-600 mt-4">{form.successMessage}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 mt-4">{form.errorMessage}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;