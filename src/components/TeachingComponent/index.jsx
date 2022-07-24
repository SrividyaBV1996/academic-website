import React from "react";
import data from "./TeachingData.json";
import "../../css/styles.css";
import parse from 'html-react-parser';
import { getBadgeColor } from "../../utility";

const TeachingComponent = () => {
  return (
    <div>
      {data.map((d, index) => {
        return (
          <div className="row alignBaseline seminarsContainerPadding" key={index}>
            <div className="col-md-2">
              <hr className="headingBar col-md-8" />
            </div>
            <div className="col-md-10">
              <span className="headingFontSize">{d.year}</span>
              <div>
                <span className="badge rounded-pill dateColor seminarDateMargin">{d.courseMonth}</span>
                <span className="contentPadding">{parse(d.title)}</span><br />
                <table border={1} className="tablePadding">
                  <tbody>
                    <tr>
                      <td className="tableCellPadding">{d.noOfInstructors > 1 ? 'Course instructors' : 'Course instructor'}</td>
                      <td className="tableCellPadding">{parse(d.courseInstructor)}</td>
                    </tr>
                    <tr>
                      <td className="tableCellPadding">Course website</td>
                      <td className="tableCellPadding breakWord">{parse(d.courseWebsite)}</td>
                    </tr>
                    <tr>
                      <td className="tableCellPadding">Term</td>
                      <td className="tableCellPadding">{d.term}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="notesTitle">Notes</p>
                <span>{parse(d.notesDesc)}</span>
                <ul>
                  {d.notesList.map((note, index1) => {
                    return (
                      <li key={index1}>
                        <span className="noteTitlePadding">{parse(note.title)}</span>
                        {note.badgesData && note.badgesData.map((badge, index2) => {
                            return (
                              <a key={index2} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor(badge.badgeName) }}>{badge.badgeDisplayName}</span></a>
                            )
                          })
                        }
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeachingComponent;