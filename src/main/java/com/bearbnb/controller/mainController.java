package com.bearbnb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class mainController {

    @RequestMapping("/")
    public String index() throws Exception {
        return "Hello World";
    }

//    @RequestMapping("test")
//    public List<String> test() throws Exception {
//        List<String> test = new ArrayList<>();
//        test.add("테스트");
//        test.add("스프링 내부 리액트 연동");
//        return test;
//    }

    @GetMapping("hello")
    public List<String> hello() {
        return Arrays.asList("안녕하세요", "Hello");
    }

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

}
