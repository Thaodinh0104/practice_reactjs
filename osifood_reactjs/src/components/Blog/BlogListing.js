import React from "react";
import { BlogItem } from "./BlogItem";
import Row from "react-bootstrap/Row";
const blogs = [
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },

  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
  {
    title: "Tưng Bừng Khai Trương Cửa Hàng Thứ 18 OsiFood Nguyễn Xiển",
    description: "",
    createdAt: "15/10/2022",
    image: "/images/hinh_khai_truong_osi_nguyen_xien.jpg",
    url: "#",
  },
];
export const BlogListing = (data) => {
  const {
    heading = "Có thể bạn muốn biết",

    showMoreLink = "/blogs/all",
    showViewMore = true,
    showMoreText = "Xem các tin bài khác »",
    column = 4,
  } = data;
  return (
    <div className="wrapper-latestBlog">
      <h2 className="hTitle">
        <a href="/blogs/all">{heading}</a>
      </h2>
      <Row className="latestBlog">
        {blogs.map((item) => {
          return <BlogItem key={item} col={column} data={item} />;
        })}
      </Row>
      {showViewMore && (
        <div className="latestBlog-link  viewother">
          <a href={showMoreLink} className="linkview">
            {showMoreText}
          </a>
        </div>
      )}
    </div>
  );
};
