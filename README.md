![image info](https://raw.githubusercontent.com/mariojgt/skeleton-admin/master/Publish/Art/logo.png)

# Welcome to skeleton-admin
This is a base package for Laravel that scaffolds a basic admin panel. It comes with frontend and backend login and two Webpack configs both for them both respectively. Also included is Inertia JS, Tailwind CSS, Vue JS, Daisy UI, GDPR cookie for Laravel. skeleton-admin comes with a generic crud builder ready and easy to use and Two-factor Authentication out of the box. The project still in development, so if you have any suggestion or you want to contribute, please submit an issue on GitHub, thanks!

## Installation

First, you need a clean Laravel project, then run the following command:

```bash
    1: composer require mariojgt/skeleton-admin
    2: php artisan install:skeleton-admin
```
A config file will be published to the config folder where you can update the settings.

By default, this package will come with the requirements below. For more information please see the package.json file.

## Requirements
- [ ] Tailwind CSS.
- [ ] Daisy UI.
- [ ] Inertia JS.
- [ ] Vue JS.

## Usage
After installation, you can access `/user/login` or `/admin/login`. The login page will be the same for both frontend and backend, with different logos. Everything in this package can be changed as the files are inside `resources/vendor/skeleton-admin`. Don't forget to run `npm run watch` to update the files as all the controllers are inside the package.

You may need to create a repo for your project to add new functions because the idea is to have a starting point for your project with everything contained in the package.

## Note
This package was designed to have a strong and simple start point to be as modular as possible, you can update it to meet your needs and don't forget to contribute to the project, thanks!
