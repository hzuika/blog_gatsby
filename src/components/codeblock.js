import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import theme from "prism-react-renderer/themes/vsDark";

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
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default CodeBlock;
