function submitForm(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var course = document.getElementById('course').value;
  
    // Perform additional validation or processing here
  
    // Display submitted data
    alert('Enrollment Successful\n\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nCourse: ' + course);
  
    // Reset form fields
    document.getElementById('enrollmentForm').reset();
  }
  