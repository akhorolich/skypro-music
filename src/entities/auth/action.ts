'use server';
import { AxiosError } from 'axios';
import { redirect } from 'next/navigation';

import { FormState } from './types';
import {
  SignUpZodSchema,
  SignInZodSchema,
  createSession,
  deleteSession,
} from './lib';
import { jwt, login, register } from './api';

export async function signup(state: FormState, formData: FormData) {
  const validateFields = SignUpZodSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  try {
    await register(validateFields.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data.message || 'Unhandled error',
      };
    }
  }
  redirect('/auth/signin');
}

export async function signin(state: FormState, formData: FormData) {
  const validateFields = SignInZodSchema.safeParse({
    password: formData.get('password'),
    email: formData.get('email'),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await login(validateFields.data);
    const userJwt = await jwt(validateFields.data);
    await createSession({
      email: response.email,
      access: userJwt.access,
      refresh: userJwt.refresh,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data.message,
      };
    }
  }
  redirect('/playlist');
}

export async function logout() {
  await deleteSession();
  redirect('/auth/signin');
}
