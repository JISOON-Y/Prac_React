import React from "react";

const Nemo = (props) => {
    // 함수형 컴포넌트에서 state 관리
    // const [값, 변경할 값] = React.useState(초기값)
    const [count, setCount] = React.useState(3);
    console.log(count);
    const nemoList = Array.from({ length: count }, (nemo, idx) => { return idx });

    const addNemo = () => {
        setCount(count + 1);
    };

    const removeNemo = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            window.alert("네모가 없습니당")
        }
    }

    return (
        <>
            {nemoList.map((nemo, idx) => {
                return (
                    <div key={idx}
                        style={{
                            width: "150px",
                            height: "150px",
                            backgroundColor: "#ddd",
                            margin: "10px"
                        }}>
                        nemo
                    </div>
                )
            })}

            <div>
                <button onClick={addNemo}>하나 추가</button>
                <button onClick={removeNemo}>하나 빼기</button>
            </div>
        </>
    );
}

export default Nemo;