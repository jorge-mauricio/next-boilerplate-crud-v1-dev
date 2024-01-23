import { createWrapper } from "next-redux-wrapper";
import store from "./store";

const makeWrapper = () => store;
export const wrapper = createWrapper(makeWrapper);
