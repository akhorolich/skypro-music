export type SessionPayload = {
  access: string;
  refresh: string;
  email: string;
};

export async function getClientSession(): Promise<SessionPayload | null> {
  if (typeof window === 'undefined') {
    console.log('getClientSession must be called on the client');
    return null;
  }
  try {
    const res = await fetch('/api/session', {
      cache: 'no-store',
      credentials: 'same-origin',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json as SessionPayload;
  } catch (error) {
    console.log('getClientSession error:', error);
    return null;
  }
}
