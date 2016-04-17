# Openfeedback client

This is a simple feedback application integrated with photon-power-ui-kit and React.js which will communicate with a Symfony API

### Installation steps
You should check if you have node.js installed if not download it from here https://nodejs.org/en/

Clone github app
```sh
git clone app
```
Install dependencies
```sh
npm install
```
### Useful commands (that can be runned using npm)
I've created a set of useful scripts for general purpose

Creates web directory (for the simple purpose that by default the web directory is set in .gitignore file)
```sh
npm run web:create
```

It copies assets file into web directory using a symlink
```sh
npm run assets:install
```

Deletes symlinks from web directory
```sh
npm run assets:clear
```

### Observations
If you want to execute command npm run assets:install you should first create the web directory (using npm run web:create).


### Known issues
* “Cross origin requests are only supported for HTTP.” - this appears when we use index.html without a vhost. We recommend you to create a vhost

### License
MIT
