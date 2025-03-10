import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card px-0 py-0">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill text-bg-dark">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <small className="text-body-secondary d-flex justify-content-start my-3">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
