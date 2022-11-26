<template>
    <sortable
        :list="list"
        :options="{ animation: 150, disabled: disabled, handle: '.handle' }"
        @end="end($event)"
    >
        <template #item="{ element, index }">
            <slot name="item" :element="element" :index="index" :refreshList="refreshList">
                <div class="draggable" :key="element.id">
                    {{ element }}
                </div>
            </slot>
        </template>
    </sortable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sortable } from 'sortablejs-vue3'
import { definedProps } from './sortable.typings'

const props = defineProps(definedProps)

const list = ref<Array<any>>(props.modelValue as Array<any>)

const end = (event: Sortable.SortableEvent) => {
    rearrangeList(list.value, event.oldIndex, event.newIndex)
}
const rearrangeList = (arr: Array<any>, from: number, to: number) => {
    const element = arr[from]
    arr.splice(from, 1)
    arr.splice(to, 0, element)
}
const refreshList = () => {
    console.log('refreshList')
    list.value = props.modelValue as Array<any>
}
</script>

<script lang="ts">
export default {
    name: "ChiUtilSortable"
}
</script>
