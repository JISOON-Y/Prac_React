// bucket.js
// 모듈 생성

// Actions = 액션 타입 설정
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const REMOVE = 'bucket/REMOVE';

// 초기 데이터 설정
const initialState = {
    list: [
        { text: "영화관 가기", completed: false },
        { text: "매일 책읽기", completed: false },
        { text: "수영 배우기", completed: false },
        { text: "코딩하기", completed: false }

    ],
}

// Action Creators = 액션 객체 생성
export function createBucket(bucket) {
    return { type: CREATE, bucket };
}

export function updateBucket(bucket_idx) {
    console.log("수정수정");
    return { type: UPDATE, bucket_idx }
}

export function removeBucket(bucket_idx) {
    return { type: REMOVE, bucket_idx };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/CREATE": {
            // 기존 데이터 + 추가 데이터 선언
            const new_bucketList = [...state.list, action.bucket];

            // 새로운 데이터 반환(생성)
            return { list: new_bucketList };
        }

        case "bucket/UPDATE": {
            const new_bucketList = state.list.map((l, idx) => {
                if (idx === parseInt(action.bucket_idx)) {
                    return { ...l, completed: true }
                } else {
                    return l
                }
            })
            return { list: new_bucketList };
        }

        case "bucket/REMOVE": {
            // 기존 리스트의 인덱스와 액션 데이터의 인덱스 값이 다르지 않으면,
            // 즉, 기존 리스트의 인덱스와 액션 데이터의 인덱스가 같지 않다면 = true 새 배열에 넣어주기
            const new_bucketList = state.list.filter((bucket, idx) => {
                return parseInt(action.bucket_idx) !== idx;
            })
            return { list: new_bucketList };
        }
        // do reducer stuff
        default: return state;
    }
}
