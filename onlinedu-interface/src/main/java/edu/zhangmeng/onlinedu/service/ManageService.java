package edu.zhangmeng.onlinedu.service;


import edu.zhangmeng.onlinedu.EduUser;

import java.util.List;

public interface ManageService {
    //得到所有的学生的信息
    List<EduUser> getAllUserInfo();
    //根据用户id修改用户的状态
    void updateUserByUserId(String userId);






}
