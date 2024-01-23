function solve(array) {
    console.clear();
    let i = 0;
    let K = array.shift(); //8
    let L = array.shift(); //7, 9
    let M = array.shift(); //6, 8
    let N = array.shift(); //7, 9

    //console.log("K=" + K + " L=" + L + " M=" + M + " N=" + N);
    for(let k = 8; k >= K; k--) {
        for(let l = 9; l >= L ; l--) {
            for(let m = 8; m >= M; m--) {
                for(let n = 9; n >= N; n--) {
                    if(i < 6){
                        if(k%2 == 0 && m%2 == 0 && l%2 !== 0 && n%2 !== 0) {
                            if(k == m && l == n) {
                                i++;
                                console.log("Cannot change the same player.");
                            } else 
                            {
                                i++;
                                console.log(k + "" + l + "-" + m + n);
                            }
                        }
                    }
                }
            }
        }
    }
}

solve(["7", "6", "8", "5"]);

// function solve(array) {
//     console.clear();
//     let i = 0;
//     let K = array.shift(); //8
//     let L = array.shift(); //7, 9
//     let M = array.shift(); //6, 8
//     let N = array.shift(); //7, 9

//     //console.log("K=" + K + " L=" + L + " M=" + M + " N=" + N);
//     for(let j = 0; K < 8; j ++) {
//         if( j == 0){
//             // console.log(K);
//         } else {
//             K++;
//             console.log("N=" + N);
//         }
//         for(let l = 0; L <= 9 ; l++) {
//             if( l == 0){
//                 // console.log(L);
//             } else {
//                 L++;
//                 console.log("L=" + L);
//             }
//             // console.log(L);
//             for(let m = 0; M <= 8; m++) {
//                 if( m == 0){
//                     // console.log(M);
//                 } else {
//                     M++;
//                     console.log("M=" + M);
//                 }
//                 console.log(M);
//                 for(let n = 0; N < 9; n++) {

//                     if( n == 0){
//                         // console.log(N);
//                     } else if (N < 9) {
//                         N++;
//                         console.log("N=" + N);
//                     }

//                     if (N%2 !== 0) {}

//                     if(i < 6){
//                         if(K%2 == 0 && M%2 == 0 && L%2 !== 0 && N%2 !== 0) {
//                             if(K == M && L == N) {
//                                 i++;
//                                 console.log("Cannot change the same player.");
//                             } else 
//                             {
//                                 i++;
//                                 console.log(K + "" + L + "-" + M + N);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// solve(["7", "6", "8", "5"]);