const sideUser = 
    {image: "assets/img/catanacomics.svg", user: "catanacomics", text: "Catana" };

export default function SideBar() {
    return(
        <div class="sidebar">
            <User />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestions image = "assets/img/bad.vibes.memes.svg" name = "bad.vibes.memes" reason = "Segue você" /> 
                <Sugestions image = "assets/img/chibirdart.svg" name = "chibirdart" reason = "Segue você" /> 
                <Sugestions image = "assets/img/razoesparaacreditar.svg" name = "razoesparaacreditar" reason = "Novo no Instagram" /> 
                <Sugestions image = "assets/img/adorable_animals.svg" name = "adorable_animals" reason = "Segue você" /> 
                <Sugestions image = "assets/img/smallcutecats.svg" name = "smallcutecats" reason = "Segue você" />   
            </div>
            <Links />
            <Copyright />
        </div>
    )
}

function User() {
    return (
        <div class="usuario">
            <img src= { sideUser.image } />
            <div class="texto">
                <strong> { sideUser.user }</strong>
                    { sideUser.text }
            </div>
        </div>
    )
}

function Sugestions(props) {
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src= { props.image } />
                <div class="texto">
                    <div class="nome"> { props.name } </div>
                    <div class="razao">{ props.reason }</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>  
    )
}

function Links() {
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright() {
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}