// Create a Card component in the View folder
// View/Pages/Shared folder is for shared components that can usually be customized by the children prop
// Components folder is usually for general components used globally in the website/app

function Card({cardClass, children}){
    return <section className={cardClass}>{children}</section>
}

export default Card;