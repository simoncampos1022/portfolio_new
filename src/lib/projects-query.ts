export const projectCategories = ['All', 'AI/ML', 'Frontend', 'Mobile', 'Backend', 'FullStack', 'Trading', 'DevOps'] as const
export const projectSortOptions = ['Time', 'A-Z', 'Size'] as const

export type ProjectSort = (typeof projectSortOptions)[number]

/** Everything on the projects list that a visitor can change, and that should survive a trip to a project page. */
export type ProjectListState = {
  category: string
  search: string
  sort: ProjectSort
  reverse: boolean
  page: number
}

export const defaultProjectListState: ProjectListState = {
  category: 'All',
  search: '',
  sort: 'Time',
  reverse: false,
  page: 1,
}

/** Reads the list state from a query string such as "?page=2&category=AI%2FML". Unknown or invalid values fall back to the defaults. */
export function parseProjectListState(queryString: string): ProjectListState {
  const params = new URLSearchParams(queryString)

  const category = params.get('category')
  const sort = params.get('sort')
  const page = Number.parseInt(params.get('page') ?? '', 10)

  return {
    category: projectCategories.find((item) => item === category) ?? defaultProjectListState.category,
    search: params.get('q') ?? defaultProjectListState.search,
    sort: projectSortOptions.find((item) => item === sort) ?? defaultProjectListState.sort,
    reverse: params.get('reverse') === '1',
    page: Number.isFinite(page) && page > 1 ? page : defaultProjectListState.page,
  }
}

/** The query string for a list state ("?page=2", or "" when everything is the default), so the plain URL stays clean. */
export function projectListQuery(state: ProjectListState): string {
  const params = new URLSearchParams()

  if (state.category !== defaultProjectListState.category) params.set('category', state.category)
  if (state.search.trim()) params.set('q', state.search)
  if (state.sort !== defaultProjectListState.sort) params.set('sort', state.sort)
  if (state.reverse) params.set('reverse', '1')
  if (state.page > 1) params.set('page', String(state.page))

  const query = params.toString()
  return query ? `?${query}` : ''
}
