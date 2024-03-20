import { createSlice } from "@reduxjs/toolkit";
import { PIZZA_BASE, PIZZA_SIZE, PIZZA_STAGED, PIZZA_TYPES } from "./constant";

const pizzaSlice=createSlice({
    name:'pizza',
    initialState:{
        pizzaList:[],
        nextOrderId:1
    },
    reducers:{
        addPizza:(state, action)=>{
            const {type,size,base}=action.payload;
            const pizzaDetails={
                pizzaType:PIZZA_TYPES[type],
                pizzaSize:PIZZA_SIZE[size],
                pizzaBase:PIZZA_BASE[base],
                stage:0,
                timeStamp:Date.now(),
                stagesTimeStamp:{
                    0:Date.now(),
                    1:Date.now(),
                    2:Date.now(),
                    3:Date.now()
                },
                id:state.nextOrderId
            }
            state.pizzaList.push(pizzaDetails)
            state.nextOrderId++;
            // console.log(pizzaDetails)
        },
        movePizza:(state, action)=>{
            state.pizzaList.forEach(pizza => {
                if(action.payload.id===pizza.id){
                    pizza.stage++;
                    pizza.stagesTimeStamp[pizza.stage]=Date.now();
                }
            });
        },
        cancelPizza:(state, action)=>{
            state.pizzaList=state.pizzaList.filter(pizza=>pizza.id!==action.payload.id)
        }
    }
})

export const {addPizza,cancelPizza,movePizza}=pizzaSlice.actions;
export default pizzaSlice.reducer;

