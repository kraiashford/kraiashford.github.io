function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();
  
  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// Extract birthdate text from the HTML
const birthdateText = document.querySelector('.birthdate .label-text').textContent;

// Calculate age
const age = calculateAge(birthdateText);

// Set age in the "age" div
document.querySelector('.age .label-text').textContent = age;
