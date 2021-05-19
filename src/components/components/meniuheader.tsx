
import React, { useEffect, useState } from 'react';
import { bindactions } from '../../hooks/typeaction';
import { fetchcategory } from '../../redux/actions/categoryactions';
import { wrapper, NextThunkDispatch } from '../../redux/store';
import { Icategory } from '../../types/categoryreducer';
import { typetuseselector } from './../../hooks/useselector';

const Meniuheader = () => {
    const [categories,setCategories]=useState<Icategory[] | null>(null)
    const {category}=typetuseselector(state=>state)
    useEffect(() => {
        setCategories(category.categories)
    }, []);
    return (
        <div className="meniuheader">
            {
                categories ? categories.map(el=>{
                    return <div>
                        {el.title}
                    </div>
                }) : null
            }
        </div>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchcategory())
    return {
        props:{
            
        }
    }
})

export default Meniuheader;
