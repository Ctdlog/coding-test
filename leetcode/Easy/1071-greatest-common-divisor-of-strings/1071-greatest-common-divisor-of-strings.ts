function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1) return ''

    let m = str1.length
    let n = str2.length

    return str1.slice(0, gcd(m, n))
};

 function gcd(x: number, y: number) {
    if (!y) return x
    return gcd(y, x % y)
}