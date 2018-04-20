$(document).ready(function() {
  console.log('ready to go ');

  $('.wishlist-btn').click(function(event) {
    event.preventDefault()
    let product_id = event.target.id;
    const options = {
      contentType: 'application/json',
      data: JSON.stringify({
        products_id: product_id,
        user_id: 1
      }),
      dataType: 'json',
      type: 'POST',
      url: '/wishlist'
    };
    $.ajax(options)
      .done((result) => {
        console.log(result);
        // window.location.href = '/wishlist';
      })
      .fail(() => {
        console.log("denied")
      });
  });

  $('#logout-button').click(function() {
    event.preventDefault()
    const options = {
      dataType: 'json',
      type: 'DELETE',
      url: '/'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/';
      })
      .fail(() => {
        console.log("denied")
      });
  });
})
