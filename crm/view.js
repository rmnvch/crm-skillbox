
function createHeader() {
    const header = document.createElement('div');
    const logoWrap = document.createElement('div');
    const logo = document.createElement('span');
    const form = document.createElement('form');
    const input = document.createElement('input');
    
    input.placeholder = 'Введите запрос';

    header.classList.add('header');
    logoWrap.classList.add('header__logoWrap');
    logo.classList.add('header__logo');
    form.classList.add('header__form');
    input.classList.add('header__input');

    logo.textContent = "skb."


    form.append(input);
    logoWrap.append(logo);
    header.append(logoWrap);
    header.append(form);

    return {
        header,
        input,
    };
}; 

function createTableHeader() {
    const main = document.createElement('div');
    const title = document.createElement('h1');
    const table = document.createElement('table'); 
    const wrapper = document.createElement('div');
    const tableHeaderRow = document.createElement('tr');
    const tableHeaderId = document.createElement('th');
    const idIcon = document.createElement('span');
    const tableHeaderFullName = document.createElement('th');
    const fullNameIcon = document.createElement('span');
    const tableHeaderCreate = document.createElement('th');
    const createIcon = document.createElement('span');
    const tableHeaderChange = document.createElement('th');
    const changeIcon = document.createElement('span');
    const tableHeaderContacts = document.createElement('th');
    const tableHeaderBtn = document.createElement('th');
    const loaderWrap = document.createElement('div');
    const loader = document.createElement('div');

    main.classList.add('main');
    title.classList.add('main__title');
    table.classList.add('main__table', 'table');
    tableHeaderRow.classList.add('table__header');
    tableHeaderId.classList.add('table__header-el', 'table__header-elem--id', 'active', 'sort-up');
    tableHeaderFullName.classList.add('table__header-el', 'table__header-elem--fullName');
    tableHeaderCreate.classList.add('table__header-el', 'table__header-elem--create');
    tableHeaderChange.classList.add('table__header-el', 'table__header-elem--change');
    tableHeaderContacts.classList.add('table__header-el', 'table__header-elem--contacts');
    tableHeaderBtn.classList.add('table__header-el', 'table__header-elem--btn');
    loader.classList.add('main__loader-icon');
    loaderWrap.classList.add('main__loader');
    wrapper.classList.add('main__loader-scene');
    idIcon.classList.add('table__header-el--id');
    fullNameIcon.classList.add('table__header-el--fullName');
    createIcon.classList.add('table__header-el--create');
    changeIcon.classList.add('table__header-el--change');

    loaderWrap.setAttribute('id', 'loader');
    tableHeaderId.setAttribute('data-sort', 'id');
    tableHeaderFullName.setAttribute('data-sort', 'surname');
    tableHeaderCreate.setAttribute('data-sort', 'createdAt');
    tableHeaderChange.setAttribute('data-sort', 'updatedAt');


    title.textContent = 'Клиенты';
    tableHeaderId.textContent = "ID";
    tableHeaderFullName.textContent = "Фамилия Имя Отчество";
    tableHeaderCreate.textContent = "Дата и время создания";
    tableHeaderChange.textContent = "Последние изменения";
    tableHeaderContacts.textContent = "Контакты";
    tableHeaderBtn.textContent = "Действия";

    tableHeaderId.append(idIcon);
    tableHeaderFullName.append(fullNameIcon);
    tableHeaderCreate.append(createIcon);
    tableHeaderChange.append(changeIcon);
    wrapper.append(table);
    wrapper.append(loaderWrap);
    loaderWrap.append(loader)
    tableHeaderRow.append(tableHeaderId);
    tableHeaderRow.append(tableHeaderFullName);
    tableHeaderRow.append(tableHeaderCreate);
    tableHeaderRow.append(tableHeaderChange);
    tableHeaderRow.append(tableHeaderContacts);
    tableHeaderRow.append(tableHeaderBtn);
    table.append(tableHeaderRow);
    main.append(title);
    main.append(wrapper);

    

    return {
        main,
        table,
    };
};

