import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

interface Props {
  links: { title: string; path: string }[];
}

export default function Menu({ links }: Props) {
  const pathname = usePathname();

  const urlSplit = pathname.split('/');
  const pages = urlSplit.slice(1);
  const basePath = `/${pages[0]}`;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      <button
        className="m-2 rounded-3xl p-1.5 hover:bg-gray-900 active:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <HiMenu className="h-7 w-7" />
      </button>

      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full bg-black transition duration-300 ${
          open ? 'opacity-60 backdrop-blur-sm' : 'translate-x-full opacity-0'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`max-w-60 fixed right-0 top-0 z-50 h-screen w-60 border-l border-gray-800 bg-black transition duration-300 ${
          open ? '' : 'translate-x-full'
        }`}
      >
        <div className="flex h-14 w-full justify-between border-b border-gray-800">
          <Link
            href="/"
            className="px-3 py-2.5 text-2xl font-semibold"
            onClick={() => setOpen(false)}
          >
            ODN
          </Link>
          <button
            className="m-2 rounded-3xl p-1.5 hover:bg-gray-900 active:bg-gray-800"
            onClick={() => setOpen(false)}
          >
            <MdClose className="h-7 w-7" />
          </button>
        </div>

        <div className="m-3">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`0 block rounded-lg px-5 py-3 text-white ${
                basePath === link.path
                  ? 'bg-gray-800'
                  : 'hover:bg-gray-900 active:bg-gray-800'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
