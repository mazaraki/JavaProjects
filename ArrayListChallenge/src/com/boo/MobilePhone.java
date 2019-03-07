package com.boo;

import java.util.ArrayList;

public class MobilePhone {

    ArrayList<String> contacts = new ArrayList<String>();

    public ArrayList<String> getContacts() {
        return contacts;
    }

    public void printContactsList(){
       // contacts.forEach(contact -> System.out::println(contacts));
//        for (String contact : contacts){
//            System.out.println("Contact name : " + contact);
//        }
        System.out.println("You have " + contacts.size() + " contact(s).");
        contacts.forEach(System.out::println);
    }

    public void store(String name){
        contacts.add(name);
        System.out.println(name + " was added");
    }

    private int findPosition(String searchName){
        return contacts.indexOf(searchName);
    }

    public void modifyName(String currentName, String newName){
        int position = findPosition(currentName);
        if (position >= 0)
            contacts.set(position, newName);
    }

    public void removeName(String nameToRemove){
        int position = findPosition(nameToRemove);
        if (position >= 0){
            contacts.remove(position);
        }
    }

    public String queryName(String queryName){
        contacts.forEach(contact -> {
            if(contact.equals(queryName)){
                System.out.println(contact + " exists");
            } else {
                System.out.println(contact + " is not a contact");
            }
        });

        return queryName;
    }


}