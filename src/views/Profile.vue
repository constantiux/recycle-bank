<template>
  <main>
    <Header
      :useArrow="false"
      title="Profile"
      sub="Edit your personal information"
    />
    <section class="mt-20">
      <div class="w-10/12 mx-auto flex flex-col items-center text-gray-300">
        <img
          class="rounded-full border-2 border-gray-500"
          width="150"
          src="/avatar.jpg"
        />
        <h1 class="font-semibold mt-4 text-xl">{{ user.name }}</h1>
        <p class="text-sm">Member since 20/01/2013</p>
      </div>
    </section>
    <section class="mt-10 flex justify-between gap-2">
      <template v-for="(item, x) in highlights" :key="x">
        <span class="text-gray-300 text-center text-sm">
          <p>{{ item.title }}</p>
          <p class="font-semibold">{{ item.value }} {{ item.prefix }}</p>
        </span>
      </template>
    </section>
    <section class="mt-16 text-gray-300">
      <template v-for="(item, x) in settings" :key="x">
        <List class="active:scale-95 duration-300" @click="navigate(item.to)">
          <template v-slot:start>
            <span class="text-sm py-2">
              <p class="font-medium text-base">{{ item.name }}</p>
              <p class="text-gray-400">{{ item.description }}</p>
            </span>
          </template>
          <template v-slot:end>
            <i class="fa fa-arrow-right text-green-600 text-lg"></i>
          </template>
        </List>
      </template>
    </section>
  </main>
</template>

<script setup>
import List from '@/components/List.vue';
import Header from '@/components/Header.vue';
import { useUser } from '@/stores/user';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import settings from '@/contents/settings.js';
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();
const { logout } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : '';
console.log(code);

//window.history.forward(1);

const router = useRouter();
const member = useUser();
const fullname = computed(() => member.fullname);
const highlights = computed(() => member.highlights);

const navigate = (path) => {
  setTimeout(() => {
    router.replace({ name: path });
  }, 300);
};

const handleLogout = () => {
  logout({
    returnTo: window.location.origin,
  });
  navigate('Login');
};
</script>
