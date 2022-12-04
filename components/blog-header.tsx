import Head from "next/head";
import Link from "next/link";
import { HeadTitle } from "./head-title";
import { useTheme } from "./theme";

const wordsReadPerMinute = 200;
const minutesToDrinkACoffee = 5;

export const BlogHeader = ({
  wordCount = 0,
  title,
}: {
  wordCount?: number;
  title?: string;
}) => {
  const theme = useTheme();
  const minutes = Math.ceil(wordCount / wordsReadPerMinute);
  const coffees = Math.ceil(minutes / minutesToDrinkACoffee);
  return (
    <>
      {title ? <HeadTitle>{title}</HeadTitle> : null}
      <div>
        <Link href="/blog">← Back to blog</Link>
        {coffees > 0 ? (
          <span>
            {Array.from({ length: coffees }).fill("☕").join("")} · {minutes}{" "}
            min read
          </span>
        ) : null}
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.8rem;
          }
          span {
            color: ${theme.blockQuoteText};
          }
        `}
      </style>
    </>
  );
};
