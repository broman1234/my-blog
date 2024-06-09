import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    const posts = [
        {
            id: 1,
            title: 'Post 1 - This is a longer title for the post',
            desc: 'This is the content of post 1. This content is longer than the previous content and provides more details about the post.',
            img: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 2,
            title: 'Post 2 - This is another long title for the post',
            desc: 'This is the content of post 2. Like the first post, this content is also longer and provides more details.',
            img: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 3,
            title: 'Post 3 - This is yet another long title for the post',
            desc: 'This is the content of post 3. This content is longer than the previous ones and provides even more details.',
            img: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 4,
            title: 'Post 4 - This is the longest title for the post',
            desc: 'This is the content of post 4. This is the longest content so far and provides the most details.',
            img: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="img">
                            <img src={post.img} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;