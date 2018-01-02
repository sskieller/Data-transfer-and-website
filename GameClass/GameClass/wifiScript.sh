#!/bin/bash
# Author: Jonas Agger


connmanctl technologies | awk '/Connected/ { print $NF }' > wifiAutoconnect.txt
OUTPUT=$(sed -n 3p wifiAutoconnect.txt)

while [ "${OUTPUT}" == "False" ]
do

connmanctl technologies | awk '/Connected/ { print $NF }' > wifiAutoconnect.txt
OUTPUT=$(sed -n 3p wifiAutoconnect.txt)

if [ "${OUTPUT}" == "True" ]; then
    echo "Den virker"
    connmanctl services wifi_b827eb3da040_656475726f616d_managed_ieee8021x | awk '/IPv4/ { print $5 }' > wifiAutoconnect.txt
    IPADDR=$(sed -n 1p wifiAutoconnect.txt)
    #IPADDR=${IPADDR:8:}
    echo "${IPADDR:8:-1}"
else
    echo "Prover at connecte"
    connmanctl scan wifi
    connmanctl connect wifi_b827eb3da040_656475726f616d_managed_ieee8021x
fi

done

connmanctl services wifi_b827eb3da040_656475726f616d_managed_ieee8021x | awk '/IPv4/ { print $5 }' > wifiAutoconnect.txt
IPADDR=$(sed -n 1p wifiAutoconnect.txt)
#IPADDR=${IPADDR:8:}
echo "${IPADDR:8:-1}"