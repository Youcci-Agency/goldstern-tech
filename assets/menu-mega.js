$(document).ready(function () {
  $('[data-dropdown]').on('mouseenter', function () {
    $(this).find('[data-dropdown-content]').removeClass('twcss-hidden');
  });

  $('[data-dropdown]').on('mouseleave', function () {
    $(this).find('[data-dropdown-content]').addClass('twcss-hidden');
  });

  $('[data-dropdown-content]').on('mouseenter', function () {
    $(this).removeClass('twcss-hidden');
  });

  $('[data-dropdown-content]').on('mouseleave', function () {
    $(this).addClass('twcss-hidden');
  });
});
