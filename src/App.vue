<template>
  <div class="container">
     <div class="login-wrapper">
         <div class="header">后台管理系统</div>
         <div class="form-wrapper">
              <!-- 没有这一行,则取不到prevPage -->
             <!-- <input type="hidden" id="prevPage" value="{{.prevPage}}"> -->
             <input type="text" name="username"  id = "username" placeholder="username" class="input-item">
             <input type="password" name="password" id = "password" placeholder="password" class="input-item">
             <input type="text" name="verificationCode"  id = "verificationCode" placeholder="verification code" class="input-item">
             <!-- <img src={{ Imagepath }}> -->
             <div class="btn"  type="button" id="goLogin">Login</div>
         </div>
         <div class="msg">
             Don't have account?
             <a href="#">Sign up</a>
         </div>
     </div>
 </div>
</template>

<script>
import api from  "./api/networkRequest"
export default {
name: 'HomePage',
data(){
    return{
        Imagepath: ""
    }
},
mounted(){
    api.getVerificationCode().then( res => {
        console.log(res.msg)
        this.Imagepath = res.msg
    })
    }
}
</script>

<style>
* {
 margin: 0;
 padding: 0;
}
/* html {
 height: 100%;
}
body {
 height: 100%;
} */
.container {
 height: 100%;
 background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
 background-color: #fff;
 width: 358px;
 height: 588px;
 border-radius: 15px;
 padding: 0 50px;
 position: relative;
 left: 33.3%;
 top: 50%;
 /* transform: translate(-50%, -50%); */
}
.header {
 font-size: 38px;
 font-weight: bold;
 text-align: center;
 line-height: 200px;
}
.input-item {
 display: block;
 width: 100%;
 margin-bottom: 20px;
 border: 0;
 padding: 10px;
 border-bottom: 1px solid rgb(128, 125, 125);
 font-size: 15px;
 outline: none;
}
.input-item:placeholder {
 text-transform: uppercase;
}
.btn {
 text-align: center;
 padding: 10px;
 width: 100%;
 margin-top: 40px;
 background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
 color: #fff;
}
.msg {
 text-align: center;
 line-height: 88px;
}
a {
 text-decoration-line: none;
 color: #abc1ee;
}
</style>