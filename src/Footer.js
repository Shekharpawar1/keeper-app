import "./style.css"

let currentYear = new Date().getFullYear();

export default function Footer(){
    return (
        <footer className="footer">
            <p>Copyright @{currentYear}</p>
        </footer>
    )
}