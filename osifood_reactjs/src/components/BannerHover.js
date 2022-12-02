import React from "react";

export const BannerHover = ({ backgroundSrc, linkTo }) => {
  console.log(backgroundSrc);
  return (
    <div className="section-banner ">
      <div className="wraplist-image groupbanner-hover">
        <a href={linkTo}>
          <img
            className=" ls-is-cached lazyloaded"
            src={backgroundSrc}
            alt="	Trái cây "
          />
        </a>
      </div>
    </div>
  );
};
