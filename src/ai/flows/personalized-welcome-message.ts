'use server';

/**
 * @fileOverview AI flow to generate personalized welcome messages for site visitors based on their location and browsing history.
 *
 * - generatePersonalizedWelcomeMessage - A function that generates personalized welcome messages.
 * - PersonalizedWelcomeMessageInput - The input type for the generatePersonalizedWelcomeMessage function.
 * - PersonalizedWelcomeMessageOutput - The return type for the generatePersonalizedWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWelcomeMessageInputSchema = z.object({
  location: z
    .string()
    .describe('The location of the site visitor (e.g., city, region, country).'),
  browsingHistory: z
    .string()
    .describe(
      'A summary of the site visitor\'s browsing history on the website.'
    ),
});
export type PersonalizedWelcomeMessageInput = z.infer<
  typeof PersonalizedWelcomeMessageInputSchema
>;

const PersonalizedWelcomeMessageOutputSchema = z.object({
  message: z
    .string()
    .describe('A personalized welcome message for the site visitor.'),
});
export type PersonalizedWelcomeMessageOutput = z.infer<
  typeof PersonalizedWelcomeMessageOutputSchema
>;

export async function generatePersonalizedWelcomeMessage(
  input: PersonalizedWelcomeMessageInput
): Promise<PersonalizedWelcomeMessageOutput> {
  return personalizedWelcomeMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedWelcomeMessagePrompt',
  input: {schema: PersonalizedWelcomeMessageInputSchema},
  output: {schema: PersonalizedWelcomeMessageOutputSchema},
  prompt: `You are an AI assistant that specializes in creating personalized welcome messages for website visitors.

  Based on the visitor's location and browsing history, generate a warm and engaging welcome message.

  Location: {{location}}
  Browsing History: {{browsingHistory}}

  Welcome Message:`,
});

const personalizedWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'personalizedWelcomeMessageFlow',
    inputSchema: PersonalizedWelcomeMessageInputSchema,
    outputSchema: PersonalizedWelcomeMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
