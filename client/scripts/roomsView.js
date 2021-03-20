var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.$button.addEventListener('click', function () {
    //   Rooms.handleAddRoom();
    // })

    RoomsView.$button.on('click', function () {
      Rooms.handleAddRoom();
    });
    // RoomsView.$form.on('submit', FormView.handleSubmit);


  },

  render: function(roomname) {
    Rooms.$select.append('<option value= ' + roomname + '>' + roomname + '</option>');
  }

};
