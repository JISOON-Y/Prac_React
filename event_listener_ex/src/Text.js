import React from "react";

const Text = (props) => {
    const text = React.useRef(null);

    // 이벤트 함수 선언 (e생략 가능)
    const hoverEvent = (e) => {
        console.log(e.target);
        console.log(text.current);
        // 속성 변경
        text.current.style.background = "slateblue";
    }
    // useEffect() = Mount + Update + UnMount 역할
    // 첫 번째 실행 시, 첫번째 인자(화살표 함수) 실행
    // 두 번째 실행부터, 두번째 인자(의존성 배열)의 요소를 파악해서
    // - 업데이트된 부분이 있으면, 화살표 함수 재실행 (update)
    // - 없으면, 실행 X (mount)
    // 컴포넌트 사라질 때는 useEffect내 return으로 unmount 역할
    React.useEffect(() => {
        // 이벤트 리스너 호출
        text.current.addEventListener("mouseover", hoverEvent);
        // 이벤트 리스너 제거
        return () => {
            text.current.removeEventListener("mouseover", hoverEvent);
        }
    }, []);

    // render
    return (
        <h1 ref={text}>텍스트입니다!</h1>
    )
}

export default Text;