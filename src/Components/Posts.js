const iconAction = <ion-icon name="ellipsis-horizontal"></ion-icon>; 
const iconsContent = ["heart-outline", "chatbubble-outline", "paper-plane-outline" ];
const iconSave = <ion-icon name="bookmark-outline"></ion-icon>;

const infoPosts = [
    { imageUser: "assets/img/meowed.svg", userName: "meowed", 
      imageContent: "assets/img/gato-telefone.svg", imageLike: "assets/img/respondeai.svg", 
      lastLike: "respondeai", totalLike: "outras 101.523 pessoas"},
    { imageUser: "assets/img/barked.svg", userName: "barked", 
      imageContent: "assets/img/dog.svg" , imageLike: "assets/img/adorable_animals.svg", 
      lastLike: "adorable_animals", totalLike: "outras 99.159 pessoas"
    }
];

export default function Posts() {
    return(
        <div class="posts">
            <Post />
        </div> 
    )
}

function Post() {
    
    return(
        infoPosts.map((post) => 
            {
            return (
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src= { post.imageUser } />
                            { post.userName }
                        </div>
                
                        <div class="acoes">
                            { iconAction }
                        </div>
                    </div>
                
                    <div class="conteudo">
                        <img src={ post.imageContent } />
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                { iconsContent.map((icons) => <ion-icon name= { icons } ></ion-icon>) }
                            </div>
                            <div>
                                { iconSave }
                            </div>
                        </div>
                        <div class="curtidas">
                            <img src= { post.imageLike } />
                            <div class="texto">
                                Curtido por <strong>{ post.lastLike }</strong> e <strong> { post.totalLike } </strong>
                            </div>
                       </div>
                    </div>
                </div>
            );
        })
    )
}