// client.ts
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: "9f3ykjul",
  dataset: "production",
  apiVersion: '2025-01-18',
  useCdn: true, // Use `false` to always fetch fresh data
  token: process.env.SANITY_API_TOKEN, // Securely use the token
});

export default client;
