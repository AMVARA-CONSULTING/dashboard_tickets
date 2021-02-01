#!/bin/bash

# ---------------------------------------------------------------------------- #
#                                   Changelog                                  # 
# ---------------------------------------------------------------------------- #
# 2021-02-01 - Raúl Documented what to do on each file
# 2021-01-29 - RRO version parameter, empty parameter shows help
# 2021-01-29 - Raúl
# - Script can read CSV Filenames from config.json
# 2021-01-28 - Raúl:
# - Script Creation

# ---------------------------------------------------------------------------- #
#                                   VARIABLES                                  #
# ---------------------------------------------------------------------------- #
VERSION=$(echo "2021.29.01")
COLOR_YELLOW="\e[93m*"
COLOR_RED="\e[91m*"
COLOR_NORMAL="*\e[0m"
TIMESTAMP=`date +"%Y%m%d_%H%M%S"`

# ---------------------------------------------------------------------------- #
#                                   CSV FILES                                  #
#				read report names from config.json > reports > dev			   #
# ---------------------------------------------------------------------------- #
# SCRIPT this is where we are
SCRIPT=`realpath $0`

# SCRIPPATH this is the directory of the script
SCRIPTPATH=`dirname $SCRIPT`

# config.json of project holding the reportnames
CONFIGJSONGFILE="../src/assets/config.json"

# directory with CSV files full of data (this is fallback on DEV, on productions this is fetched from COGNOS, SAP, QLICKVIEW, datadog, ... )
REPORTDIRECTORY="../src/assets/reports"

# Array with the filenames of report in REPORTDIRECTORY
REPORTNAMES=()

# Array with filesnames of reports in CONFIGJSONGFILE
RESULT_WITH_REPORTFILES=()

#
# Nicer log output .. uses $0 as parameter
#
function amvara_log() {
	t=`date +"%Y%m%d_%H%M%S"`
	echo -e "${t} $@"
}

#
# Reads the reports directory into the arra REPORTNAMES
#
function readFilesInAssetsDir() {
	amvara_log "[INF] Reading directory $REPORTDIRECTORY"

	# read directory into array
	REPORTNAMES=($(ls ${REPORTDIRECTORY}))
	for value in "${REPORTNAMES[@]}"
	do
		amvara_log "[...] $value"
	done
}

#
# Read Reports finds the reports from config.json into the array RESULT_WITH_REPORTFILES
#
function readFilesFromJson() {
	# variables for counting
	CNT=0
	CNT_FOUND=0
	CNT_NOTFOUND=0

	# this contains the found filenames
	RESULT_WITH_REPORTFILES=()

	# read the config file
	amvara_log "[   ] selecting .report.dev.keys from $CONFIGJSONGFILE"
	reportnames=$(jq '.reports.dev | to_entries[] | select(.key).key' $CONFIGJSONGFILE)
	amvara_log "[   ] splitting results"
	reportnames_wo_CRLF=$( echo ${reportnames} | tr "\n" " ")
	amvara_log "[   ] Split: ${reportnames_wo_CRLF} " 

	amvara_log "[   ] Converting into array"
	arrayWithReportNames=($reportnames_wo_CRLF)
	
	# loop over names from config.json
	amvara_log "[   ] Loop over array  ${#arrayWithReportNames[@]} items"
	for key in "${arrayWithReportNames[@]}"
	do
		# Add +1 to counter
		CNT=$[$CNT +1]

		# set STATUS of reading
		STATUS=empty

		# read for each reportname the fallback from configfile
		RESULT=$(jq -r -c '.reports.dev.'$key'.fallback' $CONFIGJSONGFILE 2> /dev/null) && STATUS="OK" || STATUS="NOK" 
	
		if [ "${RESULT}" == "null" ]; then
			# if the resulting filename equals null ... then this is not ok
			STATUS="NOK"
		fi

		if [ "${STATUS}" == "OK" ]; then
			# we found something good
			CNT_FOUND=$[$CNT_FOUND +1]
			amvara_log "[OK ] ($CNT) ${key} \t data comes from => ${RESULT}"
			RESULT_WITH_REPORTFILES+=("${RESULT}")  
		fi

		if [ "${STATUS}" == "NOK" ]; then
			# else we did not find something valueable
			CNT_NOTFOUND=$[$CNT_NOTFOUND +1]
			amvara_log "[ ? ] ($CNT) ${key} \t no datafile for this config key found in config" 
		fi

	done
	amvara_log "[   ] finished reading"
	amvara_log "[   ] Found a total of $CNT reports in config. $CNT_FOUND have data input configured, $CNT_NOTFOUND have no data input configured. "
	for value in "${RESULT_WITH_REPORTFILES[@]}"
	do
		amvara_log "[...] $value"
	done
}


