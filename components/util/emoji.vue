<template>
    <emoji :data="index" emoji="santa" native :size="18" />
</template>

<script setup lang="ts">
import data from 'emoji-mart-vue-fast/data/all.json'
import { Emoji, EmojiIndex } from 'emoji-mart-vue-fast/src'
let index = new EmojiIndex(data)
</script>
