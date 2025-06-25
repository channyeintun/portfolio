'use client';

import { useState, useEffect } from 'react';
import { generatePersonalizedWelcomeMessage } from '@/ai/flows/personalized-welcome-message';
import { Skeleton } from './ui/skeleton';

export default function PersonalizedWelcome() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWelcomeMessage() {
      try {
        const result = await generatePersonalizedWelcomeMessage({
          location: 'a visitor from the web', // Placeholder as we can't get real location easily
          browsingHistory: 'just landed on the homepage', // Placeholder
        });
        setMessage(result.message);
      } catch (error) {
        console.error('Error generating welcome message:', error);
        // Fallback message
        setMessage('Welcome to my portfolio!');
      } finally {
        setLoading(false);
      }
    }

    getWelcomeMessage();
  }, []);

  if (loading) {
    return (
      <div className="mb-6 space-y-2">
        <Skeleton className="h-6 w-3/4 mx-auto" />
      </div>
    );
  }

  return (
    <p className="text-primary mb-6 text-lg italic md:text-xl">
      &ldquo;{message}&rdquo;
    </p>
  );
}
