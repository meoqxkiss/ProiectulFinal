<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>Acesta este un titlu ceva</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        harum et unde eveniet eligendi commodi ad nam a?
      </p>

      <router-link to="/contact-us">
        <button>Raporteaza un animal care are nevoie de ajutor</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 48px;
}

p {
  color: #f8f7e3;
}

.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.019), rgba(0, 0, 0, 0.106)),
    url("https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-970-80.jpg.webp");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 850px;
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
  font-size: 24px;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 12px 32px;
  color: black;
  background-color: #bec69f;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 24px;
}

.hero-text button:hover {
  background-color: #9aa080;
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