import { createReducer, on } from "@ngrx/store";
import { Medicine } from "../entities/medicine";
import { setMedicineList } from "./medicine.actions";

export interface MedicineState{
    medicines:ReadonlyArray<Medicine>;
}

export const initialState:MedicineState ={
    medicines:[]
}

export const medicineReducer = createReducer(
    initialState,
    on(setMedicineList,(state,{medicines}) => {return{...state,medicines}}),
)