import * as React from "react";
import { symbols, useTheme } from "./theme";
import Link from "next/link";
import { HTMLAttributes } from "react";

const NavLink = ({
  children,
  active,
}: {
  active: boolean;
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <>
      <style jsx>{`
        span {
          font-size: ${symbols.font._12.size};
          line-height: ${symbols.font._12.size};
          font-weight: ${symbols.fontWeight._500};
          color: ${active ? theme.linkHover : theme.linkTertiary};
          margin-left: ${symbols.spacing._8};
        }
        span a {
          color: inherit;
        }
        @media (min-width: ${symbols.media.tablet}) {
          span {
            margin-left: ${symbols.spacing._16};
          }
        }
      `}</style>
      <span>{children}</span>
    </>
  );
};
const Wrapper = (props: HTMLAttributes<HTMLDivElement>) => {
  const theme = useTheme();
  return (
    <>
      <style jsx>{`
        div {
          background-color: ${theme.navigationBackground};
          backdrop-filter: blur(15px);
          position: fixed;
          top: 0;
          // border-bottom: solid 1px ${theme.border};
          display: flex;
          align-items: center;
          overflow: auto;
          width: 100%;
        }
        @media (min-width: ${symbols.media.tablet}) {
          div {
            display: block;
          }
        }
      `}</style>
      <div {...props} />
    </>
  );
};
const Inner = (props: HTMLAttributes<HTMLDivElement>) => (
  <>
    <style jsx>{`
      div {
        max-width: 768px;
        padding: ${symbols.spacing._8} ${symbols.spacing._16};
        display: flex;
        align-items: center;
        flex: 1;
      }
      @media (min-width: ${symbols.media.tablet}) {
        div {
          padding: ${symbols.spacing._8} ${symbols.spacing._32};
          margin: 0 auto;
        }
      }
    `}</style>
    <div {...props} />
  </>
);

const Logo = (props: HTMLAttributes<HTMLDivElement>) => {
  const theme = useTheme();
  return (
    <>
      <style jsx>{`
        span {
          font-size: ${symbols.font._12.size};
          line-height: ${symbols.font._12.size};
          text-transform: uppercase;
          font-weight: ${symbols.fontWeight._700};
          letter-spacing: 2px;
          color: ${theme.text};
          margin-right: ${symbols.spacing._8};
          font-family: "Source Code Pro", sans-serif;
        }
        @media (min-width: ${symbols.media.tablet}) {
          span {
            margin-right: ${symbols.spacing._16};
          }
        }
      `}</style>
      <span {...props} />
    </>
  );
};

const LogoWrap = (props: HTMLAttributes<HTMLDivElement>) => (
  <>
    <style jsx>{`
      div {
        flex: 1;
      }
    `}</style>
    <div {...props} />
  </>
);

const Links = (props: HTMLAttributes<HTMLDivElement>) => (
  <>
    <style jsx>{`
      div {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
      }
    `}</style>
    <div {...props} />
  </>
);

export const NavigationLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink active={false}>
      <Link href={href} passHref>
        {children}
      </Link>
    </NavLink>
  );
};

export const Navigation = () => (
  <Wrapper>
    <Inner>
      <LogoWrap>
        <Link href="/" passHref>
          <Logo>JL</Logo>{" "}
        </Link>
      </LogoWrap>
      <Links>
        <NavigationLink href="/blog">Blog</NavigationLink>
        <NavigationLink href="/resume">Resume</NavigationLink>
        <NavigationLink href="/recommendations">Recommendations</NavigationLink>
      </Links>
    </Inner>
  </Wrapper>
);
