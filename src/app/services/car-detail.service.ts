import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ListResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:5001/api/";

  constructor(private httpClient:HttpClient) { }

  getCarByImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }

   getImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }
}
