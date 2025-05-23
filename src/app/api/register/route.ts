// app/api/register/route.ts
import { NextResponse } from 'next/server';

const users = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'dashboard', password: 'user123', role: 'user' },
];

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password, role } = body;

  if (!username || !password || !role) {
    return NextResponse.json(
      { success: false, message: 'All fields required' },
      { status: 400 }
    );
  }

  const exists = users.find((u) => u.username === username);
  if (exists) {
    return NextResponse.json(
      { success: false, message: 'User already exists' },
      { status: 400 }
    );
  }

  const newUser = {
    id: users.length + 1,
    username,
    password,
    role,
  };

  users.push(newUser);

  return NextResponse.json({ success: true, user: newUser });
}
