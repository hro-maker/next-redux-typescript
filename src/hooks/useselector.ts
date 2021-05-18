import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../redux/reducers/rootreducer";

export const typetuseselector:TypedUseSelectorHook<State>=useSelector