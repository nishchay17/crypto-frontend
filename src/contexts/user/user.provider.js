import { useCreateContext } from "../create-context";
import { reducer, initialState } from "./user.reducer";

const [state, useDispatch, provider] = useCreateContext(initialState, reducer);
export const useUserState = state;
export const useUserDispatch = useDispatch;
export const UserProvider = provider;
