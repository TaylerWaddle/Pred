<template>
  <div class="flex flex-wrap flex-col justify-center z-40 pb-24 m-16">
    <div class="w-full flex justify-between items-center">
      <!-- Page Title -->
      <h1
        class="text-4xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
      >
        Predecessor Items
      </h1>
      <!-- Search Box -->
      <div class="border border-predYellow rounded h-8 w-72">
        <input type="text" class="w-4/5 bg-stone-200 h-full" />
        <button class="w-1/5 bg-stone-300 h-full">Search</button>
      </div>
    </div>
    <!-- Stat Filters -->
    <stat-filters></stat-filters>
    <div class="flex flex-wrap justify-center">
      <div v-for="item in itemList" :key="item">
        <router-link
          :to="{ name: 'item', params: { id: item.docID } }"
          class="flex flex-col justify-between w-40 h-60 bg-stone-100 border rounded-lg m-2 border-predYellow/50 shadow-md hover:shadow-predYellow/50 hover:bg-stone-200/50"
        >
          <div class="rounded-full h-24 w-24 self-center mt-8">
            <img src="@/assets/items/OrbOfEnlightenment.webp" />
          </div>
          <div class="flex justify-center text-md">
            <p>{{ item.name }}</p>
          </div>

          <div class="flex items-center justify-center text-sm">
            <hr class="bg-black h-0.5 w-full mr-2 ml-3" />
            <p>{{ item.activePassive }}</p>
            <hr class="bg-black h-0.5 w-full mr-3 ml-2" />
          </div>
          <div class="flex flex-wrap justify-between bg-inherit w-full h-20 p-2 rounded-lg">
            <div class="flex justify-between w-14 h-auto mx-1" v-if="!(item.stat1 === '')">
              <p>&</p>
              <p class="">+{{ item.stat1Value }}</p>
            </div>
            <div class="flex justify-between w-14 h-auto mx-1" v-if="!(item.stat2 === '')">
              <p>&</p>
              <p>+{{ item.stat2Value }}</p>
            </div>
            <div class="flex justify-between w-14 h-auto mx-1" v-if="!(item.stat3 === '')">
              <p>&</p>
              <p>+{{ item.stat3Value }}</p>
            </div>
            <div class="flex justify-between w-14 h-auto mx-1" v-if="!(item.stat4 === '')">
              <p>&</p>
              <p>+{{ item.stat4Value }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StatFilters from '@/components/StatFilters.vue'
import { itemsCollection } from '@/includes/firebase'

export default {
  name: 'ItemView',
  components: {
    StatFilters
  },
  data() {
    return {
      itemList: [],
      activeItemID: ''
    }
  },
  async created() {
    await itemsCollection.get().then((querySnapshot) => {
      var snapshotItems = []
      querySnapshot.forEach((doc) => {
        const item = {
          docID: doc.id,
          ...doc.data()
        }
        console.log(item)
        snapshotItems.push(item)
      })
      this.itemList = snapshotItems
    })
  },
  methods: {
    makeActiveItemID(x) {
      this.activeItemID = x
    }
  }
}
</script>
