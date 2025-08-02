import { useCallback, useRef, useState } from "react";
import { useEffect } from "react";
import fetchPosts from "../fetchPosts";
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null)
    async function loadMorePosts() {
        const newPosts = await fetchPosts(1, 10)
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setLoading(false);
    }
    // la fonction laspodtElement est executer quand loading change de valeur
    const lastPostElementRef = useCallback(
        (node: HTMLLIElement) => {
            if (loading) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {

                    setPage((prevPage) => prevPage + 1);

                }
            });
            if (node) {
                observer.current.observe(node)
            }



        }, [loading]
    )
    useEffect(() => {
        loadMorePosts();
    }, [page]);

    return (
        <div>
            <h1 >Your Feed</h1>
            <ul >
                {posts.map((post, index) => (
                    <li
                        key={index} 
                        ref={posts.length === index + 1 ? lastPostElementRef : null}
                        className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-bold text-blue-600 mb-3 hover:text-blue-800 transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {post.body}
                        </p>
                        
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Lire plus
                        </button>
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}

        </div>
    );
};
