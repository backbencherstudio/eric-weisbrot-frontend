"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface Calendar22Props {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export function Calendar22({ value, onChange }: Calendar22Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm h-[56px] justify-start font-normal hover:bg-[#F3F6FC] hover:text-[#4A4C56]"
          >
            <span className={value ? "text-[#4A4C56]" : "text-[#9CA3AF]"}>
              {value ? value.toLocaleDateString() : "Select date of birth"}
            </span>
            <ChevronDownIcon className="ml-auto size-6 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              onChange?.(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}