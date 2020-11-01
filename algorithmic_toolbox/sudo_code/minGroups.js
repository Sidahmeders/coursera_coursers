/*
 we have an arr of groups of children => 
[3.2, 3.2, 3.2, 3.2, 3.2, 3.8, 3.8, 3.8, 3.8, 4.6, 4.6, 4.6, 4.6, 5, 5, 5, 5]

*/

function minGroups(c_arr) {
    let m = c_arr.length;
    for (let i = 0; i < 4; i++) {
        for (let i = 0; i < c_arr.length; i++) {

        }
    }
}

minGroups([3.2, 3.2, 3.2, 3.2, 3.2, 3.8, 3.8, 3.8, 3.8, 4.6, 4.6, 4.6, 4.6, 5, 5, 5, 5]);

class Ls {
    constructor(val, next) {
        this.first = first;
        this.next = this.next;
    }
}

/*
adding polynomials
3x 4
1x 2

3x*1x + 3x*2 + 4*1x + 4*2
3x^2  + 10x + 8

*/

/*
    
*/
// partition of quick sort..
function part(A, l, r) {
    let x = A[l]; // pivaot
    let j = l;
    for (let i = l+1; i < r; i++) {
        let temp1 = A[i]; // temp var
        if (A[i] <= x) {
            j = j+1;
            // swap A[j] && A[i]
            A[i] = A[j];
            A[j] = temp1;
        }
    }
    let temp2 = A[l]; // temp var
    // swap A[l] && A[j]
    A[l] = A[j];
    A[j] = temp2;
    return j;
}
