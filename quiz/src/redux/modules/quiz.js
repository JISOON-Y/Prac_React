// quiz.js
import img1 from '../../quiz1.png';
import img2 from '../../quiz2.png';
import img3 from '../../quiz3.png';
import img4 from '../../quiz4.png';

// 모듈을 만들 때 중점적으로 생각해야하는 부분
// 어떤 데이터를 넣을건지
// 퀴즈 목록 && 유저 정답 목록
// 어떻게 수정할건지
// 유저가 선택한 정답들을 정답 목록에 추가

// Actions
const ADD_ANSWER = 'quiz/ADD_ANSWER';

// Actions Creator
export function addAnswer(user_answer) {
    return { type: ADD_ANSWER, user_answer };
}

const initialState = {
    quiz_list: [
        { question: "양지순은 인싸중에 아싸, 아싸중에 인싸인 ISFJ이다.", anwser: true, image: img1 },
        { question: "양지순의 취미는 그림그리기이다.", anwser: false, image: img2 },
        { question: "양지순이 가장 좋아하는 운동은 배드민턴이다.", anwser: true, image: img3 },
        { question: "양지순이 가장 싫어하는 음식은 마라탕이다.", anwser: true, image: img4 }
    ],
    user_answer_list: [],
}

// Reducers
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "quiz/ADD_ANSWER":
            const new_user_answer_list = [...state.user_answer_list, action.user_answer]
            return { ...state, user_answer_list: new_user_answer_list };
        default: return state;
    }
}