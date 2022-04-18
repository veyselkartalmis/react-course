import React from "react";

/* Context API bu şekilde tanımlanır */
export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        dark: { bg: "#222529", txt: "#D65F5F", hover: "rgba(231, 76, 60, 0.8)" },
        light: { bg: "#F8F9FA", txt: "#222529", hover: "rgba(234, 209, 54, 0.8)" }
    }

    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme}) /* Tema değişikliği için gereken fonksiyon */
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}>
                {this.props.children} {/* Child componentin ulaşması için */}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;
