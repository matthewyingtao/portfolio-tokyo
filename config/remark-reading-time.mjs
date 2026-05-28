// copied from https://docs.astro.build/en/recipes/reading-time/

import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.minutesRead = Math.floor(readingTime.minutes) || 1;
    data.astro.frontmatter.wordCount = readingTime.words;
  };
}
