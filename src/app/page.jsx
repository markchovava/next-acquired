import React from 'react'
import Home from './_components/Home';
import { businessListStatusActiveAction } from '@/actions/BusinessActions';
import { cityListAllAction } from '@/actions/CityActions';
import { categoryListAllAction } from '@/actions/CategoryActions';



export default async function page() {
  const [ businessesData, citiesData, categoriesData ] = await Promise.all([
        businessListStatusActiveAction(),  
        cityListAllAction(), 
        categoryListAllAction(),
      ]);

  
    return (
    <>
      <Home
          dbData={businessesData}
          citiesData={citiesData}
          categoriesData={categoriesData}
      />
    </>
  )
}
