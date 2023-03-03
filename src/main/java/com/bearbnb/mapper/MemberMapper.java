package com.bearbnb.mapper;

import com.bearbnb.dto.ComplainDto;
import com.bearbnb.dto.MembersDto;
import com.bearbnb.dto.PhotoDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MemberMapper {
//    public Optional<MembersDto> findById(@Param("userId") String userId, @Param("social") boolean social);
    public Optional<MembersDto> findById(@Param("userId") String userId);


    List<MembersDto> MemberList(String userId);

    void MemberNameUpdate(MembersDto members);

    void MemberTelUpdate(MembersDto members);

    void MemberPwdUpdate(MembersDto members);

    List<ComplainDto> complainList(ComplainDto complain);

    void complainDelete(ComplainDto complain);

    void memberDelete(MembersDto members);

    List<PhotoDto> imgList(PhotoDto photo);

//    List<MembersDto> AllMembersList();
}
