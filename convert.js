const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");

const n2m = new NotionToMarkdown({ notionClient: new Client({ auth: "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" }) });

(async () => {
  const mdblocks = await n2m.pageToMarkdown("ac2dd7dffab541608d4b27c749d715e7");
  const mdString = n2m.toMarkdownString(mdblocks);
  fs.writeFileSync("uart_TestPanel.md", mdString.parent);
  console.log("轉換成功！請查看 uart_TestPanel.md");
})();