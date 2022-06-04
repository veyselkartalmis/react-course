import { useSelector } from "react-redux";

function Header() {
    const { dark, language } = useSelector(state => state.site);

    return (
        <div>
            header
            <div>
                Dark Mod = {dark ? "evet" : "hayır"} <br />
                Mevcut Dil = {language}
            </div>
        </div>
    )
}

export default Header;