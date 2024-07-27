<template>
  <div class="left">
    <body>
      <div class="image-container">
        <div class="container">
          <img :src="url" alt="dog Image" class="rightangle-image" />
          <div class="description">
            <h1>{{ title }}</h1>
            <p>
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </body>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100hv;
  gap: 115px;
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
body {
  font-family: Arial, sans-serif;
  background-color: #fef3e2;
  color: #333;
  text-align: center;
  padding: 150px;
}
.image-container {
  display: inline-flex;
  text-align: left;
}
.image-container img {
  width: 500px;
  height: auto;
  border-radius: 100px;
}
</style>
  