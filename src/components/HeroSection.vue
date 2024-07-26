<template>
            <div class="hero-image">
            <div class="hero-text">
              <h1 style="font-size:50px">Acesta este un titlu ceva</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum et unde eveniet eligendi commodi ad nam a? Nemo ea alias voluptates esse eum facilis totam tempora beatae enim sequi.</p>
              <button>Află mai multe despre noi</button>
            </div>
          </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.019), rgba(0, 0, 0, 0.106)), url("https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-970-80.jpg.webp");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height:850px;
  }
  
  .hero-text {
    text-align: left; 
    position: absolute;
    top: 50%;
    left: 240px; 
    transform: translateY(-50%);
    color: white;
    max-width: 600px; 
  }
  
  .hero-text p {
    margin: 0;
    line-height: 1.5; 
  }
  
  
  .hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #bec69f;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 20px;
  }
  
  .hero-text button:hover {
    background-color: #555;
    color: black;
  }
  
  .libre-baskerville-regular {
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
    font-style: normal;
  }
  
  .libre-baskerville-bold {
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-style: normal;
  }
  
  .libre-baskerville-regular-italic {
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
    font-style: italic;
  }
</style>