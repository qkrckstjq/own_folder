function solution(s) {
    let count = 0;
    let zero = 0;
    s = s.split('');
    while(s.length != 1) {
        s = s.filter((i)=> {
            i=='0' ? zero++ : zero+=0;
            return i != '0' ? i : undefined
        })
        s = s.length.toString(2).split('')
        count++;
    }
    return [count, zero]
}
//이진 변환 반복하기