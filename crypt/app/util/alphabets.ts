export type UniFreq = {
	char: string;
	freq: number
}

export type DiFreq = {
	diF: {
		chars: string,
		freq: number
	};
	diR: {
		chars: string,
		freq: number
	};
}

export type TriFreq = {
	chars: string;
	freq: number;
}

export type Alphabet = {
	uniFreq: Array<UniFreq>;
	diFreq: Array<DiFreq>;
	triFreq: Array<TriFreq>;
	chars: Array<string>;
}

export const ENGLISH: Alphabet = {
	chars: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ],
	uniFreq: [
		{
			char:  "A",
			freq: 0.675
		},
		{
			char:  "B",
			freq: 0.123
		},
		{
			char:  "C",
			freq: 0.225
		},
		{
			char:  "D",
			freq: 0.359
		},
		{
			char:  "E",
			freq: 1
		},
		{
			char:  "F",
			freq: 0.191
		},
		{
			char:  "G",
			freq: 0.168
		},
		{
			char:  "H",
			freq: 0.492
		},
		{
			char:  "I",
			freq: 0.609
		},
		{
			char:  "J",
			freq: 0.008
		},
		{
			char:  "K",
			freq: 0.057
		},
		{
			char:  "L",
			freq: 0.331
		},
		{
			char:  "M",
			freq: 0.217
		},
		{
			char:  "N",
			freq: 0.578
		},
		{
			char:  "O",
			freq: 0.639
		},
		{
			char:  "P",
			freq: 0.151
		},
		{
			char:  "Q",
			freq: 0.009
		},
		{
			char:  "R",
			freq: 0.500
		},
		{
			char:  "S",
			freq: 0.522
		},
		{
			char:  "T",
			freq: 0.757
		},
		{
			char:  "U",
			freq: 0.239
		},
		{
			char:  "V",
			freq: 0.092
		},
		{
			char:  "W",
			freq: 0.174
		},
		{
			char:  "X",
			freq: 0.014
		},
		{
			char:  "Y",
			freq: 0.175
		},
		{
			char:  "Z",
			freq: 0.005
		},
	],
	diFreq: [
		{
			diF: {
				chars: "TH",
				freq: 1
			},
			diR: {
				chars: "HT",
				freq: 0.097
			}
		},
		{
			diF: {
				chars: "HE",
				freq: 0.93
			},
			diR: {
				chars: "EH",
				freq: 0.101
			}
		},
		{
			diF: {
				chars: "ER",
				freq: 0.582
			},
			diR: {
				chars: "RE",
				freq: 0.442
			}
		},
		{
			diF: {
				chars: "IN",
				freq: 0.553
			},
			diR: {
				chars: "NI",
				freq: 0.097
			}
		},
		{
			diF: {
				chars: "AN",
				freq: 0.528
			},
			diR: {
				chars: "NA",
				freq: 0.119
			}
		},
		{
			diF: {
				chars: "RE",
				freq: 0.582
			},
			diR: {
				chars: "ER",
				freq: 0.442
			}
		},
		{
			diF: {
				chars: "ND",
				freq: 0.403
			},
			diR: {
				chars: "DN",
				freq: 0.037
			}
		},
		{
			diF: {
				chars: "ED",
				freq: 0.402
			},
			diR: {
				chars: "DE",
				freq: 0.182
			}
		},
		{
			diF: {
				chars: "ES",
				freq: 0.368
			},
			diR: {
				chars: "SE",
				freq: 0.225
			}
		},
		{
			diF: {
				chars: "EN",
				freq: 0.359
			},
			diR: {
				chars: "NE",
				freq: 0.202
			}
		},
		{
			diF: {
				chars: "HA",
				freq: 0.358
			},
			diR: {
				chars: "AH",
				freq: 0.013
			}
		},
		{
			diF: {
				chars: "ON",
				freq: 0.341
			},
			diR: {
				chars: "NO",
				freq: 0.182
			}
		},
		{
			diF: {
				chars: "TO",
				freq: 0.339
			},
			diR: {
				chars: "OT",
				freq: 0.168
			}
		},
		{
			diF: {
				chars: "EA",
				freq: 0.338
			},
			diR: {
				chars: "AE",
				freq: 0.001
			}
		},
		{
			diF: {
				chars: "OU",
				freq: 0.336
			},
			diR: {
				chars: "UO",
				freq: 0.003
			}
		},
		{
			diF: {
				chars: "NT",
				freq: 0.329
			},
			diR: {
				chars: "TN",
				freq: 0.017
			}
		},
		{
			diF: {
				chars: "AT",
				freq: 0.327
			},
			diR: {
				chars: "TA",
				freq: 0.169
			}
		},
		{
			diF: {
				chars: "ST",
				freq: 0.324
			},
			diR: {
				chars: "TS",
				freq: 0.103
			}
		},
		{
			diF: {
				chars: "HI",
				freq: 0.299
			},
			diR: {
				chars: "IH",
				freq: 0.015
			}
		},
		{
			diF: {
				chars: "IT",
				freq: 0.288
			},
			diR: {
				chars: "TI",
				freq: 0.250
			}
		},
		{
			diF: {
				chars: "IS",
				freq: 0.280
			},
			diR: {
				chars: "SI",
				freq: 0.161
			}
		},
		{
			diF: {
				chars: "AS",
				freq: 0.275
			},
			diR: {
				chars: "SA",
				freq: 0.196
			}
		},
		{
			diF: {
				chars: "NG",
				freq: 0.272
			},
			diR: {
				chars: "GN",
				freq: 0.011
			}
		},
		{
			diF: {
				chars: "OR",
				freq: 0.269
			},
			diR: {
				chars: "RO",
				freq: 0.184
			}
		},
	],
	triFreq: [
		{
			chars:  "AND",
			freq: 0.464
		},
		{
			chars:  "ING",
			freq: 0.337
		},
		{
			chars:  "HER",
			freq: 0.310
		},
		{
			chars:  "THA",
			freq: 0.224
		},
		{
			chars:  "ERE",
			freq: 0.210
		},
		{
			chars:  "HIS",
			freq: 0.199
		},
		{
			chars:  "HAT",
			freq: 0.187
		},
		{
			chars:  "ENT",
			freq: 0.171
		},
		{
			chars:  "NTH",
			freq: 0.170
		},
		{
			chars:  "DTH",
			freq: 0.161
		},
		{
			chars:  "ETH",
			freq: 0.157
		},
		{
			chars:  "FOR",
			freq: 0.154
		},
		{
			chars:  "YOU",
			freq: 0.153
		},
		{
			chars:  "ITH",
			freq: 0.150
		},
		{
			chars:  "WAS",
			freq: 0.147
		},
		{
			chars:  "INT",
			freq: 0.140
		},
		{
			chars:  "THI",
			freq: 0.138
		},
		{
			chars:  "SHE",
			freq: 0.136
		},
		{
			chars:  "OTH",
			freq: 0.135
		},
		{
			chars:  "TER",
			freq: 0.131
		},
		{
			chars:  "WIT",
			freq: 0.130
		},
		{
			chars:  "HES",
			freq: 0.130
		},
		{
			chars:  "ION",
			freq: 0.128
		},
		{
			chars:  "VER",
			freq: 0.125
		},
		{
			chars:  "THE",
			freq: 1
		},
	]
}
