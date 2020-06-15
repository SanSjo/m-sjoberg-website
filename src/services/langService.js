import LocalizedStrings from 'react-localization'
import seFlag from '../img/flags/se.png'
import gbFlag from '../img/flags/gb.png'

const setLang = (lang) => {
    localStorage.setItem('language', lang);
    window.location.reload()
}

const getLang = () => {
    const lang = localStorage.getItem('language');
    if(lang === 'null') {
        return 'se'
    }

    if(lang == null) {
        return 'se'
    }

    if(lang === 'gb') {
        return 'se';
    }

    return lang;
}

const getLangObj = () => {
    const lang = getLang();
    if(lang === 'se') {
        return {
            name: "Swedish",
            flag: seFlag,
            lang: 'se'
        }
    } else {
        return {
            name: "English",
            flag: gbFlag,
            lang: 'en'
        }
    }
}

const getStrings = (inp) => {
    let language = getLang();
    let strings = new LocalizedStrings(inp)
    for (const value of strings._defaultLanguageFirstLevelKeys.entries()) {
        strings[value[1]] = strings._props[language][value[1]]
    }
    return strings
}

export const langService = {
    setLang,
    getLang,
    getLangObj,
    getStrings
}

export default langService