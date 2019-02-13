package com.boo;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        int myIntValue = 10;
        int anotherIntValue = myIntValue;

        System.out.println("my int value : "
                + myIntValue + " another : " + anotherIntValue);

        anotherIntValue++;
        System.out.println("my int value : "
                + myIntValue + " another : " + anotherIntValue);

        int[] myIntArray = new int[5];
        int[] anotherIntArray = myIntArray;

        System.out.println("my int array : " + Arrays.toString(myIntArray)
            + "\n" + "my another array : " + Arrays.toString(anotherIntArray)
            + "\n******");

        anotherIntArray[0] = 1;
        myIntArray[0] = 24;
        System.out.println("my int array : " + Arrays.toString(myIntArray)
                + "\n" + "my another array : " + Arrays.toString(anotherIntArray)
                + "\n******");

        anotherIntArray = new int[]{4, 5, 6, 7, 8};
        modifyArray(myIntArray);
        System.out.println("my int array : " + Arrays.toString(myIntArray)
                + "\n" + "my another array : " + Arrays.toString(anotherIntArray)
                + "\n******");
    }

    private static void modifyArray(int[] arr){

        arr[0] = 5;
        arr = new int[] {1,2,3,4,5};
    }
}
