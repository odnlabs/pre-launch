export default function About() {
  const styles = {
    title: 'block text-2xl font-medium text-white',
    heading: 'mt-5 block text-xl font-medium text-white',
    subheading: 'mt-4 block text-lg font-normal text-white',
    paragraph: 'my-3 text-gray-200',
  };

  return (
    <div className="mx-auto my-20 w-11/12 max-w-2xl font-light leading-relaxed text-gray-300">
      <h1 className={styles.title}>📜 About ODN</h1>
      <p className={styles.paragraph}>
        👋 Hey, we&apos;re the team behind Open Dev Net, a group of developers
        passionate about developing open-source software and building a
        community of developers. Thus, we decided to create Open Dev Net, a
        platform for developers to connect with other developers, find new
        opportunities, and streamline workflows.
      </p>
      <h2 className={styles.heading}>⛔ The Problem</h2>
      <p className={styles.paragraph}>
        Currently, there are many platforms for developers to connect with other
        developers, but they are all closed-source and proprietary. This means
        that the code is not available for the public to view. This is a problem
        because the platform is not able to be audited by the community,
        therefore lacking privacy, security, and trust of the community.
      </p>
      <h2 className={styles.heading}>✅ The Solution</h2>
      <p className={styles.paragraph}>
        We plan to solve this problem by creating an open-source platform for
        developers, that is privacy oriented, secure, and trustworthy. We will
        also be building a community of developers to help build the platform
        and make it better.
      </p>
      <h3 className={styles.subheading}>✨ Open Source</h3>
      <p className={styles.paragraph}>
        As mentioned above, Open Dev Net is open-source. This means that the app
        is open for the public to view and audit. This also means that the app
        is free to use and modify. We believe that open-source is the future of
        software development, and we want to be a part of that future.
      </p>
      <p className={styles.paragraph}>
        If your interested in contributing to the project, check out our{' '}
        <a
          href="https://github.com/open-dev-net/.github/blob/main/CONTRIBUTING.md/"
          target="_blank"
          className="link"
        >
          Contributing Guidelines
        </a>
        . If you&apos;re interested in officially joining the team, DM slekup on
        Discord at <b className="font-bold">@slekup</b> or email at{' '}
        <a
          href="mailto:slekupvimplyrataqq@protonmail.com"
          target="_blank"
          className="link"
        >
          slekupvimplyrataqq@protonmail.com
        </a>
        . (I check Discord more often).
      </p>
    </div>
  );
}
