package com.boo;


import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.IntStream;

public class Main {

    private static Scanner scanner = new Scanner(System.in);
    private static MobilePhone mp = new MobilePhone();

    public static void main(String[] args) {
        printInstructions();
        boolean running = true;
        while (running) {
            int enter = scanner.nextInt();
            scanner.nextLine();

            switch (enter) {
                case 1:
                    running = false;
                    break;
                case 2:
                    mp.printContactsList();
                    break;
                case 3:
                    searchContact();
                    break;
                case 4:
                    addContact();
                    break;
                case 5:
                    updateContact();
                    break;
                case 6:
                    removeContact();
                    break;
                case 7:
                    printInstructions();
                    break;
            }
        }
    }

    public static void printInstructions(){
        System.out.println("Choose one of the following: \n" +
                "1. Quit the program.\n" +
                "2. Print your contacts.\n" +
                "3. Search a contact.\n" +
                "4. Add new contact.\n" +
                "5. Update existing contact.\n" +
                "6. Remove contact.\n" +
                "7. Read the instructions.");
    }

    public static void addContact(){
        System.out.println("Enter your contact's name : ");
        mp.store(scanner.nextLine());
    }

    public static void updateContact(){
        System.out.println("Search for a contact : ");
        String contactOld = mp.queryName(scanner.nextLine());
        System.out.println("Enter the new name of the contact :");
        String contactNew = scanner.nextLine();

        mp.modifyName(contactOld, contactNew);
    }

    public static void  removeContact(){
        System.out.println("Enter the contact you want to delete : ");
        String contactDel = scanner.nextLine();
        mp.removeName(contactDel);
    }

    public static void searchContact(){
        System.out.println("Enter a contact to be searched");
        String qContact = scanner.nextLine();
        mp.queryName(qContact);
    }
}
