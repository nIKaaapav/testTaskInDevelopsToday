import React, {useRef} from 'react';

const New = () => {
    const titlePost = useRef();
    const bodyPost = useRef();

    return (
        <div>
            <h2>new post</h2>

            <form action="" >
                <input type="text" ref={titlePost} placeholder='title'/>
                <textarea name="body-post" ref={bodyPost} placeholder='text'/>
                <button>create</button>
            </form>
        </div>
    );
};

export default New;