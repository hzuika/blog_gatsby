import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { preToCodeBlock } from "mdx-utils";
import CodeBlock from "./codeblock";
import Test from "./test";

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

const toPre = {
  Test: () => {
    return (
      <pre>
        <code className="language-js">console.log("Hello");</code>
      </pre>
    );
  },
};

const Mdx = ({ body }) => {
  return (
    <MDXProvider components={toPre}>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </MDXProvider>
  );
};

export default Mdx;
