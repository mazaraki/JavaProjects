package com.boo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    private static Scanner scanner = new Scanner(System.in);
    private static GroceryList groceryList = new GroceryList();

    public static void main(String[] args) {
        boolean quit = false;
        printInstructions();
        while (!quit){
            System.out.println("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch(choice){
                case 0:
                    printInstructions();
                    break;
                case 1:
                    groceryList.printGroceryList();
                    break;
                case 2:
                    addItem();
                    break;
                case 3:
                    modifyItem();
                    break;
                case 4:
                    removeItem();
                    break;
                case 5:
                    searchForItem();
                    break;
                case 6:
                    processArrayList();
                    break;
                case 7:
                    quit = true;
                    break;
            }
        }
    }

    private static void printInstructions() {
        System.out.println("\nPress ");
        System.out.println("\t 0 - To print choice options.");
        System.out.println("\t 1 - To print the list of grocery items.");
        System.out.println("\t 2 - To add an item to the list.");
        System.out.println("\t 3 - To modify an item in the list.");
        System.out.println("\t 4 - To remove an item in the list.");
        System.out.println("\t 5 - To search for an item in the list.");
        System.out.println("\t 6 - To process the list.");
        System.out.println("\t 7 - To quit the application.");
    }

    public static void  addItem(){
        System.out.print("Please enter the grocery item: ");
        groceryList.addGroceryItem(scanner.nextLine());
    }

    public static void modifyItem(){
        System.out.print("Current item name: ");
        //int itemNumber = scanner.nextInt();0
        String oldItem = scanner.nextLine();
        System.out.print("Enter replacement item: ");
        String newItem = scanner.nextLine();
        //groceryList.modifyGroceryItem(itemNumber-1, newItem);
        groceryList.modifyGroceryItem(oldItem, newItem);
    }

    public static void removeItem(){
        System.out.print("Enter item name to be removed: ");
        //int itemNumber = scanner.nextInt();
        String itemToRemove = scanner.nextLine();
        groceryList.removeGroceryItem(itemToRemove);
    }

    public static void searchForItem(){
        System.out.print("Item to search for: ");
        String searchItem  = scanner.nextLine();
        if (groceryList.onFile(searchItem)){
            System.out.println("Found " + searchItem + " in grocery list.");
        } else {
            System.out.println(searchItem + " is not in the shopping list.");
        }
    }

    private static void processArrayList() {
        ArrayList<String> newArray = new ArrayList<>();
        newArray.addAll(groceryList.getGroceryList());
        newArray.forEach(item -> System.out.print(item +" "));

        ArrayList<String> nextArray = new ArrayList<>(groceryList.getGroceryList());
        nextArray.forEach(System.out::println);
        System.out.println(Arrays.toString(nextArray.toArray()));

        String[] stringArray = new String[groceryList.getGroceryList().size()];
        stringArray = groceryList.getGroceryList().toArray(stringArray);
        for (String s : stringArray)
            System.out.print(s + " ");
        System.out.println();
    }
}

