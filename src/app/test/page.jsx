import { businessListAction } from '@/actions/BusinessActions';
import { categoryListAllAction } from '@/actions/CategoryActions';
import { cityListAllAction } from '@/actions/CityActions';
import React from 'react'


export default async function page() {
    const [ businessesData, citiesData, categoriesData ] = await Promise.all([
        businessListAction(),  
        cityListAllAction(), 
        categoryListAllAction(),
    ]);

    console.log('businessesData', businessesData)
    console.log('citiesData', citiesData)
    console.log('categoriesData', categoriesData)

  return (
    <>page</>
  )
}
