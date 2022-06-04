import { setDarkMode, setLanguage } from "../stores/site";
import { useSelector, useDispatch } from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const { dark, language } = useSelector(state => state.site);
    const languages = ["tr", "en"];
    const handleLanguage = lang => {
        dispatch(setLanguage(lang));
    }

    return (
        <div>
            footer
            <div>
                {languages.map((lang, index) => (
                    <button
                        key={index}
                        onClick={() => handleLanguage(lang)}
                        className={lang === language ? "active" : ""}>
                        {lang}
                    </button>
                ))}
            </div>
            <div>
                <button onClick={() => dispatch(setDarkMode())}>
                    {dark ? "Light Moda Geç" : "Dark Moda Geç"}
                </button>
            </div>
        </div>
    )
}

export default Header;