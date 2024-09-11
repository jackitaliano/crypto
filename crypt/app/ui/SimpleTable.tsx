import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	// TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

type Props = {
	tableName: string;
	entries: Array<string>;
}

export function SimpleTable({ tableName, entries }: Props) {

	return (
		<Table className="w-full h-full">
			<TableHeader>
			</TableHeader>
			<TableBody>
				{entries.map((entry: string, i: number) => 
						<TableRow>
							<TableCell className="w-16 p-1">{i}</TableCell>
							<TableCell className="w-full p-1">{entry}</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	)
}
