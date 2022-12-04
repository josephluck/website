import Head from "next/head";

export const HeadTitle = ({ children }: { children: string }) => (
  <Head>
    <title>Joseph Luck - {children}</title>
  </Head>
);
