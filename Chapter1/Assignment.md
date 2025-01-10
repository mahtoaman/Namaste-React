# Chapter 02 - Ignite our app

## ●- What is `NPM`?
NPM stands for node package manager although it is not official. It is used to manage packages of nodejs, using this we can intall, update and delete node package 

## ● - What is `Parcel/Webpack`? Why do we need it?
it is a module builder which bundles js css and optimizes it for prouduction build.Parcel is also same as webpack but it aims to simplify the configuration process.

## ● - What is `.parcel-cache`
it is a directory created during building process of parcel. it is used to store the cached data to improve the subsequent builds. it avoids redundant work during rebuilding of application

## ● - What is `npx` ?
it is a command line tool which comes with npm and it is used to execute the packages without having them to install globally. The primary use case of npx is temporary intall and execute a package without the need for mannual installation.

## ● - What is difference between `dependencies` vs `devDependencies`
all the packages listed in dependencies are required to run the product in the production enviornment. it is installed by "npm install package" without --save or -D

devDependencies are the packages that are required to run the product only in development environment. it is intalled using "npm install --save-dev package-name"


## ● - What is Tree Shaking?
it is a technique which is used in parcel or any other webpack to remove the dead code or unused code from the final bundled output. The goal of tree shaking is to reduce the size of bundled js file improving the perfomance of web application. it can remove any moudle functions or variable which have not used in the application.

## ● - What is Hot Module Replacement?
it allow us to update the code without have them to reload whole page. this can significantly speedup the application

## ● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
-HMR
-No Configuration
-supports wide range of file types
-efficient caching
-automatic assest optimization - automatically otpimizes and build for production this includes tasks such as minification, code splitting and tree shaking


## ● - What is `.gitignore`? What should we add and not add into it?
this is a config file which is used by version control system git. it specifiles files and directories that should be ignored when tracking changes into the repository

## ● - What is the difference between `package.json` and `package-lock.json`
package.json - it contains the meta data of the project such as name, version, entry point and most imporntant list of all the dependencies, developers can directly edit this using manually or using command

package-lock.json - it contains the exact version of all the dependencies. it ensures that all the same version of dependencies intalled over all the enviornments. it also contains the exact version of all the transitive dependencies.

## ● - Why should I not modify `package-lock.json`?
basically it locks exact version of all the packages so if modify it then there's a chance that wrong package could be installed.


## ● - What is `node_modules` ? Is it a good idea to push that on git?
node_modules is a directly which contains all the codes of packages and trasitive depencecies code that we have installed in our project.
it contains lots of files so it's not a good idea to push it on github. it is very time consuming.


## ● - What is the `dist` folder?
dist folder contains all the minified code of our build.

## ● - What is `browserlists`
basically it is a config file and quering tool that specify that which browser should be support by our front-end tools.

## ● Read about: ^ - caret and ~ - tilda
Use the caret (^) if you are okay with backward-compatible updates, including minor changes.
Use the tilde (~) if you only want to allow backward-compatible updates at the patch level.


## Read about dif bundlers: vite, webpack, parcel, browerlist
## ● Read about Script types in html (MDN Docs)
