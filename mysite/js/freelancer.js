(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  let quotes = [{
      author: 'ALAN KAY',
      quote: 'The best way to predict the future is to implement it.'
    },
    {
      author: 'CUNNINGHAMS LAW',
      quote: 'The best way to get the right answer on the internet is not to ask a question;it \'s to post the wrong answer.'
    },
    {
      author: 'WASEEM LATIF',
      quote: 'Programming is not easy like Sunday morning, it is silent poetry.'
    },
    {
      author: 'ROY CARLSON',
      quote: 'The sooner you start to code, the longer the program will take.'
    },
    {
      author: 'TIM KADLEC',
      quote: 'Blame the implementation, not the technique.'
    },
    {
      author: 'LOUIS SRYGLEY',
      quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.'
    },
    {
      author: 'JOHN JOHNSON',
      quote: 'First, solve the problem. Then, write the code.'
    },
    {
      author: 'JOHN O\'NOLAN ',
      quote: 'It\'s a lot easier to talk about code than it is to write code.'
    },
    {
      author: 'ADDY OSMANI',
      quote: 'First do it, then do it right, then do it better.'
    },
    {
      author: 'JOHN SHORE',
      quote: 'Good programming is good writing.'
    },
    {
      author: 'C. A. R. HOARE',
      quote: 'The most important property of a program is whether it accomplishes the intention of its user.'
    },
    {
      author: 'KEN THOMPSON',
      quote: 'One of my most productive days was throwing away 1000 lines of code.'
    }
  ];

  // Floating label headings for the contact form
  $(function () {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    $('#quote').text(quote.quote);
    $('#author').text('─ ' + quote.author);

    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict