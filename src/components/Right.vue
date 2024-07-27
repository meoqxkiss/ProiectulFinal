<template>
  <div class="right">
    <div class="image-container">
      <div class="container">
        <div class="description">
          <h1>{{ title }}</h1>
          <p>
            {{ description }}
          </p>
        </div>
        <img :src="url" alt="dog Image" class="rightangle-image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    url: String,
  },
};
</script>


<style scoped>
p {
  color: rgb(148, 99, 64);
}
h1 {
  color: rgb(82, 47, 26);
}
.right {
  font-family: Arial, sans-serif;
  background-color: #fef3e2;
  color: #333;
  padding: 150px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
}
.container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.rightangle-image {
  width: 300px;
  height: auto;
  border-radius: 20px;
  margin-right: 10px;
}

.description {
  font-size: 25px;
  line-height: 1.5;
  max-width: 500px;
}

.image-container img {
  width: 500px;
  height: auto;
  border-radius: 100px;
}
h1 {
  text-align: right;
  padding-right: 100px;
}
p {
  text-align: right;
  padding-right: 100px;
}
</style>