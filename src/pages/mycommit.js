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
  // oid(コミットハッシュ) の前に `rB` をつけると，`developer.blender.org/`のコミットへのリンクになる．
  // committedDateはUTC時間なので，日本時間に変換する．
  return (
    <Layout pageTitle="My commits">
      <ul>
        {commits.map((commit) => (
          <CommitList key={commit.node.id}>
            {commit.node.messageHeadline} ({commit.node.oid.slice(0, 11)})
            <p>
              <a href={commit.node.commitUrl}>GitHub</a>
            </p>
            <p>
              <a href={"https://developer.blender.org/rB" + commit.node.oid}>
                developer.blender.org
              </a>
            </p>
            <p>
              Committed: {new Date(commit.node.committedDate).toLocaleString()}
            </p>
          </CommitList>
        ))}
      </ul>
    </Layout>
  );
};

export default MyCommit;
