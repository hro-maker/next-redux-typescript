import React from "react"
import Paplicroutes from "../components/layouts/paplicroutes"
import { fetchcategory } from "../redux/actions/categoryactions"
import { wrapper, NextThunkDispatch } from "../redux/store"

const Homepage=()=>{
    return <Paplicroutes>
        <div>hello world</div>
    </Paplicroutes>
}
export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchcategory())
  })
export default Homepage