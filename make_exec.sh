#!/bin/bash
# Should make all .sh files in supplied path executable

count="$#"
if [[ count -eq 0 ]]
then
	chmod +x *.sh
elif [[ count -eq 1 ]]
then
	p=$(pwd)
	cd $1
	chmod +x *.sh
	cd $p
else
	echo "Usage: make_exec.sh <path>"
fi
