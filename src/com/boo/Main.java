package com.boo;

public class Main {

    public static void main(String[] args) {
        Printer printer = new Printer(30,20, true);

        printer.pages(5, 10);

        printer.tonerLevelFilled(50);
        printer.tonerLevelFilled(80);
    }
}
