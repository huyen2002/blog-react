export interface QueryParams {
  page: number
  size: number
}
export const toQueryParams = (params: QueryParams) => {
  const result = `page=${(params.page - 1).toString()}&size=${params.size}`
  console.log('result', result)
  return result
}
