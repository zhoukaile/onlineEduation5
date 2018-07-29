package edu.zhangmeng.onlinedu;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;


public class EduUser implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String userId;
    @Column
    private String mobile;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String userName;
    @Column
    private String showName;
    @Column
    private String sex;
    @Column
    private Byte age;
    @Column
    private String createTime;
    @Column
    private String isAvalible;
    @Column
    private String picImg;
    @Column
    private String bannerUrl;
    @Column
    private Integer msgNum;
    @Column
    private Integer sysMsgNum;
    @Column
    private String lastSystemTime;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getShowName() {
        return showName;
    }

    public void setShowName(String showName) {
        this.showName = showName == null ? null : showName.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getIsAvalible() {
        return isAvalible;
    }

    public void setIsAvalible(String isAvalible) {
        this.isAvalible = isAvalible;
    }

    public Byte getAge() {
        return age;
    }

    public void setAge(Byte age) {
        this.age = age;
    }



    public String getPicImg() {
        return picImg;
    }

    public void setPicImg(String picImg) {
        this.picImg = picImg == null ? null : picImg.trim();
    }

    public String getBannerUrl() {
        return bannerUrl;
    }

    public void setBannerUrl(String bannerUrl) {
        this.bannerUrl = bannerUrl == null ? null : bannerUrl.trim();
    }

    public Integer getMsgNum() {
        return msgNum;
    }

    public void setMsgNum(Integer msgNum) {
        this.msgNum = msgNum;
    }

    public Integer getSysMsgNum() {
        return sysMsgNum;
    }

    public void setSysMsgNum(Integer sysMsgNum) {
        this.sysMsgNum = sysMsgNum;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getCreateTime() {
        return createTime;
    }



    public String getLastSystemTime() {
        return lastSystemTime;
    }

    public void setLastSystemTime(String lastSystemTime) {
        this.lastSystemTime = lastSystemTime;
    }
}
