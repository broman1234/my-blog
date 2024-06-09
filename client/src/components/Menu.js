import React from 'react';

const Menu = () => {
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
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;