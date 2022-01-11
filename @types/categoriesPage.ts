interface PostTypes {
    map(arg0: (
            { fimg_url, categories, title, modified, slug }: { fimg_url: string; categories: any; title: any; modified: string; slug: string; }
        ) => JSX.Element): 
    import("react").ReactNode;
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    modified: string;
    fimg_url: string;
    category_name: string;
    category_slug: string;
    display_name: string;
    caption: string;
    body: string;
}

interface CatTypes {
    name: string;
    description: string;
}

export default interface CatDataTypes {
    postData: PostTypes;
    catData: CatTypes;
}