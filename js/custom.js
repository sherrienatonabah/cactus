jQuery(document).ready(function () {
  new ClipboardJS("[data-clipboard-target]");

  jQuery(".top_exc_st_id_sub").on("click", function () {
    jQuery(this).parent("div").find(".top_exc_st_id_copied").show();
  });

  jQuery(".faq_b_title").click(function () {
    jQuery(this).toggleClass("active");
    jQuery(this).parent().toggleClass("active");
    jQuery(this).next(".faq_b_text").slideToggle(200);
    return false;
  });

  jQuery("span.adapt_menu").click(function () {
    jQuery(".main_nav").slideToggle(200);
    jQuery(this).toggleClass("open");
    return false;
  });

  jQuery("a.scrollto").click(function () {
    var elementClick = jQuery(this).attr("href");
    var destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      800
    );
    return false;
  });

  jQuery(".go_slow").click(function () {
    elementClick = this.hash;
    destination = jQuery(elementClick).offset().top;
    jQuery("body,html").animate({ scrollTop: destination }, 300);
    return false;
  });

  jQuery(".entry iframe").each(function () {
    if (jQuery(this).attr("src").indexOf("youtube") !== -1) {
      jQuery(this).wrap('<div class="video"></div>');
    }
  });

  jQuery(".entry table").each(function () {
    jQuery(this).wrap('<div class="entry_table"></div>');
  });
});
