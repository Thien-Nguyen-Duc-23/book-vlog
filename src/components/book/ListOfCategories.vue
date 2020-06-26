<template>
  <div>
    <!--Header Start-->
    <Header></Header>
    <!--Header End-->


    <!-- Breadcrumbs Start -->
    <div class="rs-breadcrumbs">
        <div class="breadcrumbs-image">
            <img src="/static/images/breadcrumbs/about.jpg" alt="Breadcrumbs Image">
            <div class="breadcrumbs-inner">
                <div class="container">
                    <div class="breadcrumbs-text">
                        <h1 class="breadcrumbs-title">Categories</h1>
                        <ul class="breadcrumbs-subtitle">
                            <li><a href="index.html">Home &gt;&gt;</a></li>
                            <li>Categories &gt;&gt;</li>
                            <li>{{ categoryName }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>                
    </div>
    <!-- Breadcrumbs End -->

    <!-- Recent Articles Start -->
    <div id="rs-articles" class="rs-articles home2style pt-100 pb-90 md-pt-70 md-pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 md-mb-30">
                    <div class="row">
                        <div v-for="bookOfCategory in bookOfCategories" :key="bookOfCategory.id" class="col-lg-6 col-md-6 blogBox moreBox">
                            <div class="article-grid hover-shine mb-45">
                                <figure>
                                    <a @click="bookDetail(bookOfCategory)"><img v-bind:src="getImage(bookOfCategory.conver)"></a>
                                </figure>
                                <div class="article-content">
                                    <div class="categories">
                                        <ul>
                                            <li><a href="#">{{ bookOfCategory.isbn }}</a></li>
                                        </ul>
                                    </div>
                                    <div class="post-date-author">
                                        <ul>
                                            <li><i class="fa fa-calendar"></i>{{ bookOfCategory.created_at.date | formatDate }}</li>
                                            <li><a href=""><i class="fa fa-user-o"></i>{{ bookOfCategory.author }}</a></li>
                                        </ul>
                                    </div>
                                    <h3 class="article-title"><a @click="bookDetail(bookOfCategory)">{{ bookOfCategory.short_title }}</a></h3>
                                    <div class="desc">
                                        {{ bookOfCategory.short_desc }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="loadMore" class="loadmore-btn text-center mt-40">
                        <a class="readon loadmore" href="#">Load More</a>
                    </div>
                </div>

                <!-- Sidebar start -->
                <Sidebar></Sidebar>
                <!-- Sidebar end -->
            </div>
        </div>
    </div>

    <!-- Instagram Gallery Section Start -->
    <Instagram></Instagram>
    <!-- Instagram Gallery Section End -->

    <!-- Footer Start -->
    <Footer></Footer>
    <!-- Footer End -->

    <!-- Scrool to Top Start -->
    <div id="scrollUp">
        <i class="fa fa-angle-up"></i>
    </div>
    <!-- Scrool to Top End -->

    <!-- Search Modal Start -->
    <SearchModal></SearchModal>
    <!-- Search Modal End -->
  </div>
</template>

<script>
  import Header from '../layout/Header.vue'
  import Footer from '../layout/Footer.vue'
  import Sidebar from '../layout/Sidebar.vue'
  import Slider from '../home/Slider.vue'
  import Category from '../home/Category.vue'
  import Instagram from '../common/Instagram.vue'
  import SearchModal from '../common/SearchModal.vue'
  import {HTTP} from '../../store/getURL'
  import router from '../../router/index'

  export default {
    components: {
      Header,
      Footer,
      Sidebar,
      Slider,
      Category,
      Instagram,
      SearchModal
    },
    data: () => ({
      bookOfCategories: [],
      errors: [],
      categoryName: null,
    }),
    created() {
      HTTP.get('category/book-of-category/'+this.$route.params.slug)
      .then(response => {
          console.log(response.data);
        const { books } = response.data.data;
        this.bookOfCategories = books;
        this.categoryName = this.$route.params.slug;
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    methods: {
      bookDetail(bookOfCategories) {
        this.$router.push({ name: 'BookDetail', params:{slug: bookOfCategories.slug} });
      },
      getImage(image){
        return image;
      }
    }
  }
</script>
