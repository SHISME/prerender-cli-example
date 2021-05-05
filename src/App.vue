<template>
  <div
    class="app"
    :class="{
      skeleton: isPreRender
    }"
  >
    <div class="title">
      页面标题
    </div>
    <div class="list">
      <div class="item" :key="item.name" v-for="item in list">
        <div class="item-icon"></div>
        <div class="item-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [
        {
          name: "吃的"
        },
        {
          name: "玩的"
        },
        {
          name: "喝的"
        }
      ]
    };
  }
};
</script>

<style>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.list {
  display: flex;
  flex-direction: column;
}
.item {
  padding: 4px;
  display: flex;
  flex-direction: row;
  background: green;
  margin: 0 6px 6px;
  border-radius: 3px;
}
.item-icon {
  width: 50px;
  height: 50px;
  background: bisque;
  border-radius: 2px;
  margin-right: 6px;
}
.item-name {
  color: white;
}
.skeleton .title {
  background: #f2f2f2;
  width: 100px;
  align-self: center;
  color: transparent;
}
.skeleton .item {
  background: #f2f2f2;
}
.skeleton .item-icon {
  background: gray;
}
.skeleton .item-name {
  background: darkgray;
  width: 100px;
  height: 20px;
  border-radius: 4px;
  color: transparent;
}
</style>
