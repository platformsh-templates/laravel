# Laravel for Platform.sh

<p align="center">
<a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/platformsh/template-builder/master/templates/laravel/.platform.template.yaml&utm_content=laravel&utm_source=github&utm_medium=button&utm_campaign=deploy_on_platform">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" width="180px" />
</a>
</p>

This template provides a basic Laravel skeleton.  It comes pre-configured to use a MariaDB database and Redis for caching and sessions using a Laravel-specific bridge library that runs during Composer autoload.  It is intended for you to use as a starting point and modify for your own needs.

Laravel is an opinionated, integrated rapid-application-development framework for PHP.

## Features

* PHP 7.4
* MariaDB 10.4
* Redis 5.0
* Automatic TLS certificates
* Composer-based build

## Customizations

The following changes have been made relative to a plain Laravel project.  If using this project as a reference for your own existing project, replicate the changes below to your project.

* The `.platform.app.yaml`, `.platform/services.yaml`, and `.platform/routes.yaml` files have been added.  These provide Platform.sh-specific configuration and are present in all projects on Platform.sh.  You may customize them as you see fit.
* An additional Composer library, [`platformsh/laravel-bridge`](https://github.com/platformsh/laravel-bridge), has been added.  It automatically maps Platform.sh's environment variables to Laravel's environment variables where possible.  It leverages the [`platformsh/config-reader`](https://github.com/platformsh/config-reader-php) library.
* The Laravel Bridge library also automatically configures Laravel to use Redis for both caching and session storage.  That may be disabled by removing or changing the name of the `rediscache` and `redissession` relationships in `.platform.app.yaml`.

## References

* [Laravel](https://laravel.com/)
* [PHP on Platform.sh](https://docs.platform.sh/languages/php.html)
