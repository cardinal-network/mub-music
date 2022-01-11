interface PostTypes {
    map(arg0: (
            { fimg_url, categories, title, date, slug }: { fimg_url: string; categories: any; title: any; date: string; slug: string; }
        ) => JSX.Element): 
    import("react").ReactNode;
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    fimg_url: string;
    category_name: string;
    category_slug: string;
    display_name: string;
    caption: string;
    body: string;
}

export default interface HomePageDataTypes {
    highlightsPosts: PostTypes;
    trendingPosts: PostTypes;
    firstLatestHighlightPosts: PostTypes;
    firstLatestPosts: PostTypes;
    secondLatestPosts: PostTypes;
    thirdLatestPosts: PostTypes;
}