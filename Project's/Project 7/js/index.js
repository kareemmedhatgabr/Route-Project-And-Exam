let avatarInput = document.querySelector('#avatarInput')
let avatarPreviewContainer = document.querySelector('#avatarPreview')
let fNameInput = document.querySelector('#fNameInput')
let phoneInput = document.querySelector('#phoneInput')
let emailInput = document.querySelector('#emailInput')
let addressInput = document.querySelector('#AddressInput')
let contactGroupInput = document.querySelector('#contactGroupInput')
let contactNotesInput = document.querySelector('#contactNotesInput')
let favCheck = document.querySelector('#favCheck')
let emCheck = document.querySelector('#emCheck')
let addContactBtn = document.querySelector('#addContact')
let cancelContactBtn = document.querySelector('#cancelContact')
let searchInput = document.querySelector('#searchInput')
let updateContactBtn = document.querySelector('.f-control-update')
let ContactModal = document.querySelector('#addContactModal')
const myModal = bootstrap.Modal.getOrCreateInstance(ContactModal)
let contactGrid = document.querySelector('#contact-grid')
let favListGroup = document.querySelector('#fav-list-group')
let emListGroup = document.querySelector('#em-list-group')

currentIndex = null;
contactList = [];
let currentImageBase64 = null; // لحفظ الصورة المؤقتة

let duplicatePhoneFullName = '';
let duplicatePhoneindex;

displayContact();

if (localStorage.getItem("contactContainer") !== null) {
    contactList = JSON.parse(localStorage.getItem("contactContainer"));
    displayContact();
}

// وظيفة معاينة الصورة وتحويلها إلى Base64
function avatarPreview() {
    const file = avatarInput.files[0];
    
    if (file) {
        // التحقق من نوع الملف
        if (!file.type.startsWith('image/')) {
            Swal.fire({
                icon: "error",
                title: "Invalid File",
                text: "Please select an image file!",
            });
            avatarInput.value = null;
            return;
        }
        
        // التحقق من حجم الملف (أقصى حد 2MB)
        if (file.size > 2 * 1024 * 1024) {
            Swal.fire({
                icon: "error",
                title: "File Too Large",
                text: "Image size should be less than 2MB!",
            });
            avatarInput.value = null;
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            currentImageBase64 = e.target.result;
            avatarPreviewContainer.innerHTML = `<img class="w-100 h-100 rounded-circle object-fit-cover" src="${currentImageBase64}" alt="avatar">`;
        };
        
        reader.onerror = function() {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to read the image file!",
            });
        };
        
        reader.readAsDataURL(file);
    }
}

function addContact() {
    if (validationFullname() && validationPhone() && validationRepeatPhone(phoneInput.value) && validationEmail()) {
        currentIndex = null;
        let contact = {
            imageBase64: currentImageBase64, // حفظ الصورة كـ Base64
            fullName: fNameInput.value.trim(),
            phone: phoneInput.value,
            email: emailInput.value,
            address: addressInput.value,
            group: contactGroupInput.value,
            notes: contactNotesInput.value.trim(),
            fav: favCheck.checked,
            em: emCheck.checked,
        };
        contactList.push(contact);
        localStorage.setItem("contactContainer", JSON.stringify(contactList));

        Swal.fire({
            title: "Added!",
            text: "Contact has been added successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
        });
        displayContact();
        clearForm();
        myModal.hide();
    } else if (validationFullname() == false) {
        if (fNameInput.value == "") {
            Swal.fire({
                icon: "error",
                title: "Missing Name",
                text: "Please enter a name for the contact!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Name",
                text: "Name should contain only letters and spaces (2-50 characters)",
            });
        }
    } else if (validationPhone() == false) {
        if (phoneInput.value == "") {
            Swal.fire({
                icon: "error",
                title: "Missing Phone",
                text: "Please enter a phone number!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Phone",
                text: "Please enter a valid Egyptian phone number (e.g., 01012345678 or +201012345678)",
            });
        }
    } else if (validationRepeatPhone(phoneInput.value) == false) {
        Swal.fire({
            icon: "error",
            title: "Duplicate Phone Number",
            text: `A contact with this phone number already exists: ${duplicatePhoneFullName}`,
        });
    }
}

