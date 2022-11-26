<template>
    <Picker
        :data="emojiIndex"
        :emojiSize="18"
        native
        :showSkinTones="false"
        :showPreview="false"
        @select="emitEmoji"
    />
</template>

<script setup lang="ts">
import data from 'emoji-mart-vue-fast/data/all.json'
import 'emoji-mart-vue-fast/css/emoji-mart.css'
import { Picker, EmojiIndex, EmojiData } from 'emoji-mart-vue-fast/src'

const emits = defineEmits(['selectEmoji'])

const emojiIndex = new EmojiIndex(data, {
    exclude: ['recent']
})

const emitEmoji = (emoji: EmojiData) => {
    emits('selectEmoji', emoji.native, emoji)
}
</script>
