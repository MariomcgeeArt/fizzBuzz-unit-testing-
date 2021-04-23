const fb = require('../fizzbuzz')


test('FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
    expect(fb.FIZZ).toBe('fizz')
    expect(fb.BUZZ).toBe('buzz')
    
  });


test('Test isFizzy', () => {
    expect(fb.isFizzy(1)).toBe(false)
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(4)).toBe(false)
    expect(fb.isFizzy(6)).toBe(true)
  })

test('Test isBuzzy', () => {
    expect(fb.isBuzzy(1)).toBe(false)
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(3)).toBe(false)
    expect(fb.isBuzzy(100)).toBe(true)
  })

test('Test fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(1)).toBe('')
    expect(fb.fizzyBuzzy(5)).toBe('buzz')
    expect(fb.fizzyBuzzy(3)).toBe('fizz')
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
  })




  





