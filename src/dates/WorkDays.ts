/*
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.

 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 */

import { DateConstraint } from "forms42core";

export class WorkDays implements DateConstraint
{
	dateclazz:string = "weekend";
	message:string = "Weekends not allowed";

	valid(date:Date) : boolean
	{
		if (date == null) return(true);
		let day:number = date.getDay();
		return(day > 0 && day < 6);
	}
}