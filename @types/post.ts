interface PostTypes {
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

interface SeoTypes {
    title: string;
    excerpt: string;
}

export default interface PostDataTypes {
    postData: PostTypes;
    seoData: SeoTypes;
}