<template>
  <div class="box">
    <div class="boxBottom">
      <!-- 表格部分 -->
      <el-scrollbar class="elTableWrap" ref="el_scrollbar">
        <el-image
            v-for="img of tableData" :key="img.id"
            :src="img.url"
            lazy
            :scroll-container="scrollContainer"
            style="min-height: 100px;display: block">
        </el-image>
      </el-scrollbar>
      <!-- 分页部分 -->
      <div class="elPaginations">
        <el-pagination
            style="color: #757575"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            :current-page="Pages.pageIndex"
            :pager-count="5"
            :page-sizes="[20, 50, 100]"
            :page-size="Pages.pageSize"
            layout=" pager, sizes,jumper"
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
  background-color: rgba(240, 230, 230, 0.432);
  .boxBottom {
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 15px 15px 15px;
    .elTableWrap {
      width: 100%;
      height: calc(100% - 80px);
      overflow: auto
    }
    .elPaginations {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      .el-pagination {
        white-space: normal !important;
      }
    }
  }
}
</style>
