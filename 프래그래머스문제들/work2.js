function solution(n) {
    let max = Math.floor(n/2)+1;
    let min = max-1;
    let count = 0;
    
    while(min >= 1) {
        for(let i = min; i >= 1; i--) {
            if((max*max-min*min+max+min)/2 == n) {
                count++;
                max--;
                min=max-1
                break;
            } else if((max*max-min*min+max+min)/2 > n) {
                max--
                min=max-1
                break;  
            } else {
                min--
            }
        }
    }
    return count+1
}
//특정 숫자가 주어졌을때 그 숫자를 표현할수있는 모든 등차수열의 경우의 수