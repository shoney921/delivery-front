import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./StoreDetailPage.css";

function StoreDetailPage() {
  const { id } = useParams();
  // const [name, setName] = useState("");
  // const [point, setPoint] = useState("");
  // const [review, setReview] = useState("");
  // const [distance, setDistance] = useState("");
  // const [time, setTime] = useState("");
  // const [imageFile, setImageFile] = useState("");
  const [shop, setShop] = useState({
    name: "",
  });

  const getDetail = () => {
    axios
      .get(
        `https://63d5f3d5-e29d-4b00-8d40-6be477084fab.mock.pstmn.io/dcx/1/shopDetail/${id}`
      )
      .then((res) => {
        // console.log(res.data?.shop);
        setShop(res.data?.shop);
        console.log(shop.imageFile);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <div className="Detail-Title">
        <h1>{shop.name}</h1>
        <img className="shopDetailImage" src={`/images/${shop.imageFile}`} />
      </div>

      <div className="Detail-Box">
        <div className="Left-Box">
          <div>점수</div>
          <div>리뷰</div>
          <div>거리</div>
          <div>배달시간</div>
        </div>
        <div className="Right-Box">
          <div>{shop.point}</div>
          <div>{shop.review}</div>
          <div>{shop.distance}</div>
          <div>{shop.time}</div>
        </div>
      </div>
    </div>
  );
}

export default StoreDetailPage;
