import Link from 'next/link';
import { ReactNode } from 'react'
import Image from 'next/image';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import SignOutButton from '../(auth)/sign-out/SignOutButtion';
const RootLayout = async ({ children }: { children: ReactNode }) => {

  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout '>
      <nav>
        <div className='flex items-center justify-between w-full px-1 py-4'>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/logo.svg" alt='Logo' width={38} height={38} />
            <h2 className='text-primary-100'>MockTalk</h2>
          </Link>
          <SignOutButton />
        </div>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
