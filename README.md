# Spotify Analytics Frontend React

Ce projet constitue le frontend de l'application Spotify Analytics, développé avec React. Il permet d'afficher et d'analyser les données d'écoute des utilisateurs récupérées depuis le backend Django.

## Prérequis

- Node.js
- npm (ou yarn)

## Installation

### Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/spotify-analytics-frontend.git
cd spotify-analytics-frontend
```

### Installer les dépendances

```bash
npm install
# ou si vous utilisez yarn
yarn install

```

### Démarrer le serveur de développement

```bash
npm start
# ou si vous utilisez yarn
yarn start
```

Le projet sera disponible à l'adresse http://localhost:3000.

### Structure des composants

- RecentTracks.js : Affiche les morceaux récemment écoutés
- TopArtists.js : Affiche les artistes les plus écoutés
- TopTracks.js : Affiche les morceaux les plus écoutés
- ListeningHistory.js : Affiche l'historique d'écoute
- Genre.js : Affiche les genres les plus écoutés
- Home.js : Page d'accueil

### Configuration du Proxy

```bash
"proxy": "http://localhost:8000"
```

### Documentation

- [React](https://react.dev/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/en/main)


### Contribuer

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request.

### Licence

Ce projet est sous licence MIT.