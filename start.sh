#!/bin/bash
echo -e "\e[37mStartup cleanup...\e[0m"
echo "" > output.log 2>&1
rm -rf /code/node_modules/ >> output.log 2>&1
echo -e "\e[32mDone\e[0m"
echo -e "\e[37mUpdating packages...\e[0m"
apt-get update >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[37mInstalling some useful packages...\e[0m"
apt-get install -y vim nano git curl gnupg2 >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[37mInstalling NodeJS & NPM...\e[0m"
curl -sL https://deb.nodesource.com/setup_11.x | bash - >> output.log 2>&1
apt-get install -y nodejs >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[37mInstalling @angular/cli...\e[0m"
npm install -g @angular/cli >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[37mInstalling npm packages...\e[0m"
npm install >> output.log 2>&1
npm install node-sass >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
if ! [ -f /code/dist/index.html ]; then
  echo -e "\e[95mBuild files not found :(\e[0m"
  echo -e "\e[37mCompiling...\e[0m"
  ng build --prod --aot --build-optimizer
  echo -e "\e[32mDone\e[0m"
fi
echo -e "\e[37mCopying files to public folder...\e[0m"
cp -a /code/dist/. /usr/share/nginx/html/
echo -e "\e[32mOK\e[0m"
echo -e "\e[32mSuccessful\e[0m"
nginx -g 'daemon off;'