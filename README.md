# Alphanumeric sort for JavaScript

A usable, portable, algorithm/comparator for sorting things like filenames and
addresses that contain numbers.

## For example

The algorithm will sort the following files in this order:

	file 1.txt
	file 5.txt
	file 39.txt
	file 100.txt

as opposed to this order (which is what the default JavaScript comparator
produces)

	file 1.txt
	file 100.txt
	file 39.txt
	file 5.txt

## Usage

The library provides a comparator that can be fed to `Array.prototype.sort`.

First you do

	> npm install alphanumeric-sort

And then you do

	var compare = require('alphanumeric-sort').compare;

	["file 100.txt", "file 5.txt", "file 39.txt"].sort(compare);
	//=> ["file 5.txt", "file 39.txt", "file 100.txt"]

## Caveats

The implementation is **quick & dirty** - it just prepends "enough" zeroes
before every digit sequence in the string before comparing lexicographically.

The maximum amount of consecutive digits is 20, after that all bets are off.

(Thanks for the idea,
http://www.bennadel.com/blog/2495-User-Friendly-Sort-Of-Alpha-Numeric-Data-In-JavaScript.htm)

It's not probably very fast.  (To be honest, I haven't really tested.)


