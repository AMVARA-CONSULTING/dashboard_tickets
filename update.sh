#!/bin/bash
# #########################################
# AMVARA CONSULTING S.L. - 2018
# #########################################
# Changelog:
# 2018-11-12 ABA First version
# #########################################
echo -e "\e[37mRetrieving last pull...\e[0m"
git remote set-url origin http://AlexBarba:gryUeXp_9HxoxH8E6Byo@git.amvara.consulting/daimler/cism.git
git fetch origin
git reset --hard origin/master
echo -e "\e[32mDone\e[0m"
echo -e "\e[37mReinstalling latest @angular/cli...\e[0m"
npm install -g @angular/cli >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[37mInstalling npm packages...\e[0m"
npm install >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[37mCompiling...\e[0m"
ng build --prod --aot --build-optimizer >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[37mCopying files to public folder...\e[0m"
cp -a /code/dist/. /usr/share/nginx/html/ >> output.log 2>&1
echo -e "\e[32mOK\e[0m"
echo -e "\e[32mSuccessful\e[0m"