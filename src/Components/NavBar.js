const imageLogo = <img src= "../../assets/img/logo.png" />;
const iconLogo = <ion-icon name="logo-instagram" />;
const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"] 

export default function NavBar() {
    
    return (
        <div class="navbar">
            <Container />
        </div>
    );
}

function Container() {
    
    return (
        <div class="container"> 
            <Logo />
            <LogoIconeMobile />
            <LogoImageMobile />
            <Pesquisa />
            <Icons />
        </div>
    )
}

function Logo() {
    return (
        <div class="logo">
            { iconLogo }
            <div class="separador"></div>
            { imageLogo } 
        </div>
    )
}

function LogoIconeMobile() {
    return (
        <div class="logo-mobile">
            { iconLogo }
        </div>
    )
}

function LogoImageMobile() {
    return (
        <div class="instagram-mobile">
            { imageLogo } 
        </div>
    )
}

function Icons() {
    return (
        <div class="icones">
            { 
            icons.map((icon) => <ion-icon name= { icon}  > </ion-icon>)
            }
        </div>
    )
}

function Pesquisa() {
    return(
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}