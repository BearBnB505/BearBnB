package com.bearbnb.controller;

import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.MemberRequestDto;
import com.bearbnb.dto.PhotoDto;
import com.bearbnb.dto.TokenDto;
import org.json.JSONArray;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController

public class RegLodgingController {


//    @GetMapping("/lodgingImageUrl")
//    @ResponseBody
//    @RequestMapping(value = "/lodgingImageUrl", method = RequestMethod.POST)
//    public void lodgingImageUrl(@RequestBody List<String> imageUrl) throws Exception{
////        System.out.println(imageUrl);
//
//
//    }

//    @ResponseBody
//    @RequestMapping("/lodgingImageUrl")
//    public lodgingImageUrl<PhotoDto> login(@RequestBody MemberRequestDto requestDto) {
//        return ResponseEntity.ok(lodgingImageUrl.login(requestDto));
//    }
//



    @ResponseBody
    @RequestMapping(value = "/lodgingCategorySelectInsert", method = RequestMethod.POST)
    public void lodgingCategory(@RequestBody List<String> categoryArray) throws Exception{
        System.out.println(categoryArray); //확인
    }

//    @RequestMapping(path = "/lodgingCategorySelectInsert")
//    @ResponseBody
//    public Map<String, Object> categorySelect(@RequestParam String data){
//
//        Map<String, Object> result = new HashMap<>();
//        try {
//
//            List<Map<String,Object>> info = new ArrayList<Map<String,Object>>();
//            info = JSONArray.fromObject(paramData);
//
//            for (Map<String, Object> memberInfo : info) {
//                System.out.println(memberInfo.get("memberNo") + " : " + memberInfo.get("name"));
//            }
//            result.put("result", true);
//        } catch (Exception e) {
//            result.put("result", false);
//        }
//        return result;
//
//    }

//    @PostMapping(value = "/test", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public String test(
//            HttpServletRequest request,
//            @Parameter(description = "test", required = true) @RequestBody ComfortsDto test
//    ) throws Exception {
//
//        test.getItems().forEach(d -> {
//            logger.info("Name : " + d.getName());
//            logger.info("Age : " + d.getAge());
//        });
//        logger.info(test.getItems().size() + "");
//
//        return "bye";
//    }

}
