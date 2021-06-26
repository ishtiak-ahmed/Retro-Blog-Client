import ShortBlog from './ShortBlog';

const Home = ({blogs, myBlogs}) => {
    return (
        <main>
            {
                myBlogs.slice(0,10).map(blog => <ShortBlog key={blog._id} blog={blog}></ShortBlog>)
            }
            {
                blogs.slice(0,10).map(blog => <ShortBlog key={blog.id} blog={blog}></ShortBlog>)
            }
        </main>
    );
};

export default Home;