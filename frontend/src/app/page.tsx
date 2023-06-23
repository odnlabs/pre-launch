import Link from 'next/link';

import EmailForm from './EmailForm';

export default function Home() {
  return (
    <div className="absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="block text-6xl font-black sm:text-7xl lg:text-8xl">
        <span className="bg-[linear-gradient(90deg,#FBB03B,#FF00FF)] bg-clip-text text-transparent">
          Coming
        </span>{' '}
        <span className="bg-[linear-gradient(90deg,#00FFFF,#E3FF00)] bg-clip-text text-transparent">
          Soon
        </span>
      </h1>
      <p className="mx-auto mt-10 max-w-sm text-lg text-gray-300">
        The open-source messaging and collaboration platform for developers.{' '}
        <Link href="/about" className="link">
          Learn more
        </Link>
      </p>
      <EmailForm />
      <p className="mt-3 text-gray-500">Notify me when app is launched</p>
    </div>
  );
}
