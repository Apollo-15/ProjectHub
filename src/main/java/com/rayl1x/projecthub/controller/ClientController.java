package com.rayl1x.projecthub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientController {
    @GetMapping("/")
    public String index(){
        return "index";
    }
}
