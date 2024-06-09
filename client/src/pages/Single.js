import React from 'react';
import Delete from "../img/delete.png"
import Edit from "../img/edit.png"
import {Link} from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img
                    src="https://images.pexels.com/photos/1018447/pexels-photo-1018447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""/>
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/1018447/pexels-photo-1018447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""/>
                    <div className="info">
                        <span>Man</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt=""/>
                        </Link>
                        <img src={Delete} alt=""/>
                    </div>
                </div>
                <h1>Post 1 - This is a longer title for the post</h1>
                <p>This is the content of post 1. This content is longer than the previous content and provides more
                    details about the post.This is the content of post 1. This content is longer than the previous content and provides more
                    details about the post. This is the content of post 1. This content is longer than the previous content and provides more
                    details about the post.This is the content of post 1. This content is longer than the previous content and provides more
                    details about the post. This is the content of post 1. This content is longer than the previous content and provides more
                    details about the post.This is the content of post 1. This content is longer than the previous content and provides more
                    details about the post.
                </p>
            </div>
            <Menu />
        </div>
    );
};

export default Single;