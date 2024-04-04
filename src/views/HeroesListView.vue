<template>
  <div class="m-16">
    <h1
      class="text-4xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
    >
      Predecessor Heroes
    </h1>
    <div class="w-full h-auto flex flex-wrap mt-8 justify-center">
      <div v-for="hero in heroList" :key="hero">
        <router-link :to="{ name: 'hero', params: { id: hero.docID } }">
          <div
            class="m-2 w-auto h-auto bg-stone-100 border rounded-lg border-predYellow/50 shadow-md hover:shadow-predYellow/50 hover:bg-stone-200/50"
          >
            <!-- Hero Image -->
            <div class="flex justify-center">
              <div
                class="relative flex justify-center items-center rounded-full h-32 w-32 bg-gradient-to-r from-predYellow to-predOrange m-6 p-1"
              >
                <div class="rounded-full h-full w-full bg-white overflow-hidden">
                  <img src="@/assets/heroes/Countess.webp" class="w-full h-full" />
                </div>
              </div>
            </div>

            <!-- Hero Name -->
            <div class="m-2 flex justify-center">
              <p class="font-semibold">{{ hero.name }}</p>
            </div>
            <!-- Hero Roles -->
            <div class="flex justify-center m-2 font-light text-sm text-white">
              <div class="bg-black rounded-md w-min px-2 mx-1">
                <p>{{ hero.role }}</p>
              </div>
              <div class="bg-stone-500/80 rounded-md w-min px-2 mx-1">
                <p>{{ hero.position1 }}</p>
              </div>
              <div
                class="bg-stone-500/80 rounded-md w-min px-2 mx-1"
                v-if="!(hero.position2 === '')"
              >
                <p>{{ hero.position2 }}</p>
              </div>
            </div>
            <!-- Hero Stats -->
            <div class="m-2 font-light">
              <div>
                <p>Basic Attack</p>
                <div class="bg-stone-300 w-72 h-4">
                  <div
                    class="bg-gradient-to-l from-predYellow to-predYellow/50 h-full"
                    :style="{ width: (hero.basicAttack / 10) * 288 + 'px' }"
                  ></div>
                </div>
              </div>
              <div>
                <p>Mobility</p>
                <div class="bg-stone-300 w-72 h-4">
                  <div
                    class="bg-gradient-to-l from-predYellow to-predYellow/50 h-full"
                    :style="{ width: (hero.mobility / 10) * 288 + 'px' }"
                  ></div>
                </div>
              </div>
              <div>
                <p>Ability Power</p>
                <div class="bg-stone-300 w-72 h-4">
                  <div
                    class="bg-gradient-to-l from-predYellow to-predYellow/50 h-full"
                    :style="{ width: (hero.abilityPower / 10) * 288 + 'px' }"
                  ></div>
                </div>
              </div>
              <div>
                <p>Durability</p>
                <div class="bg-stone-300 w-72 h-4">
                  <div
                    class="bg-gradient-to-l from-predYellow to-predYellow/50 h-full"
                    :style="{ width: (hero.durability / 10) * 288 + 'px' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { heroesCollection } from '@/includes/firebase'

export default {
  name: 'HeroesListView',
  data() {
    return {
      heroList: []
    }
  },
  async created() {
    await heroesCollection.get().then((querySnapshot) => {
      var snapshotHeroes = []
      querySnapshot.forEach((doc) => {
        const hero = {
          docID: doc.id,
          ...doc.data()
        }
        console.log(hero)
        snapshotHeroes.push(hero)
      })
      this.heroList = snapshotHeroes
    })
  }
}
</script>