addContactBtn.addEventListener('click', () => {
    currentIndex === null ? addContact() : updateContact();
})

ContactModal.addEventListener('hidden.bs.modal', () => {
    currentIndex = null;
    clearForm();

    fNameInput.classList.remove('not-valid');
    phoneInput.classList.remove('not-valid');
    emailInput.classList.remove('not-valid');
    
    const contactNameError = document.querySelector('#contactNameError');
    const contactPhoneError = document.querySelector('#contactPhoneError');
    const contactEmailError = document.querySelector('#contactEmailError');
    
    if (contactNameError) contactNameError.classList.add('d-none');
    if (contactPhoneError) contactPhoneError.classList.add('d-none');
    if (contactEmailError) contactEmailError.classList.add('d-none');
})

function clearForm() {
    avatarInput.value = null;
    currentImageBase64 = null;
    avatarPreviewContainer.innerHTML = '<i class="fa-solid fa-user"></i>';
    fNameInput.value = null;
    phoneInput.value = null;
    emailInput.value = null;
    addressInput.value = null;
    contactGroupInput.value = null;
    contactNotesInput.value = null;
    favCheck.checked = false;
    emCheck.checked = false;
}

function mainIcon(fullName) {
    const name = typeof fullName === 'string' ? fullName.trim() : '';

    if (!name) {
        return '';
    }

    const nameParts = name.split(' ');
    const firstInitial = nameParts[0]?.[0] || '';
    let lastInitial = '';

    if (nameParts.length > 1) {
        const lastName = nameParts[nameParts.length - 1];
        lastInitial = lastName?.[0] || '';
    }

    return `${firstInitial}${lastInitial}`;
}

