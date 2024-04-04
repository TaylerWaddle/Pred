<template>
  <div class="m-16">
    <div class="w-full h-auto bg-stone-100 border rounded-lg border-predYellow/50 shadow-md">
      <div>
        <p class="p-2">Item</p>
      </div>
      <hr />
      <div class="flex items-center flex-col">
        <img src="@/assets/items/OrbOfEnlightenment.webp" class="w-36" />
        <p
          class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text font-bold text-2xl"
        >
          {{ this.item.name }}
        </p>
        <div class="flex items-center justify-center text-sm">
          <hr class="bg-black h-0.5 w-32 mr-2 ml-3" />
          <p class="">
            {{ this.item.activePassive }}
          </p>
          <hr class="bg-black h-0.5 w-32 mr-2 ml-3" />
        </div>
      </div>
      <div class="flex items-left flex-col">
        <div class="flex p-2" v-if="!(item.stat1 === '')">
          <p class="pr-2">+{{ this.item.stat1Value }}</p>
          <p>{{ this.item.stat1 }}</p>
        </div>
        <div class="flex p-2" v-if="!(item.stat2 === '')">
          <p class="pr-2">+{{ this.item.stat2Value }}</p>
          <p>{{ this.item.stat2 }}</p>
        </div>
        <div class="flex p-2" v-if="!(item.stat3 === '')">
          <p class="pr-2">+{{ this.item.stat3Value }}</p>
          <p>{{ this.item.stat3 }}</p>
        </div>
        <div class="flex p-2" v-if="!(item.stat4 === '')">
          <p class="pr-2">+{{ this.item.stat4Value }}</p>
          <p>{{ this.item.stat4 }}</p>
        </div>
        <span class="block p-2" v-if="!(this.item.trait1 === '')">
          <span
            class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text font-bold"
            >{{ this.item.trait1 }}:</span
          >
          {{ this.item.trait1Description }}
        </span>
        <span class="block p-2" v-if="!(this.item.trait2 === '')">
          <span
            class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text font-bold"
            >{{ this.item.trait2 }}:</span
          >
          {{ this.item.trait2Description }}
        </span>
        <span class="block p-2" v-if="!(this.item.trait3 === '')">
          <span
            class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text font-bold"
            >{{ this.item.trait3 }}:</span
          >
          {{ this.item.trait3Description }}
        </span>
        <span class="block p-2" v-if="!(this.item.trait4 === '')">
          <span
            class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text font-bold"
            >{{ this.item.trait4 }}:</span
          >
          {{ this.item.trait4Description }}
        </span>
      </div>
    </div>
    <div
      class="w-full h-auto bg-stone-100 border rounded-lg mt-6 border border-predYellow/50 shadow-md"
    >
      <p class="p-2">Most Popular Builds</p>
    </div>
    <div
      class="w-full h-auto bg-stone-100 border rounded-lg mt-6 border border-predYellow/50 shadow-md"
    >
      <div>
        <p class="p-2">Item Evolution</p>
      </div>
      <hr />
      <!-- This section neeeds customized per item evolution. Build out database and display information here. -->
      <div class="flex items-center flex-col">
        <img src="@/assets/items/OrbOfEnlightenment.webp" class="w-24" />
        <img src="@/assets/items/OrbOfEnlightenment.webp" class="w-24" />
        <img src="@/assets/items/OrbOfEnlightenment.webp" class="w-24" />
      </div>
    </div>
  </div>
</template>

<script>
import { itemsCollection } from '@/includes/firebase'

export default {
  name: 'ItemView',
  data() {
    return {
      item: []
    }
  },
  async created() {
    const docSnapshot = await itemsCollection.doc(this.$route.params.id).get()
    if (!docSnapshot.exists) {
      this.$router.push({ name: 'home' })
      return
    }
    this.item = docSnapshot.data()
  }
}
</script>
