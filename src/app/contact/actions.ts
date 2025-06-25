'use server';

import { z } from 'zod';
// import { db } from '@/lib/firebase';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  formData: z.infer<typeof ContactFormSchema>
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    // In a real application, this is where you would save to Firestore
    // const docRef = await addDoc(collection(db, 'contactSubmissions'), {
    //   name,
    //   email,
    //   message,
    //   timestamp: serverTimestamp(),
    // });
    
    // Simulating database write for this environment
    console.log('Form submission received:');
    console.log({ name, email, message, timestamp: new Date() });
    
    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
