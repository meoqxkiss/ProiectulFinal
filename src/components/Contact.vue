<template>
    <div>

        <section class="contact-us">
            <div class="row">
                <div class="form-container">
                    <div class="left-part">
                        <h3 class="test">Informații de Contact</h3>
                        <div>
                            <label for="name">Nume:</label>
                            <input type="text" id="name" name="name" required v-model="name">

                            <label for="phone">Număr de Telefon:</label>
                            <input type="tel" id="phone" name="phone" required v-model="phone">

                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required v-model="email">

                            <label for="location">Adresa Locatiei:</label>
                            <input type="text" id="location" name="location" required v-model="location">
                        </div>
                    </div>
                    <div class="right-part">
                        <h3 class="test">Informații despre Animal</h3>
                        <div>
                            <label for="animal-condition">Cum este animalul?</label>
                            <textarea id="animal-condition" name="animal-condition" rows="4" v-model="desc"></textarea>

                            <div class="checkbox-group">
                                <label>
                                    <input type="checkbox" name="condition" value="ranit" v-model="ranit">
                                    Rănit
                                </label>
                                <label>
                                    <input type="checkbox" name="condition" value="bolnav" v-model="bolnav">
                                    Bolnav
                                </label>
                                <label>
                                    <input type="checkbox" name="condition" value="agresiv" v-model="agresiv">
                                    Agresiv
                                </label>

                                <div>
                                    <div>
                                      <label for="profile_pic">Încărcați o poză</label>
                                      <input
                                        type="file"
                                        id="profile_pic"
                                        name="profile_pic"
                                        accept=".jpg, .jpeg, .png .webp" />
                                     </div>
                        
                                    </div>

                            </div>

                            <div>
                                <!-- Add the submit button -->
                                <button @click="saveData" class="submit-button">Trimite Raportul</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="location" v-html="ifr" />
    </div>
</template>

<script>
import { addFriend } from '../API/firebase.api';
export default {
    data() {
        return {
            name: null,
            phone: null,
            email: null,
            location: null,
            desc: null,
            ranit: false,
            bolnav: false,
            agresiv: false,
            ifr: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d166755.0723410282!2d28.77381510997792!3d47.066935392727544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sazil%20animale!5e1!3m2!1sen!2s!4v1721979675415!5m2!1sen!2s" height="600" width="100%" style="border:0;" allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>'
        }
    },
    methods: {
        async saveData() {
            const friend = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                location: this.location,
                desc: this.desc,
                stare: {
                    ranit: this.ranit,
                    bolnav: this.bolnav,
                    agresiv: this.agresiv,
                }
            }

            await addFriend(friend)

            this.name = null,
            this.phone = null,
            this.email = null,
            this.location = null,
            this.desc = null,
            this.ranit = false,
            this.bolnav = false,
            this.agresiv = false
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Oswald:wght@200..700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.test {
    font-family: "Domine", serif;
}

.test {
    color:#573828;
}

label {
    color:#6a4831;
}

.form-container {
    display: flex;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px solid #708871;
    max-width: 1240px;
    margin: auto;
    width: 100%;
    box-sizing: content-box;
}

.left-part,
.right-part {
    flex: 1;
    margin: 10px;
}

h3 {
    margin-bottom: 15px;
    font-size: 2em;
    color: #212020;
    font-family: Arial, Helvetica, sans-serif;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="tel"],
input[type="email"],
textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 2px solid #708871;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
}

textarea {
    resize: vertical;
}

.checkbox-group {
    display: flex;
    flex-direction: column;
}

.checkbox-group label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

}

.checkbox-group input[type="checkbox"] {
    margin-right: 10px;
}

/* Style for the submit button */
.submit-button {
    padding: 10px 20px;
    background-color: #708871;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.submit-button:hover {
    background-color: #374637;
}


/* MAP */

.location {
    width: 100%;
    margin: auto;
    padding: 80px 0;
}

iframe {
    position: relative;
    width: 100% !important;
    min-width: 100vw;
    background-color: red;
}
</style>