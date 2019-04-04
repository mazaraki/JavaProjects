package com.boo;

public class Contacts {
    private String name;
    private int phoneNumber;

    public Contacts(String name, int phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

//    public void setName(String name){
//        this.name = name;
//    }
//
//    public void setPhoneNumber(int phoneNumber) {
//        this.phoneNumber = phoneNumber;
//    }

    public String getName() {
        return name;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }
    //
    public static Contacts createContact(String name, int phoneNumber){
        return new Contacts(name, phoneNumber);
    }
            
}
