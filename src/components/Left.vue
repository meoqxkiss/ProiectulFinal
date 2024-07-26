<template>
      <div class="left">
        
        <body>
    <div class="image-container">
        <div class="container">
        <img src="https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg" alt="dog Image" class="rightangle-image">
        <div class="description"><h1>De ce arata asa</h1> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium velit aperiam totam repellat voluptatibus enim ipsam rem saepe! Eum eveniet amet error sunt necessitatibus animi enim asperiores cum corrupti?</div>
    </div>
    </div>
    </body>
      </div>
  </template>
  
  <script>
  export default {
    name: ''
  };
  </script>
  
  <style scoped>
        
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
            background-color: #FEF3E2;
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
  