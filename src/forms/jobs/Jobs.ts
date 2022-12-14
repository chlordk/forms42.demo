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

import content from './Jobs.html';

import { datasource } from "forms42core";
import { BaseForm } from "../../BaseForm";
import { Jobs as Jobdata } from "../../datasources/database/Jobs";

@datasource("Jobs",Jobdata)

export class Jobs extends BaseForm
{
	constructor()
	{
		super(content);
		this.title = "Jobs";
	}
}