#
# function compareFilesNameArrays ... compares the two arrays read from JSON with the one from DIRECTORY
#
function compareFilesNameArrays() {

	USE_JSON="TRUE"
	USE_DIRECTORY="TRUE"

	# loop over REPORTNAMES from filesystem
	amvara_log "[CHK] Looking for files that are on filesystem but not configured JSON"
	for value in "${REPORTNAMES[@]}"
	do
		if [[ ! " ${RESULT_WITH_REPORTFILES[@]} " =~ " ${value} " ]]; then
			amvara_log "[!!!] $value not in JSON"
			USE_JSON="FALSE"
		fi
	done

	# loop over files found in JSON
	amvara_log "[CHK] Looking for files missing in filesystem that are configured in JSON"
	for value in "${RESULT_WITH_REPORTFILES[@]}"
	do
		if [[ ! " ${REPORTNAMES[@]} " =~ " ${value} " ]]; then
			amvara_log "[!!!] $value not in DIRECTORY"
			USE_DIRECTORY="FALSE"
		fi
	done

	amvara_log "=========================="
	[[ "${USE_DIRECTORY}" == "TRUE" ]] && amvara_log "[==>] We can use the files in directory"	
	[[ "${USE_JSON}" == "TRUE" ]] && amvara_log "[==>] We can use the files in JSON"	
	amvara_log "=========================="

}


function modifyDataFiles() {

	# -------------------------
	# Mobile_Tickets_List.csv
	# -------------------------
	# Read Tickets details from Mobile_Tickets_List and calc totals for 
	#  Ticket Type;Ticket Priority;Ticket Status per Month
	#
	# Let User Fill or replace information in columns
	# (1) Month iD; (2) Ticket iD; (3) Creation Date H.M; (4) Modify Date H.M; (5) Ticket Type; (6) Ticket Priority; (7) Ticket Status;Description;External;classification;Component;Assigned to servicegroup;By app/service;1
	# Example: 
	# 2020M12;01;18.12.2020 10:00;20.12.2020 13:02;Outlet;M;Man;Black Hoodie;Barcelona;Hoodie;Catalunya;Sports;Sports;1
	#
	#  This archive is used by /var/www/cism/src/app/components/pages/tickets/tickets.component.ts
	#
	# Todo: Fix header ignore + remove line output and only print summary
	# 
	FILE="$REPORTDIRECTORY/Mobile_Tickets_List.csv"
	amvara_log "[IN ] Reading file $FILE"
	awk 'FS=";"
		{
			total_per_tickettype[$1";"$5]+=1;
			total_per_ticketprio[$1";"$6]+=1;
			total_per_ticketstatus[$1";"$7]+=1;
		} 
		END {
			print "------------------ totals per ticket type "
			for(k in total_per_tickettype) print "BYTYPE;" k ";" total_per_tickettype[k] ";"
			print "------------------ totals per ticket prio "
			for(k in total_per_ticketprio) print "BYPRIORY;" k ";" total_per_ticketprio[k]";"
			print "------------------ totals per ticket status "
			for(k in total_per_ticketstatus) print "BYSTATUS;" k ";" total_per_ticketstatus[k] ";"
		}' $FILE

	#--------------------------------  notes  -----------------------------------
	# nice
	# https://stackoverflow.com/questions/37169871/awk-replacing-distinct-values-with-averages-for-duplicate-entries
	# $ awk '{f2[$1]+=$2; f3[$1]+=$3; f4[$1]+=$4; c[$1]++; r[$1]=NR} END{for(k in c) print r[k] "\t" k, f2[k]/c[k], f3[k]/c[k], f4[k]/c[k]}' file | sort -n | cut -f2

	# First do the documentation of what todo on each file
	# Onces we understand what we have todo ... then we decide on howto
	
	# Mobile_Tickets_Chart.csv
	# Fill data in bar charts for each day of each month with the total of the Ticket Type 
	# BARCHART;Day Of Month;Month iD;Total 1;Total 2;Total 3;Total 4
	# Example:
	# BARCHART;2020-12-21;2020M12;20;20;10;15
	
	# Mobile_Tickets_List.csv
	# Let User Fill or replace information in columns
	# Month iD;Ticket iD;Creation Date H.M;Modify Date H.M;Ticket Type;Ticket Priority;Ticket Status;Description;External;classification;Component;Assigned to servicegroup;By app/service;1
	# Example: 
	# 2020M12;01;18.12.2020 10:00;20.12.2020 13:02;Outlet;M;Man;Black Hoodie;Barcelona;Hoodie;Catalunya;Sports;Sports;1

	# Mobile_Tickets_Overall.csv
	# ¿¿??

	# Mobile_Tickets_Priority.csv
	# Fills for priority (Clothes size) with the total of each one for each month
	# ToDo: Read Mobile_Tickets_List.csv and extract totals per month + Ticket Priority
	# BYPRIORY;Month iD;Priority number (Clothes Size);Total
	# Example:
	# BYPRIORY;2020M12;S;50

	# Mobile_Tickets_Service.csv
	# Fills for each type of service, the total of each month
	# BYSERVICE;Month ID;Service Name (Type of clothes);Total
	# Example:
	# BYSERVICE;2020M12;Party;25
	
	# Mobile_Tickets_Silt.csv
	# Fills for each month with the Time SILT Business Minutes
	# SILT;Month iD;Silt Minutes
	# Example:
	# SILT;2020M12;1680

	# Mobile_Tickets_Status.csv
	# Fills for status (Clothes Collection) with the total of each one for each month
	# BYSTATUS;Month iD;status type (Clothes Collection);Total
	# Example:
	# BYSTATUS;2020M12;Kids;35
	
	# Mobile_Tickets_Type.csv
	# Fills for type (Sales Channel) with the total of each one for each month
	# BYTYPE;Month ID;Ticket Type (Sales Channel);total
	# Example:
	# BYTYPE;2020M12;Whitebrand;25

	# System.csv
	# Experimental Features Graphics
	# ¿¿??

}


