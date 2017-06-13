# responsive-website-headstart-011
Responsive Website - Headstart 011

Partially based on 'Design and develop a killer website with html5 and css3' at https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/t/lecture/2619782?start=0

This repository covers the tutorial all the way up to and including 'Optimizations & Favicon'.

https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/t/lecture/2620100?start=0

## Javascript files from www.jsdelivr.com

Some javascript files are used to support different browsers:

- [respond](http://www.jsdelivr.com/?query=respond): A fast & lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)

- [html5shiv](http://www.jsdelivr.com/?query=html5shiv): The defacto way to enable use of HTML5 sectioning elements in legacy Internet Explorer.

- [selectivizr](http://www.jsdelivr.com/?query=selectivizr): Emulates CSS3 pseudo-classes and attribute selectors in Internet Explorer 6-8.

Look on http://caniuse.com/#search=transform to check if the css instruction 'transform' is supported by which browsers (and their versions).

## Javascript files (i.e. jQuery) from https://developers.google.com/speed/libraries/devguide

- [jQuery](https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js): jQuery library

## Javascript files from https://imakewebthings.com

- [Waypoints](http://imakewebthings.com/waypoints/): Waypoints, the easiest way to trigger a function when you scroll to an element.

## Animations from https://daneden.github.io/animate.css

## Directory structure

### site directory

site/

-- app1/

---- e2e/

---- src/

---- .editorconfig

---- .gitignore

---- angular-cli.json

---- bower.json

---- karma.conf.js

---- package.json

---- protractor.conf.js

---- tsconfig.json

---- tslint.json

---- webpack.config.js
    
-- public/

### site/app1/src directory

site/app1/src/

### site/public directory

site/public/app1/

# Angular CLI

## Installation

```javascript
sudo npm install -g @angular/cli
```

# Webpack

## Installation

Pre-requisites

Before getting started, make sure you have a fresh version of Node.js installed. The current LTS is an ideal starting point. You may run into a variety of issues with the older versions as they may be missing functionality webpack or related packages might need.

The next section tells you how to install webpack locally in a project.

### Local Installation

The latest webpack release is: GitHub release v.2.6.1

```javascript
npm install --save-dev webpack
```

To run the build command type:

```javascript
npm run build
```

To run the ***development*** build command type:

```javascript
npm run dev
```

To run the ***production*** build command type:

```javascript
npm run prod
```

### Global Installation

Note that a global webpack installation is not a recommended practice. This locks you down to a specific version of webpack and might fail in projects that use a different version.

```javascript
npm install --global webpack
```

The webpack command is now available globally.

# Browse the website

To browse the website for app1, type the following (e.g. for port 8010):

```javascript
cd site/app1
ng serve --port 8010
```

# Build the website to the public/app1 folder with ng

```javascript
cd site/app1
npm run ng_build
```

# Browse the production version of the website with XAMPP

Download XAMMP from https://www.apachefriends.org

Install XAMMP and point to the public directory of this project, i.e. site/public

NOTE: Make sure inside the public directory there is an app1 subdirectory. When a build is run, which is not a production version, the app1 directory in public is automatically removed.

From the HOW-TO Guides on the Dashboard of the XAMPP home page, follow the instructions as to how to Configure Virtual Hosts

In short it is a matter of doing the following:

1) Uncomment the line below in /Applications/XAMPP/etc/httpd.conf:

```javascript
Include etc/extra/httpd-vhosts.conf
```

2) Replace the existing entries in /Applications/XAMPP/etc/extra/httpd-vhosts.conf with these (adjust paths where suitable):

```javascript
<VirtualHost *:80>
       DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs/"
       ServerName localhost
</VirtualHost>
<VirtualHost *:80>
       DocumentRoot "/Users/willem/git/willem-vanheemstrasystems/responsive-website-headstart-011/site/public/app1"
       ServerName app1.site.local
       <Directory "/Users/willem/git/willem-vanheemstrasystems/responsive-website-headstart-011/site/public/app1">
            Options Indexes FollowSymLinks Includes ExecCGI
            AllowOverride All
            Require all granted
       </Directory>
</VirtualHost>
```

The above are two virtual host configuration blocks:

The first block is the default or fallback virtual host, which is used for all requests that are not matched by subsequent blocks.

The second block sets up a virtual host named app1.site.local. The DocumentRoot directive specifies the directory to be used when serving requests for this virtual host (in this case, the site/public/app1 installation directory), while the ServerName directive specifies the custom domain name for the virtual host.

3) Restart Apache using the XAMPP control panel for your changes to take effect.

4) At this point, your virtual host is configured. However, if you try browsing to the app1.site.localhost domain, your browser will show a failure notice, since this domain does not exist in reality. To resolve this, it is necessary to map the custom domain to the local IP address. 

To do this, open the /etc/hosts file, for example by using a terminal to open the file with nano (sudo nano /etc/hosts) and add the following line to it:

```javascript
127.0.0.1           app1.site.local
```

Then save the file and exit.

This takes care of mapping the app1.site.local domain name to the local machine, which always has the IP address 127.0.0.1.

At this point, you should be able to enter the URL http://app1.site.local in your browser’s address bar and see your app1 installation.

NOTE: If you get an Access Forbidden 403 message when opening above URL. It turns out that Apache runs as ‘nobody’ by default and it doesn’t have permission to browse your OS X user directory or some of its subdirectories. You need to let it run as your OS X user. [Solution found at http://mrgott.com/misc/20-setting-up-virtual-hosts-for-xampp-on-mac-os-x-el-capitan]

Once again open /Applications/XAMPP/xamppfiles/etc/httpd.conf and look for:

```javascript
# User/Group: The name (or #number) of the user/group to run httpd as.
# It is usually good practice to create a dedicated user and group for
# running httpd, as with most system services.
#
User daemon
Group daemon
```

Change User to your OS X username, and save the file. In my case it’s User willem.

```javascript
User willem
Group daemon
```

Restart Apache and you should now be able to access your site without any issues.