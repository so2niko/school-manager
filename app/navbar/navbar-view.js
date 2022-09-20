export default class NavbarView{
    constructor(handleClickMenu){
        this.mainNavbar = document.querySelector('.navbar-main');
        this.mainNavbar.addEventListener('click', handleClickMenu);
    }

    render(active = 'main'){
        const links  = [
            {
                label : 'Головна',
                data : 'main',
            },
            {
                label : 'Уроки',
                data : 'lessons',
            },
            {
                label : 'Дзвінки',
                data : 'bells',
            }
        ];

        const liHTML = links.reduce((html, { label, data }) => {
            return (`${html}<li class="nav-item">
            <a 
                class="nav-link${ data === active ? ' active' : '' }" 
                href="#" 
                data-link="${ data }">
                ${ label }
            </a>
        </li>`);
        }, '');
        const navbarHTML = `<div class="container-fluid justify-content-center"><ul class="navbar-nav">${ liHTML }</ul></div></div>`;

        
        this.mainNavbar.innerHTML = navbarHTML;

    }

    
}