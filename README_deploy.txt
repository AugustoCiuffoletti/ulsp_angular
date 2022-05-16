Deploy su Firebase

-> ng build (costrusce una directory "dist" con il codice con cui fare il deply)
-> firebase init hosting 
   ? What do you want to use as your public directory? dist/auth0-angular-sample

-> firebase deploy 
   
Nel caso il sito di deploy sia nuovo bisogna aggiungerlo al tenant: 

-> Aprire la dashboard di auth0, fare login tramite Google come augusto.ciuffoletti@unipi.it e selezionare il tenant dev-cl2h2wo4, poi 
-> Applications -> Applications -> GIS toolbox
-> Modificare "Allowed Callback URLs", "Allowed Logout URLs" e "Allowed Web Origins" aggiungendo il sito di deply (ora, maggio 2022, "https://ulsp-angular.web.app/") separando con virgola e salvare.
