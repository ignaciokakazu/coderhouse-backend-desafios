#curl -d "cantidad=1000" -X POST http://localhost:8081/info/random
#artillery quick --count 10 -n 20 "http://localhost:8081/info/random?cantidad=1000" > result_artillery.txt
node --prof-process isolate-000002C8B4EF8A10-17100-v8-17100.log > profArchivo.txt
autocannon -c 100 -d 20 "http://localhost:8081/info/random?cantidad=1000"