# ---------------------------------------------------------------------------- #
#                                  Help Output                                 #
# ---------------------------------------------------------------------------- #
function HELP() {
    echo -ne "Usage of: ${0} [arguments]

Arguments:
	-c  | --compare		Combines -rd + -r and compares the resulting arrays
	-m  | --modify		Calculates totals in csv archives
	-rd | --readdir		Reads the directory where the reports are stored
	-r  | --readfiles	Reads the data files names
	-d  | --debug	   	This option will enable debuging with set -x
	-v  | --version    	Consult version

"
}

#
# function to bundle basic steps to prepare Variables in memory
#
function basicPreparVariables() {
	readFilesFromJson
	readFilesInAssetsDir
	compareFilesNameArrays
}

# ---------------------------------------------------------------------------- #
#                                Check CLI arguments                           #
# ---------------------------------------------------------------------------- #
if [ $# -gt 0 ]; then
	while [ "$1" != "" ]; do
		case $1 in
			-c | --compare )
						shift
						amvara_log "${COLOR_YELLOW} Finding report data files form config.json ${COLOR_NORMAL}"
						basicPreparVariables
						amvara_log "${COLOR_YELLOW} done ${COLOR_NORMAL}"
						;;
			-d | --debug )
						shift
						set -x && echo "[OK] enabled set -x" || echo "[FAILED] to enbale set -x"
						;;
			-m | --modifyfiles )
						shift
						basicPreparVariables						
						amvara_log "* Create Backup of CSV files in Directory BACKUP_${TIMESTAMP}.tgz"
						amvara_log "* Loop over files to be used"
						modifyDataFiles
						;;
			-r | --readfiles ) 
						shift
						amvara_log "${COLOR_YELLOW} Finding report data files form config.json ${COLOR_NORMAL}"
						readFilesFromJson
						amvara_log "${COLOR_YELLOW} done ${COLOR_NORMAL}"
						exit 0 
						;;
			-rd | --readdir )
						shift 
						amvara_log "${COLOR_YELLOW} Reading files in assets/reports directory ${COLOR_NORMAL}"
						readFilesInAssetsDir
						amvara_log "${COLOR_YELLOW} done ${COLOR_NORMAL}"
						;;
			-v | --version )
						shift
						amvara_log VERSION: $VERSION
						exit 0
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
else
	HELP
	exit 1
fi
