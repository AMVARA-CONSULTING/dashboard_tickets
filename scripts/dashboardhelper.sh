#!/bin/bash

# ---------------------------------------------------------------------------- #
#                                   Changelog                                  # 
# ---------------------------------------------------------------------------- #
# 2021-01-29 - Raúl
# - Script can read CSV Filenames from config.json
# 2021-01-28 - Raúl:
# - Script Creation

# ---------------------------------------------------------------------------- #
#                                   VARIABLES                                  #
# ---------------------------------------------------------------------------- #
VERSION=$(echo "2021.28.01")
COLOR_YELLOW="\e[93m*"
COLOR_RED="\e[91m*"
COLOR_NORMAL="*\e[0m"

# ---------------------------------------------------------------------------- #
#                                   CSV FILES                                  #
#				read report names from config.json > reports > dev			   #
# ---------------------------------------------------------------------------- #

CONFIGJSONGFILE="../src/assets/config.json"
reportnames=$(jq '.reports.dev | to_entries[] | select(.key).key' $CONFIGJSONGFILE)
reportnames_wo_CRLF=$( echo ${reportnames} | tr "\n" " ")
array=($reportnames_wo_CRLF)

for key in "${array[@]}"
do
	# read for each reportname the fallback from configfile
	echo "* Reading: ${key} "
	RESULT=$(jq -r -c '.reports.dev.'$key'.fallback' $CONFIGJSONGFILE 2> /dev/null) && echo "[OK] key $key found - value is: ${RESULT}" || echo "[NOK] ${key} not found"
done



# ---------------------------------------------------------------------------- #
#                                  Help Output                                 #
# ---------------------------------------------------------------------------- #
function HELP() {
    echo -ne "Usage of: ${0} [arguments]

Arguments:
	-d  | --debug	   This option will enable debuging with set -x

	-v  | --version    Consult version
${COLOR_YELLOW} Note: When adding or removing, --add (-a) or --remove (-rm) must be the last one, if not, the rule wont be added. ${COLOR_NORMAL}
${COLOR_RED} Note: If any of the options are note set it will prompt you an interactive menu. ${COLOR_NORMAL}
"
}


# 
# putTotalvaluesInCSV reads CSV file x, counts distinct values in column and writes totals in CSV holding the totals
#
#function putTotalvaluesInCSV() {
#
#}


# Check CLI Arguments
if [ $# -gt 0 ]; then
	while [ "$1" != "" ]; do
		case $1 in
			-d | --debug )
						shift
						set -x && echo "[OK] enabled set -x" || echo "[FAILED] to enbale set -x"
						;;

			-h | --help )
						HELP
						exit 0
						;;
			* )
						echo -e "${COLOR_RED} Unknown parameter $1, please check Help: ${COLOR_NORMAL}"
						HELP
						exit 1
		esac
		shift
	done
fi
