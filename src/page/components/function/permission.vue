<template>
  <div class="sys-page">
    <div class="goods-info">
      <app-section title="商品信息">
        <app-search>
          <p>商品名称</p>
          <el-input v-model="title" placeholder="必填" maxlength="30"></el-input>
          <p>品牌商</p>
          <el-input v-model="brand" placeholder="int类型(可为空)"></el-input>
          <p>简介</p>
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="intro" placeholder="可为空" maxlength="50"></el-input>
          <p>内容</p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 16}"
            v-model="content"
            placeholder="必填"
            maxlength="800"
          ></el-input>
        </app-search>
      </app-section>
    </div>
    <div class="image-list">
      <app-section title="商品图片">
        <app-search>
          <!-- https://biyintech.picp.vip/upload -->
          <!-- 封面图片 -->
          <!-- <p>封面图片</p>
          <el-upload
            class="avatar-uploader"
            list-type="picture-card"
            action="https://biyintech.picp.vip/upload"
            :multiple="false"
            :auto-upload="false"
            :show-file-list="true"
            :limit="1"
            :http-request="uploadImg"
            ref="uploads"
          >
            <el-button size="small" type="primary" class="up-btn">点击上传</el-button>
          </el-upload>
          <el-button @click="subOnePicForm">提交上传</el-button>-->
          <!-- 商品图片 -->
          <!-- <p>商品图片</p> -->
          <el-upload
            list-type="picture-card"
            action="https://www.biyinglobal.com/upload"
            :multiple="true"
            :auto-upload="false"
            :http-request="uploadFile"
            ref="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <!-- <el-button @click="subPicForm">提交上传</el-button> -->
        </app-search>
      </app-section>
    </div>
    <div class="goods-tag">
      <app-section title="标签信息">
        <app-search>
          <p>标签1</p>
          <el-input v-model="viaA" placeholder="int类型(可为空)"></el-input>
          <p>标签2</p>
          <el-input v-model="viaB" placeholder="int类型"></el-input>
          <p>标签2</p>
          <el-input v-model="viaC" placeholder="int类型"></el-input>
          <p>标签3</p>
          <el-input v-model="viaD" placeholder="int类型"></el-input>
          <p>标签4</p>
          <el-input v-model="viaE" placeholder="int类型"></el-input>
        </app-search>
      </app-section>
    </div>

    <div class="goods-data">
      <el-button type="primary" plain @click="confirmInfo">提交信息</el-button>
      <el-button type="danger" plain @click="clearInfo">清空页面</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "comPermission",
  inject: ["reload"],
  data() {
    return {
      title: "",
      brand: "",
      viaA: "",
      viaB: "",
      viaC: "",
      viaD: "",
      viaE: "",
      intro: "",
      content: "",
      // 封面图片
      // imageUrl: "",
      // 商品图片
      formDats: [],
      userId: "",
      imgList: [],
      viaList: []
    };
  },
  methods: {
    clearInfo() {
      this.reload();
    },
    confirmInfo() {
      var params = new FormData();
      params.append("phone", "13725591901");
      params.append("password", "biyin0925");
      this.$axios
        .post("https://biyintech.picp.vip/login", params)
        .then(res => {
          console.log(res)
          if (res.code == 2000) {
            this.userId = res.data.user.id;
            // this.subOnePicForm();
            // this.subPicForm();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 111111
    // uploadImg(file) {
    //   // let imageUrl = "";
    //   this.imageUrl.append("folder_name", "forum");
    //   this.imageUrl.append("upload_file", file.file);
    // },
    // subOnePicForm() {
    //   this.imageUrl = new FormData();
    //   this.$refs.uploads.submit();
    //   let config = {
    //     headers: {
    //       "Content-Type": "multipart/form-data"
    //     }
    //   };
    //   this.$axios
    //     .post("http://biyinglobal.com:700/upload", this.imageUrl, config)
    //     .then(res => {
    //       if (res.code == 2000) {
    //         this.imgList.push(res.data[0]);
    //         // console.log(this.imgList);
    //         this.subPicForm();
    //       }
    //     })
    //     .catch(res => {
    //       console.log(res);
    //     });
    // },
    // 2222222
    uploadFile(file) {
      this.formDats.append("upload_file", file.file);
    },
    subPicForm() {
      this.formDats = new FormData();
      this.formDats.append("folder_name", "forum");
      this.$refs.upload.submit();
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      console.log(this.formDats);
      this.$axios
        .post("https://www.biyinglobal.com/upload", this.formDats, config)
        .then(res => {
          if (res.code == 2000) {
            let imgTemp = res.data;
            console.log(imgTemp);
            imgTemp.forEach(item => {
              this.imgList.push(item);
            });
            this.confirmData();
            console.log(this.imgList);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },

    confirmData() {
      if (this.viaA != "") {
        this.viaList.push(this.viaA);
      }
      if (this.viaB != "") {
        this.viaList.push(this.viaB);
      }
      if (this.viaC != "") {
        this.viaList.push(this.viaC);
      }
      if (this.viaD != "") {
        this.viaList.push(this.viaD);
      }
      if (this.viaE != "") {
        this.viaList.push(this.viaE);
      }
      var formInfo = new FormData();
      formInfo.append("author", this.userId);
      formInfo.append("title", this.title);
      formInfo.append("brand", this.brand);
      formInfo.append("intro", this.intro);
      formInfo.append("content", this.content);
      formInfo.append("imgs", this.imgList);
      formInfo.append("vis", this.viaList);
      this.$axios
        .post("https://www.biyinglobal.com/forum", formInfo)
        .then(res => {
          if (res.code == 2000) {
            this.$message({
              type: "success",
              message: "商品Id:" + res.data,
              duration: 3000
            });
            this.reload();
          }
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
};
</script>