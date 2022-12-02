import React from "react";
import Row from "react-bootstrap/Row";
import { ProductItem } from "./ProductItem";

export const ProductListing = ({ limit, title, showMoreButton }) => {
  const products = [
    {
      _id: "637ef422b28413483f4dceac",
      title: "Cá hú tươi 500g",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      categories: ["637ef3c0b6eabfb8e2b82c81"],
      price: "32.8",
      quantity: 100,
      createdAt: "2022-11-24T04:33:38.643Z",
      updatedAt: "2022-11-24T04:33:38.643Z",
      __v: 0,
    },
    {
      _id: "637ef508b28413483f4dceae",
      title: "Ba rọi heo rút sườn - Nam Phong 100g",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      categories: ["637eeb9e172c840df641d15d"],
      price: "27.8",
      quantity: 100,
      createdAt: "2022-11-24T04:37:28.294Z",
      updatedAt: "2022-11-24T04:37:28.294Z",
      __v: 0,
    },
    {
      _id: "637ef525b28413483f4dceb0",
      title: "Bạch tuộc 10-15con 100g",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      categories: ["637eeb9e172c840df641d15d"],
      price: "16.9",
      quantity: 0,
      createdAt: "2022-11-24T04:37:57.253Z",
      updatedAt: "2022-11-24T04:37:57.253Z",
      __v: 0,
    },
    {
      _id: "637ef643b28413483f4dceb2",
      title: "Cá Basa 500g",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      categories: ["637ef3c0b6eabfb8e2b82c81"],
      price: "22.9",
      quantity: 100,
      createdAt: "2022-11-24T04:42:43.213Z",
      updatedAt: "2022-11-24T04:42:43.213Z",
      __v: 0,
    },
    {
      _id: "637ef660b28413483f4dceb4",
      title: "Cá bạc má làm sạch 500g",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      categories: ["637ef3c0b6eabfb8e2b82c81"],
      price: "44.5",
      quantity: 100,
      createdAt: "2022-11-24T04:43:12.771Z",
      updatedAt: "2022-11-24T04:43:12.771Z",
      __v: 0,
    },
    {
      _id: "637ef660b28413486543545",
      title: "Cá bạc má làm sạch 500g",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      categories: ["637ef3c0b6eabfb8e2b82c81"],
      price: "44.5",
      quantity: 100,
      createdAt: "2022-11-24T04:43:12.771Z",
      updatedAt: "2022-11-24T04:43:12.771Z",
      __v: 0,
    },
  ];
  return (
    <div className="product-listing popular-products">
      <div className="container">
        <div className="product-listing__wrapper">
          <h2 className="title">{title}</h2>
          <Row className="listing">
            {products.map((item) => {
              return <ProductItem key={item._id} data={item} />;
            })}
          </Row>
          <div className="wraplist-button text-center visible-desk  visible-mobile">
            <a
              href="/collections/hot-products"
              className="button dark btn-collection"
            >
              Xem thêm sản phẩm
              <b> Sản phẩm nổi bật </b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
