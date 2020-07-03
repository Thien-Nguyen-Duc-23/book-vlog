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
                            <h1 class="breadcrumbs-title">Contact</h1>
                            <ul class="breadcrumbs-subtitle">
                                <li><a href="index.html">Home &gt;&gt;</a></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    <!-- Breadcrumbs End -->

        <!-- Contact Us Section Start -->
        <div id="rs-contact" class="rs-contact rs-articles pt-100 pb-100 md-pt-70 md-pb-70">
            <div class="container">
                <div class="contact-content">
                    <div id="rs-map" class="rs-map">
                        <iframe src="https://maps.google.com/maps?q=San%20Francisco%2C%20CA%2094114%202775%20Market%20St&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                    </div>
                    <div class="information-contact pt-40 pb-45">
                        <div class="row">
                            <div class="col-lg-6 md-mb-30">
                                <div class="grid-box text-center">
                                    <div class="items-wrap">
                                        <i class="fa fa-map-marker"></i>
                                        <h3 class="title uppercase">Head office</h3>
                                        <p class="some-text mb-0">
                                            Khu Phú Gia, 144 Ông Ích Khiêm,
                                            Đà Nẵng, Phone:<a href="tel:+88025826"> 0932509014</a>
                                            <a href="mailto:infoname@gmail.com"> tducnguyen1997@gmail.com</a> // <a href="#"> www.yourname.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="grid-box text-center">
                                    <div class="items-wrap">
                                        <i class="flaticon-comment"></i>
                                        <h3 class="title uppercase">24/7 LIVE CHAT</h3>
                                        <p class="some-text mb-0">
                                            Aliquam fermentum ipsum ut laoreet pellen Phasellus convallis porttitor odio, vel malesuada leo rutrum quis. Aliquam erat
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rs-contact-form">
                        <h3 class="comment-title uppercase">Leave Comment</h3>
                        <form id="contact-form" @submit.prevent="handleContact">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-field">
                                        <label>Name *</label>
                                        <input type="text" v-model="fullName" id="name" name="name" required>
                                    </div>
                                    <div v-if="errorsContact.fullName" class="alert alert-danger" role="alert">{{ errorsContact.fullName[0] }}</div>                         
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-field">
                                        <label>Email *</label>
                                        <input type="email" v-model="email" id="email" name="email" required>
                                    </div>                              
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-field">
                                        <label>Phone *</label>
                                        <input type="text" id="phone_number" name="phone_number">
                                    </div>                             
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-field">
                                        <label>Subject *</label>
                                        <input type="text" v-model="subject" id="website" name="website" maxlength="100" required>
                                    </div>
                                    <div v-if="errorsContact.subject" class="alert alert-danger" role="alert">{{ errorsContact.subject[0] }}</div>                            
                                </div>
                            </div> 
                            <div class="row">
                                <div class="col-lg-12">                       
                                    <div class="form-field mb-30">
                                        <label>Comment</label>
                                        <textarea rows="7" v-model="message" id="message" name="message" maxlength="255"></textarea>
                                    </div>

                                    <div v-if="errorsContact.message" class="alert alert-danger" role="alert">{{ errorsContact.message[0] }}</div> 
                                    <div class="form-button mt-30">
                                        <button type="submit">Submit Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact Us Section End -->

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
  import Instagram from '../common/Instagram.vue'
  import SearchModal from '../common/SearchModal.vue'
  import {HTTP} from '../../store/getURL'
  import router from '../../router/index'

  export default {
    components: {
        Header,
        Footer,
        Instagram,
        SearchModal,
    },
    data: () => ({
        errorsContact: [],
        fullName: null,
        email: null,
        subject: null,
        message: null,
    }),
    methods: {
        handleContact() {
            HTTP.post('store-contact', {
                fullName: this.fullName,
                email: this.email,
                subject: this.subject,
                message: this.message,
            })
            .then(response => {
                    console.log(response.data);
                if (response.data.code === 200000) {
                    alert(response.data.data.messages)
                } else {
                    this.errorsContact = response.data;
                }
                
            })
            .catch(e => {
                // console.log('thiem');
                this.errorsContact.push(e)
                // console.log(e);
            })
        }
    }
  }
</script>
