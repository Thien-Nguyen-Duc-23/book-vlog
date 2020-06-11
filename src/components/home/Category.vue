<template>
  <!-- Category Section Start -->
  <div id="rs-category" class="rs-category nav-style pt-70 pb-70">
    <div class="container">
        <div class="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-autoplay-timeout="8000" data-smart-speed="2000" data-dots="false" data-nav="false" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="false" data-ipad-device2="1" data-ipad-device-nav2="true" data-ipad-device-dots2="false" data-md-device="3" data-md-device-nav="true" data-md-device-dots="false">
          <!-- <div v-for="category in categoriesHome" :key="category.id" class="single-category hover-grow" >
          <!-- <div class="single-category hover-grow" > -->
            <!-- <div class="category-part">
                <a href="categories5.html"><img src="/static/images/category/home-category/2.jpg" alt="Category Image"></a>
                <div class="category-title">
                    <h3><a href="categories5.html">Lifestyle</a></h3>
                </div>
            </div>
          </div> -->
          <div class="single-category hover-grow" >
            <div class="category-part">
                <a href="categories5.html"><img src="/static/images/category/home-category/2.jpg" alt="Category Image"></a>
                <div class="category-title">
                    <h3><a href="categories5.html">Lifestyle</a></h3>
                </div>
            </div>
          </div>
          <div class="single-category hover-grow" >
            <div class="category-part">
                <a href="categories5.html"><img src="/static/images/category/home-category/2.jpg" alt="Category Image"></a>
                <div class="category-title">
                    <h3><a href="categories5.html">Lifestyle</a></h3>
                </div>
            </div>
          </div>
          <div class="single-category hover-grow" >
            <div class="category-part">
                <a href="categories5.html"><img src="/static/images/category/home-category/2.jpg" alt="Category Image"></a>
                <div class="category-title">
                    <h3><a href="categories5.html">Lifestyle</a></h3>
                </div>
            </div>
          </div>
          <div class="single-category hover-grow" >
            <div class="category-part">
                <a href="categories5.html"><img src="/static/images/category/home-category/2.jpg" alt="Category Image"></a>
                <div class="category-title">
                    <h3><a href="categories5.html">Lifestyle</a></h3>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  <!-- Category Section End -->
</template>
<script>
  import {HTTP} from '../store/getURL.js';

  export default {
    data: () => ({
      categoriesHome: [],
      errors: []
    }),
    created() {
       HTTP.get('book/index')
      .then(response => {
        const { books } = response.data.data;
        this.categoriesHome = books;
        console.log(this.categoriesHome);
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    methods: {
      getImage(image){
        return image;
      }
    }
  }
</script>
