const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    // 画像処理用
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      // ビルド時に options で指定したフォルダ内の全てのファイルを path データレイヤーに追加する
      options: {
        // name オプションは各ファイルの sourceInstanceName に設定される
        // GraphQL のフィルタとして使用できる
        name: `blog`,
        // __dirname は実行中のファイルを含むディレクトリの絶対パス
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
        graphQLQuery: `
          query ($repo_owner: String!, $repo_name: String!, $branch: String, $emails: [String!]) {
            repository(owner: $repo_owner, name: $repo_name) {
              object(expression: $branch) {
                ... on Commit {
                  history(author: {emails: $emails}) {
                    edges {
                      node {
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
        `,
        variables: {
          repo_owner: "blender",
          repo_name: "blender",
          branch: "master",
          author_emails: ["hzuika"],
        },
      },
    },
  ],
};
