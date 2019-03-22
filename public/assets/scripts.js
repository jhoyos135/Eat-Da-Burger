document.addEventListener("DOMContentLoaded", () => {

// add burger
document.querySelector('.burgerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let burger_name = document.querySelector('#burger_name').value;
    let url = `/api/new-burger`;
    if(burger_name !== '') {
        //ajax call
        let fetch_burger = async () => {
            let devaour_val = document.querySelector('[name=devoured]:checked').value
            let res = await fetch(url, {
                
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'   
                },
                body: JSON.stringify({
                    burger_name: burger_name,
                    devoured: devaour_val
                })
            })
            let json = await res.json();
            console.log(json)
            location.reload();
        }
        fetch_burger()
    }
})

// delete burger
let delete_btn = document.querySelectorAll('.deleteBurger');
delete_btn.forEach((single_delete) => {
    single_delete.addEventListener('click', (e) => {
        let target = e.target.dataset.id;
       
        let delete_fetch = async () => {
            let url = `/api/delete-burger/${target}`;
            await fetch(url, {
                method: 'DELETE',
            })
            location.reload();
        }
        delete_fetch();
    })
})

// update the burger status
let devourUndevour = document.querySelectorAll('.devourUndevour');
devourUndevour.forEach((single_devour) => {
    single_devour.addEventListener('click', (e) => {
        let target =  e.target.dataset.devoured;
        let id =  e.target.dataset.id;
        let toggle = Math.abs(target -  1);
        
        // ajax call
        let update_fetch = async () => {
            let url = `/api/update-burger/${id}`
        await fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'   
                },
                body: JSON.stringify({
                    devoured: toggle
                })
                
            })
            location.reload()
        }
        update_fetch()
    })
})
});
