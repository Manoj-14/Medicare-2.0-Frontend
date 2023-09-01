import { createAction, props } from "@ngrx/store";
import { Medicine } from "../entities/medicine";

export enum MedicineActions{
    GET_MEDICINE_LIST = '[Medicine] Get Medicine List',
    SET_MEDICINE_LIST = '[Medicine] Set Medicine List',
}

export const getMedicineList = createAction(
    MedicineActions.GET_MEDICINE_LIST
)

export const setMedicineList = createAction(
    MedicineActions.SET_MEDICINE_LIST,
    props<{medicines: ReadonlyArray<Medicine>}>()
)