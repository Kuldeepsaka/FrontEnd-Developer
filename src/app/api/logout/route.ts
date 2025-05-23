// utils/logout.ts
'use client';

import { signOut } from 'next-auth/react';

export const logout = async () => {
  // Remove user from localStorage
  localStorage.removeItem('user');

  // Call NextAuth signOut (no redirect)
  await signOut({ redirect: false });

  // Redirect manually
  window.location.href = '/';
};
