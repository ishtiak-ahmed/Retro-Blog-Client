import React from 'react';

const AddBlog = ({setCreateBlog}) => {

    const submitBlog = e => {
        e.preventDefault()
        const parent = e.target.children
        const title = parent[1].value;
        const tagsfield = parent[3].value.replace(' ', '');
        const tags = tagsfield.split(',');
        const content = parent[5].value;
        console.log(title, tags, content)

        fetch('https://ishtiak-blog-app.herokuapp.com/post/addNewPost', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({title, tags, content})
        })
        .then(res => res.json())
        .then(data => {
            if(data.data.post){
                setCreateBlog(false)
            }
        })
    }
    return (
        <div className='newBlog'>
            <div style={{height: '80vh', maxWidth: '500px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{lineHeight: '20px'}}>Add a new Blog</h4>
                <span style={{lineHeight: '20px'}} onClick={()=> setCreateBlog(false)}>X</span>
                </div>
                <form onSubmit={submitBlog}>
                    <p>Title:</p>
                    <input type="text" /> 
                    <p>Tags: <small>(use ',' to separate tags)</small></p>
                    <input type="text" /> 
                    <p>Content:</p>
                    <textarea rows='5' type="text" /> 
                    <input style={{marginTop: '10px'}} type="submit" value="Submit Blog" />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;