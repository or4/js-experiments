import { convertToArray } from '../utils';

const raw =
`1 18
2 3
3 31
4 9
5 24
6 22
7 29
8 7
9 15
10 4
11 12
12 8
13 28
15 32
16 23
17 30
18 27
19 1
20 19
21 26
22 10
23 13
24 5
25 2
26 16
27 25
28 21
29 20
30 6
31 11
32 17`;

export const data = convertToArray(raw);

// result 14,9,6,2,0