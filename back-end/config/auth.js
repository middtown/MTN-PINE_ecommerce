// // expose our config directly to our application using module.exports
// module.exports = {

//     'facebookAuth' : {
//         'clientID'      : 'your-secret-clientID-here', // your App ID
//         'clientSecret'  : 'your-client-secret-here', // your App Secret
//         'callbackURL'   : 'http://localhost:3000/api/home'
//     },

//     'twitterAuth' : {
//         'consumerKey'       : 'your-consumer-key-here',
//         'consumerSecret'    : 'your-client-secret-here',
//         'callbackURL'   : 'http://localhost:3000/api/home'
//     },

//     'googleAuth' : {
//         'clientID'      : gId, // your App ID
//         'clientSecret'  : gS, // your App Secret
//         'callbackURL'   : 'http://localhost:3000/api/home'
//     }

// };



/// facebook api sdk stuff -------------------//

// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '{your-app-id}',
//       cookie     : true,
//       xfbml      : true,
//       version    : '{latest-api-version}'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>

/// facebook api sdk stuff end----------//
