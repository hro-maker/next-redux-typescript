export interface Icategory {
  _id: string;
  title: string;
  childrens: [{ _id: string; title: string }];
  parentId: string;
}
export interface categoriinitialstate {
  loading: boolean;
  error: string | null;
  categories: Icategory[] | null;
}

export enum categoryenum {
  category_request = "category_request",
  category_success = "category_success",
  category_failure = "category_failure",
}
interface fetchingcategory {
  type: categoryenum.category_request;
}
interface categorysuccess {
  type: categoryenum.category_success;
  payload: Icategory[];
}
interface categoryfailure {
  type: categoryenum.category_failure;
  payload: string;
}
export type categoryactiontypes =
  | fetchingcategory
  | categorysuccess
  | categoryfailure;
