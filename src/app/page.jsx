import React from 'react'
import Home from './_components/Home';
import { businessListAction } from '@/actions/BusinessActions';
import { cityListAllAction } from '@/actions/CityActions';
import { provinceListAllAction } from '@/actions/ProvinceActions';
import { categoryListAllAction } from '@/actions/CategoryActions';



export default async function page() {
  const [ businessesData, provincesData, citiesData, categoriesData ] = await Promise.all([
        businessListAction(),  
        provinceListAllAction(), 
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
