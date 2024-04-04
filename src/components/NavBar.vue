<template>
  <!-- Nav Button -->
  <div
    class="bg-gray-900 fixed left-0 top-0 w-5 min-h-full shadow-xl shadow-predYellow overflow-auto"
  ></div>
  <div class="overflow-hidden">
    <div
      class="rounded-full h-12 w-12 bg-gray-900 top-10 -left-3 absolute flex justify-center items-center z-40"
    >
      <button @click="navIsOpen = !navIsOpen" type="button">
        <a href="#"></a
        ><svg
          class="fill-stone-100 z-40"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M148.078-261.078v-55.96h663.844v55.96H148.078Zm0-191.346v-55.96h663.844v55.96H148.078Zm0-191.346v-55.96h663.844v55.96H148.078Z"
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- NavBar Medium Screens - SideNav -->
  <div
    :class="navIsOpen ? 'flex' : 'hidden'"
    class="fixed left-0 top-0 text-white z-40 bg-gray-900 w-44 h-full flex-wrap flex-col items-start shadow-2xl shadow-predYellow"
  >
    <div class="py-8 bg-gray-900">
      <img src="@/assets/pred_logo_3.png" class="px-8" />
    </div>

    <div
      class="rounded-full h-12 w-12 bg-gray-900 absolute top-10 left-36 flex justify-center items-center"
    >
      <button @click="navIsOpen = !navIsOpen" type="button">
        <a href="#"></a
        ><svg
          class="fill-stone-100"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M148.078-261.078v-55.96h663.844v55.96H148.078Zm0-191.346v-55.96h663.844v55.96H148.078Zm0-191.346v-55.96h663.844v55.96H148.078Z"
          />
        </svg>
      </button>
    </div>

    <!-- Links -->
    <ul class="w-full mt-2">
      <li class="py-3 px-6 text-lg font-medium text-white rounded-lg hover:bg-gray-800 w-full">
        <router-link :to="{ name: 'builds' }" @click.prevent="navIsOpen = !navIsOpen"
          >Builds</router-link
        >
      </li>
      <li class="py-3 px-6 text-lg font-medium text-white rounded-lg hover:bg-gray-800 w-full">
        <router-link :to="{ name: 'items' }" @click.prevent="navIsOpen = !navIsOpen"
          >Items</router-link
        >
      </li>
      <li class="py-3 px-6 text-lg font-medium text-white rounded-lg hover:bg-gray-800 w-full">
        <router-link :to="{ name: 'heroes' }" @click.prevent="navIsOpen = !navIsOpen"
          >Heroes</router-link
        >
      </li>
      <li class="py-3 px-6 text-lg font-medium text-white rounded-lg hover:bg-gray-800 w-full">
        <router-link :to="{ name: 'profile' }" @click.prevent="navIsOpen = !navIsOpen"
          >Profile</router-link
        >
      </li>
    </ul>

    <!-- Login/Register Button -->
    <!-- <div v-if="!userStore.userLoggedIn">
      <a
        class="50px py-3 px-8 flex text-lg text-white rounded-lg hover:bg-zinc-700 hover:text-outline_green hover:text-opacity-60 w-48"
        href="#"
        @click.prevent="toggleAuthModal(), (navIsOpen = !navIsOpen)"
        >Login / Register</a
      >
    </div>
    <div v-else>
      <a
        class="50px py-3 px-8 flex text-lg text-white rounded-lg hover:bg-zinc-700 hover:text-outline_green hover:text-opacity-60 w-48"
        href="#"
        @click.prevent="userStore.signOut"
        >Logout</a
      >
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navIsOpen: false
    }
  }
}
</script>
