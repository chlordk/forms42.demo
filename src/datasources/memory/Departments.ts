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

import { MemoryTable } from "forms42core";
import { Departments as DepartmentsData } from "../../data/Departments";

export class Departments extends MemoryTable
{
	private static table:Departments = null;

	public static get() : Departments
	{
		if (Departments.table == null)
			Departments.table = new Departments();

		return(Departments.table);
	}

	constructor()
	{
		super(DepartmentsData.columns,DepartmentsData.data);
		this.sorting = "department_id";
	}
}