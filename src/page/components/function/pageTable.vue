<template>
  <div class="sys-page">
    <app-title title="收藏评分权重"></app-title>
    <div class="page-content">
      <div class="article">
        <app-search>
          <p>编辑推荐</p>
          <el-checkbox v-model="checked">编辑推荐</el-checkbox>
          <p>商品Id</p>
          <el-input v-model="articleId" placeholder="int类型(和返回id匹配)"></el-input>
          <p>收藏</p>
          <el-input v-model="collect" placeholder="int类型"></el-input>
          <p>评分</p>
          <el-input v-model="score" placeholder="double类型(范围0-10)"></el-input>
          <p>评论</p>
          <el-input v-model="comment" placeholder="int类型"></el-input>
          <p>权重</p>
          <el-input v-model="weight" placeholder="int类型(整数0-100)"></el-input>
        </app-search>
      </div>
      <div class="goods-data">
        <el-button type="primary" plain @click="confirmData">提交信息</el-button>
        <el-button type="danger" plain @click="clearInfo">清空页面</el-button>
      </div>
      <!-- <el-button @click="subPicForm">测试</el-button> -->
      <app-section title="标签表格">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="组件使用"></el-table-column>
          <el-table-column prop="detail" label="功能描述"></el-table-column>
          <el-table-column prop="param" label="参数"></el-table-column>
          <el-table-column prop="paramDetail" label="参数描述"></el-table-column>
          <el-table-column prop="paramType" label="参数类型"></el-table-column>
        </el-table>
      </app-section>
    </div>
  </div>
</template>

<script>
export default {
  name: "comPageTable",
  inject: ["reload"],
  data() {
    return {
      tableData: [],
      articleId: "",
      collect: "",
      comment: "",
      score: "",
      weight: "",
      checked: false
    };
  },
  methods: {
    clearInfo() {
      this.reload();
    },
    // subPicForm(){
    //   console.log(this.checked)
    // },
    confirmData() {
      var formInfo = new FormData();
      formInfo.append("id", this.articleId);
      formInfo.append("collectcount", this.collect);
      formInfo.append("reviewcount", this.comment);
      formInfo.append("score", this.score);
      formInfo.append("weight", this.weight);
      formInfo.append("letter", this.checked);
      this.$axios
        .put("https://www.biyinglobal.com/forumr", formInfo)
        .then(res => {
          if (res.code == 2000) {
            this.$message({
              type: "success",
              message: "修改成功！"
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