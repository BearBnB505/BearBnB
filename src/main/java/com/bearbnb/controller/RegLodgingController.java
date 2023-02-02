package com.bearbnb.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController

public class RegLodgingController {


//    @GetMapping("/lodgingImageUrl")
    @ResponseBody
    @RequestMapping(value = "/lodgingImageUrl", method = RequestMethod.POST)
    public void lodgingImageUrl(@RequestBody List<String> imageUrl) throws Exception{
        System.out.println(imageUrl);
    }

}
