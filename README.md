![image info](https://raw.githubusercontent.com/mariojgt/skeleton-admin/master/Publish/Art/logo.png)
# welcome to skeleton-admin
This is a base package for laravel that scaffold a basic admin panel, it comes with frontend and backend login, 2 webpack configs both for frontend and backend, use inerisia js, tailwind css, vue js, daisy ui, comes with a generic crud builder ready and easy to use and two factor autentication out of the box, the project still in development, so if you have any suggestion or you want to contribute, please submit an issue on github, thanks!

## Installation

first you need a clean laravel project, then run the following command:

```bash
    1: composer require mariojgt/skeleton-admin
    2: php artisan install:skeleton-admin
```
There is a config file that will be publish to the config folder where you can update the settings.

## Usage
after instalation you can acess yoururl/user/login or yoururl/admin/login, the login page will be the same for both frontend and backend, with different logos, but everything can be change the files are inside resources/vendor/skeleton-admin don't forget to run npm run watch in order to update the files.

