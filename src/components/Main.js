import "../App.css";
import DropBox from "./DropBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const dropOption1 = [
    { id: "AL", label: "전체" },
    { id: "CK", label: "치킨" },
    { id: "PZ", label: "피자" },
    { id: "SP", label: "분식" },
    { id: "CF", label: "카페" },
  ];

  const dropOption2 = [
    { id: 1, label: "기본 정렬순" },
    { id: 2, label: "별점 높은순" },
    { id: 3, label: "리뷰 많은순" },
  ];

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState(1);
  const [storeList, setStoreList] = useState([]);
  const [defaultList, setDefaultList] = useState([]);

  console.log(selectedOption1);
  console.log(selectedOption2);
  console.log(storeList);

  const handleDropdownChange1 = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption1(selectedValue);
  };

  const handleDropdownChange2 = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption2(selectedValue);
  };

  const getStoreList = () => {
    axios
      .get(
        `https://63d5f3d5-e29d-4b00-8d40-6be477084fab.mock.pstmn.io/dcx/1/shopList`
      )
      .then((res) => {
        setStoreList(res.data?.shopList);
        setDefaultList(res.data?.shopList);
      });
  };

  useEffect(() => {
    let newStoreList = defaultList.filter((store) => {
      if (selectedOption1 !== "AL") {
        return store.category === selectedOption1;
      } else {
        return true;
      }
    });
    setStoreList(newStoreList);
  }, [selectedOption1]);

  useEffect(() => {
    getStoreList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">마곡 요기서 배달</header>
      <div className="Drop-Box">
        <span>
          <DropBox
            options={dropOption1}
            selectedOption={selectedOption1}
            handleDropdownChange={handleDropdownChange1}
          />
        </span>
        <span>
          <DropBox
            options={dropOption2}
            selectedOption={selectedOption2}
            handleDropdownChange={handleDropdownChange2}
          />
        </span>
      </div>

      <div className="Shop-List">
        {storeList.map((store) => (
          <Link to={`/stores/${store.id}`}>
            <div className="Shop-card" key={store.id}>
              <img
                className="phoneImage"
                alt="iPhone_01"
                src={`images/${store.imageFile}`}
              />
              <div>
                <div className="Store-Name">{store.name}</div>
                <div>
                  별점 {store.point} , 리뷰 {store.review}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;
