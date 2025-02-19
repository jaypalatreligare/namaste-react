…or create a new repository on the command line
echo "# namaste-react" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jaypalatreligare/namaste-react.git
git push -u origin main


…or push an existing repository from the command line
git remote add origin https://github.com/jaypalatreligare/namaste-react.git
git branch -M main
git push -u origin main

npm init - will generate (package.json) configuration file for npm  or  configuration file dependency

Bundelers-> bundles the app
Webpack - used by web-pack bundeller
Parcel
Vite 

npm install -D parcel 
npm install react react-dom - > as normal dependencies
dev Dependencies - for development mode
normal Dependencies - use in production

packege-lock.json - dependency about dependency - keep the track of the exact version of the package
for every upgrade it will put all the version upgrade of the packages but package.json can have a ^ and ~
package.json will keep the approx version 
^ - upgrade minor version
~ - upgrade major version
every packege inside node_modules folder can have package.json
and have its own devDepencdencies and normal Dependencies
its is manditory to put package and package-lock.json into the git

if we having package.json and packege-lock.json then we can re-generate node_modules in out application by 
npm install command



parcel - 
depends on some dependency -> 
                -> those dependencies can have other more dependencies 
                                                          -> those can have another dependencies

npx - executing a package

create production build
create local server
development build
HMR - hot module replacement
Cache - for faster development build -> .parcel-cache folder
Image optimization
Minification of files
Bundllling of the files
Compressing
Consistent hashing 
Code splitting
Diffrenctial bundelling - like app can be open in old browsers mozila,chrome and internet explorer for seperate accordingly generate accordingly
Error handling
host application on https also
Tree shaking algorithm -  remove unused code 
diffrent dev and production bundles

dist - this folder containig build files


file wathcing algorithim - written in c++

https://browserslist.dev/
