import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  currentImage:CarImage;
  carImages:CarImage[]=[];
  cars:Car[]=[];

  constructor(private cardetailservice:CarDetailService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarByImages(params["carId"])
        this.getCarsByCarId(params["carId"])
      }
    })
  }

  getCarByImages(carId:number){
    this.cardetailservice.getCarByImages(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarsByCarId(carId:number){
     this.carService.getCarsByCarId(carId).subscribe(response=>{
       this.cars = response.data
     })
   }

}
