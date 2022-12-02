import React from "react";
import Col from "react-bootstrap/esm/Col";

export const BlogItem = ({ col, data }) => {
  return (
    <Col xs={col} className="article-item">
      <div className="article-item__block">
        <div className="article-item__image">
          <div className="art-image">
            <a href={data.url} title={data.title} aria-label={data.title}>
              <img
                className=" ls-is-cached lazyloaded"
                data-src={data.image}
                alt={data.title}
                src={data.image}
              />
            </a>
          </div>
        </div>
        <div className="article-item__detail">
          <h3 className="art-title">
            <a href={data.url}>{data.title}</a>
          </h3>
          <div className="art-meta">
            <span>
              <time pubdate="" datetime={data.createdAt}>
                {data.createdAt}
              </time>
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};
