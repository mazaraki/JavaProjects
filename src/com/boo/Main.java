package com.boo;

public class Main {

    public static void main(String[] args) {
        Printer printer = new Printer(30,20, true);

        printer.pages(5, 10);

        printer.tonerLevelFilled(50);
        printer.tonerLevelFilled(80);
        System.out.println("****");
        PrinterSolution prS = new PrinterSolution(50, false);
        System.out.println("initial page count : " + prS.getPagesPrinted());
        int pagesPrinted = prS.printPages(4);
        System.out.println("pages printed : " + pagesPrinted
                + " new total print count for printer : "
                + prS.getPagesPrinted());
        prS.printPages(11);
        System.out.println(prS.getPagesPrinted());
    }
}
