# API de Gestion des Recettes

## Description

Cette API permet de gérer des recettes culinaires, en fournissant des fonctionnalités CRUD (Create, Read, Update, Delete). Elle est construite avec **Express.js** et utilise **MySQL** pour la gestion de la base de données. Le projet inclut des tests unitaires, des outils d'analyse et de formatage de code (ESLint, Prettier), ainsi qu'une containerisation avec **Docker** pour le déploiement.

## Objectifs

- Développer et tester une API RESTful avec Express.js et MySQL.
- Intégrer des outils d'analyse et de formatage de code.
- Containeriser l'API avec Docker pour faciliter le déploiement.
- Déployer l'API dans un environnement conteneurisé via DockerHub.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Node.js**
- **MySQL**
- **Postman** (pour tester l'API)
- **Docker** (pour la containerisation)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

**Clonez le repository :**

```bash
git clone https://github.com/HarounaTraore/gestion-recette-api.git
```

**Accédez au dossier du projet :**

```bash
cd gestion-recette-api
```

**Installez les dépendances :**

```bash
npm install
```

## Configuration de la base de données

1. **Importation de la base de données**
   Ouvrez le terminal dans le dossier courant, copiez le commande ci-dessous en remplaçant `user_name` par votre `nom d'utilisateur`

```bash
  mysql -u user_name -p gestion_recettes < gestion_recettes.sql
```

2. Renommez les fichiers `.env.exampl` et `.env.test.exampl` en enlevant le sufixe `.exampl` puis modifiez pour y insérer les informations de connexion à la base de données.

- `.env`: est utilisé par mysql en local
- `.env.test`: est utilisé par image mysql

Exemple de fichier `.env` :

```bash
  DB_USER=USER_NAME
  DB_PASSWORD=PASSWORD
  DB_HOST=localhost
  DB_PORT=PORT
  DB_NAME=gestion_recettes
```

## Utilisation

Pour démarrer l'application :

```bash
npm start
```

L'API sera accessible à `http://localhost:3000`.

## Endpoints de l'API

### GET: /recettes

- **Description** : Récupère toutes les recettes.
- **Réponse** :

```json
[
  {
    "id": 1,
    "titre": "Tarte aux pommes",
    "type": "Dessert",
    "ingredients": "Pommes, Sucre, Pâte"
  }
]
```

### GET: /recettes/:id

- **Description** : Récupère une par son recette.
- **Réponse** :

```json
[
  {
    "id": 1,
    "titre": "Tarte aux pommes",
    "type": "Dessert",
    "ingredients": "Pommes, Sucre, Pâte"
  }
]
```

### POST /recettes

- **Description** : Crée une nouvelle recette.
- **Corps de la requête** :

```json
{
  "titre": "Salade César",
  "type": "Entrée",
  "ingredients": "Laitue, Poulet, Parmesan, Croutons"
}
```

- **Réponse** :

```json
{
  "message": "Recette ajoutée avec succès"
}
```

### PUT /recettes/:id

- **Description** : Met à jour une recette existante.
- **Corps de la requête** :

```json
{
  "titre": "Pizza améliorée",
  "type": "Plat principal",
  "ingredients": "Tomates, Fromage, Pâte, Basilic"
}
```

- **Réponse** :

```json
{
  "message": "Recette mise à jour avec succès"
}
```

### DELETE /recettes/:id

- **Description** : Supprime une recette par ID.
- **Réponse** :

```json
{
  "message": "Recette supprimée avec succès"
}
```

## Tests unitaires

Des tests unitaires sont fournis pour vérifier le bon fonctionnement des fonctionnalités CRUD.

- **Framework utilisé** : Jasmine
- **Exécution des tests** :

```bash
npm test
```

## Analyse et formatage de code

L'analyse statique du code est réalisée avec **ESLint** et le formatage avec **Prettier**. Ces outils sont configurés pour être utilisés pour maintenir un code propre et cohérent.

### Exécuter l'analyse du code :

pour chercher les erreurs:

```bash
npm run lint
```

pour fixer les erreurs corrigeable par ESLint:

```bash
npm run lint:fix
```

### Exécuter le formatage automatique :

```bash
npm run format
```

## Containerisation avec Docker

### Instructions pour Docker :

1. **Construction de l'image**

```bash
docker build -t my-app .
```

1. **Lien vers l'image DockerHub** : [ lien image](https://hub.docker.com/r/harounatraore/gestion-recette/tags)

telecharger l'image à l'aide de :

```bash
  docker pull harounatraore/gestion-recette
```

2. **Construire et Lancer les conteneurs avec Docker compose**

```bash
docker-compose up --build
```

3. **Lancer les conteneurs existants avec Docker compose** :

```bash
  docker-compose up -d
```

## Documentation et Collection Postman

Pour tester les différents endpoints de l'API, vous pouvez utiliser la collection Postman incluse dans ce projet. Elle contient toutes les requêtes configurées pour interagir avec l'API.

- **Exporter la collection** : `recettes_collection.json`
- **Importer dans Postman** et exécuter les requêtes.

- **_Cas où les tests posteman ne fonctionnent pas avec Docker_**

1.  Copiez le command ci-dessous en remplaçant `user_name` par votre `nom d'utilisateur renseigner dans .env.test` puis `renseigner votre mot de passe `

```bash
docker exec -it recette_mysql  mysql -u user_name -p
```

2. Assurez-vous d'être connecter à l'image de `mysql` et copiez le `script sql` ci-dessous puis le collez dans le terminale.

```sql
CREATE DATABASE IF NOT EXISTS gestion_recettes;
USE gestion_recettes;

CREATE TABLE IF NOT EXISTS recettes(
   id INT,
   titre VARCHAR(100) NOT NULL,
   ingredients TEXT NOT NULL,
   type VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(titre)
);

INSERT INTO `recettes` (titre, ingredients, type) VALUES
('Spaghetti Bolognese', 'Pates, sauce tomate, viande hachee, oignon, ail', 'Plat'),
```

## Auteur

[Harouna Traoré](https://github.com/HarounaTraore)
