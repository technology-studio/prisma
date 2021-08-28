/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-05-09T15:05:95+02:00
 * @Copyright: Technology Studio
**/

export const ifExists = <CONDITION, VALUE>(
  value: VALUE | undefined,
): {
    then: (mapper: (value: VALUE) => CONDITION) => { else: (condition: CONDITION) => CONDITION },
    else: <DEFAULT_CONDITION = undefined> (condition: CONDITION, defaultCondition: DEFAULT_CONDITION) => CONDITION | DEFAULT_CONDITION,
  } => ({
    then: mapper => {
      return {
        else: value !== undefined
          ? () => mapper(value)
          : condition => condition,
      }
    },
    else: value !== undefined
      ? (_condition, defaultCondition) => defaultCondition
      : condition => condition,
  })
