$(function() {
  // radio, checkbox style
  $(".iCheck").iCheck({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
  });	
  // tab 메뉴
  $('.tabList a').click(function(e){
    e.preventDefault();
    $('.tabList a, .tabCon').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });
	// 슬라이드 메뉴
	$(function() {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 3,
			spaceBetween: 0,
			// init: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				1024: {
					slidesPerView: 3,
					spaceBetween: 00,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				320: {
					slidesPerView: 3,
					spaceBetween: 0,
				}
			}
		});
	});	
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.cover').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});