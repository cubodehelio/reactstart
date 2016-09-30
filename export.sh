# temporarily export `node_modules/.bin` to the PATH env so then we can invoke
# the babel cli from there (or any other cli tool). Run this in your terminal:
# `. export.sh`
export PATH=$PATH:$(pwd)/node_modules/.bin
