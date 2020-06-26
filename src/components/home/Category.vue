<template>
  <!-- Category Section Start -->
  <div id="rs-category" class="rs-category nav-style pt-70 pb-70">
    <div class="container">
      <template v-if="categoriesHome.length > 0">
        <div class="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-autoplay-timeout="8000" data-smart-speed="2000" data-dots="false" data-nav="false" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="false" data-ipad-device2="1" data-ipad-device-nav2="true" data-ipad-device-dots2="false" data-md-device="3" data-md-device-nav="true" data-md-device-dots="false">
          <div v-for="category in categoriesHome" :key="category.id" class="single-category hover-grow">
            <div class="single-category hover-grow" >
              <div class="category-part">
                <a @click="bookOfCategory(category)"><img v-bind:src="getImage(category.cover)" alt="Category Image"></a>
                <div class="category-title">
                    <h3><a @click="bookOfCategory(category)">{{ category.name }}</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <!-- Category Section End -->
</template>
<script>
  import {HTTP} from '../../store/getURL'
  import router from '../../router/index'

  export default {
    data: () => ({
      categoriesHome: [],
      errors: [],
      isLoading: false
    }),
    created() {
      //
    },
    methods: {
      getImage(image) {
        return image;
      },
      slider() {
        return new Promise((resolve, reject) => {
          HTTP.get('category/list')
          .then(response => {
            const { categories } = response.data.data;
            const listCategories = [];
            $.each(categories, function(key, value) {
              listCategories.push(value);
              if (Array.isArray(value.children_category) && value.children_category.length) {
                $.each(value.children_category, function(subKey, subValue) {
                  listCategories.push(subValue);
                });
              }
            });
            
            this.categoriesHome = listCategories;
            resolve();
          })
          .catch(e => {
            this.errors.push(e)
          })
        });
      },
      bookOfCategory(category) {
        this.$router.push({ name: 'BookOfCategory', params:{slug: category.slug} });
      },
    },
    mounted () {
      this.slider().then(() => {
        $('.owl-carousel').owlCarousel({
          margin: 0,
          nav: true,
          navText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
          ],
          loop: true,
          dots: false,
          items: 3,
          autoplay: true,
          animateOut: 'fadeOut',
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          responsiveClass: true,
          margin: 30,
          smartSpeed: 2000,
        });
      })
    },
  }
</script>
