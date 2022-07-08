/**
 * Problem 8.5:Find the Town Judge
 *  In a town, there are n people labeled from 1 to n. There is a rumor 
 *  that one of thesepeople is secretly the town judge.If the town judge 
 *  exists, then: 
 *      1. The town judge trusts nobody. 
 *      2. Everybody (except forthe town judge) trusts the town judge. 
 *      3. There is exactly one person that satisfiesproperties 1 and 2.
 *  You are given an array trust where trust[i] = [ai, bi] representing that the person 
 *  labeledai trusts the person labeled bi. Return the label of the town judge if the 
 *  town judge existsand can be identified, or return -1 otherwise. 
 */


const findJudge =(N, trust)=> {
    const counts = new Array(N+1).fill(0);

    for(let [i,j] of trust) {
        // If the person trusts somebody, then it does not meet requirement 1
        counts[i] -= 1        
        // Count the people they trust
        counts[j] += 1
    }

    // If N-1 exists, then its the judge since the judge trusts no one except 
    // themselves and everyone else trusts the judge, then its N-1
    for(let i = 1; i < counts.length; i++) {
        if ((N-1) === counts[i]) {
            return i;
        }
    }
    
    return -1
}

let n = 3, trust = [[1,3],[2,3]];
console.log(findJudge(n,trust));
