function Pet(name){
    this.name = name 
    this.age = 0
    this.hunger = 0 
    this.fitness = 10
}
//A constructor for a pet name. When called with new keyword, a new obj is created which {this} keyword is bound to


Pet.prototype = {
    growUp(){
        this.age +=1;
    }
}









module.exports = Pet;