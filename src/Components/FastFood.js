import React from 'react'
import Pizza from './Pizza';
import Burger from './Burger';
import {useSelector} from 'react-redux'


const FastFood = () => {

  const BananaCount = useSelector(store => store.bananaCount.count);
  const appleCount = useSelector(store => store.appleCount.count);
  const pizzaCount = useSelector(store => store.pizzaCount.count);
  const burgerCount = useSelector(store => store.burgerCount.count);


  return (
    <div className='w-1/2 h-[250px] bg-orange-300'>
      <h1 className=' text-2xl font-bold'>Fast food component</h1>

      <h3 className='text-lg font-bold mt-[10px]'>Number of Bananas 🍌 : {BananaCount} </h3>
      <h3 className='text-lg font-bold'>Number of Apples 🍎 : {appleCount}</h3>
      <h3 className='text-lg font-bold'>Number of Pizzas 🍕: {pizzaCount}</h3>
      <h3 className='text-lg font-bold'>Number of Burgers 🍔: {burgerCount}</h3>

      <div className='h-[250px] flex mt-[95px]'>
        <Pizza/>
        <Burger/>
      </div>

    </div>
  )
}

export default FastFood;
