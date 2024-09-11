"use client";
import { useState, useEffect } from "react";
import { enumerateShift } from '../util/shiftCipher';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { SimpleTable } from "./SimpleTable";

type Props = {
  ciphertext: string;
}

export function CaesarShift({ ciphertext }: Props) {
  const [shifted, setShifted] = useState(Array(26).fill(''));

  useEffect(() => {

    if (ciphertext === "") {
      return;
    }

    const shifts: Array<string> = enumerateShift(ciphertext, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    console.log("set shifted")
    setShifted(shifts);
    console.log("shifted:")
    console.log(shifts)
  }, [ ciphertext ]);

  return (
    <div className="min-h-screen p-8 w-full h-full overflow-hidden">
      <ScrollArea  className="p-4 rounded-md border">
	<SimpleTable tableName="Caesar Shift" entries={shifted}/>
	<ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
