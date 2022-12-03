"use client";

import * as React from "react";
import {
  HeadingOne,
  HeadingFour,
  HeadingTwo,
  Paragraph,
} from "../components/base";
import { symbols } from "../components/theme";

export default function Page() {
  return (
    <>
      <HeadingOne style={{ marginBottom: symbols.spacing._16 }}>
        Joseph Luck
      </HeadingOne>
      <HeadingFour style={{ marginBottom: symbols.spacing._32 }}>
        josephreubenluck@gmail.com
      </HeadingFour>
      <HeadingTwo style={{ marginBottom: symbols.spacing._32 }}>
        👋 I'm a product engineer based in London.
      </HeadingTwo>
      <Paragraph style={{ marginBottom: symbols.spacing._16 }}>
        Working on mobile and web design systems for undisclosed (under NDA).
        Previously senior engineer at Mettle by Natwest.
      </Paragraph>
      <Paragraph style={{ marginBottom: symbols.spacing._16 }}>
        Passionate about design, user experience and functional programming.
        Expert at React, React Native and TypeScript.
      </Paragraph>
      <Paragraph>
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
    </>
  );
}
