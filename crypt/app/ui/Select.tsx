type Option = {
	value: string;
	display: string;
}

type Props = {
	placeholder: string;
	options: Array<Option>;
	updateOption: Function;
}

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export function Selecter({ placeholder, options, updateOption }: Props) {
	return (
		<Select onValueChange={updateOption}>
			<SelectTrigger className="w-[180px] bg-black">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options.map((option) => <SelectItem value={option.value} key={option.value}>{option.display}</SelectItem>)}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
