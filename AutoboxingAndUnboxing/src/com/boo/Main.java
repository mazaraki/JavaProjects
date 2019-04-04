package com.boo;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        String[] strArray = new String[10];
        int[] intArray = new int[10];

        ArrayList<String> stringArrayList = new ArrayList<String>();
        stringArrayList.add("Boo");

        ArrayList<IntClass> intArrayList =
                new ArrayList<IntClass>();
        intArrayList.add(new IntClass(54));


        Integer integer = 34;//new Integer(34);
        Double doubleVal = new Double(12.25d);


        ArrayList<Integer> integerArrayList = new ArrayList<>();
        for (int i = 0; i <= 10; i++){
            integerArrayList.add(Integer.valueOf(i));
        }
        for (int i = 0; i <= 10; i++){
            System.out.println(i + " -> " + integerArrayList.get(i).intValue());
        }

        Integer myIntValue = 33; //same as...
        Integer myIntValue2 = Integer.valueOf(33);
        int myInt = myIntValue; //same as...
        int myInt2 = myIntValue2.intValue();

        ArrayList<Double> myDoubleValues = new ArrayList<>();
        for (double dbl =0.0; dbl <= 10.0d; dbl+=.5d){
            myDoubleValues.add(Double.valueOf(dbl));
            //myDoubleValues.add(dbl);
        }
        System.out.println();
        for (int i = 0; i < myDoubleValues.size(); i++){
            double value = myDoubleValues.get(i).doubleValue();
            //double value = myDoubleValues.get(i);
            System.out.println(i + " -> " + value);
        }
    }
}

class IntClass{
    private int myValue;

    public IntClass(int myValue) {
        this.myValue = myValue;
    }

    public void setMyValue(int myValue) {
        this.myValue = myValue;
    }

    public int getMyValue() {
        return myValue;
    }
}
