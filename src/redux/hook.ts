import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "./store";

export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();