$(function() {
    $('#link_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    // 从input中获取form对象
    var form = layui.form
        // 通过 form.verify() 函数自定义校验规则
    form.verify({
        //自定义一个pwd校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        //校验两次密码是否一致
        repwd: function(value) {
            //通过形参拿到的是确认密码框中的内容
            //还需拿到密码框中的额内容
            //进行批次等于判断
            //判断失败返回一个提示消息
            var pwd = $('.reg-box input[name=password]').val()
            if (pwd !== value) {
                return "两次密码不一致"
            }
        }
    })










})