function displayContact() {
    let contact = ''
    let favContact = '';
    let emContact = '';
    let favCount = 0;
    let emCount = 0;

    let noContact = `
        <div class="no-contact w-100 d-flex align-items-center justify-content-center">
            <div class="inner">
                <div class="icon d-flex align-items-center justify-content-center mx-auto mb-4">
                    <i class="fa fa-address-book"></i>
                </div>
                <p class="m-0 fw-medium text-center">No contacts found</p>
                <p class="mt-1 text-center">Click "Add Contact" to get started</p>
            </div>
        </div>
    `;
    let favEmpty = `
        <div class="empty d-flex align-items-center justify-content-center">
            <p>No favorites yet</p>
        </div>
    `;
    let emEmpty = `
        <div class="empty d-flex align-items-center justify-content-center">
            <p>No emergency contacts</p>
        </div>
    `;
    
    for (let index = 0; index < contactList.length; index++) {
        if (contactList[index].fav) {
            favCount++
        }
        if (contactList[index].em) {
            emCount++
        }
        
        if (((contactList[index].fullName) || "").toLowerCase().includes(((searchInput.value) || "").toLowerCase()) ||
            ((contactList[index].phone) || "").includes(((searchInput.value) || "").toLowerCase()) ||
            ((contactList[index].email) || "").includes(((searchInput.value) || "").toLowerCase())) {
            
            // عرض الصورة أو الأحرف الأولى
            let avatarDisplay = '';
            if (contactList[index].imageBase64) {
                avatarDisplay = `<img class="main-icon object-fit-cover" src="${contactList[index].imageBase64}" alt="">`;
            } else {
                avatarDisplay = mainIcon(contactList[index].fullName);
            }
            
            contact += `
            <div class="col">
                <div class="inner">
                    <div class="card mb-3 bg-white d-flex flex-column">
                        <div class="card-body d-flex flex-column gap-2">
                            <div class="d-flex align-items-center gap-3">
                                <div class="position-relative flex-shrink-0">
                                    <div class="main-icon d-flex align-items-center justify-content-center text-white fw-semibold">
                                        ${avatarDisplay}
                                    </div>
                                    <div class="em-icon position-absolute rounded-circle d-flex align-items-center justify-content-center ${contactList[index].em == false ? 'd-none' : ' '}">
                                        <i class="fa-solid fa-heart-pulse text-white"></i>
                                    </div>
                                    <div class="fav-icon position-absolute rounded-circle d-flex align-items-center justify-content-center ${contactList[index].fav == false ? 'd-none' : ' '}">
                                        <i class="fa-solid fa-star text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="fw-semibold text-gray-900 text-base text-truncate m-0">
                                        ${contactList[index].fullName}</h3>
                                    <div class="contact-phone d-flex align-items-center gap-2 mt-1">
                                        <div class="icon bg-blue-100 d-flex align-items-center justify-content-center flex-shrink-0">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <span class="text-truncate">${contactList[index].phone}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-email d-flex align-items-center gap-2 mt-1">
                                <div class="icon bg-blue-100 d-flex align-items-center justify-content-center flex-shrink-0">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <span class="text-truncate">${contactList[index].email}</span>
                            </div>
                            <div class="contact-address d-flex align-items-center gap-2 mt-1">
                                <div class="icon bg-blue-100 d-flex align-items-center justify-content-center flex-shrink-0">
                                    <i class="fa fa-location-dot"></i>
                                </div>
                                <span class="text-truncate">${contactList[index].address}</span>
                            </div>
                            <div class="d-flex flex-wrap gap-2 mt-2">
                                <span class="${contactList[index].group == '' ? 'd-none' : ' '} card-badge ${contactList[index].group}-badge d-inline-flex align-items-center fw-medium">${contactList[index].group}</span>
                                <span class="card-badge em-badge d-inline-flex align-items-center fw-medium ${contactList[index].em == false ? 'd-none' : ' '}">
                                    <i class="fa-solid fa-heart-pulse me-1"></i>emergency
                                </span>
                            </div>
                        </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <div class="f-contact d-flex align-items-center gap-1">
                                <a href="tel:${contactList[index].phone}" title="Call" class="f-contact-phone d-flex align-items-center justify-content-center">
                                    <i class="fa fa-phone"></i>
                                </a>
                                <a href="mailto:${contactList[index].email}" title="Email" class="f-contact-email d-flex align-items-center justify-content-center">
                                    <i class="fa fa-envelope"></i>
                                </a>
                            </div>
                            <div class="f-control d-flex align-items-center gap-1">
                                <div onclick="favTgl(${index})" class="${contactList[index].fav ? 'f-control-fav-clk' : 'f-control-fav'} d-flex align-items-center justify-content-center">
                                    <i class="fa${contactList[index].fav ? '' : '-regular'} fa-star"></i>
                                </div>
                                <div onclick="emTgl(${index})" class="${contactList[index].em ? 'f-control-em-clk' : 'f-control-em'} d-flex align-items-center justify-content-center">
                                    <i class="fa${contactList[index].em ? '' : '-regular'} fa-heart${contactList[index].em ? '-pulse' : ''}"></i>
                                </div>
                                <div class="f-control-update d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#addContactModal" onclick="setUpdateInfo(${index})">
                                    <i class="fa fa-pen"></i>
                                </div>
                                <div class="f-control-del d-flex align-items-center justify-content-center" onclick="deleteContact(${index})">
                                    <i class="fa fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

            if (contactList[index].fav) {
                let favAvatarDisplay = '';
                if (contactList[index].imageBase64) {
                    favAvatarDisplay = `<img class="icon object-fit-cover" src="${contactList[index].imageBase64}" alt="">`;
                } else {
                    favAvatarDisplay = mainIcon(contactList[index].fullName);
                }

                favContact += `
                <div class="col-12 col-sm-6 col-xl-12 mb-2">
                    <li class="list-group-item border-0 d-flex align-items-center justify-content-between gap-3 ">
                        <div class="icon d-flex align-items-center justify-content-center text-white fw-semibold flex-shrink-0">
                            ${favAvatarDisplay}
                        </div>
                        <div class="flex-shrink-1 w-100">
                            <h4 class="m-0 text-truncate fw-medium">${contactList[index].fullName}</h4>
                            <p class="m-0 text-truncate">${contactList[index].phone}</p>
                        </div>
                        <a href="tel:${contactList[index].phone}" title="Call" class="f-contact-phone flex-shrink-0 d-flex align-items-center justify-content-center">
                            <i class="fa fa-phone"></i>
                        </a>
                    </li>
                </div>
            `
            }
            
            if (contactList[index].em) {
                let emAvatarDisplay = '';
                if (contactList[index].imageBase64) {
                    emAvatarDisplay = `<img class="icon object-fit-cover" src="${contactList[index].imageBase64}" alt="">`;
                } else {
                    emAvatarDisplay = mainIcon(contactList[index].fullName);
                }

                emContact += `
                <div class="col-12 col-sm-6 col-xl-12 mb-2">
                    <li class="list-group-item border-0 d-flex align-items-center justify-content-between gap-3 ">
                        <div class="icon d-flex align-items-center justify-content-center text-white fw-semibold flex-shrink-0">
                            ${emAvatarDisplay}
                        </div>
                        <div class="flex-shrink-1 w-100">
                            <h4 class="m-0 text-truncate fw-medium">${contactList[index].fullName}</h4>
                            <p class="m-0 text-truncate">${contactList[index].phone}</p>
                        </div>
                        <a href="tel:${contactList[index].phone}" title="Call" class="f-contact-phone flex-shrink-0 d-flex align-items-center justify-content-center">
                            <i class="fa fa-phone"></i>
                        </a>
                    </li>
                </div>
            `
            }
        }
    }
    
    contactGrid.innerHTML = contact == '' ? noContact : contact;
    favListGroup.innerHTML = favContact == '' ? favEmpty : favContact;
    emListGroup.innerHTML = emContact == '' ? emEmpty : emContact;
    document.getElementById('stateTotal').innerHTML = contactList.length;
    document.getElementById('stateFav').innerHTML = favCount;
    document.getElementById('stateEm').innerHTML = emCount;
}

function setUpdateInfo(index) {
    currentIndex = index;
    
    // عرض الصورة الحالية
    if (contactList[index].imageBase64) {
        currentImageBase64 = contactList[index].imageBase64;
        avatarPreviewContainer.innerHTML = `<img class="w-100 h-100 rounded-circle object-fit-cover" src="${contactList[index].imageBase64}" alt="">`;
    } else {
        currentImageBase64 = null;
        avatarPreviewContainer.innerHTML = '<i class="fa-solid fa-user"></i>';
    }
    
    fNameInput.value = contactList[index].fullName;
    phoneInput.value = contactList[index].phone;
    emailInput.value = contactList[index].email;
    addressInput.value = contactList[index].address;
    contactGroupInput.value = contactList[index].group;
    contactNotesInput.value = contactList[index].notes;
    favCheck.checked = contactList[index].fav;
    emCheck.checked = contactList[index].em;
}

function updateContact() {
    if (validationFullname() && validationPhone() && validationEmail()) {
        let contact = {
            imageBase64: currentImageBase64 || contactList[currentIndex].imageBase64, // الاحتفاظ بالصورة القديمة إذا لم يتم اختيار صورة جديدة
            fullName: fNameInput.value.trim(),
            phone: phoneInput.value,
            email: emailInput.value,
            address: addressInput.value,
            group: contactGroupInput.value,
            notes: contactNotesInput.value.trim(),
            fav: favCheck.checked,
            em: emCheck.checked,
        };

        contactList.splice(currentIndex, 1, contact);
        localStorage.setItem("contactContainer", JSON.stringify(contactList));
        
        Swal.fire({
            title: "Updated!",
            text: "Contact has been updated successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
        });
        
        displayContact();
        clearForm();
        myModal.hide();
        currentIndex = null;
    } else if (validationFullname() == false) {
        if (fNameInput.value == "") {
            Swal.fire({
                icon: "error",
                title: "Missing Name",
                text: "Please enter a name for the contact!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Name",
                text: "Name should contain only letters and spaces (2-50 characters)",
            });
        }
    } else if (validationPhone() == false) {
        if (phoneInput.value == "") {
            Swal.fire({
                icon: "error",
                title: "Missing Phone",
                text: "Please enter a phone number!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Phone",
                text: "Please enter a valid Egyptian phone number (e.g., 01012345678 or +201012345678)",
            });
        }
    }
}

function deleteContact(index) {
    Swal.fire({
        title: "Delete Contact?",
        text: `Are you sure you want to delete ${contactList[index].fullName}? This action cannot be undone.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#606773",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            contactList.splice(index, 1);
            localStorage.setItem("contactContainer", JSON.stringify(contactList));
            Swal.fire({
                title: "Deleted!",
                text: "Contact has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
            displayContact();
        }
    });
}

function favTgl(index) {
    contactList[index].fav = !contactList[index].fav;
    localStorage.setItem("contactContainer", JSON.stringify(contactList));
    displayContact();
}

function emTgl(index) {
    contactList[index].em = !contactList[index].em;
    localStorage.setItem("contactContainer", JSON.stringify(contactList));
    displayContact();
}

function validationFullname() {
    let regex = /^[A-Za-z ]{2,50}$/
    let text = fNameInput.value;
    
    let contactNameError = document.querySelector('#contactNameError');
    if (!contactNameError) {
        contactNameError = document.createElement('p');
        contactNameError.id = 'contactNameError';
        contactNameError.className = 'd-none mt-1';
        contactNameError.textContent = 'Name should contain only letters and spaces (2-50 characters)';
        fNameInput.parentElement.appendChild(contactNameError);
    }
    
    if (regex.test(text)) {
        fNameInput.classList.remove('not-valid')
        contactNameError.classList.add('d-none')
    } else {
        fNameInput.classList.add('not-valid')
        contactNameError.classList.remove('d-none')
    }
    return regex.test(text);
}

function validationPhone() {
    let regex = /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/
    let text = phoneInput.value;
    
    let contactPhoneError = document.querySelector('#contactPhoneError');
    if (!contactPhoneError) {
        contactPhoneError = document.createElement('p');
        contactPhoneError.id = 'contactPhoneError';
        contactPhoneError.className = 'd-none mt-1';
        contactPhoneError.textContent = 'Please enter a valid Egyptian phone number (e.g., 01012345678 or +201012345678)';
        phoneInput.parentElement.appendChild(contactPhoneError);
    }

    if (regex.test(text)) {
        phoneInput.classList.remove('not-valid')
        contactPhoneError.classList.add('d-none')
    } else {
        phoneInput.classList.add('not-valid')
        contactPhoneError.classList.remove('d-none')
    }
    return regex.test(text);
}

function validationEmail() {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let text = emailInput.value;
    
    let contactEmailError = document.querySelector('#contactEmailError');
    if (!contactEmailError) {
        contactEmailError = document.createElement('p');
        contactEmailError.id = 'contactEmailError';
        contactEmailError.className = 'd-none mt-1';
        contactEmailError.textContent = 'Please enter a valid email address';
        emailInput.parentElement.appendChild(contactEmailError);
    }

    if (regex.test(text)) {
        emailInput.classList.remove('not-valid')
        contactEmailError.classList.add('d-none')
    } else {
        emailInput.classList.add('not-valid')
        contactEmailError.classList.remove('d-none')
    }
    return regex.test(text);
}

function validationRepeatPhone(phone) {
    if (contactList.length == 0) {
        return true;
    } else {
        for (let index = 0; index < contactList.length; index++) {
            if (currentIndex !== null && contactList[index].phone == phone && index == currentIndex) {
                continue;
            }
            if (contactList[index].phone == phone) {
                duplicatePhoneFullName = contactList[index].fullName;
                return false;
            }
        }
        return true;
    }
}