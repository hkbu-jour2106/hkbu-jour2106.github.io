
$('.close').on('click', function() {
  $(this).parent('.alert').hide();
});

$('.reset').on('click', function() {
  $('.alert').show();
});
