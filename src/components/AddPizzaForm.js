import React, { useRef, useState } from 'react'
import { PIZZA_BASE, PIZZA_SIZE, PIZZA_TYPES } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../utils/pizzaSlice';

const AddPizzaForm = () => {
    const pizzaList=useSelector(store=>store.pizza.pizzaList);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ type: 0, size: 0, base: 0 });
    const [formError, setFormError] = useState(false);
    const [isGreaterThan10,setIsGreaterThan10]=useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: Number(value) }));
        setFormError(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { type, size, base } = formData;
        if(pizzaList.length===10){
            setIsGreaterThan10(true)
            return;
        }
        if (type === 0 || size === 0 || base === 0) {
            setFormError(true)
        } else {
            setFormError(false)
            dispatch(addPizza({
                ...formData
            }))
        }
    };

    return (
        <form onSubmit={handleSubmit} className='m-4 p-4 flex flex-col items-start'>
            <div className='my-8'>
                <label className='mx-4' htmlFor="type">Pizza type</label>
                <select value={formData.type} onChange={handleChange} className='border min-w-56 border-1 border-black ' name="type" id="type">
                    {PIZZA_TYPES.map((type, i) => <option key={i} value={i}>{type}</option>)}
                </select>
            </div>
            <div className='my-8'>
                <label className='mx-4' htmlFor="size">Pizza size</label>
                <select value={formData.size} onChange={handleChange} className='border min-w-56 border-1 border-black' name="size" id="size">
                    {PIZZA_SIZE.map((type, i) => <option key={i} value={i}>{type}</option>)}

                </select>
            </div>
            <div className='my-8'>
                <label className='mx-4' htmlFor="base">Pizza base</label>
                <select value={formData.base} onChange={handleChange} className='border min-w-56 border-1 border-black' name="base" id="base">
                    {PIZZA_BASE.map((type, i) => <option key={i} value={i}>{type}</option>)}
                </select>
            </div>
            {formError && <div className='text-red-500 text-xl mx-4 my-4'>Please select value</div>}
            {isGreaterThan10 && <div className='text-red-500 text-xl mx-4 my-4'>Not taking any order for now</div>}
            <button className='bg-green-500 text-white rounded-md py-2 px-4 mx-4' type='submit'>ADD</button>
        </form>
    )
}

export default AddPizzaForm