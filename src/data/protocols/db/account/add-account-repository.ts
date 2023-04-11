import { type AddAccount } from '../../../../domain/usecases/add-account'

export interface AddAccountRepository {
  add: (account: AddAccountRepository.Params) => Promise<AddAccountRepository.Result>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AddAccountRepository {
  export type Result = boolean
  export type Params = AddAccount.Params
}
