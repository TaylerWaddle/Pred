<template>
  <!-- Filter Options -->
  <div class="flex items-center justify-center my-8">
    <!-- Tier 1 -->
    <div
      data-tip="Tier 1"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button class="h-6 w-6">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z" />
        </svg>
      </button>
    </div>

    <!-- Tier 2 -->
    <div
      data-tip="Tier 2"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"
          />
        </svg>
      </button>
    </div>
    <!-- Tier 3 -->
    <div
      data-tip="Tier 3"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="m296-105-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"
          />
        </svg>
      </button>
    </div>
    <!-- Physical Power -->
    <div
      data-tip="Physical Power"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          height="32"
          width="32"
        >
          <path
            d="M48.8,15.2l-1.21,3.65a1.87,1.87,0,0,1-.56.95l-4.36,4.36L29.12,37.71l-3.48,3.48-2.83-2.83L32,29.17,43.88,17.29C45.16,16,47.1,15.77,48.8,15.2Z"
          />
          <path
            d="M48.8,15.2l-1.21,3.65a1.87,1.87,0,0,1-.56.95l-4.36,4.36L29.12,37.71l-3.48,3.48-2.83-2.83L32,29.17,43.88,17.29C45.16,16,47.1,15.77,48.8,15.2Z"
          />
          <polygon points="20.69 44.73 15.03 50.38 13.62 48.97 19.27 43.31 20.69 44.73" />
          <polygon points="20.69 44.73 15.03 50.38 13.62 48.97 19.27 43.31 20.69 44.73" />
          <path d="M18.56,37l8.49,8.49-1.41,1.41-8.49-8.49Z" />
          <path d="M27.05,45.44l-1.41,1.41-8.49-8.49L18.56,37Z" />
        </svg>
      </button>
    </div>
    <!-- Magical Power -->
    <div
      data-tip="Magical Power"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
          />
        </svg>
      </button>
    </div>
    <!-- Physical Penetration -->
    <div
      data-tip="Physical Pen"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            style="enable-background: new 0 0 64 64"
            xml:space="preserve"
            height="24"
            width="24"
          >
            <g>
              <path
                d="M54,15.7c0-0.2,0-0.4-0.1-0.5c-0.3-0.5-0.9-0.6-1.4-0.4c-1.9,1.1-4.2,1.8-6.5,1.8c-6.6,0-12.1-4.9-12.9-11.4
		c-0.1-0.5-0.5-0.9-1-0.9c-0.6-0.1-1.1,0.3-1.2,0.9c-0.8,6.5-6.4,11.4-12.9,11.4c-2.3,0-4.5-0.6-6.5-1.8C10.9,14.5,10,15,10,15.7
		v22.9C10.1,50.7,31.2,61,32.4,60.5c6.7-2.9,22.1-12.4,21.6-21.9C54,38.6,54,15.7,54,15.7z M52,38.6c0.3,8.7-14.5,17.4-20,19.9
		c-2.9-1.4-20-9.9-20-19.9V17.4c7.6,3.5,17.2-0.6,20-8.3c2.8,7.8,12.5,11.8,20,8.3V38.6z"
              />
              <path
                d="M4,13c0.6,0,1-0.4,1-1V5h7c1.3,0,1.3-2,0-2c0,0-8,0-8,0C3.4,3,3,3.4,3,4v8C3,12.6,3.4,13,4,13z"
              />
              <path
                d="M60,3h-8c-1.3,0-1.3,2,0,2c0,0,7,0,7,0v7c0,1.3,2,1.3,2,0c0,0,0-8,0-8C61,3.4,60.6,3,60,3z"
              />
              <path
                d="M60,51c-0.6,0-1,0.4-1,1v7h-7c-1.3,0-1.3,2,0,2c0,0,8,0,8,0c0.6,0,1-0.4,1-1v-8C61,51.4,60.6,51,60,51z"
              />
              <path
                d="M12,59H5v-7c0-1.3-2-1.3-2,0c0,0,0,8,0,8c0,0.6,0.4,1,1,1h8C13.3,61,13.3,59,12,59z"
              />
            </g>
          </svg>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            class="absolute bottom-0"
          >
            <path
              d="M48.8,15.2l-1.21,3.65a1.87,1.87,0,0,1-.56.95l-4.36,4.36L29.12,37.71l-3.48,3.48-2.83-2.83L32,29.17,43.88,17.29C45.16,16,47.1,15.77,48.8,15.2Z"
            />
            <path
              d="M48.8,15.2l-1.21,3.65a1.87,1.87,0,0,1-.56.95l-4.36,4.36L29.12,37.71l-3.48,3.48-2.83-2.83L32,29.17,43.88,17.29C45.16,16,47.1,15.77,48.8,15.2Z"
            />
            <polygon points="20.69 44.73 15.03 50.38 13.62 48.97 19.27 43.31 20.69 44.73" />
            <polygon points="20.69 44.73 15.03 50.38 13.62 48.97 19.27 43.31 20.69 44.73" />
            <path d="M18.56,37l8.49,8.49-1.41,1.41-8.49-8.49Z" />
            <path d="M27.05,45.44l-1.41,1.41-8.49-8.49L18.56,37Z" />
          </svg>
        </div>
      </button>
    </div>
    <!-- Magical Penetration -->
    <div
      data-tip="Magical Pen"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            style="enable-background: new 0 0 64 64"
            xml:space="preserve"
            height="24"
            width="24"
          >
            <g>
              <path
                d="M54,15.7c0-0.2,0-0.4-0.1-0.5c-0.3-0.5-0.9-0.6-1.4-0.4c-1.9,1.1-4.2,1.8-6.5,1.8c-6.6,0-12.1-4.9-12.9-11.4
		c-0.1-0.5-0.5-0.9-1-0.9c-0.6-0.1-1.1,0.3-1.2,0.9c-0.8,6.5-6.4,11.4-12.9,11.4c-2.3,0-4.5-0.6-6.5-1.8C10.9,14.5,10,15,10,15.7
		v22.9C10.1,50.7,31.2,61,32.4,60.5c6.7-2.9,22.1-12.4,21.6-21.9C54,38.6,54,15.7,54,15.7z M52,38.6c0.3,8.7-14.5,17.4-20,19.9
		c-2.9-1.4-20-9.9-20-19.9V17.4c7.6,3.5,17.2-0.6,20-8.3c2.8,7.8,12.5,11.8,20,8.3V38.6z"
              />
              <path
                d="M4,13c0.6,0,1-0.4,1-1V5h7c1.3,0,1.3-2,0-2c0,0-8,0-8,0C3.4,3,3,3.4,3,4v8C3,12.6,3.4,13,4,13z"
              />
              <path
                d="M60,3h-8c-1.3,0-1.3,2,0,2c0,0,7,0,7,0v7c0,1.3,2,1.3,2,0c0,0,0-8,0-8C61,3.4,60.6,3,60,3z"
              />
              <path
                d="M60,51c-0.6,0-1,0.4-1,1v7h-7c-1.3,0-1.3,2,0,2c0,0,8,0,8,0c0.6,0,1-0.4,1-1v-8C61,51.4,60.6,51,60,51z"
              />
              <path
                d="M12,59H5v-7c0-1.3-2-1.3-2,0c0,0,0,8,0,8c0,0.6,0.4,1,1,1h8C13.3,61,13.3,59,12,59z"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            class="absolute bottom-0"
          >
            <path
              d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
            />
          </svg>
        </div>
      </button>
    </div>
    <!-- Crit Chance -->
    <div
      data-tip="Crit Chance"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z"
          />
        </svg>
      </button>
    </div>

    <!-- Attack Speed -->
    <div
      data-tip="Attack Speed"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"
          />
        </svg>
      </button>
    </div>

    <!-- Lifesteal -->
    <div
      data-tip="Lifesteal"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 -960 960 960"
            width="16"
            class="absolute top-1.5 left-1"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </div>
      </button>
    </div>

    <!-- Magical Lifesteal -->
    <div
      data-tip="Magical Lifesteal"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 -960 960 960"
            width="16"
            class="absolute bottom-0.5 right-1"
          >
            <path
              d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
            />
          </svg>
        </div>
      </button>
    </div>

    <!-- Omnivamp -->
    <div
      data-tip="Omnivamp"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 -960 960 960"
            width="16"
            class="absolute top-1.5 left-1"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </div>
      </button>
    </div>

    <!-- Physical Armor -->
    <div
      data-tip="Physical Armor"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            class=""
          >
            <path
              d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"
            />
          </svg>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            height="24"
            width="24"
            class="absolute bottom-0"
          >
            <path
              d="M48.8,15.2l-1.21,3.65a1.87,1.87,0,0,1-.56.95l-4.36,4.36L29.12,37.71l-3.48,3.48-2.83-2.83L32,29.17,43.88,17.29C45.16,16,47.1,15.77,48.8,15.2Z"
            />
            <path
              d="M48.8,15.2l-1.21,3.65a1.87,1.87,0,0,1-.56.95l-4.36,4.36L29.12,37.71l-3.48,3.48-2.83-2.83L32,29.17,43.88,17.29C45.16,16,47.1,15.77,48.8,15.2Z"
            />
            <polygon points="20.69 44.73 15.03 50.38 13.62 48.97 19.27 43.31 20.69 44.73" />
            <polygon points="20.69 44.73 15.03 50.38 13.62 48.97 19.27 43.31 20.69 44.73" />
            <path d="M18.56,37l8.49,8.49-1.41,1.41-8.49-8.49Z" />
            <path d="M27.05,45.44l-1.41,1.41-8.49-8.49L18.56,37Z" />
          </svg>
        </div>
      </button>
    </div>
    <!-- Magical Armor -->
    <div
      data-tip="Magical Armor"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            class="absolute bottom-0 z-10"
          >
            <path
              d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
            />
          </svg>
        </div>
      </button>
    </div>
    <!-- Tenacity -->
    <div
      data-tip="Tenacity"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M240-500v-220h220v220H240Zm0 260v-220h220v220H240Zm260-260v-220h220v220H500Zm0 260v-220h220v220H500ZM320-580h60v-60h-60v60Zm260 0h60v-60h-60v60ZM320-320h60v-60h-60v60Zm260 0h60v-60h-60v60ZM380-580Zm200 0Zm0 200Zm-200 0ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"
          />
        </svg>
      </button>
    </div>

    <!-- Max Health -->
    <div
      data-tip="Max Health"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
          />
        </svg>
      </button>
    </div>
    <!-- Max Mana -->
    <div
      data-tip="Max Mana"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"
          />
        </svg>
      </button>
    </div>

    <!-- Health Regeneration -->
    <div
      data-tip="Health Regen"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            class="absolute bottom-1"
          >
            <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z" />
          </svg>
        </div>
      </button>
    </div>
    <!-- Mana Regeneration -->
    <div
      data-tip="Mana Regen"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            class="absolute bottom-1"
          >
            <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z" />
          </svg>
        </div>
      </button>
    </div>

    <!-- Heal and Shield Power -->
    <div
      data-tip="Heal/Shield Power"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M480-320q102-92 131-129.5t29-74.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-580q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5 35t22 37.5q17 21.5 48.5 52.5t84.5 79Zm0 240q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"
          />
        </svg>
      </button>
    </div>

    <!-- Ability Haste -->
    <div
      data-tip="Ability Haste"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Zm320-80Zm0-640Z"
          />
        </svg>
      </button>
    </div>

    <!-- Movement Speed -->
    <div
      data-tip="Movement Speed"
      class="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
    >
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="m216-160-56-56 384-384H440v80h-80v-160h233q16 0 31 6t26 17l120 119q27 27 66 42t84 16v80q-62 0-112.5-19T718-476l-40-42-88 88 90 90-262 151-40-69 172-99-68-68-266 265Zm-96-280v-80h200v80H120ZM40-560v-80h200v80H40Zm739-80q-33 0-57-23.5T698-720q0-33 24-56.5t57-23.5q33 0 57 23.5t24 56.5q0 33-24 56.5T779-640Zm-659-40v-80h200v80H120Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatFilters'
}
</script>
