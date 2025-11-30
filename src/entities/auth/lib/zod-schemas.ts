import * as z from 'zod';

export const SignUpZodSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Длина логина должна быть больше 4 символов!' })
    .trim(),
  password: z
    .string()
    .min(6, { message: 'Длина пароля должна составлять больше 6 символов!' })
    .trim(),
  email: z.string().email({ message: 'Email введен неверно!' }),
});

export const SignInZodSchema = z.object({
  password: z
    .string()
    .min(6, { message: 'Длина пароля должна составлять больше 6 символов!' })
    .trim(),
  email: z.string().email({ message: 'Email введен неверно!' }),
});
