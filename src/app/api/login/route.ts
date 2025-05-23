import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const users = await import('../../../data/user.json').then((m) => m.default);


export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  }

  // Create cookie with user info (don't include password)
  const userData = { id: user.id, username: user.username, role: user.role };
  const response = NextResponse.json({ success: true, user: userData });

  // Set cookie for 1 day
  response.cookies.set({
    name: 'user',
    value: JSON.stringify(userData),
    maxAge: 60 * 60 * 24,
    httpOnly: false, // Set true if you want secure cookie (requires HTTPS)
    path: '/',
  });

  return response;
}
