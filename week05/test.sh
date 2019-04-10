for var in "$@"
do
    echo "<html><head><title>$var</title></head><body><h1>$var</h1></body></html>" > ./school/$var.html
done
