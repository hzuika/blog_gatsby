import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const CommitList = styled.li`
  margin-bottom: 1rem;
`;

const MyCommit = () => {
  const data = useStaticQuery(graphql`
    query {
      githubData {
        data {
          repository {
            object {
              history {
                edges {
                  node {
                    id
                    oid
                    messageHeadline
                    committedDate
                    commitUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const commits = data.githubData.data.repository.object.history.edges;
  return (
    <Layout pageTitle="My commits">
      <ul>
        {commits.map((commit) => (
          <CommitList key={commit.node.id}>
            <a href={commit.node.commitUrl}>
              {commit.node.messageHeadline} ({commit.node.oid.slice(0, 11)})
            </a>
          </CommitList>
        ))}
      </ul>
    </Layout>
  );
};

export default MyCommit;
