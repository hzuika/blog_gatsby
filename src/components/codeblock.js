import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import theme from "prism-react-renderer/themes/vsDark";
import styled from "styled-components";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

// Add more language support
// Default: https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
// Ref: https://github.com/FormidableLabs/prism-react-renderer#faq
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");

const CodeBlock = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <Pre className={className} style={style}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(codeString);
              }}
            >
              Copy
            </button>
            {tokens.map((line, i) => (
              <Line {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        </div>
      )}
    </Highlight>
  );
};

export default CodeBlock;
