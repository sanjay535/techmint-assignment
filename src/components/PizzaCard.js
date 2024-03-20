import React from 'react'
import { useDispatch } from 'react-redux';
import { movePizza } from '../utils/pizzaSlice';
import { elapsedMinut, elapsedSecond } from '../utils/helper';

const PizzaCard = ({ id, timeStamp, isPicked, stageTimeStamp }) => {
    const dispatch = useDispatch();
    const minutes=elapsedMinut(timeStamp)
    const seconds=elapsedSecond(timeStamp)
    const stageDelayMin=elapsedMinut(stageTimeStamp);

    const handleMove = () => {
        console.log(('called'))
        dispatch(movePizza({ id }))
    }
    return (
        <div className={`text-center max-w-40 py-2 my-4 px-4 border-2 border-black rounded-lg ${(!isPicked && stageDelayMin>=3)?'bg-red-500 text-white':null}`}>
            <p className='py-1'>Order: {id}</p>
            <p className='py-1'>{`${minutes} min ${seconds} sec`}</p>
            {!isPicked && <button onClick={handleMove} className='bg-slate-400 py-1 px-3 my-2 border-2 rounded-md border-black'>Next</button>}
        </div>
    )
}

export default PizzaCard