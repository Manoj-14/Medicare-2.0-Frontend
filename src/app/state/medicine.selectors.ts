import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MedicineState } from "./medicine.reducers";

export const selectMedicineState = createFeatureSelector<MedicineState>('medicineState')

export const selectMedicines = () => createSelector(
        selectMedicineState,
        (
            state:MedicineState
        ) => state.medicines
)

export const selectMedicine = (id:Number) => createSelector(
    selectMedicineState,
    (
        state:MedicineState
    ) => state.medicines.find(d => d.id === id)
)