function createCustomerElement(client) {
    const row = document.createElement('tr');
    const idElement = document.createElement('td');
    const idWrapper = document.createElement('div');
    const fullNameElement = document.createElement('td');
    const fullNameWrapper =document.createElement('div');
    const createDateWrap = document.createElement('td');
    const createDate = document.createElement('span');
    const createTime = document.createElement('span');
    const changeDateWrap = document.createElement('td');
    const changeDate = document.createElement('span');
    const changeTime = document.createElement('span');
    const wrapper = document.createElement('div');
    const contactElement = document.createElement('td');
    const showAll = document.createElement('button');
    const actionBtn = document.createElement('td');
    const tableActions = document.createElement('div');
    const changeBtn = document.createElement('button');
    const changeIcon = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('span');
    const rowVisible = document.createElement('div');
    const rowHidden = document.createElement('div');   

    showAll.setAttribute('type', 'button');

    for (let i = 0; i < client.contacts.length; ++i) {
        const contactWrap = document.createElement('div');
        const img = document.createElement('img');
        const tooltip = document.createElement('span');

        img.src = `./img/${client.contacts[i].type}.svg`;
        tooltip.textContent = client.contacts[i].value;

        contactWrap.classList.add(`table__contacts`);
        tooltip.classList.add('tooltip', 'tooltip--hidden');

        contactWrap.append(img);
        contactWrap.append(tooltip);
    
        if (i <= 4) {
            rowVisible.append(contactWrap); 
            rowVisible.classList.add('table__contacts-row');
        } else {
            rowHidden.append(contactWrap);
            rowHidden.classList.add('table__contacts-extra-row');
            showAll.classList.add('table__show-all--visible')
        };

        if (i === 4) contactWrap.append(showAll);
        
        // rowVisible.append(showAll);
        wrapper.append(rowVisible);
        wrapper.append(rowHidden);
    };

    const createdAt = formatDate(client.createdAt);
    const changedAt = formatDate(client.updatedAt);

    idWrapper.textContent = client.id;
    
    fullNameWrapper.textContent = client.surname + ' ' + client.name + ' ' + client.lastName;
    
    createDate.textContent = createdAt.fullDate;
    createTime.textContent = createdAt.time;
    changeDate.textContent = changedAt.fullDate;
    changeTime.textContent = changedAt.time;

    changeBtn.textContent = 'Изменить';
    deleteBtn.textContent = 'Удалить';

    showAll.textContent = '+' + (rowHidden.childNodes.length + 1);
    
    row.classList.add('table__body');
    idElement.classList.add('table__body-el');
    fullNameElement.classList.add('table__body-el');
    createDateWrap.classList.add('table__body-el');
    changeDateWrap.classList.add('table__body-el');
    contactElement.classList.add('table__body-el',);
    actionBtn.classList.add('table__body-el');
    changeBtn.classList.add('table__update-btn', 'btn-reset');
    deleteBtn.classList.add('table__delete-btn', 'btn-reset');
    showAll.classList.add('table__show-all', 'btn-reset');
    wrapper.classList.add('table__contacts-wrapper');
    tableActions.classList.add('table__actions');
    idWrapper.classList.add('table__id');
    fullNameWrapper.classList.add('table__fullName');
    createDate.classList.add('table__date');
    changeDate.classList.add('table__date');
    createTime.classList.add('table__time');
    changeTime.classList.add('table__time');

    showAll.addEventListener('click', function(event) {
            event._isClickWithinShowAll = true;
            this.parentNode.parentNode.parentNode.querySelector('.table__contacts-extra-row').classList.toggle('table__contacts-row--visible')
            this.style.visibility = 'hidden';
        });

    document.addEventListener('click', (event) => {
        if (event._isClickWithinShowAll) return;
        showAll.style.visibility = "unset";
        rowHidden.classList.remove('table__contacts-row--visible');
        });


    idElement.append(idWrapper);
    fullNameElement.append(fullNameWrapper);
    tableActions.append(changeBtn);
    tableActions.append(deleteBtn);
    actionBtn.append(tableActions);
    contactElement.append(wrapper);
    changeBtn.prepend(changeIcon);
    deleteBtn.prepend(deleteIcon);
    createDateWrap.append(createDate);
    createDateWrap.append(createTime);
    changeDateWrap.append(changeDate);
    changeDateWrap.append(changeTime);
    row.append(idElement);
    row.append(fullNameElement);
    row.append(createDateWrap);
    row.append(changeDateWrap);
    row.append(contactElement);
    row.append(actionBtn);

    return row;
};

