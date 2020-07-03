<template>
    <div>
      <!--Header Start-->
      <Header></Header>
      <!--Header End-->

      <!-- Breadcrumbs Start -->
      <div class="rs-breadcrumbs">
          <div class="breadcrumbs-image" style="height: 190px;">
              <img v-bind:src="getImage(book.conver)">
              <div class="breadcrumbs-inner">
                  <div class="container">
                      <div class="breadcrumbs-text">
                          <div class="categories">
                              <ul>
                                  <li><a href="categories.html">{{ book.isbn }}</a></li>
                              </ul>
                          </div>
                          <h1 class="breadcrumbs-title capitalize">{{ book.title }}</h1>
                          <div class="post-date-author">
                              <ul>
                                  <li><i class="fa fa-calendar"></i>{{ date | formatDate }}</li>
                                  <li><a href="#"><i class="fa fa-user-o"></i>{{ book.author }}</a></li>
                                  <li><a href="#">{{ book.view_count }} Views</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Breadcrumbs End -->

      <div id="rs-articles" class="rs-articles post-style1 home2style pt-100 pb-100 md-pt-70 md-pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 md-mb-50">
                        <!-- Single Article Part Start -->
                        <div class="single-article-part">
                            <div class="article-grid hover-shine mb-40">
                                <div v-html="book.content">
                                  {{ book.content }}
                                </div>
                            </div>
                        </div>
                        <!-- Single Article Part End -->

                        <!-- Article Bottom Part Start -->
                        <div class="article-bottom">
                            <div class="article-tags clearfix">
                                <div class="tag-part">
                                    <p>Tags: </p>
                                    <a href="#">Diploma</a>
                                    <a href="#">Sports</a>
                                    <a href="#">Art</a>
                                </div>
                                <div class="social-icons border-none padding-0 margin-0">
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

                            <div class="article-nav">
                                <ul>
                                    <li class="prev">
                                        <a href="#">
                                            <i class="fa fa-angle-left"></i>
                                            <span>Previous Post</span>
                                        </a>
                                    </li>
                                    <li class="next">
                                        <a href="#">
                                            <span>Next Post</span>
                                            <i class="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="post-article-part">
                                <div class="article-grid home5style hover-shine mb-35 mr-20">
                                    <figure>
                                        <a href="standard-post.html"><img src="/static/images/slider/h1s1.jpg" alt="Single Articles"></a>
                                    </figure>
                                    <div class="article-heading">
                                        <div class="categories">
                                            <ul>
                                                <li><a href="#">Fashion</a></li>
                                                <li><a href="#">Winter</a></li>
                                            </ul>
                                        </div>
                                        <h3 class="article-title margin-0"><a href="standard-post.html">Easy To Use Gallery</a></h3>
                                        <div class="post-date-author">
                                            <ul>
                                                <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                                                <li><a href="#"><i class="fa fa-user-o"></i>Yammi Guan</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="article-grid home5style hover-shine mb-35 mr-20">
                                    <figure>
                                        <a href="standard-post.html"><img src="/static/images/slider/h1s1.jpg" alt="Single Articles"></a>
                                    </figure>
                                    <div class="article-heading">
                                        <div class="categories">
                                            <ul>
                                                <li><a href="#">Fashion</a></li>
                                                <li><a href="#">Winter</a></li>
                                            </ul>
                                        </div>
                                        <h3 class="article-title margin-0"><a href="standard-post.html">Easy To Use Gallery</a></h3>
                                        <div class="post-date-author">
                                            <ul>
                                                <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                                                <li><a href="#"><i class="fa fa-user-o"></i>Yammi Guan</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="article-grid home5style hover-shine mb-35 mr-0">
                                    <figure>
                                        <a href="standard-post.html"><img src="/static/images/slider/h1s1.jpg" alt="Single Articles"></a>
                                    </figure>
                                    <div class="article-heading">
                                        <div class="categories">
                                            <ul>
                                                <li><a href="#">Fashion</a></li>
                                                <li><a href="#">Winter</a></li>
                                            </ul>
                                        </div>
                                        <h3 class="article-title margin-0"><a href="standard-post.html">Easy To Use Gallery</a></h3>
                                        <div class="post-date-author">
                                            <ul>
                                                <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                                                <li><a href="#"><i class="fa fa-user-o"></i>Yammi Guan</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Article Bottom Part End -->

                        <!-- Comment Part Start -->
                        <div class="comment-block">
                            <h3 class="comment-title uppercase margin-0">Recent Comments</h3>
                            <ul class="comment-list">
                                <li>
                                    <div class="single-comment">
                                        <div class="comment-part">
                                            <div class="comment-img">
                                                <img alt="Avatar" src="/static/images/slider/h1s1.jpg" height="90" width="90">
                                            </div>
                                            <div class="comment-text">
                                                <div class="comment-head mb-10 clearfix">
                                                    <h3 class="comment-title margin-0">Thesera Minton</h3>
                                                    <p class="comment-meta margin-0">
                                                        <i class="fa fa-calendar"></i><time datetime="2019-05-02">June 27, 2019</time>
                                                    </p>
                                                </div>
                                                <div class="comment-body">
                                                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor incidi dunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
                                                    <p class="comment-reply"><a href="#">Reply</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="child-comment">
                                        <li>
                                            <div class="single-comment">
                                                <div class="comment-part">
                                                    <div class="comment-img">
                                                        <img alt="Avatar" src="/static/images/slider/h1s1.jpg" height="90" width="90">
                                                    </div>
                                                    <div class="comment-text">
                                                        <div class="comment-head mb-10 clearfix">
                                                            <h3 class="comment-title margin-0">Stuard Trabels</h3>
                                                            <p class="comment-meta margin-0">
                                                                <i class="fa fa-calendar"></i><time datetime="2019-05-02">June 28, 2019</time>
                                                            </p>
                                                        </div>
                                                        <div class="comment-body">
                                                            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor incidi dunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
                                                            <p class="comment-reply"><a href="#">Reply</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- #comment-## -->
                                    </ul>
                                    <!-- .children -->
                                </li>
                                <!-- #comment-## -->
                                <li>
                                    <div class="single-comment no-border">
                                        <div class="comment-part mb-0">
                                            <div class="comment-img">
                                                <img alt="Avatar" src="/static/images/slider/h1s1.jpg" height="90" width="90">
                                            </div>
                                            <div class="comment-text">
                                                <div class="comment-head mb-10 clearfix">
                                                    <h3 class="comment-title margin-0">John Lamphard</h3>
                                                    <p class="comment-meta margin-0">
                                                        <i class="fa fa-calendar"></i><time datetime="2019-05-02">June 29, 2019</time>
                                                    </p>
                                                </div>
                                                <div class="comment-body">
                                                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor incidi dunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
                                                    <p class="comment-reply"><a href="#">Reply</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- #comment-## -->
                            </ul>
                            <div class="rs-contact-form comment-form pt-35">
                                <h3 class="comment-title uppercase mb-15">Leave Comment</h3>
                                <form id="contact-form" method="post" action="mailer.php">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-field">
                                                <label>Name *</label>
                                                <input type="text" id="name" name="name" required="">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-field">
                                                <label>Email *</label>
                                                <input type="email" id="email" name="email" required="">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-field">
                                                <label>Website</label>
                                                <input type="text" id="website" name="website" required="">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-field mb-30">
                                                <label>Comment</label>
                                                <textarea rows="7" id="message" name="message"></textarea>
                                            </div>
                                            <div class="form-button mt-30">
                                                <button type="submit" class="uppercase">Post Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Comment Part End -->
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
  import Instagram from '../common/Instagram.vue'
  import SearchModal from '../common/SearchModal.vue'
  import {HTTP} from '../../store/getURL'
  import axios from 'axios'

  export default {
    components: {
      Header,
      Footer,
      Sidebar,
      Instagram,
      SearchModal
    },
    data: () => ({
      book: [],
      errorsDetail: [],
      date: null,
    }),
    created() {
      HTTP.get('book/show/'+this.$route.params.slug)
      .then(response => {
        const { book } = response.data.data;
        this.book = book;
        this.date = book.created_at.date;
      })
      .catch(e => {
        this.errorsDetail.push(e)
      })
    },
    methods: {
      getImage(image){
        return image;
      }
    }
  }
</script>
