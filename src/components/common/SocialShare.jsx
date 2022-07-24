import React from "react";
// import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

const SocialShare = (props) => {
  const url = "https://pnkarthik.github.io";
  // const ShareList = Passers({
  //   url,
  //   className: "network__share-button",
  // })({
  //   className: "network cursor-pointer hover transition--default",
  //   title: `Share ${String(window.location)}`,
  // })("li");

  return (
    <>
      {/* <ShareList> */}
        <FacebookShareButton quote={props.title} url={url}>
          <FacebookIcon size={"2rem"} round />
        </FacebookShareButton>

        <TwitterShareButton title={props.title} url={url}>
          <TwitterIcon size={"2rem"} round />
        </TwitterShareButton>

        <WhatsappShareButton title={props.title} separator=":: "  media={props.shareImage} url={url}>
          <WhatsappIcon size={"2rem"} round />
        </WhatsappShareButton>

        <LinkedinShareButton title={props.title} windowWidth={750} windowHeight={600} url={url}>
          <LinkedinIcon size={"2rem"} round />
        </LinkedinShareButton>

        <EmailShareButton subject={props.title} body="body" url={url}>
          <EmailIcon size={"2rem"} round />
        </EmailShareButton>

      {/* </ShareList> */}
    </>
  );
};

export default SocialShare;