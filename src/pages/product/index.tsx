import React from 'react';
import Paplicroutes from '../../components/layouts/paplicroutes';
import { fetchcategory } from '../../redux/actions/categoryactions';
import { NextThunkDispatch, wrapper } from '../../redux/store';

const Index = () => {
    return (
        <Paplicroutes>
        <div>
            hello
        </div>
        </Paplicroutes>
    );
}
export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchcategory())
  })
export default Index;
