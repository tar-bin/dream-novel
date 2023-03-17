/// version 1.0.0
/// MIT license
/// https://github.com/tar-bin/dream-novel/blob/main/LICENSE

/// =====================================
/// 作品ごとの設定↓ここから

const defaultMyojiKanji = '名字';
const defaultNamaeKanji = '名前';
const defaultMyojiHiragana = 'みょうじ';
const defaultNamaeHiragana = 'なまえ';

/// 作品ごとの設定↑ここまで
/// =====================================
/// 以下、実装コードですので触らないでください

const { createApp } = Vue

createApp({
    data() {
        return {
            myojiKanji: '',
            namaeKanji: '',
            myojiHiragana: '',
            namaeHiragana: '',
        }
    },
    computed: {
        myojiKatakana() {
            return this.hiraganaToKatakana(this.myojiHiragana);
        },
        namaeKatakana() {
            return this.hiraganaToKatakana(this.namaeHiragana);
        },
    },
    methods: {
        hiraganaToKatakana(str) {
            return str.replace(/[\u3041-\u3096]/g, (match) => {
                var chr = match.charCodeAt(0) + 0x60;
                return String.fromCharCode(chr);
            })
        },
        saveConfig() {
            localStorage.myojiKanji = this.myojiKanji;
            localStorage.namaeKanji = this.namaeKanji;
            localStorage.myojiHiragana = this.myojiHiragana;
            localStorage.namaeHiragana = this.namaeHiragana;
        },
        resetConfig() {
            localStorage.removeItem("myojiKanji");
            localStorage.removeItem("namaeKanji");
            localStorage.removeItem("myojiHiragana");
            localStorage.removeItem("namaeHiragana");
            this.myojiKanji = defaultMyojiKanji;
            this.namaeKanji = defaultNamaeKanji
            this.myojiHiragana = defaultMyojiHiragana;
            this.namaeHiragana = defaultNamaeHiragana;
        }
    },
    mounted() {
        this.myojiKanji = localStorage.myojiKanji ?? defaultMyojiKanji;
        this.namaeKanji = localStorage.namaeKanji ?? defaultNamaeKanji
        this.myojiHiragana = localStorage.myojiHiragana ?? defaultMyojiHiragana;
        this.namaeHiragana = localStorage.namaeHiragana ?? defaultNamaeHiragana;
    }
}).mount('#app')
