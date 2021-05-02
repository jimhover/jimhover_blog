import React, { Suspense } from 'react';

function getComponent(name) {
    name='./Login';
    console.log("name:"+name);
    return React.lazy(() => import('./Login'))
}

export default function MainContent(props) {
    let ContentComponent = getComponent(props.name);
    return (
        <div>
            <Suspense fallback={<div>loading</div>}>
            <ContentComponent />
            </Suspense>
        </div>
    )
}
