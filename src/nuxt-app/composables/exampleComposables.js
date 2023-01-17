// export const composables1 = () => {
//   return useState('list', () => {
//     return {
//       list1: 'list1',
//       list2: 'list2',
//       list3: 'list3'
//     }
//   })
// }

export const composableTest = () => {
  return useState('trumpMark', () => {
    return {
      heart: 'heart',
      spade: 'spade',
      club: 'club',
      clover: 'clover'
    }
  })
}
