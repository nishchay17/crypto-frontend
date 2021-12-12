import { useCreateContext } from "../create-context";
import { reducer, initialState } from "./user.reducer";

const [state, useDispatch, provider, useAll] = useCreateContext(
  initialState,
  reducer
);

export const useUserState = state;
export const useAllUserState = useAll;
export const useUserDispatch = useDispatch;
export const UserProvider = provider;
