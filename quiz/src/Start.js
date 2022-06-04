import React from 'react';
import img from './dev_soon.png';


const Start = (props) => {
    console.log(props)

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            boxSizing: "border-box"
        }}>
            <img src={img} style={{
                width: "60vw",
                margin: "16px"
            }} />

            <h1 style={{
                fontSize: "1.5em",
                lineHeight: "1.8",
                textAlign: "center"
            }}>나는 <span style={{
                backgroundColor: "#ffe17c",
                padding: "5px 10px",
                borderRadius: "30px"
            }}>{props.name}</span>에 대해<br /> 얼마나 알고 있을까?</h1>

            <input type="text" placeholder='내 이름' style={{
                backgroundColor: "#eee",
                width: "100%",
                // height: "48px",
                borderRadius: "100px",
                border: "0",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "16px",
            }} />

            <button style={{
                backgroundColor: "slateblue",
                // width: "140px",
                // height: "48px",
                margin: "30px",
                padding: "20px 48px",
                border: "0",
                borderRadius: "100px",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "0px 2px 8px darkgray"
            }}>시작하기</button>
        </div >
    )
}


export default Start;