<template>
    <div>
        <!--Preloader area start here-->
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div class="object" id="object_one"></div>
                    <div class="object" id="object_two"></div>
                    <div class="object" id="object_three"></div>
                    <div class="object" id="object_four"></div>
                </div>
            </div>
        </div>
        <!--Preloader area End here-->

        <!--Full width header Start-->
            <div class="full-width-header">
                <!--Header Start-->
                <header id="rs-header" class="rs-header home1head">
                    <!-- Menu Start -->
                    <div class="rs-topbar hidden-md">
                        <div class="container-fluid">
                            <div class="row align-center">
                                <div class="col-lg-4">
                                    <ul class="topbar-social text-left">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-4">
                                    <div class="logo-area text-center">
                                        <a href="index.html"><img src="/static/images/logo.png" alt="logo"></a>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="appointment-cart text-right">
                                        <ul class="cart">
                                            <li><a class="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#"><i class="flaticon-search"></i></a></li>
                                            <li v-if="!loggedIn"><a class="hidden-xs rs-search" data-toggle="modal" data-target="#loginModal" href="#"><i><img src="/static/images/user.png" style="margin-bottom: 10px;"></i></a></li>
                                            <li v-else><a class="hidden-xs rs-search"  href="#"><i><img src="/static/images/user.png" style="margin-bottom: 10px;"></i></a></li>
                                            <li><a id="nav-expander" class="nav-expander"><i class="flaticon-menu fa-lg white"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-area menu-sticky">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="main-menu">
                                        <div class="mobile-menu">
                                            <a class="mobile-logo" href="index.html"><img src="/static/images/logo.png" alt="Mobile Logo"></a>
                                            <a class="rs-menu-toggle"><i class="flaticon-menu"></i>Menu</a>
                                        </div>
                                        <nav class="rs-menu">
                                            <ul class="nav-menu text-center">
                                            <!-- Home -->
                                            <li class="current-menu-item current_page_item menu-item-has-children"><a href="#" class="home">Home</a></li>
                                            <!-- End Home -->

                                            <!--Categories Menu Start -->
                                            <li class="menu-item-has-children"> <a href="#">Categories</a>
                                                <ul class="sub-menu">
                                                    <li v-for="category in categories" :key="category.id" class="last-item">
                                                        <!-- <a v-if="category.children_category != []">hh</a> -->
                                                        <a href="#">{{ category.name }}</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <!--Categories Menu End -->

                                            <!--About Start-->
                                            <li class="menu-item-has-children"><a href="#">About</a></li>
                                            <!--About End-->

                                            <!--Single Post Start-->
                                            <li class="menu-item-has-children"> <a href="#">Single Post</a></li>
                                            <!--Single Post End-->

                                            <!--Contact Menu Start-->
                                            <li class="last-item"><a href="contact.html" >Contact</a></li>
                                            <!--Contact Menu End-->
                                            </ul>
                                        </nav>
                                    </div> <!-- //.main-menu -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Menu End -->

                    <!-- Canvas Menu start -->
                    <nav class="right_menu_togle hidden-md">
                        <div class="close-btn"><span id="nav-close" class="text-center"><i class="flaticon-cross-out"></i></span></div>
                        <div class="canvas-logo">
                            <a href="index.html"><img src="/static/images/logo.png" alt="logo"></a>
                        </div>
                        <div class="offcanvas-text">
                            <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div class="canvas-contact">
                            <h5 class="canvas-contact-title">Contact Info</h5>
                            <ul class="contact">
                                <li><i class="fa fa-globe"></i>Middle Badda, Dhaka, BD</li>
                                <li><i class="fa fa-phone"></i>+123445789</li>
                                <li><i class="fa fa-envelope"></i><a href="mailto:info@yourcompany.com">info@yourcompany.com</a></li>
                                <li><i class="fa fa-clock-o"></i>10:00 AM - 11:30 PM</li>
                            </ul>
                            <ul class="social">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                    <!-- Canvas Menu end -->
                </header>
                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header border-bottom-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-title text-center">
                                    <h4>Login</h4>
                                </div>
                                <div class="d-flex flex-column text-center">
                                    <form name="form" @submit.prevent="handleLogin">
                                        <div class="form-group">
                                            <input v-model="user.email" v-validate="'required'" type="email" class="form-control" id="email1"  placeholder="Your email address...">

                                            <div v-if="message.email" class="alert alert-danger" role="alert">{{ message.email[0] }}</div>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="user.password"  v-validate="'required'" type="password" class="form-control" id="password1" placeholder="Your password...">
                                            <div v-if="message.password" class="alert alert-danger" role="alert">{{ message.password[0] }}</div>
                                        </div>
                                        <button type="submit" class="btn btn-info btn-block btn-round">Login</button>
                                    </form>
                                    <div class="text-center text-muted delimiter">or use a social network</div>
                                    <div class="d-flex justify-content-center social-buttons">
                                        <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                                            <i class="fa fa-twitter"></i>
                                        </button>
                                        <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                                            <i class="fa fa-facebook"></i>
                                        </button>
                                        <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                            <i class="fa fa-linkedin"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <div class="signup-section">Not a member yet? <a href="#a" class="text-info"> Sign Up</a>.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!--Header End-->
            </div>
        <!--Full width header End-->
    </div>
</template>

<script>
  import {HTTP} from '../../store/getURL';
  import User from '../../models/user';

  export default {
    data: () => ({
        categories: [],
        errorMes: [],
        user: new User('', ''),
        loading: false,
        message: '',
    }),
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        HTTP.get('category/list')
        .then(response => {
            const { categories } = response.data.data;
            this.categories = categories;
        })
        .catch(e => {
            this.errorMes.push(e)
        });
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$store.dispatch('auth/login', this.user).then (
                user => {
                    if (user.code === 200000) {
                        $('#loginModal').modal('hide');
                        alert("Login success");
                        this.loggedIn = this.$store.state.auth.status.loggedIn;
                    }
                },
                error => {
                    this.loading = false;
                    this.message = '';
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );

            if (this.message) {
                this.message = this.message.data.errors;
            }

        }
    }
  }
</script>
