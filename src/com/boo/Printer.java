package com.boo;

public class Printer {
    private int tonerLevel;
    private int pagesPrinted;
    private boolean isDuplex;



    public Printer(int tonerLevel,
                   int pagesPrinted,
                   boolean isDuplex) {
        this.tonerLevel = tonerLevel;
        this.pagesPrinted = pagesPrinted;
        this.isDuplex = isDuplex;
    }

    public Printer(int pagesPrinted,
                   boolean isDuplex) {
        this(100, pagesPrinted, isDuplex );
    }

    public void tonerLevelFilled(int num){
        int total = num + getTonerLevel();

        if (total > 99){
            System.out.println("Printer is completely filled");
        } else if (total < 100 && total > 0){
            System.out.println("Printer is filled " + total + "%");
        } else {
            System.out.println("An error occurred.");
        }
    }

    public int pages(int initial, int times){
        if (isDuplex){
            pagesPrinted = (initial * times) / 2;
        } else {
            pagesPrinted = initial * times;
        }
        System.out.println("pages printed : " + pagesPrinted);
        return pagesPrinted;
    }

    public int getTonerLevel() {
        int p = getPagesPrinted();
        tonerLevel -= (p * .01);
        return tonerLevel;
    }

    public int getPagesPrinted() {
        return pagesPrinted;
    }

    public boolean isDuplex() {
        return isDuplex;
    }
}
