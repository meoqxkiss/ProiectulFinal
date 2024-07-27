<template>
    <div>
        <Layout>
            <HeroSection/>
            <Left
            title="Despre noi"
            description="Platforma Adoptă & Ajută funcționează ca un punct de întâlnire între cei care găsesc animale vagabonde și azilurile sau organizațiile de protecție a animalelor. Utilizatorii pot încărca pe site informații și imagini despre animalele găsite, specificând locația și condiția acestora. Ulterior, azilurile partenere sunt notificate și pot prelua animalul pentru a-i oferi îngrijirea necesară. Prin această abordare simplă și eficientă, ne asigurăm că animalele vagabonde primesc atenția și sprijinul de care au nevoie într-un timp cât mai scurt."
            url="https://images.unsplash.com/photo-1577519005828-0d09b071c8f3?q=80&w=2530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <GridAnunturi/>
            <Right
            title="Scopul nostru"
            description="Scopul principal al Adoptă & Ajută este de a crea o rețea eficientă și bine organizată pentru a ajuta animalele vagabonde să găsească un adăpost și îngrijire adecvată. Dorim să încurajăm implicarea comunității în protecția animalelor și să oferim o soluție practică pentru reducerea numărului de animale fără adăpost. Prin conectarea directă a persoanelor care găsesc animale rătăcite cu azilurile locale, visăm să transformăm orașele noastre în locuri mai sigure și mai prietenoase pentru toate ființele. Adoptă&Ajută nu este doar un site, ci un pas înainte spre o societate mai empatică și mai responsabilă față de toți locuitorii săi."
            url="https://images.unsplash.com/photo-1532469060546-4eb37b460481?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </Layout>
    </div>
</template>

<script>
    import Left from '@/components/Left.vue';
    import Right from '@/components/Right.vue';
    import HeroSection from '@/components/HeroSection.vue';
    import Layout from '@/components/Layout.vue';
    import GridAnunturi from '@/components/GridAnunturi1.vue'
    export default {
        components: {
            Left,
            Right,
            HeroSection,
            Layout,
            GridAnunturi
        }
    }
</script>

<style lang="scss" scoped>

</style>