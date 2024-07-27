<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>Adoptă & Ajută</h1>
      <p>
        Noi suntem o inițiativă non-guvernamentală dedicată salvării animalelor vagabonde, conectând oamenii care găsesc animale pe stradă cu azilurile locale care le pot oferi adăpost și îngrijire. 
      </p>

      <router-link to="/contact-us">
        <button>Raportează un animal</button>
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
    url("https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
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
  color:rgb(255, 255, 255);
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 12px 32px;
  color: rgb(19, 90, 60);
  background-color: rgba(204, 212, 177, 0.851);
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 24px;
}

.hero-text button:hover {
  background-color: #8a996fe8;
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