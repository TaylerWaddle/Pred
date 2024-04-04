<template>
  <div class="">
    <div class="relative w-full pt-10 overflow-hidden flex items-center z-0">
      <div class="absolute top-0 left-0 w-full h-full">
        <img alt="Argus" class="object-cover" src="@/assets/heroes/argus/argusBanner.webp" />
      </div>

      <!-- Hero Info -->
      <div class="relative flex flex-col justify-left mb-12 z-40 m-16">
        <div>
          <h1 class="text-7xl font-mono text-gray-200">{{ this.hero.name }}</h1>
          <h1 class="text-4xl font-mono p-6 text-gray-200">{{ this.hero.heroTitle }}</h1>
        </div>

        <div class="bg-gray-900 text-gray-200 w-[500px] gap-6 p-6 hero-desc-box">
          <h1 class="h-24 text-sm font-mono">{{ this.hero.heroSummary }}</h1>
          <div class="flex gap-10">
            <div class="">
              <h1
                class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
              >
                Role
              </h1>
              <ul>
                <li>{{ this.hero.role }}</li>
              </ul>
            </div>
            <div>
              <h1
                class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
              >
                Positions
              </h1>
              <ul>
                <p>{{ this.hero.position1 }}</p>
                <p>{{ this.hero.position2 }}</p>
              </ul>
            </div>
            <div>
              <h1
                class="bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
              >
                Difficulty
              </h1>
              <ul>
                <li>{{ this.hero.difficulty }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ability Buttons -->
    <div class="flex justify-around w-full h-24 mb-16 z-40">
      <button
        @click.prevent="activeAbility = 1"
        class="border w-24 h-24 border-black rotate-45 bg-gray-900 mx-8"
      >
        <img class="-rotate-45" src="@/assets/heroes/argus/passive.webp" />
      </button>
      <button
        @click.prevent="activeAbility = 2"
        class="border w-24 h-24 border-black rotate-45 bg-gray-900 mx-8"
      >
        <img class="-rotate-45" src="@/assets/heroes/argus/basic.webp" />
      </button>
      <button
        @click.prevent="activeAbility = 3"
        class="border w-24 h-24 border-black rotate-45 bg-gray-900 mx-8"
      >
        <img class="-rotate-45" src="@/assets/heroes/argus/alternate.webp" />
      </button>
      <button
        @click.prevent="activeAbility = 4"
        class="border w-24 h-24 border-black rotate-45 bg-gray-900 mx-8"
      >
        <img class="-rotate-45" src="@/assets/heroes/argus/primary.webp" />
      </button>
      <button
        @click.prevent="activeAbility = 5"
        class="border w-24 h-24 border-black rotate-45 bg-gray-900 mx-8"
      >
        <img class="-rotate-45" src="@/assets/heroes/argus/secondary.webp" />
      </button>
      <button
        @click.prevent="activeAbility = 6"
        class="border w-24 h-24 border-black rotate-45 bg-gray-900 mx-8"
      >
        <img class="-rotate-45" src="@/assets/heroes/argus/ultimate.webp" />
      </button>
    </div>
    <!-- Ability Info -->
    <div class="flex justify-center w-full">
      <div v-if="activeAbility === 1" class="flex flex-row w-4/5 items-center mb-16 ml-16 mr-16">
        <div
          class="w-1/2 p-4 h-fit border-2 border-black ability-desc-box bg-gray-900 text-gray-200"
        >
          <p
            class="text-3xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
          >
            {{ this.passive.name }}
          </p>
          <div class="flex h-4/5 flex-col justify-around">
            <p class="text-lg my-4">{{ this.passive.description1 }}</p>
            <p class="text-lg my-4" v-if="this.passive.description2">
              {{ this.passive.description2 }}
            </p>
            <p class="text-lg my-4" v-if="this.passive.description3">
              {{ this.passive.description3 }}
            </p>
          </div>
        </div>
        <div class="w-1/2 h-80 border border-black">Insert Video Here</div>
      </div>
      <div v-if="activeAbility === 2" class="flex flex-row w-4/5 items-center">
        <div
          class="w-1/2 p-4 h-fit border-2 border-black ability-desc-box bg-gray-900 text-gray-200"
        >
          <p
            class="text-3xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
          >
            {{ this.basicAttack.name }}
          </p>
          <div class="flex h-4/5 flex-col justify-around">
            <p class="text-lg my-4">{{ this.basicAttack.description1 }}</p>
            <p class="text-lg my-4" v-if="this.basicAttack.description2">
              {{ this.basicAttack.description2 }}
            </p>
            <p class="text-lg my-4" v-if="this.basicAttack.description3">
              {{ this.basicAttack.description3 }}
            </p>
          </div>
        </div>
        <div class="w-1/2 h-80 border border-black">Insert Video Here</div>
      </div>
      <div v-if="activeAbility === 3" class="flex flex-row w-4/5 items-center">
        <div
          class="w-1/2 p-4 h-fit border-2 border-black ability-desc-box bg-gray-900 text-gray-200"
        >
          <p
            class="text-3xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
          >
            {{ this.alternate.name }}
          </p>
          <div class="flex h-4/5 flex-col justify-around">
            <p class="text-lg my-4">{{ this.alternate.description1 }}</p>
            <p class="text-lg my-4" v-if="this.alternate.description2">
              {{ this.alternate.description2 }}
            </p>
            <p class="text-lg my-4" v-if="this.alternate.description3">
              {{ this.alternate.description3 }}
            </p>
          </div>
        </div>
        <div class="w-1/2 h-80 border border-black">Insert Video Here</div>
      </div>
      <div v-if="activeAbility === 4" class="flex flex-row w-4/5 items-center">
        <div
          class="w-1/2 p-4 h-fit border-2 border-black ability-desc-box bg-gray-900 text-gray-200"
        >
          <p
            class="text-3xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
          >
            {{ this.primary.name }}
          </p>
          <div class="flex h-4/5 flex-col justify-around">
            <p class="text-lg my-4">{{ this.primary.description1 }}</p>
            <p class="text-lg my-4" v-if="this.primary.description2">
              {{ this.primary.description2 }}
            </p>
            <p class="text-lg my-4" v-if="this.primary.description3">
              {{ this.primary.description3 }}
            </p>
          </div>
        </div>
        <div class="w-1/2 h-80 border border-black">Insert Video Here</div>
      </div>
      <div v-if="activeAbility === 5" class="flex flex-row w-4/5 items-center">
        <div
          class="w-1/2 p-4 h-fit border-2 border-black ability-desc-box bg-gray-900 text-gray-200"
        >
          <p
            class="text-3xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
          >
            {{ this.secondary.name }}
          </p>
          <div class="flex h-4/5 flex-col justify-around">
            <p class="text-lg my-4">{{ this.secondary.description1 }}</p>
            <p class="text-lg my-4" v-if="this.secondary.description2">
              {{ this.secondary.description2 }}
            </p>
            <p class="text-lg my-4" v-if="this.passive.description3">
              {{ this.secondary.description3 }}
            </p>
          </div>
        </div>
        <div class="w-1/2 h-80 border border-black">Insert Video Here</div>
      </div>
      <div v-if="activeAbility === 6" class="flex flex-row w-4/5 items-center">
        <div
          class="w-1/2 p-4 h-fit border-2 border-black ability-desc-box bg-gray-900 text-gray-200"
        >
          <p
            class="text-3xl bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text"
          >
            {{ this.ultimate.name }}
          </p>
          <div class="flex h-4/5 flex-col justify-around">
            <p class="text-lg my-4">{{ this.ultimate.description1 }}</p>
            <p class="text-lg my-4" v-if="this.ultimate.description2">
              {{ this.ultimate.description2 }}
            </p>
            <p class="text-lg my-4" v-if="this.ultimate.description3">
              {{ this.ultimate.description3 }}
            </p>
          </div>
        </div>
        <div class="w-1/2 h-80 border border-black">Insert Video Here</div>
      </div>
    </div>
    <!-- Hero Builds -->
    <div class="flex w-auto bg-gray-900 text-gray-200 h-auto mb-16 mr-16 ml-16">
      <div class="w-full h-auto flex px-24">
        <div class="flex justify-left items-center w-1/3">
          <h1 class="text-3xl text-gray-200">Build Name</h1>
        </div>
        <div class="flex">
          <div class="w-fit h-fit border rounded-xl border-predYellow/65 m-2">
            <img
              class="w-24 h-24 bg-gray-800 rounded-xl"
              src="@/assets/items/OrbOfEnlightenment.webp"
            />
          </div>
          <div class="w-fit h-fit border rounded-xl border-predYellow/65 m-2">
            <img
              class="w-24 h-24 bg-gray-800 rounded-xl"
              src="@/assets/items/OrbOfEnlightenment.webp"
            />
          </div>
          <div class="w-fit h-fit border rounded-xl border-predYellow/65 m-2">
            <img
              class="w-24 h-24 bg-gray-800 rounded-xl"
              src="@/assets/items/OrbOfEnlightenment.webp"
            />
          </div>
          <div class="w-fit h-fit border rounded-xl border-predYellow/65 m-2">
            <img
              class="w-24 h-24 bg-gray-800 rounded-xl"
              src="@/assets/items/OrbOfEnlightenment.webp"
            />
          </div>
          <div class="w-fit h-fit border rounded-xl border-predYellow/65 m-2">
            <img
              class="w-24 h-24 bg-gray-800 rounded-xl"
              src="@/assets/items/OrbOfEnlightenment.webp"
            />
          </div>
          <div class="w-fit h-fit border rounded-xl border-predYellow/65 m-2">
            <img
              class="w-24 h-24 bg-gray-800 rounded-xl"
              src="@/assets/items/OrbOfEnlightenment.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { heroesCollection } from '@/includes/firebase'

export default {
  name: 'HeroView',
  data() {
    return {
      activeAbility: 1,
      hero: [],
      passive: [],
      basicAttack: [],
      alternate: [],
      primary: [],
      secondary: [],
      ultimate: []
    }
  },
  async created() {
    const heroSnapshot = await heroesCollection.doc(this.$route.params.id).get()
    if (!heroSnapshot.exists) {
      this.$router.push({ name: 'builds' })
      return
    }
    this.hero = heroSnapshot.data()

    const passiveSnapshot = await heroesCollection
      .doc(this.$route.params.id)
      .collection('abilities')
      .doc('passive')
      .get()
    if (!passiveSnapshot.exists) {
      this.$router.push({ name: 'heroes' })
      return
    }
    this.passive = passiveSnapshot.data()

    const basicAttackSnapshot = await heroesCollection
      .doc(this.$route.params.id)
      .collection('abilities')
      .doc('basic-attack')
      .get()
    if (!basicAttackSnapshot.exists) {
      this.$router.push({ name: 'heroes' })
      return
    }
    this.basicAttack = basicAttackSnapshot.data()

    const alternateSnapshot = await heroesCollection
      .doc(this.$route.params.id)
      .collection('abilities')
      .doc('alternate')
      .get()
    if (!alternateSnapshot.exists) {
      this.$router.push({ name: 'heroes' })
      return
    }
    this.alternate = alternateSnapshot.data()

    const primarySnapshot = await heroesCollection
      .doc(this.$route.params.id)
      .collection('abilities')
      .doc('primary')
      .get()
    if (!primarySnapshot.exists) {
      this.$router.push({ name: 'heroes' })
      return
    }
    this.primary = primarySnapshot.data()

    const secondarySnapshot = await heroesCollection
      .doc(this.$route.params.id)
      .collection('abilities')
      .doc('secondary')
      .get()
    if (!secondarySnapshot.exists) {
      this.$router.push({ name: 'heroes' })
      return
    }
    this.secondary = secondarySnapshot.data()

    const ultimateSnapshot = await heroesCollection
      .doc(this.$route.params.id)
      .collection('abilities')
      .doc('ultimate')
      .get()
    if (!ultimateSnapshot.exists) {
      this.$router.push({ name: 'heroes' })
      return
    }
    this.ultimate = ultimateSnapshot.data()
  }
}
</script>
