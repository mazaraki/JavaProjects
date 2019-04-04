package com.boo;

import java.util.ArrayList;

public class MobilePhone {

    //
    ArrayList<Contacts> contacts;

    public MobilePhone(ArrayList<Contacts> contacts) {
        this.contacts = new ArrayList<>();
    }

    public ArrayList<Contacts> getContacts() {
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



    public boolean store(Contacts contact){
        if(findPosition(contact.getName()) >= 0){
            System.out.println("Contact is already on file");
            return false;
        }

        contacts.add(contact);
        return true;
    }

    private int findPosition(Contacts contact){
        return contacts.indexOf(contact);
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
            if(contact.getName().equals(queryName)){
                System.out.println(contact + " exists");
            } else {
                System.out.println(contact + " is not a contact");
            }
        });

        return queryName;
    }


}