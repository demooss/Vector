/* 
    Vector 0.1.0
    (c) 2022 Inpyung SkillClass OSS
    MIT License - Released under the MIT License.
    https://github.com/SkillClass/Vector/blob/main/LICENSE
*/

(()=>{
    // createStyle 함수는 성능이슈가 생길 수 있음 : 코드 리팩토링이 필요할 수 있음 - 22/06/16 이민준
    const createStyle = (property,style,config)=>{
        if(document.querySelector('head style') == null){
            let styleElement = document.createElement("style");
            document.querySelector("head").appendChild(styleElement);
            if(Array.isArray(property)){
                property.forEach((name)=>{
                    if(typeof name === 'object'){
                       if(config.object){
                            Object.keys(style).forEach((s)=>{
                                Object.keys(style[s]).forEach((t)=>{
                                    let pr = Object.keys(name)[0];
                                    styleElement.sheet.insertRule(`.${pr}-${s}-${t}{${name[pr]}:${style[s][t]}}`);
                                        // hover, active 반응은 config Object에 reaction이 true되어야 작동됨
                                    if(config.reaction){
                                        styleElement.sheet.insertRule(`.hover\\\:${pr}-${s}-${t}:hover{${name[pr]}:${style[s][t]}}`);
                                        styleElement.sheet.insertRule(`.active\\\:${pr}-${s}-${t}:active{${name[pr]}:${style[s][t]}}`);
                                    }
                                });
                            });
                        }
                    }
                });
            }
        }
    };


    /*
        TODO - 22/06/17
        - 생상 및 fill, border 추가
    */
    createStyle([{"bg":"background-color"},{"text":"color"},{"border":"border-color"},{"fill":"fill"}],{
        "red":{
            "50": "#FFEBEE",
            "100": "#FFCDD2",
            "200": "#EF9A9A",
            "300": "#E57373",
            "400": "#EF5350",
            "500": "#F44336",
            "600": "#E53935",
            "700": "#D32F2F",
            "800": "#C62828",
            "900": "#B71C1C"
        },
        "pink":{
            "50": "#FCE4EC",
            "100": "#F8BBD0",
            "200": "#F48FB1",
            "300": "#F06292",
            "400": "#EC407A",
            "500": "#E91E63",
            "600": "#D81B60",
            "700": "#C2185B",
            "800": "#AD1457",
            "900": "#880E4F",
        },
        "purple":{
            "50": "#F3E5F5",
            "100": "#E1BEE7",
            "200": "#CE93D8",
            "300": "#BA68C8",
            "400": "#AB47BC",
            "500": "#9C27B0",
            "600": "#8E24AA",
            "700": "#7B1FA2",
            "800": "#6A1B9A",
            "900": "#4A148C",
        },
        "violet":{
            "50": "#EDE7F6",
            "100": "#D1C4E9",
            "200": "#B39DDB",
            "300": "#9575CD",
            "400": "#7E57C2",
            "500": "#673AB7",
            "600": "#5E35B1",
            "700": "#512DA8",
            "800": "#4527A0",
            "900": "#311B92",
        },
        "indigo":{
            "50": "#E8EAF6",
            "100": "#C5CAE9",
            "200": "#9FA8DA",
            "300": "#7986CB",
            "400": "#5C6BC0",
            "500": "#3F51B5",
            "600": "#3949AB",
            "700": "#303F9F",
            "800": "#283593",
            "900": "#1A237E",
        },
        "blue":{
            "50": "#E3F2FD",
            "100": "#BBDEFB",
            "200": "#90CAF9",
            "300": "#64B5F6",
            "400": "#42A5F5",
            "500": "#2196F3",
            "600": "#1E88E5",
            "700": "#1976D2",
            "800": "#1565C0",
            "900": "#0D47A1",
        },
        "blue":{
            "50": "#E3F2FD",
            "100": "#BBDEFB",
            "200": "#90CAF9",
            "300": "#64B5F6",
            "400": "#42A5F5",
            "500": "#2196F3",
            "600": "#1E88E5",
            "700": "#1976D2",
            "800": "#1565C0",
            "900": "#0D47A1",
        },
        "slate":{
            "50": "#ECEFF1",
            "100": "#CFD8DC",
            "200": "#B0BEC5",
            "300": "#90A4AE",
            "400": "#78909C",
            "500": "#607D8B",
            "600": "#546E7A",
            "700": "#455A64",
            "800": "#37474F",
            "900": "#263238",
        },
        "cyan":{
            "50": "#E0F7FA",
            "100": "#B2EBF2",
            "200": "#80DEEA",
            "300": "#4DD0E1",
            "400": "#26C6DA",
            "500": "#00BCD4",
            "600": "#00ACC1",
            "700": "#0097A7",
            "800": "#00838F",
            "900": "#006064",
        },
        "teal":{
            "50": "#E0F2F1",
            "100": "#B2DFDB",
            "200": "#80CBC4",
            "300": "#4DB6AC",
            "400": "#26A69A",
            "500": "#009688",
            "600": "#00897B",
            "700": "#00796B",
            "800": "#00695C",
            "900": "#004D40",
        },
        "green":{
            "50": "#E8F5E9",
            "100": "#C8E6C9",
            "200": "#A5D6A7",
            "300": "#81C784",
            "400": "#66BB6A",
            "500": "#4CAF50",
            "600": "#43A047",
            "700": "#388E3C",
            "800": "#2E7D32",
            "900": "#1B5E20",
        },
        "lime":{
            "50": "#F9FBE7",
            "100": "#F0F4C3",
            "200": "#E6EE9C",
            "300": "#DCE775",
            "400": "#D4E157",
            "500": "#CDDC39",
            "600": "#C0CA33",
            "700": "#AFB42B",
            "800": "#9E9D24",
            "900": "#827717",
        },
        "yellow":{
            "50": "#FFFDE7",
            "100": "#FFF9C4",
            "200": "#FFF59D",
            "300": "#FFF176",
            "400": "#FFF59D",
            "500": "#FFEB3B",
            "600": "#FDD835",
            "700": "#FBC02D",
            "800": "#F9A825",
            "900": "#F57F17",
        },
        "amber":{
            "50": "#FFF8E1",
            "100": "#FFECB3",
            "200": "#FFE082",
            "300": "#FFD54F",
            "400": "#FFCA28",
            "500": "#FFC107",
            "600": "#FFB300",
            "700": "#FFA000",
            "800": "#FF8F00",
            "900": "#FF6F00",
        },
        "gray":{
            "50": "#FAFAFA",
            "100": "#F5F5F5",
            "200": "#EEEEEE",
            "300": "#E0E0E0",
            "400": "#BDBDBD",
            "500": "#9E9E9E",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
        }
    },{object:true,reaction:true});
})()
