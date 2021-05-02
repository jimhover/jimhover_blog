import React, { useState, useRef } from 'react';
import MdEditor from './MdEditor';
export default function AddBlog() {
    const [title, settitle] = useState("");
    const mdEditorRef = useRef();
    const blogDataUrl = 'http://localhost:3001/blogs';

    const saveBlog = () => {
        let content=mdEditorRef.current.getContent();
        let id=Date.now();
        console.log('title: ' + title);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "id": id, "title": title, "content": content });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(blogDataUrl, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log('save blog finish.');
    }
    return (
        <div>
            <h3>Add Blog</h3>
            <label value="主题：" /><input onChange={e=>{settitle(e.target.value)}} />

            <label value="时间" /><p>TIME</p>

            <label value="博客内容" />
            <MdEditor cRef={mdEditorRef} defaultVal={''} />

            <button type="button" onClick={() => saveBlog()} >提交</button>
        </div>
    );
}