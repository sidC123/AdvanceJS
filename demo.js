let allUsers;
let bookList = document.querySelector('#book-list');

const renderData = () => {
    const bookElements = allUsers?.map(user => `
            <div class="card">
                <h3>${user.first_name} ${user.last_name}</h3>
            </div>
        `);
    bookList.innerHTML = bookElements.join('');
}

async function getAllUsers() {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const users = await response.json();
        console.log(users.data);
        allUsers = users.data;
        renderData()
    } catch (error) {
        console.log(error, 'Error fetching');
    }
}
getAllUsers();


// const random = Math.floor(Math.random() * 101);
// console.log(random)






// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ car: "Lamborghini", model: "Gallardo" })
//         } else {
//             reject('Error: Salary is insufficient')
//         }
//     }, 2000)
// });

// async function consumeFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumeFive();


// const requestUrl = "https://reqres.in/api/users?page=2"

// async function getUsersData() {
//     try {
//         const response = await fetch(requestUrl);
//         const data = await response.json();
//         // const data = JSON.parse(response);
//         console.log(data.data);
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }
// getUsersData()
