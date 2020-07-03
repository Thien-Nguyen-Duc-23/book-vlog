<template>
  <div>
    <!--Header Start-->
    <Header></Header>
    <!--Header End-->

    <!-- Slider Section Start -->
    <Slider></Slider>
    <!-- Slider Section End -->

    <!-- Category Section Start -->
    <Category></Category>
    <!-- Category Section End -->

    <!-- Recent Articles Start -->
    <div id="rs-articles" class="rs-articles home2style pb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 md-mb-30">
                    <div class="article-grid hover-shine mb-40">
                        <figure>
                          <a href="standard-post.html"><img src="/static/images/recent-articles/single-article/1.jpg" alt="Single Articles"></a>
                        </figure>
                        <div class="article-content">
                            <div class="categories">
                              <ul>
                                  <li><a href="categories.html">Business</a></li>
                                  <li><a href="categories.html">Lifestyle</a></li>
                              </ul>
                            </div>
                            <div class="post-date-author">
                                <ul>
                                    <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                                    <li><a href="#"><i class="fa fa-user-o"></i>Yammi Guan</a></li>
                                    <li><a href="#">10 Comments</a></li>
                                </ul>
                            </div>
                            <h2 class="article-title title-single-style"><a href="standard-post.html">Turned on MacBook Pro Near Black Framed Eyeglasses</a></h2>
                            <p class="desc">
                                On the other hand, we denounce with righteous indignation the foult anuals dislike men who are so beguiled and demoralized by the nuhaiicharms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound toen sue; and equal blame belongs to those who fail in their duty.
                            </p>
                            <div class="continue-btn">
                                <a class="readon" href="#">Continue Reading</a>
                            </div>
                            <div class="social-icons">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vk"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="book in books" :key="book.id" class="col-lg-6 col-md-6 blogBox moreBox">
                            <div class="article-grid hover-shine mb-45">
                                <figure>
                                    <a @click="bookDetail(book)"><img v-bind:src="getImage(book.conver)"></a>
                                </figure>
                                <div class="article-content">
                                    <div class="categories">
                                        <ul>
                                            <li><a href="#">{{ book.isbn }}</a></li>
                                        </ul>
                                    </div>
                                    <div class="post-date-author">
                                        <ul>
                                            <li><i class="fa fa-calendar"></i>{{ book.created_at.date | formatDate }}</li>
                                            <li><a href=""><i class="fa fa-user-o"></i>{{ book.author }}</a></li>
                                        </ul>
                                    </div>
                                    <h3 class="article-title"><a @click="bookDetail(book)">{{ book.short_title }}</a></h3>
                                    <div class="desc">
                                        {{ book.short_desc }}
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
      books: [],
      errorsIndex: []
    }),
    created() {
      HTTP.get('book/index')
      .then(response => {
        const { books } = response.data.data;
        this.books = books;
      })
      .catch(e => {
        this.errorsIndex.push(e)
      })
    },
    methods: {
      bookDetail(book) {
        this.$router.push({ name: 'BookDetail', params:{slug: book.slug} });
      },
      getImage(image){
        return image;
      }
    }
  }
</script>