function createNewClientBtn() {
    const wrapper = document.createElement('div');
    const button = document.createElement('button');
    const icon = document.createElement('span');

    wrapper.classList.add('main__button-wrapper'); 
    button.classList.add('main__btn', 'btn-reset');
    icon.classList.add('main__btn-icon');

    button.textContent = "Добавить клиента";

    button.prepend(icon);
    wrapper.append(button);

    return {
        wrapper,
        button,
    };

};

function createModal(title, bottomBtn, toUpdate, deleteTrigger, row) {
    const modal = document.createElement('div');
    const content = document.createElement('div');
    const headerWrap = document.createElement('div');
    const header = document.createElement('div');
    const idInfo = document.createElement('span');
    const closeBtn = document.createElement('button');
    const form = document.createElement('form');
    const surnameLabel = document.createElement('label');
    const surname = document.createElement('input');
    const surnamePlaceholder = document.createElement('div');
    const arrowSpan1 = document.createElement('span');
    const nameLabel = document.createElement('label');
    const name = document.createElement('input');
    const namePlaceholder = document.createElement('div');
    const arrowSpan2 = document.createElement('span');
    const middleNameLabel = document.createElement('label');
    const middleName = document.createElement('input');
    const middleNamePlaceholder = document.createElement('div');
    const arrowSpan3 = document.createElement('span');
    const contacts = document.createElement('div');
    const addSpan = document.createElement('span');
    const addBtn = document.createElement('button');
    const comfirmTxt = document.createElement('p');
    const errorDisplay = document.createElement('div');
    const submitWrap = document.createElement('div');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    form.setAttribute('id', 'new-form')
    form.setAttribute('novalidate', 'novalidate');
    modal.setAttribute('id', 'modal');
    surname.setAttribute('id', 'modal-surname');
    name.setAttribute('id', 'modal-name');
    middleName.setAttribute('id', 'modal-middleName');
    surname.setAttribute('type', 'text');
    surname.setAttribute('required', '1');
    name.setAttribute('type', 'text');
    name.setAttribute('required', '1');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('required', '1');
    saveBtn.setAttribute('type', 'submit');
    saveBtn.setAttribute('form', 'new-form');
    addBtn.setAttribute('type', 'button');

    modal.classList.add('modal');
    content.classList.add('modal__content');
    headerWrap.classList.add('modal__header-wrap');
    header.classList.add('modal__header');
    idInfo.classList.add('modal__id');
    closeBtn.classList.add('modal__close', 'btn-reset');
    form.classList.add('modal__form');
    surnameLabel.classList.add('modal__label');
    surname.classList.add('modal__input', 'modal__surname');
    surnamePlaceholder.classList.add('modal__placeholder');
    nameLabel.classList.add('modal__label');
    name.classList.add('modal__input', 'modal__name');
    namePlaceholder.classList.add('modal__placeholder');
    middleNameLabel.classList.add('modal__label');
    middleName.classList.add('modal__input', 'modal__middleName');
    middleNamePlaceholder.classList.add('modal__placeholder');
    addBtn.classList.add('btn-reset', 'modal__add');
    submitWrap.classList.add('modal__submit');
    saveBtn.classList.add('btn-reset', 'modal__submit-btn');
    cancelBtn.classList.add('btn-reset', 'modal__cancel');
    contacts.classList.add('modal__contact');
    addSpan.classList.add('modal__add-icon');
    comfirmTxt.classList.add('modal__confirm');
    errorDisplay.classList.add('modal__error');
    
    header.textContent = title;
    addBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = bottomBtn; 
    surnamePlaceholder.textContent = 'Фамилия';
    namePlaceholder.textContent = 'Имя';
    middleNamePlaceholder.textContent = 'Отчество';
    arrowSpan1.textContent = '*';
    arrowSpan2.textContent = '*';
    arrowSpan3.textContent = '';
    comfirmTxt.textContent = 'Вы действительно хотите удалить данного клиента?'

    content.addEventListener('click', event => {
        event._isClickWithinModal = true;
    });
    
    modal.addEventListener('click', event => {
        if(event._isClickWithinModal) return;
        modal.remove();
    });

    cancelBtn.addEventListener('click', () => {
        modal.remove();
    });

    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    
    addBtn.addEventListener('click', () => {

        const selects = document.querySelectorAll('.modal__select'); 

        if(selects.length >= 10) {
            return;
        };

        const newContact = createCustomSelectElement();
        
        contacts.append(newContact.wrapper);

        if (selects.length > 0) {
            for(let i = 0; i< selects.length; i++) {

                selects[i].classList.add('modal__select--disabled');
            }
        }

        modal.addEventListener('click', function(event) {

            document.querySelectorAll('.select').forEach(item => {
                if(event._isClickWithinSelect) return;
                item.classList.remove('open');
            });

            // const select = document.querySelector('.select')
            // if (!select.contains(e.target)) {
            //     select.classList.remove('open');
            // }
        });

    });

    if(toUpdate) {
        idInfo.style.display = 'inline';
        idInfo.textContent = `ID: ${toUpdate.id}`
        surname.value = toUpdate.surname;
        name.value = toUpdate.name;
        middleName.value = toUpdate.lastName;
        
        for (let cont of toUpdate.contacts) {
        
            const contactStored = createCustomSelectElement(cont);
            contacts.append(contactStored.wrapper);
        };

        // cancelBtn.addEventListener('click', () => {
        //     onDelete(row, toUpdate.id);
        // });

    };

    
    submitWrap.append(saveBtn)
    addBtn.prepend(addSpan);
    // contacts.append(addBtn);
    surnamePlaceholder.append(arrowSpan1);
    surnameLabel.append(surname);
    surnameLabel.append(surnamePlaceholder);
    namePlaceholder.append(arrowSpan2);
    nameLabel.append(name);
    nameLabel.append(namePlaceholder);
    middleNamePlaceholder.append(arrowSpan3);
    middleNameLabel.append(middleName);
    middleNameLabel.append(middleNamePlaceholder);
    header.append(idInfo);
    headerWrap.append(header);
    headerWrap.append(closeBtn);
    form.append(surnameLabel);
    form.append(nameLabel);
    form.append(middleNameLabel);
    form.append(contacts);
    form.append(addBtn);
    content.append(headerWrap);
    
    if(deleteTrigger) {
        content.append(comfirmTxt);
        form.style.display = 'none';
        headerWrap.style.paddingLeft = '137px';
        saveBtn.textContent = 'Удалить'
    };
    
    content.append(form);
    // content.append(contacts);
    content.append(errorDisplay)
    content.append(submitWrap)
    content.append(cancelBtn);
    modal.append(content);

    return {
        modal,
        addBtn,
        saveBtn,
        cancelBtn,
        errorDisplay,
        form,
        closeBtn,
        surname,
        name,
        middleName,
    };
};

