<template>
      <button :style="{background: color}" class="btn ">{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonComp',
    props: {
        text: String,
        color: Number,
    }
}
</script>
