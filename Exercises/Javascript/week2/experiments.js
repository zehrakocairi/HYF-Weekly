"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < sampleSize; i++) {
    let randomInteger = Math.floor(Math.random() * 6);
    valueCounts[randomInteger] += 1;
  }

  const results = [];

  for (let i = 0; i < valueCounts.length; i++) {
    results.push(((valueCounts[i] / sampleSize) * 100).toFixed(2).toString());
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const item of sampleSizes) {
    console.log(`${runExperiment(item)} ${item}`);
  }
}

main();
