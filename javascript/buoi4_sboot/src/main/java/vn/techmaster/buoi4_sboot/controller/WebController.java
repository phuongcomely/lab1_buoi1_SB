package vn.techmaster.buoi4_sboot.controller;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.el.stream.Stream;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model; // Import the correct Model class
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import vn.techmaster.buoi4_sboot.model.Student;

@Controller
public class WebController {
    @GetMapping("/")
public String getHomepage(Model model, @RequestParam(required = false) String rank) { 
    Student student = new Student(1, "Nguyễn A", "a@gmail.com", "123455", 10); 
    model.addAttribute("student", student);

    List<Student> students;
    List<Student> studentList = List.of(
        new Student(1, "Nguyễn A", "a@gmail.com","01234", 9),
        new Student(1, "Nguyễn b", "b@gmail.com","09874", 7),
        new Student(1, "Nguyễn c", "c@gmail.com","26381", 10),
        new Student(1, "Nguyễn d", "d@gmail.com","14353", 8),
        new Student(1, "Nguyễn e", "e@gmail.com","27490", 5)
    );

    if (rank != null) {
        if (rank.equals("gioi")) {
            students = studentList.stream().filter(s -> s.getScore() > 8).collect(Collectors.toList());
        } else if (rank.equals("kha")) {
            students = studentList.stream().filter(s -> s.getScore() <= 8).collect(Collectors.toList());
        } else {
            // Xử lý các trường hợp khác nếu cần
            students = new ArrayList<>(); // hoặc students = studentList; nếu bạn muốn giữ nguyên danh sách gốc
        }
    } else {
        students = new ArrayList<>(studentList); // Tạo một bản sao của danh sách gốc
    }

    model.addAttribute("studentList", students);
    return "index";
}


    //lấy tham số PathVariable
    @GetMapping("/student/{id}")
    public String getStudentDetailPage(@PathVariable int id, Model model, Collection<Student> studentList){
        Student student = studentList.stream()
        .filter(s -> s.getId() == id)
        .findFirst()
        .orElse(null);
    model.addAttribute("student", student);
    return "student-detail";

    }

    @GetMapping("/blog")
    public String getBlogPage() {
        return "admin/blog";
    }
}