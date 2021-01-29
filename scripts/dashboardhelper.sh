#!/bin/bash

# ---------------------------------------------------------------------------- #
#                                   Changelog                                  # 
# ---------------------------------------------------------------------------- #
# 2021-01-28 - Raúl:
# - Script Creation

# ---------------------------------------------------------------------------- #
#                                   VARIABLES                                  #
# ---------------------------------------------------------------------------- #
VERSION=$(echo "2021.28.01")
COLOR_YELLOW="\e[93m*"
COLOR_RED="\e[91m*"
COLOR_NORMAL="*\e[0m"
SEARCH=""

# ---------------------------------------------------------------------------- #
#                                   CSV FILES                                  #
# ---------------------------------------------------------------------------- #
# read report names from config.json > reports > dev
CONFIGJSONGFILE="../src/assets/config.json"
reportnames=$(jq '.reports.dev | to_entries[] | select(.key).key' $CONFIGJSONGFILE)
reportnames_wo_CRLF=$( echo ${reportnames} | tr "\n" " " )
echo "Reportnames: ${reportnames_wo_CRLF}"

# read for each reportname the fallback from configfile


# ---------------------------------------------------------------------------- #
#                                  Help Output                                 #
# ---------------------------------------------------------------------------- #
function HELP() {
    echo -ne "Usage of: ${0} [arguments]

Arguments:
	-d  | --debug	   This option will enable debuging with set -x

	-v  | --version    Consult version
${COLOR_YELLOW}  Note: When adding or removing, --add (-a) or --remove (-rm) must be the last one, if not, the rule wont be added. ${COLOR_NORMAL}
${COLOR_RED}  Note: If any of the options are note set it will prompt you an interactive menu. ${COLOR_NORMAL}"
}


# 
# putTotalvalusInCSV reads CSV file x, counts distinct values in column and writes totals in CSV holding the totals
#
function putTotalvalusInCSV() {

}


# Check CLI Arguments
if [ $# -gt 0 ]; then
	while [ "$1" != "" ]; do
		case $1 in
			-d | --debug )
						shift
						set -x && echo "[OK] enabled set -x" || echo "[FAILED] to enbale set -x"
						;;

			-h | --help )
						help
						exit 0
						;;
			* )
						echo "Unknown parameter $1, please check help"
						help
						exit 1
		esac
		shift
	done
fi
