import React from 'react'
import PizzaCard from './PizzaCard'
import { useSelector } from 'react-redux'
import { PIZZA_STAGED } from '../utils/constant';


const Dashboard = () => {
  const pizzaList = useSelector(store => store.pizza.pizzaList);
  console.log('pizzaList', pizzaList)
  const placedOrders = pizzaList.filter(pizza => pizza.stage === 0);
  const makingOrders = pizzaList.filter(pizza => pizza.stage === 1);
  const readyOrders = pizzaList.filter(pizza => pizza.stage === 2);
  const pickedOrders = pizzaList.filter(pizza => pizza.stage === 3);

  return (
    <div className='grid grid-cols-4'>
      <div className='border-2 border-black flex flex-col items-center'>
        <h2 className='py-8'>Order Placed</h2>
        <div>
          {placedOrders.map(order => <PizzaCard key={order.id} isPicked={false} id={order.id} timeStamp={order.timeStamp} stageTimeStamp={order.stagesTimeStamp[order.stage]} />)}
        </div>
      </div>

      <div className='border-2 border-black flex flex-col items-center'>
        <h2 className='py-8'>Order Making</h2>
        <div>
          {makingOrders.map(order => <PizzaCard key={order.id} isPicked={false} id={order.id} timeStamp={order.timeStamp}  stageTimeStamp={order.stagesTimeStamp[order.stage]} />)}
        </div>
      </div>

      <div className='border-2 border-black flex flex-col items-center'>
        <h2 className='py-8'>Order Ready</h2>
        <div>
          {readyOrders.map(order => <PizzaCard key={order.id} isPicked={false} id={order.id} timeStamp={order.timeStamp} stageTimeStamp={order.stagesTimeStamp[order.stage]} />)}
        </div>
      </div>

      <div className='border-2 border-black flex flex-col items-center'>
        <h2 className='py-8'>Order Picked</h2>
        <div>
          {pickedOrders.map(order => <PizzaCard key={order.id} isPicked={true} id={order.id} timeStamp={order.timeStamp} stageTimeStamp={order.stagesTimeStamp[order.stage]} />)}
        </div>
      </div>

    </div>
  )
}

export default Dashboard