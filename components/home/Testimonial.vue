<template>
  <div class="testimonials" style="background-image: url('https://images.unsplash.com/photo-1580912458702-6fa698fc553e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');">
    <div class="container">
      <div class="title">
        <h5>Testimonials</h5>
        <h2>What our clients say</h2>
      </div>
      <div class="owl-carousel owl-theme testi bg-white">
        <div class="item">
          <div class="profile">
            <img src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80" alt="">
            <div class="information">
              <div class="stars">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <p>Furkan Giray</p>
              <span>Web Developer</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
          <div class="icon">
            <i class="fa fa-quote-right" aria-hidden="true" />
          </div>
        </div>

        <div class="item">
          <div class="profile">
            <img src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80" alt="">
            <div class="information">
              <div class="stars">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <p>Furkan Giray</p>
              <span>Web Developer</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
          <div class="icon">
            <i class="fa fa-quote-right" aria-hidden="true" />
          </div>
        </div>
        <div class="item">
          <div class="profile">
            <img src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80" alt="">
            <div class="information">
              <div class="stars">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <p>Furkan Giray</p>
              <span>Web Developer</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
          <div class="icon">
            <i class="fa fa-quote-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// Used bootstrap v4.5,jquery v3.5.1, owl carousel v2, font awesome v4.7.0

// $('.testi.owl-carousel').owlCarousel({
//   items: 2,
//   margin:10,
//   lazyLoad: true,
//   dots:true,
//   autoPlay: true,
//   autoPlayTimeout: 3000,
// responsive:{
//     0:{
//       items:1,
//     },
//     600:{
//       items:2,
//     },
//     1000:{
//       items:2,
//     }
//   }
// });

</script>

<style socped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
.testimonials{position: relative;background-repeat: no-repeat;background-size: cover;padding:50px 0;font-family:'Poppins', sans-serif}
.testimonials::before{content:'';position: absolute;right:0;left:0;top:0;bottom:0;background: rgba(255,216,50,.7);}
.testimonials .title {text-align: center;margin-bottom: 50px;position: relative;padding: 20px 0;max-width: 600px;margin: 0 auto;}
.testimonials .title h5 {color: #EB6D2F;line-height: 1.2em;font-size: 18px;font-weight: 900;margin-bottom: -3px;}
.testimonials .title h2 {color: #5A3733;line-height: 1.2em;font-weight: 900;font-size: 41px;letter-spacing: -1px;margin:0}
.testimonials .title img {margin-top: -10px;}
.testimonials .title p {margin: 0 0 10px;margin-bottom: 0;color: #5A3733;}
.testimonials .testi .item {background: #fff;padding: 50px 30px;border-radius:15px;}
.testimonials .testi .item .profile {display:flex;padding-left: 15px;}
.testimonials .testi .item .profile img {border-radius: 100%;width:50px;height:50px;object-fit:cover}
.testimonials .testi .item .profile .information {padding-left:20px;margin-bottom:15px}
.testimonials .testi .item .profile .information .stars i {color:#ffd832}
.testimonials .testi .item .profile .information p {font-size: 24px;margin: 0px auto 0px;color: #5A3733;font-weight: 900;line-height: 1;}
.testimonials .testi .item .profile .information span {color: #EB6D2F;font-weight: bold;margin-top: -4px;line-height: 1.6em;font-size: 14px;}
.testimonials .testi .item>p {margin-bottom: 15px;font-size: 16px;line-height: 1.6em;display: block;z-index: 2;font-style: italic;color: #5A3733;text-align: center;}
.testimonials .testi .item .icon {text-align: center;}
.testimonials .testi .item .icon i {font-size: 32px;color: #FFD832;}

</style>
