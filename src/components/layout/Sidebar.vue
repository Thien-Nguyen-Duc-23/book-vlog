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
              <div v-for="book in bookTops" :key="book.id" class="single-post mb-18">
                  <div class="post-image hover-grow">
                        <a @click="bookDetail(book)"><img v-bind:src="getImage(book.conver)"></a>
                  </div>
                  <div class="post-desc">
                      <ul>
                            <li><i class="fa fa-calendar"></i>{{ book.created_at.date | formatDate }}</li>
                            <li><a href=""><i class="fa fa-user-o"></i>{{ book.author }}</a></li>
                      </ul>
                      <div class="post-title">
                            <h5 class="margin-0"><a @click="bookDetail(book)">{{ book.short_title }}</a></h5>
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
                      <a @click="bookOfCategory(category)"># {{ category.name }} <span>({{ category.books }})</span></a>
                      <ul v-if="category.children_category != []" >
                        <li v-for="children in category.children_category" :key="children.id">
                          <a @click="bookOfCategory(children)"># {{ children.name }} <span>({{ children.books }})</span></a>
                        </li>
                      </ul>
                    </div>
                    <a v-else @click="bookOfCategory(category)"># {{ category.name }} <span>({{ category.books }})</span></a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
    import {HTTP} from '../../store/getURL';
    import router from '../../router/index'

    export default {
        data: () => ({
            categorySibar: [],
            errors: [],
            bookTops: [],
        }),
        created() {
            HTTP.get('category/list')
            .then(response => {
                const { categories } = response.data.data;
                this.categorySibar = categories;
            })
            .catch(e => {
                this.errors.push(e)
            })

            HTTP.get('book/top')
            .then(response => {
                const { data } = response.data;
                this.bookTops = data;
                console.log(this.bookTops);
            })
            .catch(e => {
                this.errors.push(e)
            })
        },
        methods: {
            bookOfCategory(category) {
                this.$router.push({ name: 'BookOfCategory', params:{slug: category.slug} }).catch(error => {
                    if (error.name != "NavigationDuplicated") {
                        throw error;
                    }
                });
            },
            bookDetail(book) {
                this.$router.push({ name: 'BookDetail', params:{slug: book.slug} });
            },
            getImage(image){
                return image;
            }
        }
    }
</script>
