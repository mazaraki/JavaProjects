package com.boo;

import java.util.Scanner;

public class Meat {
    private String meatType;

    public Meat(String meatType) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose between : 1. Ham, 2. Beef, 3. Chicken");
        String st = sc.next();
        st.toLowerCase();

        switch (st){
            case "ham":
                this.meatType = "ham";
                System.out.println("Ham");
                break;
            case "beef":
                this.meatType = "beef";
                System.out.println("Beef");
                break;
            case "chicken":
                this.meatType = "chicken";
                System.out.println("Chicken");
                break;
            default:
                this.meatType = "ham";
                System.out.println("Ham");
        }
        sc.nextLine();
        sc.close();
    }

    public String getMeatType() {
        return meatType;
    }
}
