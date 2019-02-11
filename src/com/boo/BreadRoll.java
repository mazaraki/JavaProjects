package com.boo;

import java.util.*;

public class BreadRoll {
    private String breadType;

    public BreadRoll(String breadType) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose between : 1. Basic, 2. Whole grain, 3. White");
        String st = sc.next();
        st.toLowerCase();
        switch (st){
            case "basic":
                this.breadType = "basic";
                System.out.println("basic");
                break;
            case "whole grain":
                this.breadType = "whole grain";
                System.out.println("whole grain");
                break;
            case "white":
                this.breadType = "white";
                System.out.println("white");
                break;
            default:
                this.breadType = "basic";
                System.out.println("basic");
        }
        sc.nextLine();
        sc.close();
    }

    public String getBreadType() {
        return breadType;
    }
}

