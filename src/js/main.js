(function() {
    
    $(document).ready(function(){
        $('body').scrollspy({ target: '#main-navbar' , offset: 75});
    });

    
    
    document.addEventListener("DOMContentLoaded", function() {
        var galleryFeed = new Instafeed({
            get: "user",
            userId: '6082108069',
            clientId: '5a847aa1016e474e82571b5d24831f17',
            accessToken: '6082108069.1677ed0.4536bc0e3b9743dbb7b260a739a14425',
            resolution: "standard_resolution",
            useHttp: "true",
            limit: 6,
            template: '<div class="grid-item col-xs-12 col-sm-6 col-md-4">' +
                        '<a href="{{image}}" target="_new">' +
                            '<div class="img-featured-container">' +
                                '<div class="img-backdrop">' +
                            '</div>' +
                           '<div class="description-container">' +
                                '<p class="caption">{{caption}}</p>' +
                                '<span class="likes">' +
                                    '<i class="icon ion-heart"></i> {{likes}}' +
                                '</span>' +
                                '<span class="comments">' +
                                    '<i class="icon ion-chatbubble"></i> {{comments}}' +
                                '</span>' +
                            '</div>' +
                                '<img src="{{image}}" class="img-responsive">' +
                            '</div>' +
                         '</a>' +
                        '</div>',
            target: "instafeed-gallery-feed",
            after: function() {
              // disable button if no more results to load
              if (!this.hasNext()) {
                btnInstafeedLoad.setAttribute('disabled', 'disabled');
              }
            },
          });
          galleryFeed.run();
          
          var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
          btnInstafeedLoad.addEventListener("click", function() {
            galleryFeed.next()
          });
         
      });

})();

