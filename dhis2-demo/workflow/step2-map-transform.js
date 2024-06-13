fn(state => {
  console.log('data from prior step:: ', state.data);
  // do some things to state to map & transform
  // see job-writing guide for how to apply javascript in here
  return state;
});
