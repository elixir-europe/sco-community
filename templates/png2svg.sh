#!/bin/bash
# THIS SCRRIPT CONVERTS PNG IMAGES TO SVG, USING imagemagick AND potrace
# SOURCE: https://gist.github.com/ykarikos/2892009
# ANOTHER ALTERNATIVE RESOURCE IS https://www.vectorization.org


if [ "$1" == "" ]; then
  echo Usage: $0 pngfile
  exit 0;
fi

echo $1

FILE2=`basename $1 .png`

if [ ! -e $1 ]; then
  echo $1 does not exist
  exit 1;
fi

convert $1 $FILE2.pnm
potrace -s -o $FILE2.svg $FILE2.pnm
# rm $FILE2.pnm
