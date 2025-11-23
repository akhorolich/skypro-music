import 'server-only';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { SessionPayload } from '../types';
import axios from 'axios';

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
    console.log('Session decrypt failed:', error);
  }
}

export async function createSession(data: SessionPayload) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt(data);
  const store = await cookies();

  store.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    path: '/',
    sameSite: 'strict',
  });
}

export async function deleteSession() {
  const store = await cookies();
  store.set('session', '', {
    httpOnly: true,
    secure: true,
    expires: 0,
    path: '/',
    sameSite: 'strict',
  });
}

export async function getSession() {
  const session = (await cookies()).get('session')?.value;
  try {
    const payload = await decrypt(session);
    return payload;
  } catch (error) {
    console.log(error);
  }
}

// export async function updateSession(refreshToken: string) {
//   try {
//     const newToken = await axios.post('/api/refresh', {
//       refresh: refreshToken,
//     });
//   } catch (error) {}
// }