function createCustomSelectElement(contactList) {
    const wrapper = document.createElement('div');
    const selectWrapper = document.createElement('div');
    const select = document.createElement('div');
    const trigger = document.createElement('div');
    const placeholder = document.createElement('span');
    const icon = document.createElement('div');
    const options = document.createElement('div');
    const phone = document.createElement('span');
    const email = document.createElement('span');
    const fb = document.createElement('span');
    const vk = document.createElement('span');
    const other = document.createElement('span');
    const input = document.createElement('input');
    const deleteBtn = document.createElement('button');

    wrapper.classList.add('modal__select');
    selectWrapper.classList.add('select-wrapper');
    select.classList.add('select');
    trigger.classList.add('select__trigger');
    icon.classList.add('arrow');
    options.classList.add('custom-options');
    phone.classList.add('custom-option', 'selected');
    email.classList.add('custom-option');
    fb.classList.add('custom-option');
    vk.classList.add('custom-option');
    other.classList.add('custom-option');
    input.classList.add('select__input');
    deleteBtn.classList.add('select__delete', 'select__delete--hidden');
    placeholder.classList.add('select__placeholder')

    placeholder.textContent = 'Телефон';
    phone.textContent = 'Телефон';
    email.textContent = 'Email';
    fb.textContent = 'FB';
    vk.textContent = 'VK';
    other.textContent = 'Доп.телефон';

    phone.setAttribute('data-value', 'phone');
    email.setAttribute('data-value', 'email');
    fb.setAttribute('data-value', 'fb');
    vk.setAttribute('data-value', 'vk');
    other.setAttribute('data-value', 'other');

    input.addEventListener('input', function(event) {
            if (event.target.value) {
            this.parentNode.querySelector('.select__delete').classList.remove('select__delete--hidden');
        } else {
            this.parentNode.querySelector('.select__delete').classList.add('select__delete--hidden');
        }
        });

    deleteBtn.addEventListener('click', function() {
        this.parentNode.remove();
    });

    selectWrapper.addEventListener('click', function(event) {
        this.querySelector('.select').classList.toggle('open');
        event._isClickWithinSelect = true;
    });

    phone.addEventListener('click', selectInit);
    
    email.addEventListener('click', selectInit);

    fb.addEventListener('click', selectInit);

    vk.addEventListener('click', selectInit);

    other.addEventListener('click', selectInit);

    input.addEventListener('input', function(event) {

        if(event.target.value.length === 0) {
            input.style.borderColor = '#C8C5D1'; 
            return;
        };

        const test = selectValueValidate(this.parentNode.querySelector('.selected').dataset.value, event.target.value)

        if (test) {
            input.style.borderColor = '#C8C5D1'
        } else {
            input.style.borderColor = '#F06A4D';
        }

    });
    

    if(contactList) {
        input.value = contactList.value
        placeholder.textContent = contactList.type
        
        input.removeEventListener('input', function(event) {
            if (event.target.value) {
            this.parentNode.querySelector('.select__delete').classList.remove('select__delete--hidden');
        } else {
            this.parentNode.querySelector('.select__delete').classList.add('select__delete--hidden');
        }
        });

        deleteBtn.classList.remove('select__delete--hidden');
    };
   
    options.append(phone);
    options.append(email);
    options.append(fb);
    options.append(vk);
    options.append(other);
    trigger.append(placeholder);
    trigger.append(icon);
    select.append(trigger);
    select.append(options);
    selectWrapper.append(select);
    wrapper.append(selectWrapper);
    wrapper.append(input);
    wrapper.append(deleteBtn);

    return {
        wrapper,
        selectWrapper,
        input,
        deleteBtn,
        placeholder,
    };
};

