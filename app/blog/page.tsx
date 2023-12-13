
import CardList from "../components/card-list/CardList";
import Menu from "../components/menu/Menu";
import styles from "./Blog.module.css";
import { Suspense } from "react";

interface BlogPageProps {
    searchParams: {
        cat: string;
        page: string;
        limit: string;
    };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
    const cat = searchParams.cat || "";
    const page = parseInt(searchParams.page) || 1;
    const limit = parseInt(searchParams.limit) || 4;

    return (
        <div className={styles.container}>
            <h1 className={styles.title} >{cat} Blog</h1>
            <div className={styles.content}>
                <Suspense fallback={<div>Loading...</div>}>
                    <CardList page={page} cat={cat} limit={limit} />
                </Suspense>
                <Menu />
            </div>
        </div>
    );
};

export default BlogPage;
