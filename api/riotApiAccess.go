package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

func main () {
	api_key := os.Getenv("RIOT_API_KEY")

	url := "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/oG4kzulqeu1UL4xOQoS0T03_lJdLOSWLn-5JrAYqN2AuFgFAVdTTxKF8j0M6ywdYtTQRktDYUp2nwg/ids"

	url = join(url, "?api_key=", api_key)

	res, err := http.Get(url)
	if ( err != nil ) {
		log.Fatal(err)
	}
	defer res.Body.Close()
	
	fmt.Println(res.Status)
	if ( res.StatusCode == http.StatusOK ){
		bodyBytes, err := io.ReadAll(res.Body)
		if ( err != nil ) {
			log.Fatal(err)
		}
		
		bodyString := string(bodyBytes)
		fmt.Println( bodyString )
	}
	
}

func join( strs ...string) string {
	var sb strings.Builder
	for _, str := range strs {
		sb.WriteString(str)
	}

	return sb.String()
}
