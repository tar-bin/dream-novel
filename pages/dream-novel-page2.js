/// version 1.0.0
/// MIT license
/// https://github.com/tar-bin/dream-novel/blob/main/LICENSE

/// =====================================
/// 作品ごとの設定↓ここから

const defaultMyojiKanji = '名字';
const defaultNamaeKanji = '名前';
const defaultMyojiHiragana = 'みょうじ';
const defaultNamaeHiragana = 'なまえ';
const defaultJikantai = '朝';

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
            jikantai: '',
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
            localStorage.p2_myojiKanji = this.myojiKanji;
            localStorage.p2_namaeKanji = this.namaeKanji;
            localStorage.p2_myojiHiragana = this.myojiHiragana;
            localStorage.p2_namaeHiragana = this.namaeHiragana;
            localStorage.p2_jikantai = this.jikantai;
        },
        resetConfig() {
            localStorage.removeItem("p2_myojiKanji");
            localStorage.removeItem("p2_namaeKanji");
            localStorage.removeItem("p2_myojiHiragana");
            localStorage.removeItem("p2_namaeHiragana");
            localStorage.removeItem("p2_jikantai");
            this.myojiKanji = defaultMyojiKanji;
            this.namaeKanji = defaultNamaeKanji
            this.myojiHiragana = defaultMyojiHiragana;
            this.namaeHiragana = defaultNamaeHiragana;
            this.jikantai = defaultJikantai;
        }
    },
    mounted() {
        this.myojiKanji = localStorage.p2_myojiKanji ?? defaultMyojiKanji;
        this.namaeKanji = localStorage.p2_namaeKanji ?? defaultNamaeKanji
        this.myojiHiragana = localStorage.p2_myojiHiragana ?? defaultMyojiHiragana;
        this.namaeHiragana = localStorage.p2_namaeHiragana ?? defaultNamaeHiragana;
        this.jikantai = localStorage.p2_jikantai ?? defaultJikantai;
    }
}).mount('#app')
