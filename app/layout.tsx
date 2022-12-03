"use client";

import React, { HTMLAttributes } from "react";
import { symbols, ThemeProvider, useTheme } from "../components/theme";
import { Navigation } from "../components/navigation";

const Layout = (props: HTMLAttributes<HTMLDivElement>) => (
  <>
    <style jsx>{`
      div {
        position: relative;
      }
    `}</style>
    <div {...props} />
  </>
);

const Content = (props: HTMLAttributes<HTMLDivElement>) => (
  <>
    <style jsx>{`
      div {
        padding: ${symbols.spacing._16};
        max-width: 768px;
        margin: 0 auto;
      }
      @media (min-width: ${symbols.media.tablet}) {
        div {
          padding: ${symbols.spacing._32};
        }
      }
    `}</style>
    <div {...props} />
  </>
);

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="theme-color" content="#000" />
        <meta
          name="description"
          content="A software engineer with a expertise in UI design, user experience and functional programming in languages such as JavaScript and TypeScript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Overpass+Mono:400,700"
          rel="stylesheet"
        />
        <title>Joseph Luck - Product Engineer</title>
      </head>

      <body>
        <ThemeProvider>
          <GlobalStyle />
          <Layout>
            <Navigation />
            <Content>{children}</Content>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
        font-family: inherit;
        text-decoration: none;
      }
      html,
      body {
        background-color: ${theme.background};
        color: ${theme.text};
        font-weight: ${symbols.fontWeight._400};
        font-display: fallback;
        font-size: 18px;
        line-height: 1.5em;
        margin: 0;
        padding: 0;
        font-family: "Work Sans", sans-serif;
      }
      @media (min-width: ${symbols.media.tablet}) {
        html,
        body {
          font-size: 20px;
        }
      }
      h1,
      h2,
      h3,
      h4,
      p {
        margin: 0;
      }
      img {
        width: 100%;
        height: auto;
      }
      p {
        font-size: ${symbols.font.paragraph.size};
        line-height: ${symbols.font.paragraph.lineHeight};
      }
      a {
        color: ${theme.link};
        transition: ${symbols.transition.standard};
        text-decoration: none;
      }
      a:hover {
        color: ${theme.linkHover};
      }

      code[class*="language-"],
      pre[class*="language-"] {
        color: ${theme.syntaxPunctuation};
        background: ${theme.syntaxBackground};
        border: solid 1px ${theme.syntaxBorder};
        border-radius: 6px;
        padding: ${symbols.spacing._8};
        font-family: "Source Code Pro", monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        font-size: 0.9rem;
        line-height: 1.2em;

        -moz-tab-size: 2;
        -o-tab-size: 2;
        tab-size: 2;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }

      pre[class*="language-"]::-moz-selection,
      pre[class*="language-"] ::-moz-selection,
      code[class*="language-"]::-moz-selection,
      code[class*="language-"] ::-moz-selection {
        background: ${theme.syntaxSelectionBg};
      }
      pre[class*="language-"]::selection,
      pre[class*="language-"] ::selection,
      code[class*="language-"]::selection,
      code[class*="language-"] ::selection {
        background: ${theme.syntaxSelectionBg};
      }

      /* Code blocks */
      pre[class*="language-"] {
        overflow: auto;
      }

      :not(pre) > code[class*="language-"] {
        padding: ${symbols.spacing._4};
        border: 1px solid ${theme.border};
      }

      .token.comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: ${theme.syntaxComment};
        font-style: italic;
      }

      .token.namespace {
        opacity: 0.7;
      }

      .token.string {
        color: ${theme.syntaxString};
      }

      .token.punctuation,
      .token.operator {
        color: ${theme.syntaxPunctuation};
        font-weight: normal;
      }

      .token.url,
      .token.symbol,
      .token.number,
      .token.boolean,
      .token.variable,
      .token.constant,
      .token.inserted {
        color: ${theme.syntax4};
      }

      .token.atrule,
      .token.keyword,
      .token.attr-value,
      .language-autohotkey .token.selector,
      .language-json .token.boolean,
      .language-json .token.number,
      code[class*="language-css"] {
        color: ${theme.syntaxKeyword};
        font-weight: ${symbols.fontWeight._700};
      }

      .token.deleted,
      .language-autohotkey .token.tag {
        color: ${theme.syntaxDeleted};
      }

      .token.selector,
      .language-autohotkey .token.keyword {
        color: ${theme.syntaxKeyword};
      }

      .token.important,
      .token.bold {
        font-weight: ${symbols.fontWeight._700};
      }

      .token.italic {
        font-style: italic;
      }

      .token.comment {
        white-space: pre-wrap;
      }

      .token.class-name,
      .token.function,
      .language-json .token.property {
        color: ${theme.syntaxClassName};
        font-weight: ${symbols.fontWeight._700};
      }

      .token.tag,
      .token.selector {
        color: ${theme.syntaxTag};
      }

      .token.attr-name,
      .token.property,
      .token.regex,
      .token.entity {
        color: ${theme.syntaxAttributeName};
        font-weight: normal;
      }

      .token.directive.tag .tag {
        background: transparent;
        color: ${theme.syntaxPunctuation};
      }

      .line-numbers .line-numbers-rows {
        border-right-color: ${theme.syntaxLineNumberBorder};
      }

      .line-numbers-rows > span:before {
        color: ${theme.syntaxClassName};
      }

      .line-highlight {
        background: ${theme.syntaxHighlightLine};
      }

      p code,
      li code {
        font-family: "Source Code Pro", monospace;
        font-size: ${symbols.font._12.size};
        line-height: ${symbols.font._12.size};
        border: solid 1px ${theme.border};
        border-radius: 6px;
        padding: ${symbols.spacing._2};
      }
    `}</style>
  );
};
