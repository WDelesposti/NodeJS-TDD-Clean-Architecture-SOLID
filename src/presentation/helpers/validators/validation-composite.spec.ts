import { MissingParamError } from '../../errors'
import { type Validation } from './validation'
import { ValidationComposite } from './validation-composite'

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null as any
    }
  }
  return new ValidationStub()
}

interface SutTypes {
  sut: ValidationComposite
  validationStubs: Validation
}

const makeSut = (): SutTypes => {
  const validationStubs = makeValidation()
  const sut = new ValidationComposite([validationStubs])
  return {
    sut,
    validationStubs
  }
}

describe('Validation Composite', () => {
  test('Should return an erro if any validation fails', () => {
    const { sut, validationStubs } = makeSut()
    jest.spyOn(validationStubs, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('any_field'))
  })
})
