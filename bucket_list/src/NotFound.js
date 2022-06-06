import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            <FontStyle>
                주소가 올바르지 않습니다!
            </FontStyle>
            <button onClick={() => {
                navigate("/");
            }}> 뒤로가기 </button>
        </div>
    )
}

const FontStyle = styled.h2`
    font-weight: bold;
    margin: 20px, 0;
`;

export default NotFound;