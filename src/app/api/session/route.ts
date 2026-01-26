import { NextResponse } from 'next/server';
import { getSession as getServerSession } from '@/entities/auth/lib/session';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session) return NextResponse.json(null, { status: 401 });
    return NextResponse.json(session);
  } catch (error) {
    console.log('API /api/session error:', error);
    return NextResponse.json(null, { status: 500 });
  }
}
