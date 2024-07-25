import pkg from 'lodash';
const {memoize} = pkg;

export const fibonacci = (n) =>{
    if(n==0 || n==1) return n;
    return fibonacci(n-1)+fibonacci(n-2);
}
pkg.memoize(fibonacci);

