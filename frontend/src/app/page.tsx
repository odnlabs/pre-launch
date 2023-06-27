import Link from 'next/link';

import config from '@config';
import axios from 'axios';
import EmailForm from './EmailForm';

export const metadata = {
  title: 'Home | Open Dev Net',
  description: 'The Open Developer Network collaboration platform.',
};

const getCount = async (): Promise<number | string> => {
  try {
    const res = await axios.get(`${config.API_URL}/notify`, {
      timeout: 1000,
    });

    const data = res.data as { count: number };

    if (!data.count) {
      return '?';
    }

    return data.count;
  } catch (error) {
    return '?';
  }
};

export default async function Home() {
  const count = await getCount();

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
      <p className="mx-auto mt-10 max-w-lg text-lg text-gray-300">
        The open-source social platform for developers to collaborate, find
        opportunities, and streamline workflows.{' '}
        <Link href="/about" className="link">
          Learn more
        </Link>
      </p>
      <EmailForm />
      <p className="mt-3 text-gray-500">
        Notify me when app is launched. {count} signups so far!
      </p>
    </div>
  );
}