function selectInit() {
    if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
    };
};

function formatDate(date) {
    
    let fullDate, time, day, mounth, year, hours, minutes;

    const dateObj = new Date(date);

    const dayTemp = dateObj.getDate();

    if (dayTemp < 10) {
        day = '0' + dayTemp;
    } else {
        day = dayTemp
    };

    mounth = dateObj.getMonth() + 1;

    if (mounth < 10) {
        mounth = '0' + mounth;
    } else {
        mounth = mounth
    };

    year = dateObj.getFullYear();

    hours = dateObj.getHours();
    minutes = dateObj.getMinutes();
    
    fullDate = day + '.' + mounth + '.' + year;

    time = hours + ':' + minutes;

    return {
        fullDate,
        time,
    };
};

// function buildTable() {

// const main = document.querySelector('.main');
    
// const addBtn = createNewClientBtn();

// main.append(addBtn.wrapper);
//     return main; 
// };

async function refreshTable(data, sortField, boolean) {

    deleteOldTable();

    let sortedData = [];
    
    const table = document.querySelector('.table');
    const search = document.querySelector('.header__input').value;

    if(sortField === null) {
        
        for (let client of data) {
            const row = createCustomerElement(client);
            table.append(row);
        }
    };
    
    if(sortField) {
        console.log(data);   
        sortedData = data.slice(); 

        if(sortField && boolean) {
            sortedData.sort(sortByFieldUp(sortField));

        } else if(sortField && !boolean) {
            sortedData.sort(sortByFieldDown(sortField));
        };

        for (let client of sortedData) {
            const row = createCustomerElement(client);
            table.append(row);
        };
    };

};

