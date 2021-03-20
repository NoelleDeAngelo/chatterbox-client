var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // call render on all current existing messages
    // render();


    App.fetch (function (data) {
      for (i = 0; i < data.length; i++) {
        MessagesView.render(data[i]);
      }

    });


  },

  // will use render for only new messages after first time it is called in initalize

  render: function(messageObj) {
    // take in a message
    // reppresen that message in html
    this.$chats.append(MessageView.render(messageObj));
    // append the messageView to $chats.
  }

};