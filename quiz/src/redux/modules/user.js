//user.js

// 유저 이름을 넣고
// 유저 이름 수정

// (실행할 액션의 타입을 설정)
const CREATE = 'user/CREATE';
const CREATE_SCORE = 'user/CREATE_SCORE';
const CREATE_MESSAGE = 'user/CREATE_MESSAGE';

// Actions Creator (액션을 호출했을 때 실행)
export function createName(name) {
    return { type: CREATE, name };
}

export function createScore(score) {
    return { type: CREATE_SCORE, score };
}

export function createMessage(message) {
    return { type: CREATE_MESSAGE, message };
}

const initialName = {
    user_name: " ",
    score: " ",
    message: " ",
}

// const initialInfo = {
//     user_infoList: [
//         { user_name: " ", score: " ", message: " " }
//     ]
// }

// Reducers (액션이 호출되면 실질적으로 데이터가 생성, 수정, 삭제 > 변경 사항을 스토어에 저장해서 완료 !)
export default function reducer(state = initialName, action = {}) {
    switch (action.type) {
        case "user/CREATE":
            // const new_userList = [{ ...state, user_name: action.name }]
            // console.log(new_userList);
            // return { ...state, new_userList };
            return { ...state, user_name: action.name };

        case "user/CREATE_SCORE":
            return { ...state, score: action.score };

        case "user/CREATE_MESSAGE":
            return { ...state, message: action.message };

        default: return state;
    }
}