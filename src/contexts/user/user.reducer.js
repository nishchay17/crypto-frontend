export const initialState = {
  isLoggedin: false,
  name: "",
  token: null,
};

export function reducer(state, { type, payload }) {
  console.log({ type, payload });
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedin: true,
        token: payload.token,
        name: payload.name,
      };
    case "LOGOUT":
      localStorage.removeItem("cache");
      return {
        ...state,
        ...initialState,
      };
    case "TO_LOAD":
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
