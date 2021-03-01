<template>
  <div
    class="fixed w-screen h-screen left-0 top-0 flex items-center justify-center z-10 bg-black bg-opacity-50"
    @click="$emit('close')"
  >
    <div class="bg-white p-10 border rounded-xl min-w-64" @click.stop>
      <div class="relative">
        <button
          class="absolute top-0 right-0 focus:outline-none"
          @click="$emit('close')"
        >
          <div class="bg-gray-200 w-1 h-8 rounded transform rotate-45"></div>
          <div
            class="bg-gray-200 w-1 h-8 rounded transform -rotate-45 absolute top-0 left-0"
          ></div>
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
