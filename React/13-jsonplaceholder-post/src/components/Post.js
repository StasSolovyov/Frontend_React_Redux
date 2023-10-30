import './Post.css';
function Post({ id, title, body }) {
    return (
        <div className="post">
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User ID:{id}</h3>
        </div>
    );
}

export default Post;
