// 랭킹 정보를 추가
// 기존 랭킹 정보에다가 추가된 정보를 넣어주기 (새로운 유저가 푼 정보 = {유저명, 점수, 메세지} )

const CREATE_RANK = 'rank/CREATE_RANK';

export function createRank(rank) {
    return { type: CREATE_RANK, rank };
}

// 초기 값에 빈값을 넣게 되면?
const initialInfo = {
    user_ranking: [
        { score: 100, user_name: "양지선1", message: "하이하잉" },
        { score: 30, user_name: "양지선2", message: "하이하잉" },
        { score: 50, user_name: "양지선3", message: "하이하잉" },
    ],
}

export default function reducer(state = initialInfo, action = {}) {
    switch (action.type) {
        case "rank/CREATE_RANK":
            console.log(action)
            const new_userRanking = [...state.user_ranking, action.rank]
            return { ...state, user_ranking: new_userRanking };
        default: return state;
    }

}