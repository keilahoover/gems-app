$(document).ready(function() {
  console.log('ready to go ');

  $('.wishlist-btn').click(function() {
    event.preventDefault()
    console.log('clicked me');

    axios.post('/wishlist', {
      id: req.params.id,
      user_id: req.params.userId,
      products_id: req.params.productsId
    })
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
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
