fn(state => {
  console.log('data from prior step:: ', state.data);
  // do some things to state to map & transform
  return state;
});
