let arr = new Array(100001)
arr[0] = 0 
arr[1] = 1
arr[2] = 1
function solution(n) {
    for(let i = 3; i <= n; i++){
        arr[i] == undefined ? arr[i] = (arr[i-1] + arr[i-2])%1234567 : undefined
    }
    return arr[n]
}
//피보나치 수