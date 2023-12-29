package vn.techmaster.demo.model;

import org.springframework.stereotype.Component;



public class Student {
    private int id;
    private String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Student(){
        System.out.println("Student contructor");
    }



}
