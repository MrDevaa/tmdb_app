# TMDB APP

TMDB APP (The Movie Database App) est une application web développée en ReactJS, qui utilise l'API de TMDB pour afficher des informations sur les films. Ce projet utilise plusieurs bibliothèques pour améliorer l'expérience utilisateur et faciliter le développement.

site web : 

![Capture d'écran de l'application TMDB APP](./public/TMDB%20APP%20UI%20DESIGN/TMDB%20APP%20UI%20DESIGN.png)


[(url)<details>
  <summary>Table des Matières</summary>

  - [Fonctionnalités](#fonctionnalités)
  - [Technologies Utilisées](#technologies-utilisées)
  - [Installation](#installation)
  - [Configuration du Projet](#configuration-du-projet)
    - [TMDB API Setup](#tmdb-api-setup)
    - [Utilisation d'Axios pour l'API TMDB](#utilisation-daxios-pour-lapi-tmdb)
    - [Setup de Redux Toolkit](#setup-de-redux-toolkit)
    - [Setup de React Router](#setup-de-react-router)
  - [Développement Étape par Étape](#développement-étape-par-étape)
  - [Auteur](#auteur)
  - [Remerciements](#remerciements)

</details> ]

## Fonctionnalités

- Affichage des films populaires et les mieux notés
- Recherche de films et d'émissions de télévision
- Détails des films et des émissions de télévision, y compris les bandes-annonces et les recommandations
- Liste des genres et des acteurs principaux
- Scrolling infini pour le chargement des films

## Technologies Utilisées

- **ReactJS** : Librairie JavaScript pour la construction des interfaces utilisateur
- **Redux Toolkit** : Simplifie la gestion de l'état dans les applications React
- **React Redux** : Intégration de Redux avec React
- **Axios** : Client HTTP pour effectuer des requêtes vers l'API TMDB
- **React Player** : Lecteur multimédia pour intégrer des vidéos
- **Dayjs** : Librairie pour manipuler les dates
- **React Router DOM** : Gestion des routes dans une application React
- **React Icons** : Collection d'icônes pour React
- **React Circular Progressbar** : Affichage de barres de progression circulaires
- **React Infinite Scroll** : Implémentation du scrolling infini
- **React Lazy Load Image** : Chargement paresseux des images

## Installation

1. Clonez le repository :

   ```bash
   git clone "https://github.com/MrDevaa/tmdb_app.git"
   cd tmdb-app

2. Installez les dépendances :
    
     ```bash
   npm install

3. Créez un fichier .env à la racine du projet et ajoutez votre clé API TMDB :
    
     ```bash
   REACT_APP_TMDB_API_KEY=your_api_key_here

4. Lancez l'application :
    
     ```bash
   npm start

# Configuration du Projet
   ## TMDB API Setup
   
1.Inscrivez-vous sur TMDB et obtenez votre clé API.
2.Ajoutez la clé API dans le fichier .env comme indiqué ci-dessus.

# Utilisation d'Axios pour l'API TMDB
- Configurez Axios pour interagir avec l'API TMDB et gérer les requêtes.
# Setup de Redux Toolkit
- Utilisez Redux Toolkit pour gérer l'état global de l'application.
# Setup de React Router
- Configurez React Router pour gérer les différentes routes de l'application, telles que la page d'accueil, les pages de recherche et les pages de détails.
# Développement Étape par Étape
1. Initialisation du Projet
2. Configuration de l'API TMDB
- Configuration d'Axios pour les requêtes API
- Test des requêtes API
3. Configuration de Redux Toolkit
4. Configuration de React Router
5. Création de la Page d'Accueil
- Section Hero Banner et son CSS
6. Création des Composants de l'En-tête et du Pied de Page
7. Section Carrousel
- Changement d'onglets
8. Composant principal du Carrousel
- Composant de Notation
9. Composant de Genres
10. Fonctionnalité de Glissement du Carrousel
11. Sections Populaires et Les Mieux Notées sur la Page d'Accueil
12. Page de Détails
- Section Bannière de Détails
- Section des Acteurs Principaux
- Section des Vidéos
- Sections Similaires et Recommandations
13. Page de Résultats de Recherche
14. Page d'Exploration des Films et des Émissions de Télévision

# Remerciements
Merci à TMDB pour leur API et les données fournies.

