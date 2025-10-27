const form = document.querySelector('#form-section');
const addBtn = document.querySelector('#addField');
const inputTypeSelector = document.querySelector('#inputType');
const submitBtn = document.querySelector('#submitBtn');
const errorMsg = document.querySelector('#errorMsg');

addBtn.addEventListener('click', () => {
  const selectedType = inputTypeSelector.value;
  const wrapper = document.createElement('div');
  wrapper.className = 'input-wrapper fade-in';

  // Gender toggle button group
  if (selectedType === 'checkbox') {
  const label = document.createElement('label');
  label.textContent = 'Select Gender:';
  wrapper.appendChild(label);

  const options = ['Male', 'Female'];
  const toggleGroup = document.createElement('div');
  toggleGroup.className = 'checkbox-toggle-group';

  options.forEach(gender => {
    const toggleWrapper = document.createElement('label');
    toggleWrapper.className = 'checkbox-toggle';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'gender';
    checkbox.value = gender;
    checkbox.id = gender.toLowerCase();

    const span = document.createElement('span');
    span.textContent = gender;

    // Enforce single selection
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        toggleGroup.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          if (cb !== checkbox) cb.checked = false;
        });
      }
    });

    toggleWrapper.appendChild(checkbox);
    toggleWrapper.appendChild(span);
    toggleGroup.appendChild(toggleWrapper);
  });

  wrapper.appendChild(toggleGroup);
  form.appendChild(wrapper);
  return;
}
  // Other input types
  const input = document.createElement('input');
  input.type = selectedType;
  input.required = true;
  input.placeholder = `Enter ${selectedType}`;
  input.style.display = 'block';
  input.style.width = '97%';

  if (selectedType === 'file') {
  const label = document.createElement('label');
  label.textContent = 'Upload a file:';
  wrapper.appendChild(label);

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.required = true;
  fileInput.style.display = 'block';
  fileInput.style.marginTop = '8px';
  fileInput.style.width = '97%';

  // Accept multiple file types
  fileInput.accept = 'image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip';

  wrapper.appendChild(fileInput);
  form.appendChild(wrapper);
  return;
}


  wrapper.appendChild(input);
  form.appendChild(wrapper);
});

submitBtn.addEventListener('click', () => {
  const inputs = form.querySelectorAll('input');
  let valid = true;
  errorMsg.textContent = '';

  // Validate inputs except radio
  inputs.forEach(input => {
    if (input.type !== 'radio' && !input.checkValidity()) {
      valid = false;
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  });

  // Validate gender
  const genderCheckboxes = form.querySelectorAll('input[name="gender"]');
const selectedGender = Array.from(genderCheckboxes).find(cb => cb.checked)?.value || '';

if (genderCheckboxes.length > 0 && !selectedGender) {
  valid = false;
  errorMsg.textContent = 'Please select a gender.';
}



  // Display result
  if (valid) {
    errorMsg.textContent = `Form submitted successfully! ${selectedGender ? 'Selected gender: ' + selectedGender : ''}`;
  } else if (errorMsg.textContent === '') {
    errorMsg.textContent = 'Please fill out all required fields correctly.';
  }
});
