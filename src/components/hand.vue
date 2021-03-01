<template>
  <div
    class="relative rounded-full hover:border-white border-4 border-transparent"
  >
    <div
      v-if="choose"
      class="border-b-4 border-black border-opacity-25 rounded-full"
    >
      <div
        @click="$emit('clicked', choose)"
        :class="[chooseObj.classes, size > 1 ? 'w-80 h-80' : 'w-60 h-60']"
        class="cursor-pointer rounded-full flex items-center justify-center bg-gradient-to-b border-b-8 border-black border-opacity-40"
      >
        <div
          :class="size > 1 ? 'w-60 h-60' : 'w-44 h-44'"
          class="rounded-full bg-white flex items-center justify-center border-t-8 border-black border-opacity-25"
        >
          <img
            :src="chooseObj.img"
            :class="size > 1 ? 'w-28' : 'w-20'"
            :alt="choose"
          />
        </div>
      </div>
    </div>
    <div v-else class=" w-80 h-80 flex items-center justify-center">
      <div class="w-72 h-72 rounded-full bg-black bg-opacity-10 "></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    choose: {
      type: String
    },
    size: {
      type: Number,
      default: 1
    }
  },
  computed: {
    chooseObj() {
      let chooseObj = new Object()
      chooseObj.img = '/images/icon-' + this.choose + '.svg'
      chooseObj.classes =
        'from-' + this.choose + '-color-2 to-' + this.choose + '-color-1'
      return chooseObj
    }
  }
}
</script>

<style></style>
