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
                                              <li><a href="categories.html">Categories One</a> </li>
                                              <li><a href="categories2.html">Categories Two</a> </li>
                                              <li><a href="categories3.html">Categories Three</a> </li>
                                              <li><a href="categories4.html">Categories Four</a> </li>
                                              <li class="last-item"><a href="categories5.html">Categories Five</a> </li>
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
                                      <li class="last-item"><a href="contact.html">Contact</a></li>
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
          <!--Header End-->
      </div>
      <!--Full width header End-->
  </div>
</template>
