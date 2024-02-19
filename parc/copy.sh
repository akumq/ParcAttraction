#! /bin/sh

npm install -g npm@10.4.0

npm install -g @angular/cli

npm install

ng serve --host 0.0.0.0 --poll 500
<span><a routerLink="/accueil">Parc d'attraction</a></span>