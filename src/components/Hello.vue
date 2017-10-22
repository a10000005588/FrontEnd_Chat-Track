<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>working working working</h2>

    <div id="login">
      <div class="container">
        <div class="form-signin">
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="email" class="sr-only">Email address</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="form-control"
            placeholder="Email address" required autofocus />
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password" required />
          <button 
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            @click="login">
            Sign in
          </button>
          <br/>
        </div>
      </div>
    </div>
    <br>
    <p>here is element ui button</p>


<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
  
  <el-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
    ]"
  >
    <el-input v-model="ruleForm2.email"></el-input>
  </el-form-item>

  <el-form-item 
    label="Password" prop="pass">
    <el-input 
      type="password" 
      v-model="ruleForm2.pass" 
      auto-complete="off" 
      placeholder="input password here..."
    >
    </el-input>
  </el-form-item>
  <el-form-item label="Confirm" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button 
      type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
    <el-button @click="resetForm('ruleForm2')">Reset</el-button>
  </el-form-item>
</el-form>


  </div>
</template>

<script>

var checkLogin = function (loginInfo) {

  let userAccount = {
    email: "test",
    password: "test"
  }

  // 模擬發出ajax請求給後端，等待收到驗證後資訊的API
  return new Promise(function (resolve) {
    setTimeout(function() {
      if(userAccount.email == loginInfo.email){
        alert("Login Success");
        console.log("Login Success");
        $router.push('/counter')
      }else{
        alert("Login Failed");
        console.log("Login Fail");
      }
    }, 1000);
  })
}

var checkLoginaAccount = async function(loginInfo) {
  let status = await checkLogin(loginInfo)
}

export default {
  name: 'hello',
  data () {

    var validaePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };

    var validaePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };

    return {
      msg: 'Welcome to William Vue.js App small works.',
      email: '',
      password: '',
      radio3: 'New York',
      radio4: 'New York',
      radio5: 'New York',
      ruleForm2: {
        email: '',
        pass: '',
        checkPass: '',
      },
      rules2: {
        pass: [
          { validator: validaePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validaePass2, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    login: function(){
      var loginInfo = {
        email: this.email,
        password: this.password,
      }

      checkLoginaAccount(loginInfo);
      // check email and password
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit success!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
