<template>
    <h1>{{ headerText }}</h1>
    <p>{{ bodyText }}</p>
</template>

<script>
export default {
    name: 'Header',
    props: {
        headerText: {
            type: String,
            required: true
        },
        bodyText: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
