<template>
  <Sheet title="Information">
    <div>
      <!-- <h2>Thanks</h2> -->
      <p>
        Thank you for using the Interactive CYOA Creator 2!
      </p>
    </div>

    <div>
      <h2>Acknowledgements</h2>
      <p>Thanks to these awesome projects for inspiring me:</p>
      <ul>
        <li
          v-for="(inspiration, index) in inspirations"
          :key="index"
        >
          <a :href="inspiration.link" target="_blank">
            {{ inspiration.name }}
          </a>
          by
          <a :href="inspiration.author_link" target="_blank">
            {{ inspiration.author }}
          </a>
        </li>
      </ul>
    </div>
  </Sheet>
</template>

<script setup lang="ts">
  import Sheet from '@/components/Sheet.vue';

  const inspirations = [
    {
      name: "Interactive CYOA Creator",
      link: "https://intcyoacreator.onrender.com/",
      author: "MeanDelay",
      author_link: "https://meandelay.itch.io/"
    },
    {
      name: "Moirai Interactive",
      link: "https://ltouroumov.github.io/moirai-interactive/editor/#/",
      author: "Lt. Ouroumov",
      author_link: "https://github.com/ltouroumov"
    },
  ];
</script>

<style scoped lang="scss">
  div {
    padding-bottom: 10px;
  }
</style>
