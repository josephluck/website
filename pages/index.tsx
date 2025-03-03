import Head from "next/head";
import * as React from "react";
import {
  HeadingOne,
  HeadingFour,
  HeadingTwo,
  Paragraph,
} from "../components/base";
import { HeadTitle } from "../components/head-title";
import { symbols } from "../components/theme";

export default function Page() {
  return (
    <>
      <HeadTitle>Product engineer</HeadTitle>
      <HeadingOne style={{ marginBottom: symbols.spacing._16 }}>
        Joseph Luck
      </HeadingOne>
      <HeadingFour style={{ marginBottom: symbols.spacing._32 }}>
        josephreubenluck@gmail.com
      </HeadingFour>
      <HeadingTwo style={{ marginBottom: symbols.spacing._32 }}>
        👋 I&apos;m a staff software engineer based in London.
      </HeadingTwo>
      <Paragraph style={{ marginBottom: symbols.spacing._16 }}>
        Building a digital bank at{" "}
        <a href="https://nwboxed.com/" target="_blank" rel="noreferrer">
          NatWest Boxed
        </a>{" "}
        by Natwest.
      </Paragraph>
      <Paragraph style={{ marginBottom: symbols.spacing._16 }}>
        Passionate about design, user experience and functional programming.
        Expert at React, React Native, GraphQL and TypeScript.
      </Paragraph>
      <Paragraph style={{ marginBottom: symbols.spacing._16 }}>
        Maker of{" "}
        <a
          href="https://github.com/josephluck/internote"
          target="_blank"
          rel="noreferrer"
        >
          Internote
        </a>
        ,{" "}
        <a
          href="https://github.com/josephluck/urban-jungle"
          target="_blank"
          rel="noreferrer"
        >
          Urban Jungle
        </a>
        ,{" "}
        <a
          href="https://github.com/josephluck/machi"
          target="_blank"
          rel="noreferrer"
        >
          Machi
        </a>
        ,{" "}
        <a
          href="https://github.com/josephluck/valley"
          target="_blank"
          rel="noreferrer"
        >
          Valley
        </a>
        ,{" "}
        <a
          href="https://github.com/josephluck/stately"
          target="_blank"
          rel="noreferrer"
        >
          Stately
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/josephluck"
          target="_blank"
          rel="noreferrer"
        >
          many more
        </a>
        .
      </Paragraph>
      <Paragraph>
        I also take{" "}
        <a
          href="https://photography.josephluck.co.uk"
          target="_blank"
          rel="noreferrer"
        >
          photos
        </a>{" "}
        sometimes.
      </Paragraph>
    </>
  );
}
