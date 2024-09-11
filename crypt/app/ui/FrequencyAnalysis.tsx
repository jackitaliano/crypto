"use client";

import {
	Table,
	TableBody,
	// TableCaption,
	TableCell,
	// TableHead,
	// TableHeader,
	TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Alphabet, DiFreq, TriFreq, UniFreq } from "../util/alphabets";
import { getCipherAlphabet } from "../util/frequency";
import { useEffect, useState } from "react";

type Props = {
	alphabet: Alphabet;
	ciphertext: string;
}

export function FrequencyAnalysis({ alphabet, ciphertext }: Props) {

	alphabet.uniFreq = alphabet.uniFreq.sort((a, b) => b.freq - a.freq);
	alphabet.diFreq = alphabet.diFreq.sort((a, b) => b.diF.freq - a.diF.freq);
	alphabet.triFreq = alphabet.triFreq.sort((a, b) => b.freq - a.freq);

	const emptyAlphabet: Alphabet = {
		chars: [],
		uniFreq: [],
		diFreq: [],
		triFreq: [],
	}

	const [cipherAlphabet, setCipherAlphabet] = useState(emptyAlphabet)

	useEffect(() => {
		if (ciphertext === "") {
			setCipherAlphabet(emptyAlphabet);
		}

		const updatedCipherAlphabet = getCipherAlphabet(ciphertext);

		updatedCipherAlphabet.uniFreq = updatedCipherAlphabet.uniFreq.slice(0, alphabet.uniFreq.length);
		updatedCipherAlphabet.diFreq = updatedCipherAlphabet.diFreq.slice(0, alphabet.diFreq.length);
		updatedCipherAlphabet.triFreq = updatedCipherAlphabet.triFreq.slice(0, alphabet.triFreq.length);

		setCipherAlphabet(updatedCipherAlphabet);

		console.log("cipherAlphabet");
		console.log(cipherAlphabet);
	}, [ ciphertext ])

	const transparencyOffset = 0;

	return (
		<div className="p-8 flex gap-2">
			<Card className="w-48">
				<CardHeader className="h-16 px-0 py-4 flex items-center">
					<CardTitle className="m-auto text-base">Regular Unigrams</CardTitle>
				</CardHeader>
				<CardContent className="p-1">
					<Table className="w-full h-full">
						<TableBody>
							{alphabet.uniFreq.map((uni: UniFreq) => 
								{
									const style = {
										backgroundColor: 'hsl(30, 100%, 50%, ' + (uni.freq + transparencyOffset) + ")"
									}
									return (<TableRow style={style}>
										<div className="flex justify-between">
											<TableCell className="p-0.5">{uni.char}</TableCell>
											<TableCell className="p-0.5 flex ms-auto">{(uni.freq * 100).toFixed(1)}%</TableCell>
										</div>
									</TableRow>);
								}
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="w-48">
				<CardHeader className="h-16 px-0 py-4 flex items-center">
					<CardTitle className="m-auto text-base">Cipher Unigrams</CardTitle>
				</CardHeader>
				<CardContent className="p-1">
					<Table className="w-full h-full">
						<TableBody>
							{cipherAlphabet.uniFreq.map((uni: UniFreq) => 
								{
									const style = {
										backgroundColor: 'hsl(200, 100%, 50%, ' + ( uni.freq + transparencyOffset) + ")"
									}
									return (<TableRow style={style}>
										<div className="flex justify-between">
											<TableCell className="p-0.5">{uni.char}</TableCell>
											<TableCell className="p-0.5 flex ms-auto">{(uni.freq * 100).toFixed(1)}%</TableCell>
										</div>
									</TableRow>);
								}
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="w-48">
				<CardHeader className="h-16 px-0 py-4 flex items-center">
					<CardTitle className="m-auto text-base">Regular Digrams</CardTitle>
				</CardHeader>
				<CardContent className="p-1">
					<Table className="w-full h-full">
						<TableBody>
							{alphabet.diFreq.map((di: DiFreq) => 
								{
									const styleF = {
										backgroundColor: 'hsl(30, 100%, 50%, ' + ( di.diF.freq + transparencyOffset) + ")"
									}
									const styleR = {
										backgroundColor: 'hsl(30, 100%, 50%, ' + ( di.diF.freq + transparencyOffset) + ")"
									}
									return (<TableRow className="flex">
									<div className="w-full flex justify-between" style={styleF}>
										<TableCell className="p-0.5">{di.diF.chars}</TableCell>
										<TableCell className="p-0.5">{(di.diF.freq * 100).toFixed(1)}%</TableCell>
									</div>
									<div className="w-full flex justify-between" style={styleR}>
										<TableCell className="p-0.5">{di.diR.chars}</TableCell>
										<TableCell className="p-0.5 flex me-0">{(di.diR.freq * 100).toFixed(1)}%</TableCell>
									</div>
									</TableRow>);
								}
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="w-48">
				<CardHeader className="h-16 px-0 py-4 flex items-center">
					<CardTitle className="m-auto text-base">Cipher Digrams</CardTitle>
				</CardHeader>
				<CardContent className="p-1">
					<Table className="w-full h-full">
						<TableBody>
							{cipherAlphabet.diFreq.map((di: DiFreq) => 
								{
									const styleF = {
										backgroundColor: 'hsl(200, 100%, 50%, ' + ( di.diF.freq + transparencyOffset) + ")"
									}
									const styleR = {
										backgroundColor: 'hsl(200, 100%, 50%, ' + ( di.diR.freq + transparencyOffset) + ")"
									}
									return (<TableRow className="flex">
									<div className="w-full flex justify-between" style={styleF}>
										<TableCell className="p-0.5">{di.diF.chars}</TableCell>
										<TableCell className="p-0.5">{(di.diF.freq * 100).toFixed(1)}%</TableCell>
									</div>
									<div className="w-full flex justify-between" style={styleR}>
										<TableCell className="p-0.5">{di.diR.chars}</TableCell>
										<TableCell className="p-0.5 flex me-0">{(di.diR.freq * 100).toFixed(1)}%</TableCell>
									</div>
									</TableRow>);
								}
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="w-48">
				<CardHeader className="h-16 px-0 py-4 flex items-center">
					<CardTitle className="m-auto text-base">Regular Trigrams</CardTitle>
				</CardHeader>
				<CardContent className="p-1">
					<Table className="w-full h-full">
						<TableBody>
							{alphabet.triFreq.map((tri: TriFreq) => 
								{
									const style = {
										backgroundColor: 'hsl(30, 100%, 50%, ' + ( tri.freq + transparencyOffset) + ")"
									}
									return (<TableRow style={style}>
										<div className="flex justify-between">
											<TableCell className="p-0.5">{tri.chars}</TableCell>
											<TableCell className="p-0.5 flex ms-auto">{(tri.freq * 100).toFixed(1)}%</TableCell>
										</div>
									</TableRow>);
								}
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="w-48">
				<CardHeader className="h-16 px-0 py-4 flex items-center">
					<CardTitle className="m-auto text-base">Cipher Trigrams</CardTitle>
				</CardHeader>
				<CardContent className="p-1">
					<Table className="w-full h-full">
						<TableBody>
							{cipherAlphabet.triFreq.map((tri: TriFreq) => 
								{
									const style = {
										backgroundColor: 'hsl(200, 100%, 50%, ' + ( tri.freq + transparencyOffset) + ")"
									}
									return (<TableRow style={style}>
										<div className="flex justify-between">
											<TableCell className="p-0.5">{tri.chars}</TableCell>
											<TableCell className="p-0.5 flex ms-auto">{(tri.freq * 100).toFixed(1)}%</TableCell>
										</div>
									</TableRow>);
								}
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
