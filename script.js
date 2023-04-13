const handleGetFormData = (event) => {
    event.preventDefault();
    const nama = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    const data = {
        nama: nama,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    }
    validateFormData(data);
}

function isNumber(num) {
    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }
}

function checkboxIsChecked() {
    if (document.getElementById("status").checked) {
        return true;
    } else {
        return false;
    }
}

const validateFormData = (data) => {
    const warning = document.getElementById('warning');

    if (data.nama && data.email && data.city && isNumber(data.zipCode) && checkboxIsChecked()) {
        console.log('form disubmit');
        warning.remove();

    } else {
        warning.innerHTML = "Cek Lagi Formnya"
    }
}

const form = document.getElementById("myform");
form.addEventListener("submit", handleGetFormData);


console.log(form);