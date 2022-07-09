<template>
  <div class="box">
    <div class="container">
      <div class="route-btn">
        <router-link to="/pc">电脑浏览</router-link>
      </div>
      <div class="route-btn">
        <router-link to="/phone">手机浏览</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(57, 119, 220, 0.86);

    .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 350px;
      height: 450px;
      border-radius: 20px;
      background-color: #4471a3;
      box-shadow: 15px 15px 10px rgba(33,45,58,0.3);
      overflow: hidden;
      position: relative;
      .route-btn{
        width: 350px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        outline: none;
        border:1px solid #fff;
        border-radius: 20px;
        letter-spacing: 5px;
        color: #fff;
        background: none;
        background-color: rgba(212, 154, 86, 0.92);
        cursor: pointer;
        margin-top: 20px;
      }
    }
  }
</style>
