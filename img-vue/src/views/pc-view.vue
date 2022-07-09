<template>
  <div class="box">
    <!--  按钮区  -->
    <div class="boxTop">
      <div class="addBtn">
        <div>
          <el-button
            style="margin-right: 12px"
            size="small"
            plain
            type="primary"
            @click="downloadImages"
            >+下载选中的图片</el-button
          >
        </div>
      </div>
    </div>

    <div class="boxBottom">
      <!-- 表格部分 -->
      <div class="elTableWrap" ref="el_scrollbar" style="display: flex;flex-wrap:wrap">
        <div v-for="img of tableData" :key="img.id" class="carousel-item" style="width: 33%;min-height: 100px;display: block;">
<!--          <img :src="img.url" style="width: 100%">-->
          <el-image
              lazy
              :scroll-container="scrollContainer"
              style="width: 100%;min-height: 100px"
              :src="img.url"
              :preview-src-list="imgList">
          </el-image>
        </div>
      </div>
      <!-- 分页部分 -->
      <div class="elPaginations">
        <el-pagination layout="slot" :total="Pages.total">
          <span class="leftPagination"
            >共{{ Pages.total }}条记录，第{{ Pages.pageIndex }}/{{
              Math.ceil(Pages.total / Pages.pageSize)
            }}页面</span
          >
        </el-pagination>
        <el-pagination
          style="color: #757575"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :current-page="Pages.pageIndex"
          :page-sizes="[20, 50, 100, 500,1000,10000]"
          :page-size="Pages.pageSize"
          layout="prev, pager, next, sizes, jumper"
          :total="Pages.total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表体数据
      tableData: [],
      // 图片展示用的list
      imgList:[],
      // 分页排序数据
      Pages: {
        pageIndex: 1,
        pageSize: 20, // 默认每页20条
        total: 0
      },
      // 打开新增弹框
      isShowAddDialog: false,
      // 打开编辑弹出框
      isShowEditDialog: false,
      // 点击编辑按钮，获取当前行的数据
      rowData: null,
      // 勾选用于导出
      multipleSelection: [],
      // 上传的地址
      upLoadUrl: "/api" + "/uploadExcel",
      scrollContainer: HTMLElement
    };
  },
  mounted() {
    this.getTableData();
    this.scrollContainer = this.$refs.el_scrollbar.wrap
  },
  methods: {
    downloadImages(){
      this.$message({
        message: '闹着玩的,没这功能',
        type: 'warning'
      });
    },
    // 获取表体数据和总条目数数据
    async getTableData() {
      this.tableData = [];
      const loading = this.$loading({
        // 开启数据加载效果
        lock: true,
        text: "数据加载中...",
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.5)",
      });
      let params = {
        pageIndex: this.Pages.pageIndex,
        pageSize: this.Pages.pageSize,
      };
      const res = await this.$api.getTableData(params);
      this.tableData = res.data;
      res.data.forEach(item => {
        this.imgList.push(item.url)
      })
      loading.close(); // 关闭数据加载效果
      const count = await this.$api.getTotalCount({ searchWord: this.Pages.searchWord });
      this.Pages.total = count.data;
    },
    // 页数改变
    handleCurrentChange(val) {
      this.Pages.pageIndex = val;
      this.getTableData();
    },
    // 条目数改变
    handleSizeChange(val) {
      this.Pages.pageIndex = 1;
      this.Pages.pageSize = val;
      this.getTableData();
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
  background-color: rgba(240, 230, 230, 0.432);
  .boxTop {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    .addBtn {
      display: flex;
    }
    .inputs {
      .el-input {
        width: 240px;
        margin-right: 12px;
      }
    }
  }
  .boxBottom {
    width: 100%;
    height: calc(100% - 60px);
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 15px 15px 15px;
    .elTableWrap {
      width: 100%;
      height: calc(100% - 40px);
      overflow:auto
    }
    .elPaginations {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
