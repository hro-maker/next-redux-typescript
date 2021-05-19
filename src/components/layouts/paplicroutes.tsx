import { useRouter } from "next/dist/client/router";
import React from "react";
import { fetchcategory } from "../../redux/actions/categoryactions";
import { wrapper, NextThunkDispatch } from "../../redux/store";
import Meniuheader from "../components/meniuheader";
import Navbarr from "../components/navbar";

const Paplicroutes: React.FC = ({ children }) => {
  let token = null;
  if (process.browser) {
    token = JSON.parse(localStorage.getItem("token"));
  }
  if (!token && process.browser) {
    const router = useRouter();
    router.push("/auth/login");
  }
  return (
    <div className="logedin_layout">
      <Navbarr islogin={true} />
      <Meniuheader />
      {children}
    </div>
  );
};

export default Paplicroutes;
