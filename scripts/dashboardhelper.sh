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

SEARCH=""
# ---------------------------------------------------------------------------- #
#                                  Help Output                                 #
# ---------------------------------------------------------------------------- #
function HELP() {
    echo -ne "Usage of: ${0} [arguments]

Arguments:
	-l  | --list 	   This option will list the actual iptables rules
	-a  | --add 	   Add a rule in the iptables \e[93m(Must specify chain, target, protocol and portnumber)\e[0m
	-rm | --remove 	   Remove a rule from the iptables \e[93m(Must specify chain, target, protocol and portnumber) cd\e[0m
	-c  | --chain	   <chain> This option is for specifying the chain
	-t  | --target	   <target> This option is for specifying the target
	-p  | --protocol   <protocol> This option is for specifying the protocol (tcp/udp)
	-pn | --portnumber <port number> This option is for specifying the port number   	   
	-b  | --backup     That option will backup iptables to a txt file
	-rs | --restore    That option will restore iptables from a txt file
	-v  | --version    Consult version
\e[93m*  Note: When adding or removing, --add (-a) or --remove (-rm) must be the last one, if not, the rule wont be added. *\e[0m
\e[91m*  Note: If any of the options are note set it will prompt you an interactive menu. *\e[0m"
}


# 
# putTotalvalusInCSV reads CSV file x, counts distinct values in column and writes totals in CSV holding the totals
#
function putTotalvalusInCSV() {

}


# Check CLI Arguments
