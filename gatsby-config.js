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
    ]
}