import './Head.css'
import React, { Component } from 'react';

export default function Head(props) {
    // 'home', 'thought', 'blog', 'ablout'
    const menus = [{ menu: 'home', path: '/home' }, { menu: 'blog', path: '/blog-list'},{menu:'Add Blog', path:'/add-blog'}];
    return (
        <div className='Head'>
            {
                menus.map(item => (
                    <HeadMenuItem name={item.menu} path={item.path} onClick={props.loadMain} />
                )
                )
            }
        </div>
    )
}

function HeadMenuItem(props) {
    return (<div className='headMenuItem'>
        <h2 onClick={() => { props.onClick(props.path) }}>{props.name}</h2>
    </div>)

}
