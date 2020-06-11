<template>
  <div class="col-lg-4">
      <div class="article-sidebar">
          <div class="author-part mb-40">
              <div class="sidebar-title text-center">
                  <h3 class="title uppercase mb-50">About Us</h3>
              </div>
              <div class="author-img hover-shine text-center">
                  <figure>
                      <a href="#"><img src="/static/images/author/sidebar-author.jpg" alt="Author Image"></a>
                  </figure>
              </div>
              <div class="author-desc text-center">
                  <p>The other hand, we denounce with righteous indig nation the foult anuals dislike men who are so be guiled and demoralized</p>
              </div>
              <div class="author-sign text-center">
                  <img src="/static/images/author/sign.png" alt="Author Sign">
              </div>
              <div class="social-icons text-center">
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
          <div class="sidebar-newsletter mb-40">
              <div class="sidebar-title text-center">
                  <h3 class="uppercase margin-0">Subscribe to Newsletter</h3>
              </div>
              <form class="news-form">
                  <input type="text" class="form-input" placeholder="Email Address" required>
                  <button type="submit" class="form-button">Subscribe</button>
              </form>
              <div class="newsletter-text">
                  <p class="bold margin-0">Get the latest news stories in your inbox</p>
              </div>
          </div>
          <div class="popular-post mb-50">
              <div class="sidebar-title text-center">
                  <h3 class="title uppercase">Popular Post</h3>
              </div>
              <div class="single-post mb-18">
                  <div class="post-image hover-grow">
                      <a href="standard-post.html"><img src="/static/images/blog/1.jpg" alt="post image"></a>
                  </div>
                  <div class="post-desc">
                      <ul>
                          <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                          <li><a href="#"><i class="fa fa-user-o"></i>Admin</a></li>
                      </ul>
                      <div class="post-title">
                          <h5 class="margin-0"><a href="standard-post.html">Duo Scripta An The Ditos Prieirmod...</a></h5>
                      </div>
                  </div>
              </div>
              <div class="single-post mb-18">
                  <div class="post-image hover-grow">
                      <a href="standard-post.html"><img src="/static/images/blog/2.jpg" alt="post image"></a>
                  </div>
                  <div class="post-desc">
                      <ul>
                          <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                          <li><a href="#"><i class="fa fa-user-o"></i>Admin</a></li>
                      </ul>
                      <div class="post-title">
                          <h5 class="margin-0"><a href="standard-post.html">Duo Scripta An The Ditos Prieirmod...</a></h5>
                      </div>
                  </div>
              </div>
              <div class="single-post mb-18">
                  <div class="post-image hover-grow">
                      <a href="standard-post.html"><img src="/static/images/blog/3.jpg" alt="post image"></a>
                  </div>
                  <div class="post-desc">
                      <ul>
                          <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                          <li><a href="#"><i class="fa fa-user-o"></i>Admin</a></li>
                      </ul>
                      <div class="post-title">
                          <h5 class="margin-0"><a href="standard-post.html">Duo Scripta An The Ditos Prieirmod...</a></h5>
                      </div>
                  </div>
              </div>
              <div class="single-post mb-18">
                  <div class="post-image hover-grow">
                      <a href="standard-post.html"><img src="/static/images/blog/4.jpg" alt="post image"></a>
                  </div>
                  <div class="post-desc">
                      <ul>
                          <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                          <li><a href="#"><i class="fa fa-user-o"></i>Admin</a></li>
                      </ul>
                      <div class="post-title">
                          <h5 class="margin-0"><a href="standard-post.html">Duo Scripta An The Ditos Prieirmod...</a></h5>
                      </div>
                  </div>
              </div>
              <div class="single-post">
                  <div class="post-image hover-grow">
                      <a href="standard-post.html"><img src="/static/images/blog/5.jpg" alt="post image"></a>
                  </div>
                  <div class="post-desc">
                      <ul>
                          <li><i class="fa fa-calendar"></i>June 28, 2019</li>
                          <li><a href="#"><i class="fa fa-user-o"></i>Admin</a></li>
                      </ul>
                      <div class="post-title">
                          <h5 class="margin-0"><a href="standard-post.html">Duo Scripta An The Ditos Prieirmod...</a></h5>
                      </div>
                  </div>
              </div>
          </div>
          <div class="add-banner mb-40">
              <div class="add-img hover-shine text-center">
                  <figure>
                      <a href="standard-post.html"><img src="/static/images/banner/add-banner.jpg" alt="Add Banner Image"></a>
                  </figure>
              </div>
          </div>
          <div class="sidebar-categories">
              <div class="sidebar-title text-center">
                <h3 class="title uppercase mb-20">Categories</h3>
              </div>
              <ul class="category-tags" >
                  <li v-for="category in categorySibar" :key="category.id">
                    <div v-if="category.children_category != []">
                      <a href="#"># {{ category.name }} <span>({{ category.books }})</span></a>
                      <ul v-if="category.children_category != []" >
                        <li v-for="children in category.children_category" :key="children.id">
                          <a href="#"># {{ children.name }} <span>({{ children.books }})</span></a>
                        </li>
                      </ul>
                    </div>
                    <a v-else href="#"># {{ category.name }} <span>({{ category.books }})</span></a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
  import {HTTP} from '../store/getURL.js';

  export default {
    data: () => ({
      categorySibar: [],
      errors: []
    }),
    created() {
      HTTP.get('category/list')
      .then(response => {
        const { categories } = response.data.data;
        this.categorySibar = categories;
        console.log(this.categorySibar);
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>
