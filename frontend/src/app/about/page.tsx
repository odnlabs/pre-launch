export const metadata = {
  title: 'About | Open Dev Net',
  description: 'The Open Developer Network collaboration platform.',
};

export const revalidate = 1;

export default function About() {
  const styles = {
    title: 'block text-3xl font-medium text-white',
    heading: 'mt-5 block text-2xl font-medium text-white',
    subheading: 'mt-4 block text-lg font-normal text-white',
    paragraph: 'my-3 text-gray-200',
  };

  type BlockTypes = 'title' | 'heading' | 'subheading' | 'paragraph';
  type Block = [BlockTypes, string | JSX.Element];

  const data: Block[] = [
    ['title', 'About ODN'],
    [
      'paragraph',
      "👋 Hey! We're the team behind Open Dev Net, a group of developers passionate about developing open-source software and building a community of developers. Thus, we decided to create Open Dev Net, a social platform for developers to collaborate, find new opportunities, and streamline workflows.",
    ],
    ['subheading', '⛔ The Problem'],
    [
      'paragraph',
      'Currently, platforms exist for developers to connect, but they are typically closed-source and proprietary. Being closed-source means the code is not available for the public to view, which is a problem because the community cannot audit the platform; therefore, it can lack empirical privacy, security, and overall trust of the community. It also means that the platform cannot be self-hosted or modified.',
    ],
    ['subheading', '✅ The Solution'],
    [
      'paragraph',
      'We plan to solve this problem by creating an open-source, privacy-oriented, secure, and trustworthy platform for developers. As the platform is specifically designed for developers, it includes new features not currently implemented on other social platforms. At the same time, we are also building a community of developers to help build and improve the platform.',
    ],

    ['heading', 'Technical Details'],
    ['subheading', '✨ Open Source'],
    [
      'paragraph',
      'As mentioned above, Open Dev Net is open-source, meaning the app is open for the public to view and audit. This also means that the app is free to use and modify. We believe that open-source is the future of software development and want to be a part of that future.',
    ],
    [
      'paragraph',
      <>
        If you&apos;re interested in contributing to the project, check out our{' '}
        <a
          href="https://github.com/open-dev-net/.github/blob/main/CONTRIBUTING.md/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Contributing Guidelines
        </a>
        . If you&apos;re interested in officially joining the team, DM Slekup on
        Discord at <b className="font-bold">@slekup</b> or email at{' '}
        <a
          href="mailto:slekupvimplyrataqq@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          slekupvimplyrataqq@protonmail.com
        </a>
        . (I check Discord more often).
      </>,
    ],
    ['subheading', '📚 The Stack'],
    [
      'paragraph',
      'Open Dev Net is built with the MERN stack: MongoDB, Express, React (Next.js), and Node.js. We chose this stack because it is very popular, flexible, scalable, and familiar to many web developers. Some auxiliary technologies include TypeScript, TailwindCSS, and Redux. This stack is bound to change as we continue to develop the platform.',
    ],
    ['subheading', '📝 License'],
    [
      'paragraph',
      'Open Dev Net is licensed under the MIT License, meaning you can use, modify, and distribute the code. You can view the license in the GitHub repository.',
    ],
  ];

  return (
    <div className="mx-auto my-5 w-11/12 max-w-2xl font-light leading-relaxed text-gray-300 sm:my-10 lg:my-20">
      {data.map((item, index) => {
        const [type, content] = item;
        return (
          <p key={index} className={styles[type]}>
            {content}
          </p>
        );
      })}
    </div>
  );
}
