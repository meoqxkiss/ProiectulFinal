<template>
  <h1>Get friends help</h1>
  <br>
  <div class="animals-grid">

<div class="animal">
    <div class="image-wrapper">
        <img src="../img/cat without eye.jpg" alt="funny cat">
    </div>

    <div class="pet-description">
        <h4>Pet Name</h4>

        <p> Lorem, ipsum dolor sit amet consectetur adipisicing edivt. Laboriosam, suscipit saepe facere hic
            sunt inventore omnis officia repellendus, tempore ducimus unde atque quos tempora sapiente impedit
            dolorem, perferendis minima! Eveniet?
        </p>
        <div>
            <span>Ranit</span>&nbsp; &#8226; &nbsp;<span>Bolnav</span>&nbsp; &#8226; &nbsp; <span>Agresiv</span>
        </div>
    </div>
</div>
</div>
</template>

<style scoped>
.animals-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    margin-left: 20px;
    margin-right: 20px;
}


.pet-description {
    padding: 20px;
}

.image-wrapper {
    width: fit-content;
}

.animal {
    background-color: #BEC6A0;
    border-radius: 40px;
    overflow: hidden;
}

.animal img {
    object-fit: cover;
    object-position: center center;
    width: full;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    height: 400px;
}


body {
    background-color: #e8ddd0;
}
 
h1 {
    text-align: center;
    margin-top: 60px;
    font-size: 60px;
}

#rectangle {
	width: 500px;
	height: 600px;
	background: #BEC6A0;
    border-radius: 40px;
    overflow: hidden;
   
}

p {
    font-size: 24px;
}

h4 {
    font-size: 24px;
}

span {
  content: "\2022";
  font-size: 20px;
  font-weight: bold;
}
</style>