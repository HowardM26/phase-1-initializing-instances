// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = "eggs";
        this.drink = "juice";
    }
}

class Lunch{
    constructor(salad, soup, drink){
        this.salad =  "side salad";
        this.soup = "broccoli cheddar soup";
        this.drink =  "iced tea";
    }
}

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad =  "balsamic salad";
        this.soup = "consomme";
        this.entree = "filet mignon"; 
        this.#dessert = "cheesecake";
    }

}

