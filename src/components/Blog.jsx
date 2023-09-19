import { blogPosts } from "../constants"

const Blog = () => {
    return (
        <div className="blog section">
            <div className="blog-top">
                <h1 className="blog-top__header">
                    Caring is the new marketing
                </h1>
                <p className="blog-top__subheader">
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
                </p>
            </div>
            <div className="blog-posts">
                {blogPosts.map((post) => (
                    <div className="post" key={post.label}>
                        <img src={post.postImg} alt="" className="post-img" />
                        <button className="post-btn">
                            {post.postBtn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog 