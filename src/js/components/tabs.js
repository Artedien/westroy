const tabs = () => {
    const buttonTabs = document.querySelectorAll('.jobs__list-item');
    const contentTabs = document.querySelectorAll('.jobs__tab-item');

    buttonTabs.forEach((item, i) => {
    item.addEventListener('click',()=>{
        buttonTabs.forEach(item=>{
            item.classList.remove('active')
        })
        contentTabs.forEach(item=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
        contentTabs[i].classList.add('active')
    })
    })

};




export default tabs;
