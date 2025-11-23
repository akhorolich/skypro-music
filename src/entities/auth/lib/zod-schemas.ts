import * as z from 'zod';

export const SignUpZodSchema = z.object({
  username: z.string().min(4, { message: 'More 4 characters!' }).trim(),
  password: z.string().min(6, { message: 'More 6 characters!' }).trim(),
  email: z.string().email({ message: 'Please inter a valid email' }),
});

export const SignInZodSchema = z.object({
  password: z.string().min(6, { message: 'More 6 characters!' }).trim(),
  email: z.string().email({ message: 'Please inter a valid email' }),
});
