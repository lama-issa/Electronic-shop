

  $(document).ready(function(){
    $('.products-item').slick({
            dots: false,//عشان النقاط الي بالاسفل ما يظهرو
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            /*سطر 7 و8 عشان الصور تضل تمشي لحالها */
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
               
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
    });
  });

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
    
  
  
   
  
