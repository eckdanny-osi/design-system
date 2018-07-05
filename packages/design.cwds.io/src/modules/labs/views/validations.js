/*

interface IValidation = (error)

 */

export const REQUIRED = value => value == null || value.length === 0;
