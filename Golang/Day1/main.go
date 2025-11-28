package main

import "fmt"

func main() {
	arr := []int{-9, -5, 2, 3, 4, 10}
	result := sortedSquare(arr)
	for i := 0; i < len(result); i++ {
		fmt.Printf("%d ", result[i])
	}
}
