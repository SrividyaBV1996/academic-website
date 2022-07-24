import React from "react";
import "../../css/styles.css";
import NewsData from "./NewsContent.json";
import { getBadgeColor } from "../../utility";
import parse from 'html-react-parser';

const NewsContent = () => {
  return (
    <div className="row alignBaseline">
      <div className="col-md-2">
        <hr className="headingBar col-md-8" />
      </div>
      <div className="col-md-10">
        <div className="headingFontSize">News</div>
        {NewsData.map((d, index) => {
          return (
            <div key={index} className="d-flex flex-row newsContainer">
              <div className="badge rounded-pill dateColor p-1">{d.date}</div>
              <span className="contentFontSize newsContentPadding">
                <span className="contentPadding">{parse(d.content)}</span>
                {d.badgesData && d.badgesData.map((badge, index) => {
                  return (
                    <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor(badge.badgeName) }}>{badge.badgeDisplayName}</span></a>
                  )
                })}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default NewsContent;