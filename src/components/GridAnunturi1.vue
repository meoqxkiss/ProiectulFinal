<template>
    <h1>Get friends help</h1>
    <br>
    <div class="animals-grid">

        <div class="animal"
        
        v-for="(animal, index) in friends" :key="index">
            <div class="image-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Feral_cat_1.JPG" alt="funny cat">
            </div>

            <div class="pet-description">
                <h4>{{ animal.name }}</h4>

                <p>{{ animal.desc }}</p>
                <div class="desc">
                    <span v-if="animal?.stare?.ranit">Ranit &nbsp; &#8226; &nbsp;</span><span v-if="animal?.stare?.bolnav">Bolnav &nbsp; &#8226; &nbsp; </span><span v-if="animal?.stare?.agresiv">Agresiv</span>
                    <br><br>
                </div>
                <div class="contact">
                    <span>{{ animal.phone }} &nbsp; &#8226; &nbsp;</span><span>{{ animal.email }} &nbsp; &#8226; &nbsp;</span>
                    <span>{{ animal.location }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getFriends } from "../API/firebase.api"
export default {
    data() {
        return { friends: [] }
    },
    methods: {
        async fetchFriends() {
            const result = await getFriends();
            console.log(result.docs)
            this.friends = result?.docs.map(el => el.data())
        }
    },
    mounted() {
        this.fetchFriends()
    }
}
</script>

<style scoped>
.desc,
.contact {
    color: #4f7737
}

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
    color: #2f4920
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
    position: relative;
    top: 10px;
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

.desc {
    content: "\2022";
    font-size: 20px;
    font-weight: bold;
}

.contact {
    content: "\2022";
}
</style>