<template>
  <div class="home">
    <div class="logo">
      <!-- <img alt="Chat logo" src="../assets/chatgpt.jpg" /> -->
      <svg
        t="1672623964740"
        class="icon"
        style="width: 100%; height: 137%"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8653"
        width="200"
        height="200"
      >
        <path
          d="M954.91469 199.385698c-142.917728-62.20359-302.688252-62.498301-442.90855-1.727338-140.248951-60.770964-300.059384-60.475229-442.948459 1.727338l-17.275421 7.513099v664.698469l40.250646-17.527154c135.543798-59.014974 287.940393-55.87036 418.48535 8.314347l0.533141 1.066282c0.280385-0.168845 0.619099-0.279362 0.955766-0.44923 0.280385 0.169868 0.619099 0.280385 0.955766 0.44923l0.506536-1.066282c130.612496-64.184706 282.967134-67.32932 418.467954-8.314347l40.280321 17.527154V206.898797l-17.30305-7.513099z m-40.223016 586.20183c-122.356478-42.639037-254.093584-41.402886-373.920454 2.698454V353.873926h-57.54244v434.412056c-119.82687-44.101339-251.590582-45.281209-373.918407-2.698454V244.958548c131.147684-51.486525 276.128393-45.966823 401.208906 15.477476l0.533141 1.066282c0.280385-0.153496 0.619099-0.266059 0.955766-0.421601 0.280385 0.154519 0.619099 0.268106 0.955767 0.421601l0.506535-1.066282c125.050837-61.444298 270.019267-66.964 401.223232-15.477476v540.62898z"
          fill="#FFF"
          p-id="8654"
        ></path>
        <path
          d="M195.597426 526.439845h172.580245V325.09759h-172.580245v201.342255z m57.527089-143.802886h57.52709v86.275796H253.124515v-86.275796zM195.597426 612.727921h172.580245v57.52709h-172.580245zM627.060319 325.09759h230.104265v57.539369H627.060319zM684.587409 468.912755h172.577175v57.52709H684.587409zM627.060319 612.727921h230.104265v57.52709H627.060319z"
          fill="#FFF"
          p-id="8655"
        ></path>
      </svg>
    </div>
    <el-row style="width: auto">
      <el-col :span="12" :offset="6">
        <el-input
          class="phoneCodeV"
          @focus="handleInputFocus"
          @blur="handleInputBlur"
          placeholder="请输入您的问题"
          v-model="info"
          clearable
        >
          <template slot="append">
            <el-button class="phoneCode" type="text" @click="generate()"
              >生成内容</el-button
            >
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row style="width: auto; margin-top: 30px">
      <el-col :span="12" :offset="6">
        <div
          v-if="inSearch"
          style="
            background-color: aliceblue;
            height: auto;
            max-height: 55vh;
            border-radius: 10px;
            padding: 1% 5%;
            overflow: auto;
            line-height: 4vh;
            text-align: justify;
            white-space: pre-wrap;
            animation-name: scale-up;
          "
        >
          <el-skeleton :rows="6" animated :loading="loading" />
          <span>{{ ans }}</span>
        </div>
        <div v-else style="margin-top: 60px">
          <svg
            t="1672623778533"
            style="width: 100px; height: 100px"
            class="icon"
            viewBox="0 0 1025 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2677"
            width="200"
            height="200"
          >
            <path
              d="M121.964897 709.911936a416.481669 416.481669 0 1 1 589.035039 0 416.737493 416.737493 0 0 1-589.035039 0z m497.577915-498.857036a287.802136 287.802136 0 1 0 0 407.463868 287.802136 287.802136 0 0 0 0-407.463868z m405.481232 696.289301l-117.039535 116.655799L704.604333 831.428393l127.91206-127.91206z"
              fill="#4C89FB"
              p-id="2678"
            ></path>
          </svg>
          <div class="txt" style="color: antiquewhite; margin-top: 30px">
            您想要的，在这里都能搜到！
          </div>
        </div>
      </el-col>
    </el-row>
    <vue-particles
      color="#C0C3C8"
      :particle-opacity="20"
      :particles-number="80"
      shape-type="circle"
      :particle-size="4"
      lines-color="#444F5F"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="2"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      info: "",
      api: "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",
      ans: "",
      loading: false,
      inSearch: false,
    };
  },
  methods: {
    handleInputFocus() {
      let appendEle = document.getElementsByClassName(
        "el-input-group__append"
      )[0];
      appendEle.style.borderColor = "#4568ee";
    },
    handleInputBlur() {
      let appendEle = document.getElementsByClassName(
        "el-input-group__append"
      )[0];
      appendEle.style.borderColor = "#DCDFE6";
    },
    generate() {
      console.log("generate");
      if (this.info == "") {
        this.$message({
          message: "请输入您的问题",
          type: "warning",
        });
        return;
      }
      this.loading = true;
      this.inSearch = true;
      this.axios({
        url: "https://api.openai.com/v1/completions",
        method: "post",
        data: {
          prompt: this.info,
          max_tokens: 2048,
          model: "text-davinci-003",
        },
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + this.api,
        },
      })
        .then((res) => {
          console.log(res);
          let tmpans = res.data.choices[0].text;
          if (tmpans[0] == "？") {
            tmpans = tmpans.substring(1, tmpans.length);
          }
          // 去除文本前后空格换行
          tmpans = tmpans.trim();
          console.log(tmpans);
          this.ans = tmpans;
          console.log(this.ans);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.logo {
  width: 25vh;
  height: 15vh;
  margin: 30px auto 70px auto;
  position: relative;
  z-index: 1;
}
/deep/.phoneCodeV {
  input {
    border-right: none; // 去掉插槽按钮和input中的边框
  }
  &:hover {
    // input 悬停时，插槽聚焦效果
    .el-input-group__append,
    .el-input-group__prepend {
      border-color: #4568ee !important;
      background: #fff !important;
    }
  }
}

.phoneCode {
  width: 80px;
  padding: 10px 10px 10px 0px;
  border: none; // 去掉插槽按钮和input中的边框
  background: rgba(233, 237, 246, 0.5);
  &:hover {
    background: rgba(233, 237, 246, 0.5) !important;
  }
}

// 修改获取验证码插槽里文字颜色
/deep/ .el-input-group__append,
.el-input-group__prepend {
  color: #4568ee;
}
@keyframes scale-up {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #2f3a4c;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
