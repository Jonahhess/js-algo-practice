/*
Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

No matching values:

Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
With matching values:

Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.

Examples
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
Notes
The highest score has a rank value of 1..
*/

// idea: rank = number of scores greater than me, plus 1
// efficiency #1: we only need to consider the scores greater than me
// efficiency #2: since 1 <= #(scores) <= names, sort by scores
// efficiency #3: scores are usually a fixed range, so sorting can be O(1)

// solution

function competitionRank(scores, nameToRank) {
  return (
    Object.entries(
      Object.values(scores)
        .filter((v) => v > scores[nameToRank])
        .reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {})
    )
      .sort(([a], [b]) => b - a)
      .map(([, v]) => v)
      .reduce((a, b) => a + b, 0) + 1
  );
}

// end of solution

//

function competitionRankOriginal(scores, nameToRank) {
  if (!(nameToRank in scores)) {
    return 0;
  }

  const scoreToRank = scores[nameToRank];

  const relevantValues = Object.values(scores).filter(
    (v) => typeof v === "number" && v > scoreToRank
  );

  const counter = relevantValues.reduce(
    (ac, a) => ((ac[a] = ac[a] + 1 || 1), ac),
    {}
  );

  const sortedEntries = Object.entries(counter).sort(([a], [b]) => b - a);
  return sortedEntries.map(([, v]) => v).reduce((a, b) => a + b, 0) + 1;
}

//

// Without Safety checks

function competitionRank2(scores, nameToRank) {
  const scoreToRank = scores[nameToRank];
  const relevantValues = Object.values(scores).filter((v) => v > scoreToRank);
  const counter = relevantValues.reduce(
    (ac, a) => ((ac[a] = ac[a] + 1 || 1), ac),
    {}
  );

  const sortedEntries = Object.entries(counter).sort(([a], [b]) => b - a);
  return sortedEntries.map(([, v]) => v).reduce((a, b) => a + b, 0) + 1;
}

// golf with comments

function competitionRank1(scores, nameToRank) {
  return (
    // 4. turn counter into [score, occurrences] pairs
    Object.entries(
      Object.values(scores) // 1. get all scores
        .filter((v) => v > scores[nameToRank]) // 2. get scores greater than me
        .reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {}) // 3. count scores
    )
      .sort(([a], [b]) => b - a) // 5. sort entries by score
      .map(([, v]) => v) // 6. get occurrences
      .reduce((a, b) => a + b, 0) + 1 // 7. sum occurrences and add 1
  );
}

exports.solution = competitionRank;
