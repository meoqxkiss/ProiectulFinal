<template>
    <div>
        <Header/>
        <slot></slot>
        <Footer/>
    </div>
</template>

<script>
    import Footer from './Footer.vue';
    import Header from './Header.vue';
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>