function deleteOldTable() {
    document.querySelectorAll('.table__body').forEach(item => {
        item.remove();
    }); 
};

function sortByFieldUp(fld) {
    return (a, b) => a[fld] > b[fld] ? -1 : 1;
};

function sortByFieldDown(fld) {
    return (a, b) => a[fld] > b[fld] ? 1 : -1;
};

function removeLoader() {
    const loader = document.getElementById('loader');
    loader.remove();
}

function selectValueValidate(type, value) {
    
    switch(type) {

        case 'phone':
            console.log(/\d/.test(value))
        if(/\d/.test(value)) return true;
        break;
        case 'email':
            console.log(/(@)(.)/gm.test(value))
        if(/(@)(.)/gm.test(value)) return true;
        break;
        case 'fb':
            console.log(/(fb.com)/gm.test(value))
        if(/(fb.com\/)/gm.test(value)) return true;
        break;
        case 'vk':
            console.log(/(vk.com)/gm.test(value))
        if(/(vk.com\/)/gm.test(value)) return true;
        break;
    };

};

async function launchApp(clientList, {
    searchResult,
    getById,
    deleteClient,
    updateClient,
    createClient,
}) {

    const container = document.querySelector('.container');
    const header = createHeader();
    const table = createTableHeader();
    const addBtn = createNewClientBtn();

    let delay;
    
    table.main.append(addBtn.wrapper);
    container.append(header.header);
    container.append(table.main);
  
    document.querySelectorAll('.table__header-el').forEach(item => {
        if(item.classList.contains('active')) {

           refreshTable(clientList, item.dataset.sort, item.classList.contains('sort-up'));
        };
    });
    
    setTimeout(removeLoader, 1000);

    document.querySelectorAll('.table__delete-btn').forEach(item => {
        item.addEventListener('click', function() {
            const confirmModal = createModal('Удалить клиента', 'Отмена', null, this.classList[0] );
            const id = this.parentNode.parentNode.parentNode.querySelector('.table__id').textContent;
            
            container.append(confirmModal.modal);
        
            const toRemove = this.parentNode.parentNode.parentNode;
        
            confirmModal.form.addEventListener('submit', (e)=> {
                e.preventDefault();
                deleteClient(toRemove ,id).then(() => {
                    location.reload();
                });
            });
        })
    });

    document.querySelectorAll('.table__update-btn').forEach(item => {
        item.addEventListener('click', async function() {
 
            const id = this.parentNode.parentNode.parentNode.querySelector('.table__id').textContent;
                    
            const client = await getById(id);
        
            const toRemove = this.parentNode.parentNode.parentNode;
        
            const updateModal = createModal('Изменить данные', 'Удалить клиента', client, null, toRemove);
            
            container.append(updateModal.modal);
            

            updateModal.cancelBtn.addEventListener('click', function() {
                deleteClient(toRemove, id);
            });
        
            updateModal.form.addEventListener('submit', async function(event) {

                event.preventDefault();

                updateModal.errorDisplay.innerHTML = "";
        
                const updContacts = [];
        
                document.querySelectorAll('.modal__select').forEach(item => {
                    let contact = {};
                    contact.type = item.querySelector('.select__placeholder').textContent;
                    contact.value = item.childNodes[1].value;
                    updContacts.push(contact);
                });
        
                const updClient = {
                    name: updateModal.name.value.trim(),
                    surname: updateModal.surname.value.trim(),
                    lastName: updateModal.middleName.value.trim(),
                    contacts: updContacts
                };
            
                let response = await updateClient(id, updClient);

                if(response.errors) {

                    for (let message of response.errors) {
                        updateModal.errorDisplay.innerHTML +=  `${message.message}<br>`  
                    };
                } else location.reload();
            });
        });
    });

    document.querySelectorAll('.table__header-el').forEach(item => {
        item.addEventListener('click',async function() {
            if (item.textContent === 'Контакты' || 'Дейсвия') return;

            const search = document.querySelector('.header__input').value;

            let list = clientList;

            if (search) list = await searchResult(search);
            
            if(this.classList.contains('active') && this.classList.contains('sort-up')) {
                this.classList.remove('active');
                this.classList.remove('sort-up');
                this.parentNode.childNodes[0].classList.add('active');
                this.parentNode.childNodes[0].classList.add('sort-up');
                refreshTable(list, 'id', true, search);
                return;
            }; 

            if(this.classList.contains('active')) {
                this.classList.add('sort-up');
                refreshTable(list, this.dataset.sort, this.classList.contains('sort-up'), search);
            };

            if(!this.classList.contains('active')) {
                document.querySelectorAll('.table__header-el').forEach(item => {
                    item.classList.remove('active');
                    item.classList.remove('sort-up');
                });
                this.classList.add('active');

                refreshTable(list, this.dataset.sort, this.classList.contains('sort-up'),search)

            };

        });
    });

    document.querySelector('.main__btn').addEventListener('click', async function(event) {
       
        const modal = createModal('Новый клиент', 'Отмена');
        document.querySelector('.container').append(modal.modal);

        modal.modal.querySelectorAll('.modal__input').forEach(item => {
            item.addEventListener('input', event => {

                if(/\d/.test(event.target.value) || event.target.value.length <= 1 && event.target.value) {
                    event.target.style.borderBottomColor = '#F06A4D';
                } else  {
                event.target.style.borderBottomColor = '#C8C5D1';
                };
            })

            item.addEventListener('blur', event => {
                let result = "";
    
                if(!/\W/i.test(event.target.value)) {
                    event.target.value = ""; 
                };
    
                let doubleDash = event.target.value.replace(/-+/, "-");
                let doubleSpace = doubleDash.replace(/\s+/," ");
                
                let noSpace = doubleSpace.toUpperCase().trim();
                let dashStart = noSpace.replace(/^-*/,"");
                let dashEnd = dashStart.replace(/-*$/,"");
                
                let firstLetter = dashEnd.substr(0,1);
                let lowerCase = dashEnd.slice(1).toLowerCase();
                
                let temp = firstLetter+lowerCase;
                
                for (let letter of temp) {
                    if (letter === "=") result = result;
                    else if (letter === "+") result = result;
                    else if (letter === "*") result = result;
                    else if (letter === "/") result = result;
                    else if (letter === ".") result = result;
                    else if (letter === ",") result = result;
                    else if (letter === "_") result = result;
                    else if (letter === "?") result = result;
                    else if (letter === "!") result = result;
                    else if (letter === "№") result = result;
                    else if (letter === "#") result = result;
                    else if (letter === "&") result = result;
                    else if (letter === "%") result = result;
                    else if (letter === ";") result = result;
                    else result = result + letter;
                };
    
                event.target.value = result;
                
            });
        });

        modal.form.addEventListener('submit', async event => {
                
            event.preventDefault();

            let contactsNew = [];

            modal.errorDisplay.innerHTML = "";

            document.querySelectorAll('.modal__select').forEach(item => {
                let contact = {};
                contact.type = item.querySelector('.select__placeholder').textContent;
                contact.value = item.childNodes[1].value;
                contactsNew.push(contact);
            })

            let client = {
                name: modal.name.value.trim(),
                surname: modal.surname.value.trim(),
                lastName: modal.middleName.value,
                contacts: contactsNew,
            };

            const updatedTable = await createClient(client);
            location.reload();

            console.log(updatedTable)

            if(updatedTable.errors) {
                for (let message of updatedTable.errors) {
                    modal.errorDisplay.innerHTML +=  `${message.message}<br>`  
                };
            };
             
        }); 
    });

    document.querySelector('.header__input').addEventListener('input', async event => {
        if(!event.currentTarget.value.length===0) return;
        clearTimeout(delay);
        const search = await searchResult(event.target.value);

        delay = setTimeout(refreshTable,  3000, search, null, null);
    });  
};

export { launchApp };
