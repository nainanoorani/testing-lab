const {
    returnTwo,
    greeting,
    add
} = require('./function')

test('Check if returnTwo is equal to 2', ()=> {
    expect(returnTwo()).toEqual(2);
  })


  describe('Testing out the greeting function', ()=> {
    
    test('the name James should return "Hello, James"', ()=> {
      expect(greeting("James")).toEqual("Hello, James.");
    })
 

    test('the name Jill should return "Hello, Jill"', ()=> {
        expect(greeting('Jill')).toEqual('Hello, Jill.');
      })
})



describe('Testing out the add function', ()=> {
    
    test('this test is adding 1+2 and should equal 3', ()=> {
      expect(add(1,2)).toEqual(3);
    })
 

    test('this test is adding 5+9 and should equal 14', ()=> {
        expect(add(5,9)).toEqual(14);
      })
})