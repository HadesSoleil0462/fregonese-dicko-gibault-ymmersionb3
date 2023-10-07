# Flower store API

Cette API a pour but de gérer les différentes requêtes proposées par le site de notre projet web d'e-commerce: `Flower store`.
Elle est basée sur la technologie Node.js. Elle permet de renvoyer les articles affichés sur le site ainsi qu'un système 
d'authentification pour les administrateurs et les clients du site (déconnexion non gérée).

## Installation

1. Ouvrez un terminal et placez-vous dans le dossier `backend`.
2. `npm i` Pour installer les dépendances nécessaires au fonctionnement de l'API.
3. `npm start` Pour lancer le serveur de l'API.

## Routes

Le dossier `routes` contient les fichiers associant les chemins avec les méthodes et les fonctions qui leurs sont propres.
Les routes sont réparties par thèmes: 
* `flowers` Contient les routes associées aux articles du site: les fleurs.
   - `/flowers [GET]` Revoie la liste de toutes les fleurs du site.
   - `/flower/id [GET]` Revoie une fleur par son `id`.
   - `/flowers/name [GET]` Renvoie toutes les fleurs du même nom.
   - `/flowers/seasons/season [GET]` Renvoie toutes les fleurs de la même saison.
   - `/flower [POST]` Ajoute une fleur à la BDD si l'utilisteur est un administrateur.
* `admins` Contient les routes en lien avec les fonctionnalités des administrateurs du site.
    - `/admin/login [POST]` Permet la connexion d'un administrateur.
* `customers` Contient les routes pour les fonctionnalités des clients de la boutique.
   - `/customer/login [POST]` Permet à un client de se connecter.
   - `/customer/register [POST]` Permet d'ajouter un client à la BDD si il n'existe pas déjà.

## Controllers

Le dossier controllers contient les fichiers dans lesquels se trouvent les fonctions associées aux routes.
Les controllers sont répartis par thèmes:
* `flower` Contient toutes les fonctionnalités liées aux fleurs du site.
* `admin` Contient toutes les fonctionnalités des admins.
* `customer` Contient toutes les fonctionnalités des clients de la boutique.

## Tester les routes avec POSTMAN

1. Lancer le serveur avec les instructions [ci-dessus](#installation).
2. Executez le programme `Postman`
3. Test des routes `flowers`
   1. Route `/flowers`
      - Selectionnez la méthode http `GET`
      - Collez l'url suivante `http://localhost:8080/flowers`
      - Cliquez sur `send`
      - Constatez le résultat
   2. Route `/flower/id`
      - Selectionnez la méthode http `GET`
      - Collez l'url suivante `http://localhost:8080/flower/1`
      - Cliquez sur `send`
      - Constatez le résultat.
      - Testez avec un id différent
   3. Route `/flowers/name`
      - Selectionnez la méthode http `GET`
      - Collez l'url suivante `http://localhost:8080/flowers/rose`.
      - Cliquez sur `send`.
      - Constatez le résultat.
      - Testez avec un nom différent
   4. Route `/flowers/seasons/season`
      - Selectionnez la méthode http `GET`
      - Collez l'url suivante `http://localhost:8080/flowers/seasons/summer`.
      - Cliquez sur `send`
      - Constatez le résultat.
      - Testez avec une saison différente
   5. Route `/flower`
      - Selectionnez la méthode http `POST`
      - Collez l'url suivante `http://localhost:8080/flower`
      - Cliquez sur `body`
      - Cliquez sur `Raw`
      - Selectionnez `JSON` dans le menu déroulant à droite de `Raw`
      - Collez ``{
        "id": 26,
        "FlowerName": "anturium",
        "Type": "à fleurs groupées",
        "Season": "summer",
        "Stock": 32,
        "Tips": "Pousse en climat tropical.",
        "Pic_URL": "https://res.cloudinary.com/compo-com/image/fetch/c_fill,g_xy_center,f_auto,w_560,h_420,x_iw_mul_50_div_100,y_ih_mul_50_div_100/https://www.compo.de/dam/jcr:299eaa7f-ab83-428e-8fac-0ae22ea72ea1/beetrose.jpg",
        "Price": 36.5
    }``
      - Cliquez sur `send`
      - Constatez le résultat
      - Vérifez dans le fichier `data.json` qu'il y a bien une nouvelle fleur correspondant aux données collées dans le raw
4. Tester la route `/admin/login`
   - Selectionnez la méthode http `POST`
   - Collez l'url suivante `http://localhost:8080/admin/login`
   - Cliquez sur `body`
   - Cliquez sur `Raw`
   - Selectionnez `JSON` dans le menu déroulant à droite de `Raw`
   - Collez ``{
    "user": "admin2",
    "password" : "superpassword"
}`` 
   - Cliquez sur `Send`
   - Constatez le résultat
   - Testez avec différentes valeurs pour user et/ou password
5. Tester les routes `/customer`
   1. Route `/customer/login`
      - Selectionnez la méthode http `POST`
      - Collez l'url suivante `http://localhost:8080/customer/login`
      - Cliquez sur `body`
      - Cliquez sur `Raw`
      - Selectionnez `JSON` dans le menu déroulant à droite de `Raw`
      - Collez ``{
    "email": "client10@example.com",
    "password": "motdepasse10"
}`` 
      - Cliquez sur `Send`
      - Constatez le résultat
      - Testez avec différentes valeurs pour email et/ou password
   2. Route `/customer/register`
      - Selectionnez la méthode http `POST`
      - Collez l'url suivante `http://localhost:8080/customer/register`
      - Cliquez sur `body`
      - Cliquez sur `Raw`
      - Selectionnez `JSON` dans le menu déroulant à droite de `Raw`
      - Collez ``{
    "Email": "client120@example.com",
    "Password": "motdepasse19",
    "FirstName": "Noah",
    "LastName": "Martinez",
    "PhoneNumber": "2221116666",
    "PostalAddress": "777 Rue des Lys blancs",
    "Cart": null,
    "RegistrationDate": "2023-10-03"
}`` 
      - Cliquez sur `Send`
      - Constatez le résultat
      - Vérifez dans le fichier `data.json` qu'il y a bien un nouveau customer correspondant aux données collées dans le raw 
      - Testez avec avec un email d'utilisateur déjà existant dans la BDD
