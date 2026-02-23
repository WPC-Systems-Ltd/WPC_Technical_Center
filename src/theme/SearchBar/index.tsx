import React, { useRef, useEffect, createElement, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { autocomplete, AutocompleteApi } from "@algolia/autocomplete-js";
// @ts-ignore
import type lunr from "lunr";
import { translate } from "@docusaurus/Translate";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { mylunr, tokenize } from "@cmfcmf/docusaurus-search-local/lib/client/theme/SearchBar/d-s-l-a-generated";
import {
    DSLALocationState,
    HighlightSearchResults,
} from "@cmfcmf/docusaurus-search-local/lib/client/theme/SearchBar/HighlightSearchResults";
import { usePluginData } from "@docusaurus/useGlobalData";
import { useContextualSearchFilters } from "@docusaurus/theme-common";

// Types derived from @cmfcmf/docusaurus-search-local
type MyDocument = any;
type DSLAPluginData = any;

const SEARCH_INDEX_AVAILABLE = process.env.NODE_ENV === "production";

type MyItem = {
    document: MyDocument;
    score: number;
    terms: string[];
};

function getItemUrl({ document }: MyItem): string {
    const [path, hash] = document.sectionRoute.split("#");
    let url = path!;
    if (hash) {
        url += "#" + hash;
    }
    return url;
}

const EMPTY_INDEX = {
    documents: [],
    index: mylunr(function () {
        this.ref("id");
        this.field("title");
        this.field("content");
    }),
};

async function fetchIndex(
    baseUrl: string,
    tag: string,
): Promise<IndexWithDocuments> {
    if (SEARCH_INDEX_AVAILABLE) {
        let json;
        try {
            const response = await fetch(`${baseUrl}search-index-${tag}.json`);
            if (!response.ok) return EMPTY_INDEX;
            json = await response.json();
        } catch (err) {
            return EMPTY_INDEX;
        }

        return {
            documents: json.documents as MyDocument[],
            index: mylunr.Index.load(json.index),
        };
    } else {
        return Promise.resolve(EMPTY_INDEX);
    }
}

type IndexWithDocuments = {
    documents: MyDocument[];
    index: lunr.Index;
};

const SearchBar = (props: any) => {
    const isHero = props.isHero;

    useEffect(() => {
        if (!document) {
            return;
        }
        function syncAttribute() {
            document.body.setAttribute(
                "data-theme",
                document.documentElement.getAttribute("data-theme") ?? "",
            );
        }
        const observer = new MutationObserver(() => {
            syncAttribute();
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });
        syncAttribute();
        return () => observer.disconnect();
    }, []);

    const {
        siteConfig: { baseUrl },
    } = useDocusaurusContext();
    const {
        titleBoost,
        contentBoost,
        tagsBoost,
        parentCategoriesBoost,
        indexDocSidebarParentCategories,
        maxSearchResults,
    } = usePluginData("@cmfcmf/docusaurus-search-local") as DSLAPluginData;

    const history = useHistory<DSLALocationState>();
    const { tags } = useContextualSearchFilters();
    const tagsRef = useRef(tags);
    useEffect(() => {
        tagsRef.current = tags;
    }, [tags]);

    const indexes = useRef<any>({});

    const getIndex = async (tag: string): Promise<IndexWithDocuments> => {
        const index = indexes.current[tag];
        switch (index?.state) {
            case "ready":
                return index;
            case undefined: {
                const callbacks: Array<(index: IndexWithDocuments) => void> = [];
                indexes.current[tag] = {
                    state: "loading",
                    callbacks,
                };
                const index = await fetchIndex(baseUrl, tag);
                callbacks.forEach((cb) => cb(index));

                indexes.current[tag] = {
                    state: "ready",
                    ...index,
                };
                return index;
            }
            case "loading":
                return new Promise<IndexWithDocuments>((resolve) => {
                    index.callbacks.push(resolve);
                });
        }
    };

    const placeholder = translate({
        message: "cmfcmf/d-s-l.searchBar.placeholder",
        description: "Placeholder shown in the searchbar",
    });

    const autocompleteRef = useRef<HTMLDivElement>(null);
    const autocompleteApi = useRef<AutocompleteApi<MyItem> | null>(null);

    useEffect(() => {
        if (!autocompleteRef.current) {
            return;
        }

        autocompleteApi.current = autocomplete<MyItem>({
            container: autocompleteRef.current,
            placeholder,
            renderer: {
                createElement,
                Fragment,
                render: (component, container) =>
                    createRoot(container as any).render(component),
            },
            navigator: {
                navigate({ item, itemUrl }) {
                    history.push(itemUrl, {
                        cmfcmfhighlight: {
                            terms: item.terms,
                            isDocsOrBlog:
                                item.document.type === "docs" || item.document.type === "blog",
                        },
                    });
                },
            },
            // IMPORTANT FIX: Use non-detached for Hero, empty string (detached) for Header to show popover if needed, 
            // but actually let's just use 'none' for both and control it with CSS!
            detachedMediaQuery: "none",
            defaultActiveItemId: 0,

            translations: {
                clearButtonTitle: translate({
                    message: "cmfcmf/d-s-l.searchBar.clearButtonTitle",
                    description: "Title of the button to clear the current search input",
                }),
                detachedCancelButtonText: translate({
                    message: "cmfcmf/d-s-l.searchBar.detachedCancelButtonText",
                    description: "Text of the button to close the detached search window",
                }),
                submitButtonTitle: translate({
                    message: "cmfcmf/d-s-l.searchBar.submitButtonTitle",
                    description: "Title of the button to submit a new search",
                }),
            },

            getSources({ query: input }) {
                if (!SEARCH_INDEX_AVAILABLE) {
                    return [];
                }
                return [
                    {
                        sourceId: "search-results",
                        templates: {
                            item({ item }) {
                                const url = getItemUrl(item);
                                return (
                                    <a
                                        href={url}
                                        className="aa-ItemLink"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            history.push(url, {
                                                cmfcmfhighlight: {
                                                    terms: item.terms,
                                                    isDocsOrBlog:
                                                        item.document.type === "docs" ||
                                                        item.document.type === "blog",
                                                },
                                            });
                                        }}
                                    >
                                        <div className="aa-ItemContent">
                                            <div className="aa-ItemContentBody">
                                                <div className="aa-ItemContentTitle">
                                                    {item.document.sectionTitle}
                                                </div>
                                                {item.document.pageTitle !==
                                                    item.document.sectionTitle && (
                                                        <div className="aa-ItemContentDescription">
                                                            {item.document.pageTitle}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </a>
                                );
                            },
                        },
                        getItemUrl({ item }) {
                            return getItemUrl(item);
                        },
                        async getItems() {
                            const tags = tagsRef.current;
                            const indexes = await Promise.all(
                                tags.map((tag) => getIndex(tag)),
                            );
                            const terms = tokenize(input);

                            return indexes
                                .flatMap(({ index, documents }) =>
                                    index
                                        .query((query: any) => {
                                            query.term(terms, { fields: ["title"], boost: titleBoost });
                                            query.term(terms, { fields: ["title"], boost: titleBoost, wildcard: mylunr.Query.wildcard.TRAILING });
                                            query.term(terms, { fields: ["content"], boost: contentBoost });
                                            query.term(terms, { fields: ["content"], boost: contentBoost, wildcard: mylunr.Query.wildcard.TRAILING });
                                        })
                                        .slice(0, maxSearchResults)
                                        .map((result: any) => ({
                                            document: documents.find((document) => document.id.toString() === result.ref)!,
                                            score: result.score,
                                            terms,
                                        })),
                                )
                                .sort((a, b) => b.score - a.score)
                                .slice(0, maxSearchResults);
                        },
                    },
                ];
            },
        });

        return () => autocompleteApi.current?.destroy();
    }, [maxSearchResults]);

    return (
        <>
            <HighlightSearchResults />
            <div className={`dsla-search-wrapper ${isHero ? "is-hero-search" : "is-navbar-search"}`}>
                <div
                    className="dsla-search-field"
                    ref={autocompleteRef}
                    data-tags={tags.join(",")}
                />
            </div>
        </>
    );
};

export default SearchBar;
