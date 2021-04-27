import './Head.css'
import React, { Component } from 'react';

export default function Head(props) {
    // 'home', 'thought', 'blog', 'ablout'
    const menus = [{ menu: 'home', path: '/home' }, { menu: 'blog', path: '/blog-list' }];
    return (
        <div className='Head'>
            {
                menus.map(item => (
                    <HeadMenuItem name={item.menu} path={item.path} onClick={props.sayHello} />
                )
                )
            }
        </div>
    )
}

function HeadMenuItem(props) {
    return (<div className='headMenuItem'>
        <h2 onClick={()=>{props.onClick(props.path)}}>{props.name}</h2>
    </div>)

}
