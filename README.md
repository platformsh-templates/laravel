# Laravel for Platform.sh

<p align="center">
<a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/platformsh/template-builder/master/templates/laravel/.platform.template.yaml&utm_content=laravel&utm_source=github&utm_medium=button&utm_campaign=deploy_on_platform">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" width="180px" />
</a>
</p>

This template provides a basic Laravel skeleton.  It comes pre-configured to use a MariaDB database and Redis for caching and sessions using a Laravel-specific bridge library that runs during Composer autoload.  The public files symlink is also replaced with a custom web path definition so it is unnecessary.  It is intended for you to use as a starting point and modify for your own needs.

Laravel is an opinionated, integrated rapid-application-development framework for PHP.

## Features

* PHP 8.0
* MariaDB 10.4
* Redis 5.0
* Automatic TLS certificates
* Composer-based build

## Notice
On Platform.sh the [minimum time between cron jobs](https://docs.platform.sh/create-apps/app-reference.html#cron-job-timing) 
being triggered depends on your plan. [Laravel documentation](https://laravel.com/docs/7.x/scheduling) suggests running 
the scheduler as a cron job every minute. Task scheduling may then be contradicted by the cron minimum frequency. 
Schedules outside the specified cron frequency are ignored and the related tasks aren’t triggered. 

Due to this conflict, this Laravel template utilizes [workers](https://docs.platform.sh/create-apps/workers.html) to run 
both the scheduler and the queue systems. In order to have enough resources to support these workers as well as the 
MariaDB and Redis service, **this template requires at least a [Medium plan](https://docs.platform.sh/administration/pricing.html#multiple-apps-in-a-single-project).**

## Customizations

The following changes have been made relative to a plain Laravel project.  If using this project as a reference for your own existing project, replicate the changes below to your project.

* The `.platform.app.yaml`, `.platform/services.yaml`, and `.platform/routes.yaml` files have been added.  These provide Platform.sh-specific configuration and are present in all projects on Platform.sh.  You may customize them as you see fit.
* An additional Composer library, [`platformsh/laravel-bridge`](https://github.com/platformsh/laravel-bridge), has been added.  It automatically maps Platform.sh's environment variables to Laravel's environment variables where possible.  It leverages the [`platformsh/config-reader`](https://github.com/platformsh/config-reader-php) library.
* The Laravel Bridge library also automatically configures Laravel to use Redis for both caching and session storage.  That may be disabled by removing or changing the name of the `rediscache` and `redissession` relationships in `.platform.app.yaml`.
* Laravel normally wants you to create a symlink for the public storage directory, using the `artisan storage:link` command.  That is not necessary and will not work on Platform.sh due to the read-only file system.  Instead, a dedicated web path mapping is included for the `/storage` path that has the same effect.

## References

* [Laravel](https://laravel.com/)
* [PHP on Platform.sh](https://docs.platform.sh/languages/php.html)
