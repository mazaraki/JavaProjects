package com.boo;

import java.util.Scanner;

public class Main {

    private static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {

        int[] myInts = getIntegers(5);

        for (int i = 0; i < myInts.length; i++){
            System.out.println("element " + i
                    + ", typed value was " + myInts[i]);
        }
        System.out.println("The average is " + getAverage(myInts));

        // int myVar = 50;
//        int[] myIntArr = new int[10];
//        myIntArr[9] = 8;
//        myIntArr[4] = 24;
//        myIntArr[5] = 50;
//        int[] myIntArr2 = {1, 2, 3, 5, 6};
//        int[] myIntArr3 = new int[10];
//        for (int i = 0; i < 10; i++) {
//            myIntArr3[i] = i * 10;
//        }
////        for (int i = 0; i < myIntArr3.length; i++){
////            System.out.println("Element " + i
////                    + ", value is " + myIntArr3[i]);
////        }
//        printArray(myIntArr3);
//        double[] myDoubleArr = new double[10];
//        System.out.println(myIntArr[5]);
//        System.out.println(myIntArr2[4]);
//        myIntArr[5] = 20;
//        System.out.println(myIntArr[5]);
//    }
//
//    public static void printArray(int[] array){
//        for (int i = 0; i < array.length; i++){
//            System.out.println("Element " + i
//                    + ", value is " + array[i]);
//        }
//    }
    }

    private static int[] getIntegers(int number) {
        System.out.println("Enter " + number + " integer values.\r");
        int[] values = new int[number];
        for (int i = 0; i < values.length; i++){
            values[i] = scanner.nextInt();
        }
        return values;
    }

    public static double getAverage(int[] array){
        double avg = 0;
        for(int i = 0; i < array.length; i++){
            avg += array[i];
        }
        avg /= array.length;
        return avg;
    }
}
