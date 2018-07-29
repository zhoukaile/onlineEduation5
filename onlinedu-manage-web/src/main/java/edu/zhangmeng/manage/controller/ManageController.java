package edu.zhangmeng.manage.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import edu.zhangmeng.onlinedu.EduUser;
import edu.zhangmeng.onlinedu.service.ManageService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class ManageController {
    @Reference
    private ManageService manageService;

    @RequestMapping("index")
    public String index(){
        return "aaa";
    }

    @RequestMapping("getAllUserInfo")
    public String getAllUserInfo(Model model){
       List<EduUser> eduUserList = manageService.getAllUserInfo();
        model.addAttribute("eduUserList",eduUserList);
        return "student";
    }

    @RequestMapping("updateStudentStatu")
    @ResponseBody
    public String updateStudentStatu(String userId){
        return userId;

    }

    //冻结/解冻学生用户
    @RequestMapping("dongjie")
    public String dongJie(@RequestParam("userId") String userId){

        //根据userId更改学生的状态
        manageService.updateUserByUserId(userId);


        return "redirect://localhost:8081/getAllUserInfo";
    }


}

