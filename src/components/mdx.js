import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { preToCodeBlock } from "mdx-utils";
import CodeBlock from "./codeblock";

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <CodeBlock {...props} />;
    }

    return <pre {...preProps} />;
  },
  code: CodeBlock,
};

const Mdx = ({ body }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  );
};

export default Mdx;
