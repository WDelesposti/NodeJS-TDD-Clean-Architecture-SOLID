import { type AddAccount, type Hasher, type AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository
  ) {
    this.hasher = hasher
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccount.Params): Promise<AddAccount.Result> {
    const hashedPassword = await this.hasher.hash(accountData.password)
    let isValid = false
    isValid = await this.addAccountRepository.add({ ...accountData, password: hashedPassword })
    return isValid
  }
}
