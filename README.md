# Jeux du Morpion Style Néon
---
## Le but du jeux 

**Le but du jeux est de réussir à aligner trois croix avant l'ordinateur.**
---
## Pourquoi le Morpion ?

J'ai décidé de créer un jeux de morpion afin de mettre en avant l'utilisation des Hooks de React.js.
L'approche principale etait de commencer par utiliser le useState, puis une fois la fonctionnalité prête remplacer ce state par un state global avec Redux.
---
## Autres points mis en avant

- L'utilisation des variables Css et mise en place d'un style *Neon*.
- La création d'une IA qui essaye de gagner à chaque fois.
- L'utilisation des composants React pour une réutilisabilité.
- Création d'une logique de condition de victoire.
---
## Les recherches

Afin de réussir le style de mon jeu, je me suis renseigner sur les box-shadow et text-shadow.
J'ai également rechercher d'autres application utilisant le style *Néon*.
---
## Les difficultés rencontrées

Lors de la phase de code j'ai rencontré différents freins à mon avancée, tel que la condition de victoire et le changement automatique de joueur.
---
## Les technologies utilisées

Pour l'application en elle-même j'ai utilisé **React.js** pour son dynamisme ainsi que sa popularité. 
L'application aurait fonctionnée avec un simple code Javascript, mais j'ai quand même voulu utilisé React et Redux pour mon challenge personnel.
Pour le State j'ai utilisé **Redux** qui est le gestionnaire de State Global le plus connu sur React, j'ai choisis cette technologie car elle est fiable et est souvent mise a jour.
Afin de générer des keys pour mes props j'ai installé *Uuid-React*, ce qui m'à permi de donner une clé a chaque case de mon Grid.
