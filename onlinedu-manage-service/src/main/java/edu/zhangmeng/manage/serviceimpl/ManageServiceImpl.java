package edu.zhangmeng.manage.serviceimpl;

import com.alibaba.dubbo.config.annotation.Service;
import edu.zhangmeng.manage.mapper.EduUserMapper;
import edu.zhangmeng.onlinedu.EduUser;
import edu.zhangmeng.onlinedu.service.ManageService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class ManageServiceImpl implements ManageService {
    @Autowired
    private EduUserMapper eduUserMapper;
    @Override
    public List<EduUser> getAllUserInfo() {

        List<EduUser> eduUsers = eduUserMapper.selectAll();

        return eduUsers;
    }


    @Override
    public void updateUserByUserId(String userId) {
        //根据userId得到eduuser对象
        EduUser eduUser = new EduUser();
        eduUser.setUserId(userId);
        EduUser selectOne = eduUserMapper.selectOne(eduUser);
        //判断得到被选中的状态
        if("1".equals(selectOne.getIsAvalible())){
            eduUser.setIsAvalible("0");
        }else {
            eduUser.setIsAvalible("1");
        }
        //根据id修改
        eduUserMapper.updateByPrimaryKeySelective(eduUser);
    }
}
