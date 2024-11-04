"use client";
import { useEffect, useState } from "react";
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
import { Alphabet } from "../util/alphabets"
import { findCharLenRepsDistanceFactors, findCharLenRepsDistances, findCharsRepsDistancesFactors, findTopReps } from "../util/vigenere"

type Props = {
	alphabet: Alphabet;
	ciphertext: string;
}

export function Vigenere({ alphabet, ciphertext}: Props) {
	const charLensToTry = [ 2, 3, 4, 5 ];
	const emptyArray = new Array(charLensToTry.length).fill([]);

  const [reps, setReps] = useState(emptyArray);
  const [distances, setDistances] = useState(emptyArray);
	const [factors, setFactors] = useState(emptyArray);


  useEffect(() => {

    if (ciphertext === "") {
      return;
    }

		const updatedReps = findTopReps(ciphertext, charLensToTry);
		const updatedDistances = findCharLenRepsDistances(ciphertext, updatedReps);
		const updatedFactors = findCharLenRepsDistanceFactors(updatedDistances);
		setReps(updatedReps);
		setDistances(updatedDistances);
		setFactors(updatedFactors);

  }, [ ciphertext ]);

	return (
		<div>
			<div className="flex flex-wrap justify-center gap-2 mb-8">
				{charLensToTry.map((charLen, i) => 
					<Card className="w-64" key={i}>
						<CardHeader className="h-16 px-0 py-4 flex items-center">
							<CardTitle className="m-auto text-base">{charLen} Char Reps</CardTitle>
						</CardHeader>
							<CardContent className="p-1">
								<Table className="w-full h-full">
									<TableBody>
										{reps[i].map((pair) => 
										{
												return (<TableRow key={pair[0]}>
													<div className="flex justify-between">
														<TableCell className="p-0.5">{pair[0]}</TableCell>
														<TableCell className="p-0.5 flex ms-auto">{pair[1]}</TableCell>
													</div>
													</TableRow>);
											}
										)}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
				)}
			</div>
				<div className="flex flex-wrap justify-center gap-2 mb-8">
					{charLensToTry.map((charLen, i) => 
						<Card className="w-64" key={i}>
							<CardHeader className="h-16 px-0 py-4 flex items-center">
								<CardTitle className="m-auto text-base">{charLen} Char Dists</CardTitle>
							</CardHeader>
								<CardContent className="p-1">
									<Table className="w-full h-full">
										<TableBody>
											{distances[i].map((pair) => 
											{
													return (<TableRow key={pair[0]}>
														<div className="flex justify-between">
															<TableCell className="p-0.5">{pair[0]}</TableCell>
															<TableCell className="p-0.5 flex ms-auto">{JSON.stringify(pair[1])}</TableCell>
														</div>
														</TableRow>);
												}
											)}
										</TableBody>
									</Table>
								</CardContent>
							</Card>
					)}
				</div>
				<div className="flex flex-wrap justify-center gap-2 mb-8">
					{charLensToTry.map((charLen, i) => 
						<Card className="w-64" key={i}>
							<CardHeader className="h-16 px-0 py-4 flex items-center">
								<CardTitle className="m-auto text-base">{charLen} Char Facs</CardTitle>
							</CardHeader>
								<CardContent className="p-1">
									<Table className="w-full h-full">
										<TableBody>
											{factors[i].map((pair) => 
											{
													return (<TableRow key={pair[0]}>
														<div className="flex justify-between">
															<TableCell className="p-0.5">{pair[0]}</TableCell>
															<TableCell className="p-0.5 flex ms-auto">{JSON.stringify(pair[1])}</TableCell>
														</div>
														</TableRow>);
												}
											)}
										</TableBody>
									</Table>
								</CardContent>
							</Card>
					)}
				</div>
			</div>
	)
}
