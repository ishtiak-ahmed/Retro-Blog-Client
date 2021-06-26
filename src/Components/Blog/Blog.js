import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import AddComment from './AddComment';
import Comment from './Comment';

const Blog = () => {
    const [comments, setComments] = useState([])
    const [addComment, setAddComment] = useState(1);
    const [user] = useContext(UserContext)
    const [blog, setBlog] = useState({})
    const id = useParams().id;
    let url = ''
    if(id.length <= 1){
        url = "https://jsonplaceholder.typicode.com/posts/" + id;
    }else{
        url = "https://ishtiak-blog-app.herokuapp.com/post/getPost/" + id;
    }
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[url])
    // Load Comments
    useEffect(()=> {
        fetch('https://ishtiak-blog-app.herokuapp.com/comment/getAllComments/'+ id)
        .then(res => res.json())
        .then(data => setComments(data.data.comments))
    },[id, addComment])
    return (
        <div>
            <h1 style={{fontSize: '45px', color: '#004D40'}}>{blog.title}</h1>
            {
                blog.imageURL ? <img style={{width: '100%'}} src={blog.imageURL} alt="thumbs" /> :
                <img style={{maxWidth: '100%'}} src="https://picsum.photos/1200/500" alt="thumbs" />
            }
            <p>{blog.body}{blog.content}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, excepturi commodi fuga nihil nisi veritatis eaque accusamus assumenda. Reiciendis deserunt, fuga officia animi laboriosam quisquam sint totam reprehenderit aliquam consequuntur saepe, dolor rem maxime provident aliquid distinctio numquam obcaecati eaque. Sequi in nulla alias placeat. Odit iusto doloremque est corporis quaerat animi, natus ipsum veniam harum, commodi, tempora voluptates expedita error praesentium! Possimus dolor sapiente optio.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, quisquam cum quibusdam, repellendus quidem sunt reprehenderit aut animi aspernatur modi, quasi nostrum ipsum illum rerum voluptas. Temporibus porro amet consequuntur nesciunt error, repellat dolorum iusto earum doloribus, quia aut, non officiis. Amet libero id cum sapiente perferendis enim illum voluptatum animi in? Aperiam amet mollitia placeat esse minus, adipisci obcaecati suscipit voluptate ipsum voluptatibus ad debitis quas est unde neque at quod dolor, ullam tempore eius praesentium! Nulla, doloribus at aliquid fugit odio voluptate libero tenetur iste quis exercitationem totam tempora possimus voluptates commodi, rem quaerat assumenda quasi. Aliquam quia nesciunt accusantium. Vitae, deleniti. Perferendis impedit quasi, consectetur tempore totam nostrum ratione earum rerum fugit debitis asperiores voluptas eos sequi id esse dicta ex reiciendis magnam consequuntur architecto. Quia est, minima doloremque, ullam quasi ad aliquid rem laudantium facere, quae qui ea minus unde? Incidunt vero soluta aliquam id, recusandae consequuntur voluptates animi expedita in enim veritatis distinctio architecto cum, ad odit, iste facilis quis aspernatur placeat corporis. Alias animi quasi, debitis illum provident vel! Maiores saepe quod debitis voluptatum autem facilis eaque placeat fugit optio inventore. Ullam veniam eaque accusamus, eveniet pariatur obcaecati consequatur reiciendis dicta minima id quo culpa veritatis nobis earum voluptatum modi in velit vero officia ipsam distinctio aliquid. Debitis doloribus, rem explicabo qui tenetur soluta accusantium nisi.</p>
            {
                user.userName ? <button>Delete</button> : ''
            }
            <div className="comments">
                <AddComment setAddComment={setAddComment} addComment={addComment} postID={id}></AddComment>
                {
                    comments.map(comment => <Comment setAddComment={setAddComment} addComment={addComment} key={comment._id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Blog;
