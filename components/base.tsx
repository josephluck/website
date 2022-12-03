import { HTMLAttributes } from "react";
import css from "styled-jsx/css";
import { symbols, useTheme } from "./theme";

export const HeadingOne = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <>
    <style jsx>
      {`
        h1 {
          font-size: ${symbols.font._28.size};
          line-height: ${symbols.font._28.lineHeight};
          font-weight: ${symbols.fontWeight._600};
        }
      `}
    </style>
    <h1 {...props} />
  </>
);

export const HeadingTwo = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <>
    <style jsx>
      {`
        h2 {
          font-size: ${symbols.font._22.size};
          line-height: ${symbols.font._22.lineHeight};
          font-weight: ${symbols.fontWeight._500};
        }
      `}
    </style>
    <h2 {...props} />
  </>
);

export const HeadingThree = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <>
    <style jsx>
      {`
        h3 {
          font-size: ${symbols.font._18.size};
          line-height: ${symbols.font._18.lineHeight};
          font-weight: ${symbols.fontWeight._500};
        }
      `}
    </style>
    <h3 {...props} />
  </>
);

export const HeadingFour = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <>
    <style jsx>
      {`
        h4 {
          font-size: ${symbols.font._16.size};
          line-height: ${symbols.font._16.lineHeight};
          font-weight: ${symbols.fontWeight._500};
        }
      `}
    </style>
    <h4 {...props} />
  </>
);

export const Paragraph = (props: HTMLAttributes<HTMLParagraphElement>) => (
  <>
    <style jsx>
      {`
        p {
          font-size: ${symbols.font.paragraph.size};
          line-height: ${symbols.font.paragraph.lineHeight};
        }
      `}
    </style>
    <p {...props} />
  </>
);

export const Strong = (props: HTMLAttributes<HTMLSpanElement>) => (
  <>
    <style jsx>
      {`
        strong {
          font-weight: ${symbols.fontWeight._600};
        }
      `}
    </style>
    <strong {...props} />
  </>
);

export const ContentHeadingOne = (
  props: HTMLAttributes<HTMLHeadingElement>
) => {
  const { className } = css.resolve`
    margin: ${symbols.spacing._32} 0;
  `;
  return <HeadingOne {...props} className={className} />;
};

export const ContentHeadingTwo = (
  props: HTMLAttributes<HTMLHeadingElement>
) => {
  const { className } = css.resolve`
    margin: ${symbols.spacing._32} 0 ${symbols.spacing._16} 0;
  `;
  return <HeadingTwo {...props} className={className} />;
};

export const ContentHeadingThree = (
  props: HTMLAttributes<HTMLHeadingElement>
) => {
  const { className } = css.resolve`
    margin: ${symbols.spacing._32} 0 ${symbols.spacing._16} 0;
  `;
  return <HeadingThree {...props} className={className} />;
};

export const ContentHeadingFour = (
  props: HTMLAttributes<HTMLHeadingElement>
) => {
  const { className } = css.resolve`
    margin: ${symbols.spacing._32} 0 ${symbols.spacing._16} 0;
  `;
  return <HeadingFour {...props} className={className} />;
};

export const ContentParagraph = (
  props: HTMLAttributes<HTMLParagraphElement>
) => {
  const { className } = css.resolve`
    margin: ${symbols.spacing._16} 0;
  `;
  return <Paragraph {...props} className={className} />;
};

export const Code = (props: HTMLAttributes<HTMLSpanElement>) => (
  <>
    <style jsx>
      {`
        code {
          font-family: "Overpass Mono", monospace;
        }
      `}
    </style>
    <code {...props} />
  </>
);

export const Hr = (props: HTMLAttributes<HTMLSpanElement>) => {
  const theme = useTheme();
  return (
    <>
      <style jsx>
        {`
          hr {
            margin: ${symbols.spacing._32} 0;
            border: 0;
            border-bottom: solid 1px ${theme.border};
          }
        `}
      </style>
      <hr {...props} />
    </>
  );
};

export const BlockQuote = (props: HTMLAttributes<HTMLSpanElement>) => {
  const theme = useTheme();
  return (
    <>
      <style jsx>
        {`
          blockquote {
            border-left: solid 4px ${theme.blockQuoteBorder};
            margin: ${symbols.spacing._16} 0;
            padding-left: ${symbols.spacing._8};
            font-size: ${symbols.font._12.size};
            line-height: ${symbols.font._14.lineHeight};
            font-weight: ${symbols.fontWeight._500};
            color: ${theme.blockQuoteText};
            font-style: normal;
          }
          blockquote * {
            margin: 0;
            font-size: inherit;
            line-height: inherit;
            font-weight: inherit;
            color: inherit;
          }
        `}
      </style>
      <blockquote {...props} />
    </>
  );
};

export const ListItem = (props: HTMLAttributes<HTMLSpanElement>) => (
  <>
    <style jsx>
      {`
        li {
          margin-bottom: ${symbols.spacing._4};
        }
      `}
    </style>
    <li {...props} />
  </>
);
