package com.boo;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
       // readIntegers(3);
        findMin(readIntegers(3));
    }

    public static int[] readIntegers(int count){
        Scanner scanner = new Scanner(System.in);
        int[] array = new int[count];
        System.out.println("Please enter " + count + " number/s:");
       // while(scanner.hasNextInt()){
            for (int i = 0; i < array.length; i++){
                array[i] = scanner.nextInt();
          //  }
        }
        scanner.close();
        System.out.println(Arrays.toString(array));
        return array;
    }

    public static int findMin(int[] array){
        //Arrays.sort(array);
        boolean isSorted = true;
        int temp;
        while (isSorted){
            isSorted = false;
            for (int i = 0; i < array.length-1; i++){
                if (array[i] > array[i+1]){
                    temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                    isSorted = true;
                }
            }
        }

        int min = array[0];
        System.out.println(min);
        return min;
    }
}
