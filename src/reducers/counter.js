// reducer => アクションと前の状態を組み合わせて新しい状態に更新する。
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
