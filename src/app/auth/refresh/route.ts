import { refreshJwt } from '@/entities/auth';
import { getSession } from '@/entities/auth/lib';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const payload = await getSession();
  if (!payload || !payload.refresh) {
    return NextResponse.json(
      {
        error: 'User not authorized',
      },
      { status: 401 },
    );
  }
  try {
    const updatedToken = await refreshJwt({
      refresh: payload.refresh as string,
    });
    return NextResponse.json(updatedToken, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Error getting new token',
      },
      { status: 500 },
    );
  }
}
