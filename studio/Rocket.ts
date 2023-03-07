import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    name:string;
    totalCapacityKg:number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[]


constructor(name:string,totalCapacityKg:number){
    this.name=name;
    this.totalCapacityKg=totalCapacityKg;


}
 sumMass(items: Payload[] ): number {
    let sum:number=0;
    
    for(let i:number=0;i<items.length;i++){
sum+=items[i].massKg;
    }
    return sum;
}
currentMassKg(): number{
   let sumAstronauts:number= this.sumMass(this.astronauts)
   let sumCargoItems:number =this.sumMass(this.cargoItems);
  let  sum:number =sumAstronauts+sumCargoItems
    return sum;
}
canAdd(item: Payload): boolean{

    if( this.currentMassKg() + item.massKg <= this.totalCapacityKg)
    return true;
    else return false;
}
addCargo(cargo: Cargo): boolean{

//let check :boolean= ;
if (this.canAdd(cargo)){
    this.cargoItems.push(cargo);
    return true;
}
else return false;

}
addAstronaut(astronaut: Astronaut): boolean{
    let check :boolean=this.canAdd(astronaut);
    if(check){
        this.astronauts.push(astronaut);
        return true;
    }
    else 
    return false;
}
}
