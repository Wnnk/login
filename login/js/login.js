
    
    function login() {
        $.ajax({
            type: "GET",
            url: "login.txt",
            dataType: "text",
            data:{},
            success: function (data, textStatus) {
                var name = $(".name").val();
                var pwd = $(".pwd").val();
                var pwdword = $(".pwdword").val();
                var mailbox = $(".mailbox").val();
                if(name == undefined || name =='' || name ==null){
                    $(".tip1").text("用户名不能为空!").css("visibility","visible");
                }else{
                    $(".tip1").css("visibility","hidden");
                }
                if(pwd == undefined || pwd == "" || pwd == null){
                    $(".tip2").text("注册密码不能为空!").css("visibility","visible");
                }else{
                    $(".tip2").css("visibility","hidden");
                }
                if(pwdword != pwd){
                    $(".tip3").text("两次密码不一致!").css("visibility","visible");
                }else{
                    $(".tip3").css("visibility","hidden");
                }
                if(mailbox == undefined || mailbox == "" || mailbox ==null){
                    $(".tip4").text("注册邮箱不能为空!").css("visibility","visible");
                }else{
                    $(".tip4").css("visibility","hidden");
                }
                if(name.length >0 && pwd == pwdword && mailbox.length>0){
                   alert("注册成功!");
                    $("input").val(""); 
                }
                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
           
        })
    }    


$(".up").on("click",function(){login();});
