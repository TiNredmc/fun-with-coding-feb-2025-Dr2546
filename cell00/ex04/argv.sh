#!/bin/bash

argc_idx=0
if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
else
	for args in "$@"
	do
		echo "$args"
		argc_idx=$((argc_idx+1))
		if [ $argc_idx -eq 3 ]; then
			break
		fi
	done
fi

	
