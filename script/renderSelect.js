const renderSelect = (err, data) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  const select = document.createElement('select');
  select.className = 'js-choice';
  select.name = 'country';
  const option = document.createElement('option');
  option.value = '';
  option.textContent = 'Все';
  select.append(option);

  const options = data.map(item => {
    const option = document.createElement('option');
    option.value = item.title;
    option.textContent = item.rus;
    return option;
  });

  select.append(...options);

  return select;
};

export default renderSelect;



