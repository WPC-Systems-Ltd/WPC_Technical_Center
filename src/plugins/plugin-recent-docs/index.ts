import { LoadContext, Plugin } from '@docusaurus/types';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export interface RecentDoc {
    title: string;
    category: string;
    link: string;
    date: string;
    developer: string;
    commitMsg: string;
}

export default function pluginRecentDocs(context: LoadContext, options: any): Plugin<RecentDoc[]> {
    return {
        name: 'plugin-recent-docs',

        async loadContent() {
            const recentDocs: RecentDoc[] = [];
            try {
                // Get the latest commits that modified files in docs/
                // Format: %h|%ai|%an|%s (Hash|IsoDate|AuthorName|Subject)
                const logOutput = execSync('git log --diff-filter=AM --name-status --pretty=format:"COMMIT|%h|%ai|%an|%s" -n 30 docs/').toString();

                const lines = logOutput.split('\n');
                let currentCommit: any = null;

                const processedFiles = new Set<string>();

                // We only want the latest 3 documents
                for (const line of lines) {
                    if (!line.trim()) continue;

                    if (line.startsWith('COMMIT|')) {
                        const parts = line.split('|');
                        const commitMsg = parts[4] || '';
                        const lowerMsg = commitMsg.toLowerCase();

                        // 過濾過於技術性或不重要的 Commit (雜訊)
                        const noiseKeywords = [
                            'fixed broken image paths',
                            'v0.0.',
                            'initial release',
                            'update ci',
                            'initial commit',
                            'readme.md',
                            'fixed typos'
                        ];

                        if (noiseKeywords.some(key => lowerMsg.includes(key))) {
                            currentCommit = null;
                            continue;
                        }

                        currentCommit = {
                            hash: parts[1],
                            date: parts[2].split(' ')[0], // YYYY-MM-DD
                            author: parts[3],
                            message: commitMsg
                        };
                    } else if (currentCommit) {
                        // A status line, e.g., "M       docs/Software/intro.md" or "A       docs/foo.md"
                        // Handles both spaces and tabs for separation
                        const match = line.match(/^([AM])\s+(.*)$/);
                        if (match) {
                            const fileStat = match[1];
                            const filePath = match[2];

                            if ((filePath.endsWith('.md') || filePath.endsWith('.mdx')) && !processedFiles.has(filePath)) {
                                processedFiles.add(filePath);

                                const fullPath = path.join(context.siteDir, filePath);
                                if (fs.existsSync(fullPath)) {
                                    const fileContent = fs.readFileSync(fullPath, 'utf-8');
                                    const { data } = matter(fileContent);

                                    // Extract category from folder name
                                    // Normalize slashes for Windows compatibility
                                    const normalizedFilePath = filePath.split(path.sep).join('/').replace(/\\/g, '/');
                                    const relativePath = normalizedFilePath.replace(/^docs\//, '');
                                    const pathParts = relativePath.split('/');
                                    pathParts.pop(); // remove filename
                                    const category = pathParts.join(' > ') || 'Root';

                                    // Construct link (assuming typical Docusaurus routing)
                                    const docPath = relativePath.replace(/\.mdx?$/, '');

                                    recentDocs.push({
                                        title: data.title || path.basename(filePath, path.extname(filePath)),
                                        category: category,
                                        link: `/doc/${docPath}`, // Docusaurus uses slug or relative path. For typical setup it is /docs/... We only need relative path here and resolve with useBaseUrl in component
                                        date: currentCommit.date.replace(/-/g, '/'),
                                        developer: currentCommit.author,
                                        commitMsg: currentCommit.message
                                    });

                                    if (recentDocs.length >= 3) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (recentDocs.length >= 3) {
                        break;
                    }
                }
            } catch (e) {
                console.error('Error in plugin-recent-docs', e);
            }

            return recentDocs;
        },

        async contentLoaded({ content, actions }) {
            const { setGlobalData } = actions;
            setGlobalData(content);
        },
    };
}
