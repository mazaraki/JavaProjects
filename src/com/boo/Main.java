package com.boo;

class Movie {
    private String name;

    public Movie(String name) {
        this.name = name;
    }

    public String plot(){
        return "No plot here";
    }

    public String getName() {
        return name;
    }
}

class Jaws extends Movie {
    public Jaws(){
        super("Jaws");
    }

    @Override
    public String plot() {
       return "Shark eats lots of people.";
    }
}

class IndependenceDay extends Movie {
    public IndependenceDay(){
        super("Independence Day");
    }

    @Override
    public String plot() {
        return "Aliens....";
    }
}

class KillBill extends Movie {
    public KillBill(){
        super("KillBill");
    }

    @Override
    public String plot() {
        return "Kill Bill gets killed....";
    }
}

class GuardiansOfTheGalaxy extends Movie {

    public GuardiansOfTheGalaxy(){
        super("Guardians Of The Galaxy");
    }

    @Override
    public String plot() {
        return "GuardiansOfTheGalaxy";
    }
}

class Forgetable extends Movie {

    public Forgetable(){
        super("Forgetable");
    }

//    @Override
//    public String plot() {
//        return "GuardiansOfTheGalaxy";
//    }
}

public class Main {

    public static void main(String[] args) {
        for (int i = 1; i < 11; i++){
            Movie movie = randomMovie();
            System.out.println("Movie #" + i + " : "
                    + movie.getName() + "\n" + "Plot : " + movie.plot());
        }
    }

    public static Movie randomMovie(){
        int rand = (int) (Math.random() * 5) + 1;
        System.out.println("Random number generated was : " + rand);
        switch (rand){
            case 1:
                return new Jaws();
               // break;
            case 2:
                return new IndependenceDay();
            case 3:
                return new KillBill();
            case 4:
                return new GuardiansOfTheGalaxy();
            case 5:
                return new Forgetable();
        }

        return null;
    }


}


