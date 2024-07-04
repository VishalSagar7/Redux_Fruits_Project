import React from 'react'
import {increaseApple,decreaseApple} from '../Actions'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'

const Apple = () => {

  const BananaCount = useSelector(store => store.bananaCount.count);
  const appleCount = useSelector(store => store.appleCount.count);
  const pizzaCount = useSelector(store => store.pizzaCount.count);
  const burgerCount = useSelector(store => store.burgerCount.count);

    const dispatch = useDispatch();

    const increaseHandler =()=> {
        dispatch(increaseApple())
    }

    const decreaseHandler =()=> {
        dispatch(decreaseApple());
    }


  return (
    <div className='bg-red-200 h-[300px] w-[25vw]'>
      <h1 className=' text-2xl font-bold'>Apple component</h1>

      <h3 className='text-lg font-bold mt-[10px]'>Number of Bananas 🍌 : {BananaCount} </h3>
      <h3 className='text-lg font-bold'>Number of Apples 🍎 : {appleCount}</h3>
      <h3 className='text-lg font-bold'>Number of Pizzas 🍕: {pizzaCount}</h3>
      <h3 className='text-lg font-bold'>Number of Burgers 🍔: {burgerCount}</h3>

      <button onClick={()=> increaseHandler()} className=' mt-[20px] bg-green-500 h-[40px] px-[10px] active:bg-green-700 font-semibold text-white'>
        Increase apple count + 
      </button>
      <button onClick={()=> decreaseHandler()} className=' h-[40px] bg-red-500 px-[10px] active:bg-red-700 font-semibold text-white'>
        Decrease apple count - 
      </button>

    </div>
  )
}

export default Apple;
