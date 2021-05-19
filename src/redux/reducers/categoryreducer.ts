import {
  categoriinitialstate,
  categoryactiontypes,
  categoryenum,
} from "./../../types/categoryreducer";
const initialstate: categoriinitialstate = {
  loading: false,
  error: null,
  categories: null,
};
export const categoryreducer = (
  state = initialstate,
  action: categoryactiontypes
): categoriinitialstate => {
  switch (action.type) {
    case categoryenum.category_request:
      return {
        ...state,
        loading: true,
      };
    case categoryenum.category_failure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case categoryenum.category_success:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    default:
      return state;
  }
};
