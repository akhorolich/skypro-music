// import 'server-only';
'use server';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { SessionPayload } from '../types';

const SESSION = process.env.SESSION_SECRET;
const ENCODED_KEY = new TextEncoder().encode(SESSION);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(ENCODED_KEY);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, ENCODED_KEY, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    //TODO: HANDLE ERROR
    const err = error as Error;
    console.log('Session decrypt failed:', err.message, err.name);
  }
}

export async function createSession(data: SessionPayload) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt(data);
  const store = await cookies();

  store.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    path: '/',
    sameSite: 'strict',
  });
}

export async function deleteSession() {
  const store = await cookies();
  store.set('session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: 0,
    path: '/',
    sameSite: 'strict',
  });
}

export async function getSession() {
  const session = (await cookies()).get('session')?.value;
  try {
    const payload = await decrypt(session);
    const result: SessionPayload = {
      refresh: payload?.refresh as string,
      access: payload?.access as string,
      email: payload?.email as string,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
}
