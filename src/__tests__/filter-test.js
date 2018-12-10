//@flow
import filter from '../main4';

it('should filter an empty array', () => {
  let result = filter([], () => true);
  expect(result).toEqual([]);
});



it('should return array of number above 2', ()=>{
  let array = [5, 1, 2, 1, 3];
  let result = filter(array, (el) => el > 2)
  expect(result).toEqual([5,3])
})

it('should return array of letter "a" ', ()=>{
  let array = ["a", "b", "a"];
  let result = filter(array, (s) => s === 'a')
  expect(result).toEqual(["a","a"])
})
