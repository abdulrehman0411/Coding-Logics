export const high = (str: string): string => { let i, j: number = 0; let sum: number = 0; let maxnum: number[] = []; let max: string[] = str.split(" "); for (i = 0; i < max.length; i++) { sum = 0 for (j = 0; j < max[i].length; j++) { if (max[i][j] == "a") { sum += 1; } else if (max[i][j] == "b") { sum += 2; } else if (max[i][j] == "c") { sum += 3; } else if (max[i][j] == "d") { sum += 4; } else if (max[i][j] == "e") { sum += 5; } else if (max[i][j] == "f") { sum += 6; } else if (max[i][j] == "g") { sum += 7; } else if (max[i][j] == "h") { sum += 8; } else if (max[i][j] == "i") { sum += 9; } else if (max[i][j] == "j") { sum += 10; } else if (max[i][j] == "k") { sum += 11; } else if (max[i][j] == "l") { sum += 12; } else if (max[i][j] == "m") { sum += 13; } else if (max[i][j] == "n") { sum += 14; } else if (max[i][j] == "o") { sum += 15; } else if (max[i][j] == "p") { sum += 16; } else if (max[i][j] == "q") { sum += 17; } else if (max[i][j] == "r") { sum += 18; } else if (max[i][j] == "s") { sum += 19; } else if (max[i][j] == "t") { sum += 20; } else if (max[i][j] == "u") { sum += 21; } else if (max[i][j] == "v") { sum += 22; } else if (max[i][j] == "w") { sum += 23; } else if (max[i][j] == "x") { sum += 24; } else if (max[i][j] == "y") { sum += 25; } else if (max[i][j] == "z") { sum += 26; } } maxnum.push(sum); } for (i = 0; i < 1; i++) { sum = maxnum[i] for (j = 1; j < maxnum.length; j++) { if (sum < maxnum[j]) { sum = maxnum[j]; } } } for (i = 0; i < maxnum.length; i++) { if (sum == maxnum[i]) { j = i; break; } } let fstr: string = max[j]; return fstr; }