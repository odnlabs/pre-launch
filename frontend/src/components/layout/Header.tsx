'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Menu from './Menu';

export default function Header() {
  const pathname = usePathname();

  const urlSplit = pathname.split('/');
  const pages = urlSplit.slice(1);
  const basePath = `/${pages[0]}`;

  interface Link {
    title: string;
    path: string;
  }

  const links: Link[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Devs',
      path: '/devs',
    },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 flex h-14 w-full justify-between border-b border-gray-800 bg-black">
      {/* Branding */}
      <Link href="/" className="ml-1 flex">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Open Dev Net"
          className="m-1 h-12 w-12"
        />
        <h1 className="my-3 ml-0.5 text-2xl font-bold">Open Dev Net</h1>
      </Link>

      <Menu links={links} />

      <div className="hidden text-center md:absolute md:left-1/2 md:top-0 md:flex md:-translate-x-1/2">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`my-2 px-2 py-1.5 font-medium ${
              basePath === link.path ? 'text-white' : 'text-gray-400'
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Social links */}
      <div className="my-4 mr-5 hidden md:flex">
        <a
          href="https://github.com/open-dev-net"
          target="_blank"
          className="mr-3 text-gray-400 hover:text-white"
        >
          <BsGithub className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/opendevnet/"
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          <BsLinkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
