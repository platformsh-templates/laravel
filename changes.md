## Project creation

- This is the lates v10 version btw
- curl -s "https://laravel.build/example-laravel-app" | bash

> Note:
> Should use curl -s "https://laravel.build/example-app?with=mysql,redis" | bash, until we can include meilisearch which comes by default.

- composer config name platformsh/laravel

## Local with Sail

- printf "\nAPP_PORT=8080" >> .env
- ./vendor/bin/sail up
- available at localhost:80

## Local with DDEV (no integration)

- ddev config --project-type=laravel --docroot=public --http-port 8080 --php-version 8.1
- ddev start
- available at https://example-laravel-app.ddev.site/

## Platformify

- composer require platformsh/laravel-bridge
- add https://github.com/platformsh-templates/laravel/blob/master/.platform/routes.yaml
- add https://github.com/platformsh-templates/laravel/blob/master/.platform/services.yaml
- add https://github.com/platformsh-templates/laravel/blob/master/.platform.app.yaml
- bump type: php:8.1

## P.sh + DDEV integration

- ddev delete
- ddev get ddev/ddev-platformsh
- ddev start
- ddev pull platform