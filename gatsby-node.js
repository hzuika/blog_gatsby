const path = require("path");
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // MDX ファイルの tags の各値が fieldValue に格納される．
  const result = await graphql(`
    {
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const tags = result.data.tagsGroup.group;
  const tagTemplate = path.resolve("src/template/tag.js");

  // tags/{tag} のページを作成する
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
