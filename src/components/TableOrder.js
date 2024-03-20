import React from 'react'
import { PIZZA_STAGED } from '../utils/constant';
import { elapsedTime } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { cancelPizza } from '../utils/pizzaSlice';

const TableOrder = () => {
    const pizzaList = useSelector(store => store.pizza.pizzaList);
    const dispatch=useDispatch()
    const readyOrders=pizzaList.filter(pizza=>pizza.stage===3);
    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Order ID</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Stage</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Total time spent</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {pizzaList.map(pizza =>
                                    <tr key={pizza.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{pizza.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{PIZZA_STAGED[pizza.stage]}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{elapsedTime(pizza.timeStamp)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            {(pizza.stage < 2) ? <button onClick={()=>dispatch(cancelPizza({id:pizza.id}))} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">CANCEL</button> : null}
                                        </td>
                                    </tr>
                                )}
                                <tr className='border-2 border-black'> 
                                <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-bold dark:text-gray-200">Total Deliverd Order</td>
                                <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{readyOrders.length}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableOrder