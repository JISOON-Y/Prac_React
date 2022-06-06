import React from "react";
import { useNavigate } from "react-router-dom";

const Dog = (props) => {
    // 페이지 이동을 위해 useNavigate 훅 사용 = Link를 사용할 수 없을 때
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            navigate("/cat");
        }}>댕댕이 화면입니다.</div>
    )
}

export default Dog;