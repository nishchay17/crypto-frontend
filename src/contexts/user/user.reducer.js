export const initialState = {
  isLoggedin: false,
  name: "",
};

export function reducer(state, { type, name }) {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedin: true,
        name,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedin: false,
        name: "",
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
