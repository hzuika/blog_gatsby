import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  return (
    <Layout pageTitle={tag}>
      <ul>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.slug}>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Tag;

export const tagPgaeQuery = graphql`
  query ($tag: String) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`;
