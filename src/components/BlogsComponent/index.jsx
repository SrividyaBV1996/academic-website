import React from "react";
import data from "./Blogs.json";
import "../../css/styles.css";

const BlogsComponent = () => {
  return (
    <>
      {data.map((d) => {
        return (
          <div className="row alignBaseline blogsPadding">
            <div className="col-md-2">
              <hr className="headingBar col-md-8" />
            </div>
            <div className="col-md-10">
              <div>
                <div className="headingFontSize">{d.title}</div>
              </div>
              <div>
                <span className="badge rounded-pill dateColor p-1 blogDateMargin">{d.date}</span>
                <span>{d.initialContent}</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href={d.blogLink} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-secondary">Read More</button></a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogsComponent;