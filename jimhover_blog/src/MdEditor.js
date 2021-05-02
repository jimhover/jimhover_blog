import React,{useState,useImperativeHandle} from "react";
import MDEditor from '@uiw/react-md-editor';

export default function MdEditor({cRef}) {

    const [value, setvalue] = useState("**please input your text**");
    useImperativeHandle(cRef, () => ({
        getContent: () => {
            return value;
        }
      }));
    return(
        <div className="container">
            <MDEditor value={value} onChange={setvalue}/>
            {/* <MDEditor.Markdown source={value} /> */}
        </div>
    );
    
}
