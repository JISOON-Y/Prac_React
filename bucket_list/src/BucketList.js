import React from "react";

// '함수형' 컴포넌트 기본 생김새 (화살표(축약)형)
const BucketList = (props) => {
    console.log(props);
    // 컴포넌트가 뿌려줄 ui 요소( == 리액트 엘리먼트 ) 반환
    return (
        <div>버킷 리스트</div>
    );
}

// 다른 파일에서 해당 파일 사용하기 위해 export
export default BucketList;
// export { BucketList }