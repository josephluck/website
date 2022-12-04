import { HTMLAttributes } from "react";
import { symbols, useTheme } from "./theme";

export const HeadingOne = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const theme = useTheme();
  return (
    <>
      <h1 {...props} />
      <style jsx>
        {`
          h1 {
            font-size: ${symbols.font._28.size};
            line-height: ${symbols.font._28.lineHeight};
            font-weight: ${symbols.fontWeight._600};
            color: ${theme.text};
          }
        `}
      </style>
    </>
  );
};

export const HeadingTwo = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const theme = useTheme();
  return (
    <>
      <h2 {...props} />
      <style jsx>
        {`
          h2 {
            font-size: ${symbols.font._22.size};
            line-height: ${symbols.font._22.lineHeight};
            font-weight: ${symbols.fontWeight._500};
            color: ${theme.text};
          }
        `}
      </style>
    </>
  );
};

export const HeadingThree = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const theme = useTheme();
  return (
    <>
      <h3 {...props} />
      <style jsx>
        {`
          h3 {
            font-size: ${symbols.font._18.size};
            line-height: ${symbols.font._18.lineHeight};
            font-weight: ${symbols.fontWeight._500};
            color: ${theme.text};
          }
        `}
      </style>
    </>
  );
};

export const HeadingFour = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const theme = useTheme();
  return (
    <>
      <h4 {...props} />
      <style jsx>
        {`
          h4 {
            font-size: ${symbols.font._16.size};
            line-height: ${symbols.font._16.lineHeight};
            font-weight: ${symbols.fontWeight._500};
            color: ${theme.text};
          }
        `}
      </style>
    </>
  );
};

export const Paragraph = (props: HTMLAttributes<HTMLParagraphElement>) => {
  const theme = useTheme();
  return (
    <>
      <p {...props} />
      <style jsx>
        {`
          p {
            font-size: ${symbols.font.paragraph.size};
            line-height: ${symbols.font.paragraph.lineHeight};
            color: ${theme.text};
          }
        `}
      </style>
    </>
  );
};

export const Strong = (props: HTMLAttributes<HTMLSpanElement>) => {
  const theme = useTheme();
  return (
    <>
      <strong {...props} />
      <style jsx>
        {`
          strong {
            font-weight: ${symbols.fontWeight._600};
            color: ${theme.text};
          }
        `}
      </style>
    </>
  );
};

export const ContentHeadingOne = (
  props: HTMLAttributes<HTMLHeadingElement>
) => <HeadingOne {...props} style={{ margin: `${symbols.spacing._32} 0` }} />;

export const ContentHeadingTwo = (
  props: HTMLAttributes<HTMLHeadingElement>
) => (
  <HeadingTwo
    {...props}
    style={{ margin: `${symbols.spacing._32} 0 ${symbols.spacing._16} 0` }}
  />
);

export const ContentHeadingThree = (
  props: HTMLAttributes<HTMLHeadingElement>
) => (
  <HeadingThree
    {...props}
    style={{ margin: `${symbols.spacing._32} 0 ${symbols.spacing._16} 0` }}
  />
);

export const ContentHeadingFour = (
  props: HTMLAttributes<HTMLHeadingElement>
) => (
  <HeadingFour
    {...props}
    style={{ margin: `${symbols.spacing._32} 0 ${symbols.spacing._16} 0` }}
  />
);

export const ContentParagraph = (
  props: HTMLAttributes<HTMLParagraphElement>
) => <Paragraph {...props} style={{ margin: `${symbols.spacing._16} 0` }} />;

export const Code = (props: HTMLAttributes<HTMLSpanElement>) => (
  <>
    <code {...props} />
    <style jsx>
      {`
        code {
          font-family: "Overpass Mono", monospace;
          font-size: 0.8rem;
        }
      `}
    </style>
  </>
);

export const Hr = (props: HTMLAttributes<HTMLSpanElement>) => {
  const theme = useTheme();
  return (
    <>
      <hr {...props} />
      <style jsx>
        {`
          hr {
            margin: ${symbols.spacing._32} 0;
            border: 0;
            border-bottom: solid 1px ${theme.border};
          }
        `}
      </style>
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
