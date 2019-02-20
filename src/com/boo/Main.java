package com.boo;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    private static final Scanner scanner = new Scanner(System.in);
    private static int[] array;

    public static void main(String[] args) {

        System.out.println("How many numbers are you entering?");
        int n = scanner.nextInt();
        array = new int[n];
        for (int i = 0; i < n; i++){
            array[i] = scanner.nextInt();
        }
        scanner.nextLine();
        reverse(array);
    }

    public static void reverse(int[] array){
        System.out.println("Array before reverse " + Arrays.toString(array));
        int temp, count = 0;
        for (int i = array.length-1; i > array.length / 2; i--){
            temp = array[i];
            array[i] =  array[count];
            array[count] = temp;
            count++;
        }

        System.out.println("Reversed array : " + Arrays.toString(array));
    }
}
