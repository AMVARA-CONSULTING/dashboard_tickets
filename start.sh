#!/bin/bash
apt update
echo -ne "\e[34mInstalling some useful packages...\e[0m"
apt install -y vim nano curl
curl -sL https://deb.nodesource.com/setup_11.x | bash -
apt-get install -y nodejs
echo -e "\e[32mOK\e[0m"
echo -ne "\e[34mInstalling npm packages...\e[0m"
npm install
echo -e "\e[32mOK\e[0m"
echo -ne "\e[34mInstalling @angular/cli...\e[0m"
npm install -g @angular/cli
echo -e "\e[32mOK\e[0m"
if [ -f /dist/index.html ]; then
  echo -ne "\e[95mBuild files not found :(\e[0m"
  echo -ne "\e[34mCompiling...\e[0m"
  ng build --prod --aot --build-optimizer
  echo -e "\e[32mSuccessful\e[0m"
fi
echo -ne "\e[32mYou can now go to cism.amvara.rocks!\e[0m"
