package com.rayl1x.projecthub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/home.html")
    public String home(){
        return "home";
    }

    @GetMapping("/projects.html")
    public String projects() {
        return "projects";
    }

    @GetMapping("/aboutme.html")
    public String aboutme() {
        return "aboutme";
    }

    @GetMapping("/media.html")
    public String media() {
        return "media";
    }

    @GetMapping("news.html")
    public String news() {
        return "news";
    }

    @GetMapping("socialmedia.html")
    public String socialmedia() {
        return "socialmedia";
    }

    @GetMapping("contact.html")
    public String contact() {
        return "contact";
    }

    @GetMapping("support.html")
    public String support() {
        return "support";
    }

}
