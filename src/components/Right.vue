<template>
    <div class="right">
        <div class="image-container">
    <div class="container">
        <div class="description">
            <h1>hi</h1> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium velit aperiam
            totam repellat voluptatibus enim ipsam rem saepe! Eum eveniet amet error sunt necessitatibus animi enim
            asperiores cum corrupti?</p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUugTTjEKB2cGwn4mQTKLmas1fTVSLBaChlQ&s" alt="dog Image" class="rightangle-image">
    </div>
    </div>
    </div>
</template>

<style scoped>
.right {
            font-family: Arial, sans-serif;
            background-color: #f3f3f3;
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
            text-align:right;
            padding-right:100px;
        }
        p {
            text-align:right;
            padding-right:100px;
        }
</style>