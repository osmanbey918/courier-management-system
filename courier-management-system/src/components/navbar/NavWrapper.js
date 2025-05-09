'use client';

import { usePathname } from 'next/navigation';
import NavBar from './NavBar';

export default function NavWrapper() {
  const pathname = usePathname();

  // Hide NavBar on login page
  if (pathname === '/') {
    return '';
  }
  return <NavBar />;


}
