
process.nextTick(function asyncCallOne() {
  console.log('HI')
  function inAsync() {
    console.log('I\'M')
    process.nextTick(function asyncCallTwo() {
      console.log('RUBEN');
    })
  }
  inAsync();
})
