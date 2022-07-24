import React from "react";
import data from "./TalksAndSeminarsData.json";
import "../../css/styles.css";
import parse from 'html-react-parser';
import { getBadgeColor } from "../../utility";
import { MathJax } from "better-react-mathjax";

const TalksAndSeminars = () => {
  return (
    <MathJax>
        {Object.keys(data).sort().reverse().map((year, index) => {
          return (
            <div className="row alignBaseline seminarsContainerPadding" key={index}>
              <div className="col-md-2">
                <hr className="headingBar col-md-8" />
              </div>
              <div className="col-md-10">
                <span className="headingFontSize">{year}</span>
                  {data[year].map((d, index1) => {
                    return (
                      <div key={index1} className="seminarsContentPadding">
                        <span class="badge rounded-pill dateColor seminarDateMargin">{d.date}</span>
                        <span className="contentPadding">{parse(d.title)}</span>
                        {d.badgesData && d.badgesData.map((badge, index) => {
                          return (
                            <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor(badge.badgeName) }}>{badge.badgeDisplayName}</span></a>
                          )
                        })}
                        <br />
                        <span>{parse(d.description)}</span><br />
                      </div>
                    )
                  })}
              </div>
            </div>
          );
        })}
    </MathJax>
  );
};

export default TalksAndSeminars;