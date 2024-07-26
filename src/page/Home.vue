<template>
<div>
        <Layout>
                <GridAnunturi2/>
                <Left/>
                <Right/>
        </Layout>
</div>
</template>

<script>

import GridAnunturi2 from '@/components/GridAnunturi2.vue';
    import Left from '@/components/Left.vue';
    import Right from '@/components/Right.vue';
    import Layout from '@/components/Layout.vue';
    export default {
        components: {
            GridAnunturi2,
            Left,
            Right,
            Layout
        }
    }
</script>

<style scoped></style>