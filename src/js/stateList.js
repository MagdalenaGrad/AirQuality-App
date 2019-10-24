const getStates = states => {
  const options = states.map(state => {
    return `
      <option value="${state.state}">${state.state}</option>
    `
  });
  return options;
}

export default getStates;