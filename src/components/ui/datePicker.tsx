'use client';

import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function DatePicker({ id, fullWidth }: { id: string; fullWidth: boolean }) {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					id={id}
					variant={'defaultBorderOutline'}
					className={cn(
						'justify-start text-left font-normal',
						!date && 'text-muted-foreground',
						!fullWidth && 'w-[240px]',
						fullWidth && 'w-full'
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, 'PPP') : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
					locale={de}
					disabled={{
						dayOfWeek: [1, 2, 3, 4]
					}}
				/>
			</PopoverContent>
		</Popover>
	);
}
