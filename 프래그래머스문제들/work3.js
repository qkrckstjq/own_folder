function solution(n) {
    let a = n.toString(2).split('');
    let ans = new Array(a.length).fill('0');
    let whenMeet = 0;
    let endOne = 0;
    let count = 0;
    let i = a.length-1;
    while(true) {
        if(whenMeet == 0 && a[i] == '0') {
            i--;
        } else if (whenMeet == 0 && a[i] == '1') {
            count++
            whenMeet = 1;
            i--;
        } else if ((whenMeet == 1 && a[i] == '0') || i < 0) {
            break;
        } else if (whenMeet == 1 && a[i] == '1') {
            i--;
            count++
        }
    }    
    if(i < 0) {
        ans.unshift('1')
        for(let j = ans.length-1; j > ans.length-1-(count-1); j--) {
            ans[j] = '1';
        }
    } else {
        ans[i] = '1';
        for(let j = 0; j < i; j++) {
            ans[j] = a[j]
        }
        
        for(let j = ans.length-1; j > ans.length-1-(count-1); j--) {
            ans[j] = '1'
        }
    }
    return parseInt(ans.join(''),2)   
}
//이진법에서 1의 개수를 유지하면서 입력받은 값의 다음으로 큰 수 찾기