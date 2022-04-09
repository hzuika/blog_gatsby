import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const TagListPage = ({
  data: {
    allMdx: { group, totalCount },
  },
}) => {
  return (
    <Layout pageTitle="Tags">
      {totalCount} tags.
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link> (
            {tag.totalCount})
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const tagListQuery = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`;

export default TagListPage;
