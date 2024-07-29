<template>
  <h1>
    <span v-if="route.name !== 'success'"> Animals in danger </span>
    <span v-else> Saved animals 💖</span>
  </h1>
  <br />
  <div class="animals-grid">
    <div class="animal" v-for="(animal, index) in friends" :key="index">
      <div class="icon" v-if="animal.solved">
        <SavedIcon />
        <span>Saved</span>
      </div>

      <div class="image-wrapper">
        <img :src="animal.image" alt="funny cat" />
      </div>

      <div class="pet-description">
        <h4>{{ animal.title }}</h4>

        <p>{{ animal.desc }}</p>

        <div class="desc">
          <span v-if="animal?.stare?.ranit" class="tag"> Ranit</span>
          <span v-if="animal?.stare?.bolnav" class="tag"> Bolnav </span>
          <span v-if="animal?.stare?.agresiv" class="tag"> Agresiv </span>
          <br />
        </div>

        <div class="title" v-if="!animal.solved">Contacte:</div>
        <div class="contact" v-if="!animal.solved">
          <span class="tag">{{ animal.phone }}</span>
          <span class="tag">{{ animal.email }} </span>
          <span class="tag">{{ animal.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { getFriends } from "../API/firebase.api";
import SavedIcon from "../assets/saved.vue";
export default {
  setup() {
    const route = useRoute();

    return { route };
  },
  components: {
    SavedIcon,
  },
  data() {
    return { friends: [] };
  },
  methods: {
    async fetchFriends() {
      const result = await getFriends({
        solved: this.route.name === "success",
      });
      this.friends = result?.docs.map((el) => el.data());
    },
  },
  mounted() {
    this.fetchFriends();
  },
};
</script>

<style scoped>
.tag {
  padding: 4px;
  background-color: #d9e8b16a;
  border-radius: 8px;
  margin-right: 8px;
}

.contact {
  margin-top: 8px;
}

.icon {
  position: absolute;
  right: 20px;
  top: 20px;

  font-size: 24px;
  color: #71b340;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
}

.icon span {
  display: block;
}

.title {
  font-size: 18px;
  color: #464646b3;
  margin-bottom: 4px;
  margin-top: 16px;
}

.desc,
.contact {
  color: #4f7737;
}

.animals-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  max-width: 1400px;
  margin: auto;
}

.pet-description {
  padding: 20px;
}

.image-wrapper {
  width: 100%;
}

.animal img {
  width: 100%;
  height: 100%;
  max-height: 350px;
  object-fit: cover;
  object-position: center center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.animal {
  background-color: #bec6a0;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
}

body {
  background-color: #e8ddd0;
}

h1 {
  text-align: center;
  margin-top: 60px;
  font-size: 60px;
}

.animal p {
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
}

.animal h4 {
  font-size: 24px;
  margin: 0;
  margin-bottom: 16px;
}

.desc {
  content: "\2022";
  font-size: 20px;
  font-weight: bold;
}

.contact {
  content: "\2022";
}
</style>