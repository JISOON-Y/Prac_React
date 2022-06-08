//user.js

// 유저 이름을 넣고
// 유저 이름 수정

const CREATE = 'user/CREATE';
const CREATE_SCORE = 'user/CREATE_SCORE';

// Actions Creator
export function createName(name) {
    return { type: CREATE, name };
}

export function createScore(score) {
    return { type: CREATE_SCORE, score };
}

const initialName = {
    user_name: " ",
    score: " ",
}

// Reducers
export default function reducer(state = initialName, action = {}) {
    switch (action.type) {
        case "user/CREATE":
            return { ...state, user_name: action.name };

        case "user/CREATE_SCORE":
            return { ...state, score: action.score };

        default: return state;
    }
}