"use strict";

//debugger;
var contacts = []; // BUNI VAZIFASI HAMMA OBJECTNI SHUNI ICHIGA YIG'ISH VA CHIQARISH
// HTML DAN ELEMENTLARNI CHAQARIB OLISH

var elNewContactForm = document.querySelector('.js-new-contact-form');
var elNewContactNameInput = document.querySelector('.js-new-contact-form__name-input');
var elNewContactSurnameInput = document.querySelector('.js-new-contact-form__surname-input');
var elNewContactPhoneInput = document.querySelector('.js-new-contact-form__phone-input');
var elNewContactRelationshipInput = document.querySelector('.js-new-contact-form__relationship-input');
var elContacts = document.querySelector('.contacts'); //MAYDON BO'SHLIGINI TEKSHIRIB BERUVCHI YORDAMCHI FUNCTION

/* var isInputEmpty = function(input){
 if (input = '') {
  return true;
}else{
  return false;
}
} */
// YANGI OBJECT YARATIB BERUVCHI ,TUZIB BERUVCHI FUNCTION , NIMA DEB NOM BERSAK HAR SAFAT OSHAN BN CHIQARADI  

var createContactObject = function createContactObject(name, surname, phone, relationship) {
  console.log(createContactObject); // FUNCTION 4 TA NARSA BERADI ULAR ATRIBYUT QIYMATLARIGA BORGANDAN SO'NG RETURN HAMMASINI 1 TA UMUMMIY OBJECT QILIB  QAYTARADI 

  return {
    //name: name,    // FUNCTION DA BERILGAN NOM ATRIBYUT BN BIR HIL KELSA 1 DONASINI YOZAMIZ
    //surname: surname,
    //phone: phone,
    //relationshi: relationship
    name: name,
    surname: surname,
    // FUNCTION DA BERILGAN NOM ATRIBYUT BN BIR HIL KELSA 1 DONASINI shu tarizda YOZAMIZ
    phone: phone,
    relationship: relationship
  };
}; // FORMGA QULOQ SOLISH YANI VOQEALAR KETMA KETLIGINI TARTIB BILAN QOSHISH


elNewContactForm.addEventListener('submit', function (evt) {
  evt.preventDefault(); //MAYDON BO'SHLIGINI TEKSHIRIB BERUVCHI YORDAMCHI FUNCTIONING ISHLATILISHI

  /*   if (isInputEmpty(name)) {
      return
    } */
  // HAR BITA INPUTNIG QIYMATLARINI ALOHIDA VARDA TRIM() QILIGAN HOLATDA SAQLAB OLAMIZ 

  var name = elNewContactNameInput.value.trim();
  var surname = elNewContactSurnameInput.value.trim();
  var phone = elNewContactPhoneInput.value.trim();
  var relationship = elNewContactRelationshipInput.value.trim(); //YARATIB BERILGAN OBJECTNI CONTACTS ARRAY GA QO'SHAMIZ

  contacts.push(createContactObject(name, surname, phone, relationship));
  console.log(contacts); //SAHIFADA KORSATIB TURGAN CONTACTLARNI O'CHIRIB TASHLASH

  elContacts.innerHTML = ""; //CONTACTS YANI ARRAY NI ICHIDAGI HAR BIR CONTACT UCHUN ALOHIDA LI YOZIB SAHIFAGA QOSHAMIZ

  for (var i = 0; i < contacts.length; i++) {
    //hr bitta contact uchun bitadan li yoziladi 
    var elNewFullLi = document.createElement('li');
    elNewFullLi.classList.add('contacts__item', 'list-group-item');
    var elNewFullNameSername = document.createElement('div');
    elNewFullNameSername.classList.add('contacts__fullname');
    elNewFullNameSername.textContent = "".concat(contacts[i].name, " ").concat(contacts[i].surname);
    var elNewFullRelationship = document.createElement('div');
    elNewFullRelationship.classList.add('contacts__relationship', 'small');
    elNewFullRelationship.textContent = contacts[i].relationship;
    var elNewLink = document.createElement('a');
    elNewLink.classList.add('contacts__phone-number');
    elNewLink.textContent = contacts[i].phone;
    elNewLink.href = "tel:contacts[i].phone";
    elNewFullLi.appendChild(elNewFullNameSername);
    elNewFullLi.appendChild(elNewFullRelationship);
    elNewFullLi.appendChild(elNewLink);
    elContacts.appendChild(elNewFullLi);
  }

  console.log(elNewFullLi);
});
/* <!-- <li class="contacts__item list-group-item">
<div class="contacts__fullname">Palonchi pistonchiyev</div>
<div class="contacts__relationship small">Qarindosh</div>
<a class="contacts__phone-number" href="tel:+998909213711">+998909213711</a>
</li> --> */