import React from "react";
import "../Css/LatestPosts.css";

const LatestPosts = ({ posts }) => {
  return (
    <section className="latest-posts-section">
      <div className="latest-posts-container">
        <div className="latest-posts-header">
          <p className="latest-posts-subtitle">\ Latest Posts \</p>
          <h2 className="latest-posts-title">Our Latest Articles</h2>
        </div>

        <div className="latest-posts-grid">
          {posts.map((post, index) => (
            <div key={index} className="latest-post-card">
              {/* Date Badge */}
              <div className="date-badge">{post.date}</div>

              {/* Image */}
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>

              {/* Meta Info */}
              <div className="post-meta">
                <span className="meta-item">
                  <i className="fas fa-user"></i> {post.author}
                </span>
                <span className="meta-item">
                  <i className="fas fa-comment"></i> {post.comments} comment
                </span>
              </div>

              {/* Title */}
              <h3 className="post-title">{post.title}</h3>

              {/* Footer */}
              <div className="post-footer">
                <button className="read-more-btn">
                  Read More <span>+</span>
                </button>
                <span className="read-time">{post.readTime} Min Read</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
