<template>
  <v-app id="home" class="app_home">
    <NavBar />
    <v-main fluid  style="opacity: 0.9;">
        <v-row > <!--未指定則子元素從左排列，且只會管到子元素，不管到子子元素 -->
          <v-col cols="12" > 
            <div class="mt-6 mb-9 text-center text-grey-lighten-3 bg-blue-grey-darken-1 " style="font-size: 2rem;opacity: 0.7;width: 100%">PhotoGraphy</div>
          </v-col>
          <v-col cols="12" class="d-flex justify-center" > 
            <v-menu open-on-click :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="pink-lighten-1"
                    v-bind="props"
                    width="200px"
                  >
                    Click me
                  </v-btn>
                </template>
                <v-list class="bg-pink-lighten-1">
                  <v-list-item
                    v-for="(item) in menus"
                    :key="item.title">
                    <v-menu open-on-click location="start" :close-on-content-click="false">
                      <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" variant="text" width="100%">{{ item.title }}</v-btn>
                      </template>
                      <v-list class="bg-pink-lighten-1">
                        <v-list-item v-for="(subitem) in item.subMenu" :key="subitem">
                          <v-btn 
                            variant="text" 
                            width="100%"
                            @click="showImage(subitem)" 
                            :prepend-icon="selectedSubMenuData(subitem) ? 'fa-solid fa-check' : null"
                            >
                            {{ subitem }}
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-list-item>
                </v-list>
              </v-menu>

            <div style="width: 10%;"></div>
            <v-menu open-on-hover :close-on-content-click="false"> <!--offset-y -->
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" width="200px">Hover me</v-btn> <!-- 不是v-on:click @click!!-->
                </template>
                <v-list>
                  <v-list-item v-for="(item) in menus" :key="item.title">
                    <v-menu open-on-hover location="end" :close-on-content-click="false">
                      <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" variant="text" width="100%" >{{ item.title }}</v-btn>
                      </template>
                      <v-list>
                        <v-list-item v-for="(subitem) in item.subMenu" :key="subitem">
                          <v-btn 
                            variant="text" 
                            width="100%" 
                            @click="showImage(subitem)" 
                            :prepend-icon="selectedSubMenuData(subitem) ? 'fa-solid fa-check' : null"
                            >
                            {{ subitem }}
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-list-item>
                </v-list>
              </v-menu>
          </v-col>
        </v-row>
        <v-row class="mt-16 " align="center" justify="center">
        <template v-for="(item) in sortedSubMenuData" :key="item.subTitle">
          <v-col col="12" sm="6" md="4" class="my-6"> 
            <v-hover v-slot="{ isHovering, props }">
              <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props" style="min-width: 225px">
                <v-img :src="item.img" height="225px" v-if="item.status" cover></v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
        </v-row>
      </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent, ref, computed} from 'vue';
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';

export default defineComponent({
  name: 'PhotoGraphy',
  components: {
    NavBar,
    FooterView,
  },
  setup() {
    const menus = ref([
      { title: 'Animal', subMenu: ['dog', 'cat'] },
      { title: 'People', subMenu: ['men', 'women'] },
      { title: 'Wallpaper', subMenu: ['landscape', 'galaxy'] },
    ]);

    const subMenuData = ref([
      {
        subTitle: "dog",
        img: require("@/assets/home/Photography/Dog.jpg"),
        status: false,
      },
      {
        subTitle: "cat",
        img: require("@/assets/home/Photography/Cat.jpg"),
        status: false,
      },
      {
        subTitle: "men",
        img: require("@/assets/home/Photography/Men.jpg"),
        status: false,
      },
      {
        subTitle: "women",
        img: require("@/assets/home/Photography/Women.jpg"),
        status: false,
      },
      {
        subTitle: "landscape",
        img: require("@/assets/home/Photography/Landscape.jpg"),
        status: false,
      },
      {
        subTitle: "galaxy",
        img: require("@/assets/home/Photography/Galaxy.jpg"),
        status: false,
      }
    ]);

    const sortedSubMenuData = computed(() => {
      return subMenuData.value.slice().sort((a, b) => {
        if (a.status && !b.status) {
          return -1;
        } else if (!a.status && b.status) {
          return 1;
        } else {
          return 0;
        }
      });
    });

    const selectedSubMenuData = computed(() => (subitem) => {
      if (subMenuData.value) {
        const foundItem = subMenuData.value.find(item => item.subTitle === subitem);
        return foundItem ? foundItem.status : null;
      }
      return null;
    });

    const showImage = (submenuItem) => {
      const index = subMenuData.value.findIndex(item => item.subTitle === submenuItem);
      subMenuData.value[index]["status"] = !subMenuData.value[index]["status"];
    };

    return {
      menus,
      subMenuData,
      sortedSubMenuData,
      selectedSubMenuData,
      showImage
    };
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
.app_home {
  background: url("@/assets/bg/bg04.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

<!--
  <v-img v-if="subMenuData[submenuItem].status" :src="subMenuData[submenuItem].img" height="225px" contain></v-img>
-->