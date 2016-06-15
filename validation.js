;
var Validate = {
    // 手机号码验证
    isMobile: function(phoneNum) {
        return /^1(3[0-9]|5[0-35-9]|7[06-8]|8[0-9])\d{8}$/.test(phoneNum);
    },

    // 密码验证 8位到12位，必须包含数字和字母
    /**
     * [isProperPassword description]
     * @param  {[type]}  password [description]
     * @return {Boolean}          [description]
     */
    isProperPassword: function(password) {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/.test(password);
    },

    // 验证码验证 必须是6位数字
    isProperSmsCaptcha: function(smsCaptcha) {
        return smsCaptcha.match(/^\d{6}$/) ? true : false;
    },

    // 图形验证码验证 必须是4位数字
    /**
     * [isProperPicCaptcha description]
     * @param  {[type]}  picCaptcha [description]
     * @return {Boolean}            [description]
     */
    isProperPicCaptcha: function(picCaptcha) {
        return picCaptcha.match(/^\d{4}$/) ? true : false;
    }
};
