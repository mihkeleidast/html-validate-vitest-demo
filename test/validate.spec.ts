import { expect, test } from 'vitest'

test('is valid', () => {
  expect('<p>paragraph</p>').toHTMLValidate()
})