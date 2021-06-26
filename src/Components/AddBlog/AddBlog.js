import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FetchContext} from '../../App';

const AddBlog = ({setCreateBlog}) => {
    const [fetchData, setFetchData] = useContext(FetchContext);
    const [imageURL, setImageURL] = useState('')
    const submitBlog = e => {
        e.preventDefault()
        const parent = e.target.children
        const title = parent[1].value;
        const tagsfield = parent[3].value.replace(' ', '');
        const tags = tagsfield.split(',');
        const content = parent[7].value;
        console.log(title, tags, content)

        fetch('https://ishtiak-blog-app.herokuapp.com/post/addNewPost', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({title, tags, content, imageURL})
        })
        .then(res => res.json())
        .then(data => {
            if(data.data){
                console.log(fetchData)
                setFetchData(fetchData + 1)
                setCreateBlog(false)
            }else{
                alert('something went wrong..')
            }
        })
    }
     const uploadImage = (e) => {
        console.log(e.target.files[0])
        const imgdata = new FormData()
        imgdata.set('key', "656e2e3b9571e22c6fa6175082a5a794")
        imgdata.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imgdata
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='newBlog'>
            <div style={{minHeight: '80vh', maxWidth: '500px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{lineHeight: '20px'}}>Add a new Blog</h4>
                <span style={{lineHeight: '20px'}} onClick={()=> setCreateBlog(false)}>X</span>
                </div>
                <form onSubmit={submitBlog}>
                    <p>Title:</p>
                    <input type="text" /> 
                    <p>Tags: <small>(use ',' to separate tags)</small></p>
                    <input type="text" /> 
                    <input onChange={uploadImage} type="file" name="" id="" /> <br />
                    <p>Content:</p>
                    <textarea rows='5' type="text" /> 
                    <input style={{marginTop: '10px'}} type="submit" value="Submit Blog" />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;