/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-05-09T14:05:83+02:00
 * @Copyright: Technology Studio
**/

import { NOT_DELETED } from '../Model'

export const excludeDeleted = <CONDITION>(condition: CONDITION): {
  AND: [CONDITION, {
    deletedDateTime: typeof NOT_DELETED,
  }],
} => {
  return {
    AND: [
      condition,
      {
        deletedDateTime: NOT_DELETED,
      },
    ],
  }
}
