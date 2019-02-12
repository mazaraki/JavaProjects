package com.boo;

import java.util.Scanner;

public class Main {

    public static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        int[] a = getIntegers(5);
        printArray(a);
        sortIntegers(a);
        printArray(a);
    }

    public static int[] getIntegers(int number){

        System.out.println("Enter " + number + " numbers.\r");
        int[] myArray = new int[number];
        for (int i = 0; i < number; i++){
            myArray[i] = scanner.nextInt();
        }
        return myArray;
    }

    public static void printArray(int[] array){
        for (int i = 0; i < array.length; i++){
            System.out.println("The number at position " + i
                    + " is " + array[i]);
        }
    }

    public static int[] sortIntegers(int[] array){
        int temp;
        for (int i = 0; i < array.length-1; i++) {
            for (int k = i; k < array.length; k++) {
                if (array[i] < array[k]) {
                    temp = array[k];
                    array[k] = array[i];
                    array[i] = temp;
                }
            }
        }
        return array;
    }
}
