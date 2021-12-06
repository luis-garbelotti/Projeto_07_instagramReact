export default function BackgroundMobile() {
    const iconsMobile = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]
    
    return(
        <div class="fundo-mobile">
            {iconsMobile.map((iconMobile) =>
                <ion-icon name= { iconMobile }></ion-icon>
            )}
        </div>
    )
}