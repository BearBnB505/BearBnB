package com.bearbnb.service;

import com.bearbnb.dto.CategoryDto;
import com.bearbnb.dto.ComfortsDto;
import com.bearbnb.dto.LodgingDto;
import com.bearbnb.dto.PhotoDto;
import com.bearbnb.mapper.RegLodgingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RegLodgingServiceImpl implements RegLodgingService {

    @Autowired
    RegLodgingMapper regLodgingMapper;

    @Override
    public LodgingDto insertLodgingTable(LodgingDto lodging) throws Exception{
        regLodgingMapper.insertLodgingTable(lodging);
        return null;
    }
    
////  선생님께 도움받을 위치(category 테이블 삽입)
    @Override
    public void insertCategory(List<ComfortsDto> dataList) throws Exception {
        System.out.println(dataList);

        regLodgingMapper.insertCategory(dataList);
        System.out.println("입력 끝");
    }

    
//    @Override
//    public void insertCategory(String data) throws Exception{
//        List<PhotoDto> photos = new ArrayList<>();
//    }
//    private List<PhotoDto> getPhotoDtoList () throws Exception{
//        List<PhotoDto> photoDtoList = new ArrayList<>();
//        for(int i=0; ;i++){
//            PhotoDto photoDto = new PhotoDto();
//            photoDto.setLodgingNum();
//        }
//    }





//
//    @Override
//    public List<String> lodgingImageUrl() throws Exception{
//        List<String> list = null;
//        list = regLodgingMapper.lodgingImageUrl();
//        return list;
//    }



//    @Override
//    public String insertLodgingTable(Object obj) throws Exception{
//        LodgingDto lodging = new LodgingDto();
//        List<PhotoDto> photos = new ArrayList<>();
//        List<CategoryDto> categories = new ArrayList<>();
//
////        lodging.setLodgingNum;
////        const lodgingNum = obj["lodgingNum"][""]
////        return list;
//    }

//    @Override
//    public LodgingDto insertLodgingTable(LodgingDto lodging) throws Exception{
//        regLodgingMapper.insertLodgingTable(lodging);
//        return lodging;
//    }


//    선생님코드
//    @Override
//    public void insertdddddd(Object obj) {
//        LodgingDto lodging = new LodgingDto();
//        List<PhotoDto> photos = new ArrayList<>();
//        List<CategoryDto> categories = new ArrayList<>();
//
//        lodging.setAddr(obj.addr);
//        obj.photo
//
//
//        mapper.insertPhoto();
//
//    }
//
//    private List<PhotoDto> getPhotoList(Object obj) {
//        List<PhotoDto> photoDtoList = new ArrayList<>();
//
//        for (;;) {
//            PhotoDto photoDto = new PhotoDto();
//            photoDto.setLodgingNum(obj[i].);
//
//            photoDtoList.add(photoDto)
//        }
//
//        return photoDtoList;
//    }
}
