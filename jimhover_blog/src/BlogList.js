import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
    const [blogs, setBlogs] = useState(new Array());

    const blogDataUrl = 'http://localhost:3001/blogs';

    const getData = async () => {
        const res = await fetch(blogDataUrl, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            }
            );
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Link to='/'>home</Link>
            <div>
                {
                    blogs.map(item => {
                        console.log(item.id);
                        return (
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>
                            </div>
                        )

                    })}
            </div>
        </div>
    );
}