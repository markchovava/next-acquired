import React from 'react'
import Home from './_components/Home';
import { businessListAction } from '@/actions/BusinessActions';
import { cityListAllAction } from '@/actions/CityActions';
import { categoryListAllAction } from '@/actions/CategoryActions';



export default async function page() {
  const [ businessesData, citiesData, categoriesData ] = await Promise.all([
        businessListAction(),  
        cityListAllAction(), 
        categoryListAllAction(),
  ]);
  
  
    return (
    <>
    <Home
        dbData={businessesData}
        provincesData={provincesData}
        citiesData={citiesData}
        categoriesData={categoriesData}
    />
    </>
  )
}
