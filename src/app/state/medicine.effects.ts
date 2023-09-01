import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MedicineService } from "../services/medicine.service";
import { Router } from "@angular/router";
import { MedicineActions } from "./medicine.actions";
import { EMPTY, catchError, map, mergeMap } from "rxjs";

@Injectable()
export class MedicineEffects{
    constructor(private actions$:Actions,private medicineService:MedicineService,private router:Router){}

    getMedicines$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(MedicineActions.GET_MEDICINE_LIST),
            mergeMap(()=>this.medicineService.getMedicines()
            .pipe(
                map(medicines => ({
                    type:MedicineActions.SET_MEDICINE_LIST,medicines
                })),
                catchError(()=>EMPTY)
            ))
        )
    },{dispatch:true});
}