package com.slove.solar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
    @RequestMapping("/")
    public String hello() {
//        return "nurseAdd";
//        return "index";
//        return "userAdd";
//        return "userList";
//        return "nurseAdd_behind";
//        return "nurseList";
//        return "nurseAdd";
//        return "serviceProject";
//        return "myself";
        return "atHome";
    }
}
