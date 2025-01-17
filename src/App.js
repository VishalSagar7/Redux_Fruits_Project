
import './App.css';
import FastFood from './Components/FastFood';
import Fruits from './Components/Fruits';
import {useSelector} from 'react-redux'


function App() {

  const BananaCount = useSelector(store => store.bananaCount.count);
  const appleCount = useSelector(store => store.appleCount.count);
  const pizzaCount = useSelector(store => store.pizzaCount.count);
  const burgerCount = useSelector(store => store.burgerCount.count);

  return (
    <div className=" w-full border h-[200px] text-center bg-gray-300">
      <h1 className=' text-2xl font-bold'>App component</h1>
      <h3 className='text-lg font-bold mt-[10px]'>Number of Bananas 🍌 : {BananaCount} </h3>
      <h3 className='text-lg font-bold'>Number of Apples 🍎 : {appleCount}</h3>
      <h3 className='text-lg font-bold'>Number of Pizzas 🍕: {pizzaCount}</h3>
      <h3 className='text-lg font-bold'>Number of Burgers 🍔: {burgerCount}</h3>

      <div className=' w-full flex mt-[45px]'>
        <Fruits/>
        <FastFood/>
      </div>

    </div>
  );
}

export default App;
