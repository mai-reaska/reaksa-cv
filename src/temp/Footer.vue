<template>
  <div>
    <footer class="mt-32 sm:mt-40" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div
          class="border-t border-gray-900/10 pt-20 xl:grid xl:grid-cols-3 xl:gap-8"
        >
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">
                  Solutions
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li
                    v-for="item in footerNavigation.solutions"
                    :key="item.name"
                  >
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">
                  Support
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.support" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.company" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.legal" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-10 xl:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form class="mt-6 sm:flex sm:max-w-md">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autocomplete="email"
                required=""
                class="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24"
        >
          <div class="flex space-x-6 md:order-2">
            <a
              v-for="item in footerNavigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
</script>
