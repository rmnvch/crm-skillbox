export async function getClientsList() { 
    const response = await fetch('https://rmnvch-crm-backend.herokuapp.com/api/clients');
    return await response.json();
};    

export async function getSearchedClient(searchValue) { 
    const responseSearch = await fetch(`https://rmnvch-crm-backend.herokuapp.com/api/clients?search=${searchValue}`);
    return await responseSearch.json();
};

export async function getClientById(id) {
    const response = await fetch(`https://rmnvch-crm-backend.herokuapp.com/api/clients/${id}`);
    return await response.json();
};

export function deleteClient(element, id) {
    element.remove();

    return fetch(`https://rmnvch-crm-backend.herokuapp.com/api/clients/${id}`, {   
        method: 'DELETE',
    });
};

export async function createClient(client) {
    const response = await fetch('https://rmnvch-crm-backend.herokuapp.com/api/clients', {
                method: 'POST',
                body: JSON.stringify({
                    name: client.name.trim(),
                    surname: client.surname.trim(),
                    lastName: client.lastName.trim(),
                    contacts: client.contacts,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

    return await response.json();
};

export async function updateClient(id, client) {
    
    const response = await fetch (`https://rmnvch-crm-backend.herokuapp.com/api/clients/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: client.name,
            surname: client.surname,
            lastName: client.lastName,
            contacts: client.contacts,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
        
    return await response.json();
    
} ;




