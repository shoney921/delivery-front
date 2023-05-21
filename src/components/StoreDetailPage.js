import React from "react";
import { useParams } from "react-router-dom";

function StoreDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Store Detail</h1>
      <p>Store ID: {id}</p>
      {/* 가게 상세 정보를 렌더링하거나 추가적인 로직을 구현할 수 있음 */}
    </div>
  );
}

export default StoreDetailPage;
