import './Post.css';

const Post = ({ post }) => {
    return (
        <article className="post">
            <h2>{post.title}</h2>
            <span>r/{post.subreddit}</span>
            <span>r/{post.author}</span>
            <p>{post.selftext}</p>
            <div className="score">
                {post.score} {post.num_comments} comments.
            </div>
            <span>Created {post.created}</span>
        </article>
    );
}

export default Post;