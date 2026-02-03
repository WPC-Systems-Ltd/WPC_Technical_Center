const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");

const n2m = new NotionToMarkdown({ notionClient: new Client({ auth: "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" }) });

(async () => {
  const mdblocks = await n2m.pageToMarkdown("17e72d632cd1486ebb966ed8c81859ae");
  const mdString = n2m.toMarkdownString(mdblocks);
  fs.writeFileSync("Ethan_output.md", mdString.parent);
  console.log("轉換成功！請查看 WPC_Ethan_UserGuide.md");
})();