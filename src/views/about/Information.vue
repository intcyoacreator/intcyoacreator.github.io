<template>
  <Sheet title="Information">
    <div>
      <!-- <h2>Thanks</h2> -->
      <p>
        Thank you for using the Interactive CYOA Creator 2!
      </p>
    </div>

    <div>
      <h2>Contributing</h2>
      <p>
        You may view the source code here:
        <a
          href="https://github.com/intcyoacreator/intcyoacreator.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/intcyoacreator/intcyoacreator.github.io
        </a>
      </p>

      <p>
        Feel free to fork the repository and make a Pull Request (PR) with
        potential changes you feel would improve the program.
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

    <div>
      <h2>Licences</h2>

      <div>
        <h3>Favicon</h3>
        <p>
          This favicon was generated using the following font:
        </p>
        <ul>
          <li>Font Title: Fira Code</li>
          <li>
            Font Author: Copyright 2014-2020 The Fira Code Project Authors
            (
            <a
              href="https://github.com/tonsky/FiraCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/tonsky/FiraCode
            </a>
            )
          </li>
          <li>
            Font Source:
            <a
              href="http://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprFVfxN87gsj0.ttf"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprFVfxN87gsj0.ttf
            </a>
          </li>
          <li>
            Font License: SIL Open Font License, 1.1 (
              <a
                href="http://scripts.sil.org/OFL"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://scripts.sil.org/OFL
              </a>
            )
          </li>
        </ul>
      </div>
    </div>
  </Sheet>
</template>

<script setup lang="ts">
  import Sheet from "@/components/Sheet.vue";

  type Inspiration = {
    name: string,
    link: string,
    author: string,
    author_link: string,
  };

  const inspirations: Array<Inspiration> = [
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
