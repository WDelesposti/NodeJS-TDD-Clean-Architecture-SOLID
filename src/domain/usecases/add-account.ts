export interface AddAccount {
  add: (account: AddAccount.Params) => Promise<AddAccount.Result>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AddAccount {
  export interface Params {
    name: string
    email: string
    password: string
  }

  export type Result = boolean
}
