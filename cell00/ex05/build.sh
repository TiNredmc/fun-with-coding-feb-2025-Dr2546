#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
else
	for args in "$@"
	do
		mkdir ex"$args"
	done
fi

	
