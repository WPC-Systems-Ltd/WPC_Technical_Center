import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
    useDocById,
    findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import { Folder, FileText, Link as LinkIcon } from 'lucide-react';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';

function CardContainer({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className={clsx('card padding--lg theme-doc-card')}>
            {children}
        </Link>
    );
}

function CardLayout({ href, icon, title, description }: { href: string, icon: React.ReactNode, title: string, description?: string }) {
    return (
        <CardContainer href={href}>
            <h2 className="text--truncate" title={title}>
                {icon} <span>{title}</span>
            </h2>
            {description && (
                <p className="text--truncate" title={description}>
                    {description}
                </p>
            )}
        </CardContainer>
    );
}

function CardCategory({ item }: { item: PropSidebarItemCategory }) {
    const href = findFirstSidebarItemLink(item);
    if (!href) {
        return null;
    }
    return (
        <CardLayout
            href={href}
            icon={<Folder size={20} strokeWidth={1.5} className="lucide-category" />}
            title={item.label}
            description={
                item.description ?? translate(
                    {
                        message: '{count} 個項目',
                        id: 'theme.docs.DocCard.categoryDescription',
                        description:
                            'The default description for a category card in the generated index about how many items this category includes',
                    },
                    { count: item.items.length },
                )
            }
        />
    );
}

function CardLink({ item }: { item: PropSidebarItemLink }) {
    const isInternal = isInternalUrl(item.href);
    const icon = isInternal ? <FileText size={20} strokeWidth={1.5} className="lucide-doc" /> : <LinkIcon size={20} strokeWidth={1.5} className="lucide-link" />;
    const doc = useDocById(item.docId ?? undefined);
    return (
        <CardLayout
            href={item.href}
            icon={icon}
            title={item.label}
            description={item.description ?? doc?.description}
        />
    );
}

export default function DocCard({ item }: { item: PropSidebarItemCategory | PropSidebarItemLink }) {
    switch (item.type) {
        case 'link':
            return <CardLink item={item as PropSidebarItemLink} />;
        case 'category':
            return <CardCategory item={item as PropSidebarItemCategory} />;
        default:
            // @ts-ignore
            throw new Error(`unknown item type ${item.type}`);
    }
}
