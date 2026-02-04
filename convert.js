const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");

const n2m = new NotionToMarkdown({ notionClient: new Client({ auth: "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" }) });

(async () => {
  const mdblocks = await n2m.pageToMarkdown("2bdbffd7b6b780ffaef2de808890f4e5");
  const mdString = n2m.toMarkdownString(mdblocks);
  fs.writeFileSync("WPC_Device_Manager_output.md", mdString.parent);
  console.log("轉換成功！請查看 WPC_Device_Manager_output.md");
})();