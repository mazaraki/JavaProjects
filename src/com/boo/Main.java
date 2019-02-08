package com.boo;

class Car {
    private String name;
    private boolean engine;
    private int numberOfCylinders;
    private int wheels;
    private int speed;

    public Car(String name,
               int numberOfCylinders, int speed) {
        this.name = name;
        this.engine = true;
        this.numberOfCylinders = numberOfCylinders;
        this.wheels = 4;
        this.speed = speed;
    }

    public void startEngine(){
        if (!engine){
            System.out.println("Starting the engine");
            engine = true;
        }
    }

    public int accelerate(int kms){
        if (engine){
           speed = getSpeed() + kms;
        }
        System.out.println("Your speed now is : " + speed);
        return speed;
    }

    public int brake(int kms){
        speed = getSpeed() - kms;
        if (speed > 0){
            System.out.println("Brake");
        } else {
            engine = false;
            System.out.println("the car has stopped");
        }
        return speed;
    }

    //solution
    public String startEngineSolution(){
        return " Car -> StartEngineSolution()";
    }

    public String accelerateSolution(){
        return " Car -> accelerateSolution()";
    }

    public String breakSolution(){
        return " Car -> breakSolution()";
    }

    public String getName() {
        return name;
    }

    public int getNumberOfCylinders() {
        return numberOfCylinders;
    }

    public int getSpeed() {
        return speed;
    }
}

class Lada extends Car{
    public Lada(String name, int numberOfCylinders, int speed) {
        super("Lada", 4, 20);
    }

    @Override
    public void startEngine() {
        super.startEngine();
    }

    @Override
    public int brake(int kms) {
        return super.brake(kms);
    }
}

class Pegeauot extends Car{
    public Pegeauot(String name, int numberOfCylinders, int speed) {
        super("Pegeauot", 4, 40);
    }

    @Override
    public void startEngine() {
        super.startEngine();
    }

    @Override
    public int brake(int kms) {
        return super.brake(kms);
    }
}

class Renault extends Car{
    public Renault(String name, int numberOfCylinders, int speed) {
        super("Renault", 4, 35);
    }

    @Override
    public void startEngine() {
        super.startEngine();
    }

    @Override
    public int brake(int kms) {
        return super.brake(kms);
    }
}

//Solution
class Mitsubishi extends Car {
    public Mitsubishi(String name,
                      int numberOfCylinders,
                      int speed) {
        super(name, numberOfCylinders, speed);
    }

    @Override
    public String startEngineSolution() {
        return "Mitsubishi -> StartEngineSolution()";
    }

    @Override
    public String accelerateSolution() {
        return "Mitsubishi -> accelerateSolution()";
    }

    @Override
    public String breakSolution() {
        return "Mitsubishi -> breakSolution()";
    }
}

//Solution
class Holden extends Car {
    public Holden(String name,
                  int numberOfCylinders,
                  int speed) {
        super(name, numberOfCylinders, speed);
    }

    @Override
    public String startEngineSolution() {
        return "Holden -> StartEngineSolution()";
    }

    @Override
    public String accelerateSolution() {
        return "Holden -> accelerateSolution()";
    }

    @Override
    public String breakSolution() {
        return getClass().getSimpleName() + " -> breakSolution()";
    }
}

//Solution
class Ford extends Car {
    public Ford(String name,
                int numberOfCylinders,
                int speed) {
        super(name, numberOfCylinders, speed);
    }

    @Override
    public String startEngineSolution() {
        return getClass().getSimpleName() + " -> StartEngineSolution()";
    }

    @Override
    public String accelerateSolution() {
        return getClass().getSimpleName() + " -> accelerateSolution()";
    }

    @Override
    public String breakSolution() {
        return getClass().getSimpleName() + " -> breakSolution()";
    }
}


public class Main {

    public static void main(String[] args) {
        Car car = new Car("Base car", 8, 30);
        car.startEngine();
        System.out.println(car.startEngineSolution());
        car.accelerate(30);
        System.out.println(car.accelerateSolution());
        car.brake(60);
        System.out.println(car.breakSolution());

        System.out.println("****");
        Mitsubishi mitsubishi = new Mitsubishi("Outlander VRX 4WD", 6, 40);
        mitsubishi.startEngine();
        System.out.println(mitsubishi.startEngineSolution());
        mitsubishi.accelerate(30);
        System.out.println(mitsubishi.accelerateSolution());
        mitsubishi.brake(60);
        System.out.println(mitsubishi.breakSolution());

        System.out.println("****");
        Ford ford = new Ford("Ford Falcon", 6, 40);
        ford.startEngine();
        System.out.println(ford.startEngineSolution());
        ford.accelerate(30);
        System.out.println(ford.accelerateSolution());
        ford.brake(60);
        System.out.println(ford.breakSolution());

        System.out.println("****");
        Holden holden = new Holden("Holden Commodore", 6, 40);
        holden.startEngine();
        System.out.println(holden.startEngineSolution());
        holden.accelerate(30);
        System.out.println(holden.accelerateSolution());
        holden.brake(60);
        System.out.println(holden.breakSolution());
    }

}
