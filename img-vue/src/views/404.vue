<template>
  <div class="notFound">
    <img src="@/assets/img/404.gif" alt="" />
    <h2 @click="$router.push('/homepage')">点击返回主页</h2>
  </div>
</template>

<style lang="less" scoped>
.notFound {
  width: 100%;
  height: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding-top: 60px;
  img {
    width: 60%;
    height: 75%;
  }
  h2 {
    margin-top: 36px;
    font: 16px "BASE", "楷体", "Arial Narrow", HELVETICA;
    font-weight: bolder;
  }
  h2:hover {
    color: #448ff7;
    cursor: pointer;
  }
}
</style>
