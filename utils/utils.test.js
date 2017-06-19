const expect = require('expect');
const utils = require('./utils');


describe("functional testing", () => {
  it("should add two numbers", () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number')
    // if(res !== 44){
    //   throw new Error(`expected result was 44, but received ${res}`)
    // }
  })

it('should add two number by Asynchronous numbers', (done) => {
  utils.asyncAdd(3,2,(sum) => {
    expect(sum).toBe(5).toBeA('number')
    done();
  })
})

  it("should return square of the number", () => {
    var sqResult = utils.square(3);
    expect(sqResult).toBe(9).toBeA('number')
  })

  it('should return square of number using Async function', (done) => {
    utils.asyncSquare(4 , (square) => {
      expect(square).toBe(16).toBeA('number')
      done();
    })
  })

  it('should check the setName function', () => {
    let userObj ={
      age: 24,
      location : 'San Diego'
    }
     let fullName = 'Rohan Mazumdar'
     let userResult = utils.setName(userObj, fullName)

     expect(userResult.firstName).toBe('Rohan')
     expect(userResult.lastName).toBe('Mazumdar')
     expect(userResult).toInclude({
       firstName: 'Rohan',
       lastName : 'Mazumdar'
     })

  })


//   it("checking random expect behaviour", () => {
//     //expect(12).toNotBe(11);
//     //expect({name:'rohan'}).toEqual({name:'rohan'})
//     //expect([1,2,3,4]).toInclude(2)
//     expect({
//       name : 'rohan',
//       age : 22,
//       sex : 'male'
//     }).toInclude({
//       age : 22
//     })
// })


})