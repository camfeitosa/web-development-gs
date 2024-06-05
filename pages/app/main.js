let videos = [

{
  "titulo": "Você sabe o que é Economia Azul?",
  "canal": "Grupo Ecologia Humana",
  "link": "https://www.youtube.com/embed/-4H5-a9P3aY?si=f2wsgd6IfkD6lBhc",    
  "categoria": "economia azul"
},
{
  "titulo": "Amazônia Azul – Economia do Mar",
  "canal": "Marinha do Brasil",
  "link": "https://www.youtube.com/embed/FSVaGU-SZPA?si=bCnjHGBqFgC08yvS",    
  "categoria": "economia azul"
},
{
  "titulo": "POLUIÇÃO MARINHA POR PLÁSTICOS",
  "canal": "Canal Curta",
  "link": "https://www.youtube.com/embed/8zAHYLwO1rE?si=EuRdCqaUjPFEfahG",    
  "categoria": "poluicao marinha"
},
{
  "titulo": "A odisseia de uma garrafa | ONU Meio Ambiente",
  "canal": "ONU Brasil",
  "link": "https://www.youtube.com/embed/EWqnWXnXURw?si=A3NF6e0eHrOkLhHH",    
  "categoria": "poluicao marinha"
},
{
  "titulo": "Microplásticos e a poluição nos oceanos",
  "canal": "Minuto da Terra",
  "link": "https://www.youtube.com/embed/adc0cOqE4qs?si=0Ckv_OQAhMKuV7hr",    
  "categoria": "poluicao marinha"
},
{
  "titulo": "PLÁSTICOS no MAR 🛍️🌊 Causas, consequências e soluções!",
  "canal": "Nossa Ecologia",
  "link": "https://www.youtube.com/embed/-UmOPQRpRIE?si=Evu2PO90Qi-zsaH9",    
  "categoria": "poluicao marinha"
},
{
  "titulo": "ONU: o plástico está cobrindo e destruindo nosso planeta",
  "canal": "ONU Brasil",
  "link": "https://www.youtube.com/embed/3dmZrzeg2e0?si=fwIj8VpQhBS1zy7u",    
  "categoria": "poluicao marinha"
},
{
  "titulo": "Combate ao Lixo no Mar",
  "canal": "Rede TerraMar",
  "link": "https://www.youtube.com/embed/fxnk97iBWJM?si=P_uvMcoYCcLsu6lN",    
  "categoria": "reducao de plasticos"
},
{
  "titulo": "Como REDUZIR O USO DE PLÁSTICO 🛍️❌ (10 Maneiras)",
  "canal": "Nossa Ecologia",
  "link": "https://www.youtube.com/embed/3HWiXG877Gs?si=qhZVpPV_QNMjoq3a",    
  "categoria": "reducao de plasticos"
},
{
  "titulo": "Como reduzir o lixo plástico no mundo?",
  "canal": "eCycle",
  "link": "https://www.youtube.com/embed/KtC2Cx9KqRE?si=AGGWSxOUZHZHSAGA",    
  "categoria": "reducao de plasticos"
},
{
  "titulo": "Como reduzir o consumo de plástico no seu dia a dia",
  "canal": "Diário de Santa Maria",
  "link": "https://www.youtube.com/embed/ZP3nIwZRRcg?si=ntF7hIBxYl5m1byJ",    
  "categoria": "reducao de plasticos"
},
{
  "titulo": "Mergulho e Conservação Marinha",
  "canal": "Projeto Golfinho Rotador",
  "link": "https://www.youtube.com/embed/vjwf3dUjplI?si=UUlRL4XUC8GK4pKw",    
  "categoria": "conservacao marinha"
},
{
  "titulo": "Os oceanos e as mudanças climáticas",
  "canal": "Pacto Global da ONU - Rede Brasil",
  "link": "https://www.youtube.com/embed/8VA9fIRQnDg?si=PcNxPAGKbBWWJc6_",    
  "categoria": "conservacao marinha"
},
{
  "titulo": "aOs oceanos e as mudanças climáticas",
  "canal": "Pacto Global da ONU - Rede Brasil",
  "link": "https://www.youtube.com/embed/8VA9fIRQnDg?si=PcNxPAGKbBWWJc6_",    
  "categoria": "conservacao marinha"
},
{
  "titulo": "Como fazer um mutirão de limpeza?",
  "canal": "Rede TerraMar",
  "link": "https://www.youtube.com/embed/TvabxVENXWE?si=3gTfAIUSTzwjyocc",    
  "categoria": "limpeza de praias"
},
{
  "titulo": "#MEIOAMBIENTE - Lixo Zero realiza mais uma ação de limpeza nas praias de Santos",
  "canal": "Prefeitura de Santos",
  "link": "https://www.youtube.com/embed/4ma8nqcYLI0?si=5B5LcCSa1LRcw-R1",    
  "categoria": "limpeza de praias"
}

]

// categoria:"economia azul"
// categoria:"poluicao marinha"
// categoria:"reducao de plasticos"
// categoria:"conservacao marinha"
// categoria:"limpeza de praias"

document.addEventListener('DOMContentLoaded', function() {
  exibirOsVideosNaTela(videos);
});