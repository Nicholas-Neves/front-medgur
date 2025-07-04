var remedios = {
  carbamazepina: {
        indicacao: "tratamento da epilepsia (convulsões), neuralgia do trigêmeo e transtorno bipolar (episódios de mania e manutenção).",
        seguranca: "dose usual: 200-1200mg/dia (em doses divididas). uso sem prescrição: **altamente inseguro e contraindicado.** pode causar agranulocitose (diminuição grave de glóbulos brancos), anemia aplástica, síndrome de stevens-johnson (reação cutânea grave), hiponatremia e hepatotoxicidade. exige monitoramento de níveis séricos e acompanhamento médico rigoroso.",
        contraindicacao: "hipersensibilidade à carbamazepina ou a fármacos estruturalmente relacionados (ex: antidepressivos tricíclicos), histórico de depressão da medula óssea, porfiria hepática aguda intermitente, uso concomitante com inibidores da mao (imao)."
    },
    levetiracetam: {
        indicacao: "tratamento da epilepsia (convulsões), como monoterapia ou terapia adjuvante para convulsões parciais, mioclônicas e tônico-clônicas generalizadas.",
        seguranca: "dose usual: 500-3000mg/dia (em duas doses). uso sem prescrição: inseguro - geralmente bem tolerado, mas pode causar sonolência, tontura, irritabilidade e sintomas psicóticos em casos raros. exige acompanhamento médico para ajuste de dose e monitoramento da eficácia.",
        contraindicacao: "hipersensibilidade ao levetiracetam ou a outros derivados de pirrolidona."
    },
    prednisona: {
        indicacao: "tratamento de diversas condições inflamatórias e autoimunes (artrite, asma, alergias graves, doenças da pele, lúpus), e como imunossupressor.",
        seguranca: "dose varia amplamente. uso sem prescrição: inseguro - o uso prolongado ou em altas doses pode causar supressão adrenal, ganho de peso, osteoporose, aumento da glicemia, úlcera gastrointestinal, catarata, glaucoma e aumento do risco de infecções. a descontinuação deve ser gradual para evitar insuficiência adrenal. **uso sob estrita supervisão médica.**",
        contraindicacao: "infecções fúngicas sistêmicas, hipersensibilidade à prednisona. cautela em pacientes com diabetes, osteoporose, úlcera, hipertensão, psicose."
    },
    betametasona: {
        indicacao: "tratamento de diversas condições inflamatórias, alérgicas e imunológicas (oral, injetável), e condições inflamatórias da pele (tópica).",
        seguranca: "dose e via variam. uso sem prescrição: inseguro para uso sistêmico. para uso tópico, seguro para curtos períodos, mas uso prolongado ou em grandes áreas pode levar à absorção sistêmica e supressão adrenal, além de atrofia da pele. **sempre com orientação médica.**",
        contraindicacao: "infecções fúngicas sistêmicas (para uso sistêmico), hipersensibilidade à betametasona. para uso tópico: infecções cutâneas virais, bacterianas ou fúngicas não tratadas na área de aplicação."
    },
    dipironamonoidratada: {
        indicacao: "tratamento da rinite alérgica (nasal), asma (inalatória) e condições inflamatórias da pele como eczema e psoríase (tópica).",
        seguranca: "dose e via variam. uso sem prescrição: para uso nasal ou tópico, é geralmente seguro se usado conforme a recomendação por curtos períodos. o uso inalatório para asma exige diagnóstico médico. uso prolongado pode levar a efeitos locais (candidíase nasal/oral) e raramente sistêmicos. **acompanhamento médico para uso crônico.**",
        contraindicacao: "hipersensibilidade à mometasona, infecções não tratadas na área de aplicação (para uso tópico/nasal). não para alívio rápido de broncoespasmo agudo."
    },
    ondansetrona: {
        indicacao: "prevenção e tratamento de náuseas e vômitos induzidos por quimioterapia, radioterapia e pós-operatório.",
        seguranca: "dose usual: 4-8mg (oral ou iv). uso sem prescrição: inseguro - embora eficaz, o uso indevido pode mascarar condições graves que causam náuseas e vômitos. pode causar dor de cabeça, constipação e, mais raramente, prolongamento do intervalo qt e arritmias cardíacas. **uso sob prescrição e orientação médica.**",
        contraindicacao: "hipersensibilidade à ondansetrona ou outros antagonistas dos receptores 5-ht3, uso concomitante com apomorfina."
    },
    dimenidrinato: {
        indicacao: "prevenção e tratamento de náuseas, vômitos, tontura e vertigem associados à doença do movimento (cinetose), labirintite e enjoo pós-operatório.",
        seguranca: "dose usual: 50-100mg a cada 4-6 horas. uso sem prescrição: seguro para uso ocasional. pode causar sonolência, boca seca e visão turva. não recomendado para crianças pequenas sem orientação. cuidado ao dirigir ou operar máquinas. não deve ser usado em caso de glaucoma de ângulo fechado ou hipertrofia prostática sem avaliação médica.",
        contraindicacao: "glaucoma de ângulo fechado, hipertrofia prostática, retenção urinária, epilepsia, hipersensibilidade ao dimenidrinato ou outros anti-histamínicos."
    },
    loperamida: {
        indicacao: "tratamento sintomático da diarreia aguda e crônica.",
        seguranca: "dose usual: 2-4mg, após cada evacuação diarreica. dose máxima: 16mg/dia (aguda). uso sem prescrição: seguro para diarreia aguda, não infecciosa. não usar em caso de diarreia com febre alta, sangue nas fezes ou em crianças menores de 2 anos. o uso excessivo pode causar constipação grave e, em casos raros, problemas cardíacos sérios. **não substitui tratamento da causa.**",
        contraindicacao: "hipersensibilidade à loperamida, constipação, dor abdominal sem diarreia, diarreia associada a colite pseudomembranosa ou enterocolite bacteriana invasiva, crianças menores de 2 anos."
    },
    lactulose: {
        indicacao: "tratamento da constipação intestinal crônica e prevenção e tratamento da encefalopatia hepática.",
        seguranca: "dose usual: 15-30ml/dia (constipação). uso sem prescrição: seguro e amplamente utilizado. pode causar flatulência, cólicas abdominais e náuseas, que geralmente diminuem com o tempo. não causa dependência. o uso excessivo pode levar à diarreia e desidratação. **bom perfil de segurança.**",
        contraindicacao: "hipersensibilidade à lactulose, galactosemia, obstrução intestinal, apendicite aguda, sangramento retal não diagnosticado."
    },
    polietilenoglicol: {
        indicacao: "tratamento da constipação intestinal crônica.",
        seguranca: "dose usual: 17g/dia (pó para solução). uso sem prescrição: seguro e eficaz, pois age osmoticamente, sem ser absorvido. pode causar inchaço abdominal e flatulência. não causa dependência ou alterações eletrolíticas significativas. **bom perfil de segurança para uso crônico.**",
        contraindicacao: "hipersensibilidade ao peg, obstrução intestinal, perfuração intestinal, íleo."
    },
    carbonatodecalcio: {
        indicacao: "suplementação de cálcio e vitamina d para prevenção e tratamento da osteoporose, raquitismo e osteomalácia.",
        seguranca: "dose varia. uso sem prescrição: seguro, mas a suplementação excessiva de cálcio pode levar a hipercalcemia (cálcio alto), cálculos renais e problemas cardíacos. a dose de vitamina d também deve ser monitorada. **converse com um médico ou nutricionista para determinar a necessidade e dose.**",
        contraindicacao: "hipersensibilidade aos componentes, hipercalcemia, hipercalciúria (cálcio alto na urina), insuficiência renal grave, cálculos renais de cálcio, hipervitaminose d."
    },
    sulfatoferroso: {
        indicacao: "prevenção e tratamento da anemia por deficiência de ferro.",
        seguranca: "dose varia. uso sem prescrição: seguro para prevenção em grupos de risco (gravidez, vegetarianos). o uso em caso de anemia deve ser confirmado por exames, pois o excesso de ferro (hemocromatose) é tóxico para órgãos. pode causar constipação, náuseas e fezes escuras. manter fora do alcance de crianças (intoxicação é grave).",
        contraindicacao: "hipersensibilidade ao ferro, hemocromatose, anemias não ferroprivas (ex: talassemia, anemia falciforme - pois pode haver excesso de ferro)."
    },
    acidofolico: {
        indicacao: "prevenção e tratamento da deficiência de folato, prevenção de defeitos do tubo neural na gravidez, tratamento de anemias megaloblásticas.",
        seguranca: "dose usual: 0,4-5mg/dia. uso sem prescrição: seguro e recomendado para mulheres em idade fértil e durante a gravidez. geralmente não causa efeitos adversos em doses usuais. doses muito altas podem mascarar deficiência de vitamina b12.",
        contraindicacao: "hipersensibilidade ao ácido fólico, anemias não diagnosticadas ou megaloblásticas onde a deficiência de vitamina b12 não foi excluída."
    },
    complexob: {
        indicacao: "prevenção e tratamento de deficiências de vitaminas do complexo b, auxílio no metabolismo energético, saúde nervosa e da pele.",
        seguranca: "dose varia. uso sem prescrição: geralmente seguro, pois são vitaminas hidrossolúveis. o excesso é geralmente excretado. altas doses de vitamina b6 (piridoxina) podem causar neuropatia periférica. **consulte um médico ou nutricionista para avaliação da necessidade.**",
        contraindicacao: "hipersensibilidade a qualquer vitamina do complexo b. cautela em certas condições neurológicas ou renais."
    },
    vitaminac: {
        indicacao: "prevenção e tratamento da deficiência de vitamina c (escorbuto), auxílio no sistema imunológico e como antioxidante.",
        seguranca: "dose usual: 500-1000mg/dia. uso sem prescrição: geralmente seguro. doses muito altas (acima de 2g/dia) podem causar diarreia, náuseas e cólicas, e aumentar o risco de cálculos renais em pessoas predispostas.",
        contraindicacao: "hipersensibilidade ao ácido ascórbico, histórico de cálculos renais de oxalato, hemocromatose, talassemia."
    },
    cloretomagnesio: {
        indicacao: "suplementação de magnésio para deficiência, alívio de cãibras e fadiga muscular, suporte à saúde óssea e função nervosa/muscular.",
        seguranca: "dose varia. uso sem prescrição: geralmente seguro para a maioria. doses elevadas podem causar diarreia e desconforto gastrointestinal. em casos de insuficiência renal, o acúmulo de magnésio pode ser perigoso, causando bradicardia e depressão respiratória. **cautela em pacientes renais.**",
        contraindicacao: "hipersensibilidade ao magnésio, insuficiência renal grave, bloqueio cardíaco grave, miastenia gravis."
    },
    topiramato: {
        indicacao: "tratamento da epilepsia (convulsões), profilaxia da enxaqueca e como terapia adjuvante no transtorno bipolar.",
        seguranca: "dose usual: 25-400mg/dia (em doses divididas). uso sem prescrição: inseguro - pode causar sonolência, tontura, dificuldade de concentração, perda de peso e, raramente, glaucoma agudo de ângulo fechado e acidose metabólica. a descontinuação deve ser gradual. exige acompanhamento médico.",
        contraindicacao: "hipersensibilidade ao topiramato."
    },
    dexametasona: {
        indicacao: "tratamento de condições inflamatórias, alérgicas, doenças autoimunes, doenças respiratórias, oftalmológicas e como antiemético em quimioterapia.",
        seguranca: "dose varia amplamente. uso sem prescrição: inseguro - similar à prednisona, o uso inadequado pode levar a efeitos adversos graves, como supressão adrenal, aumento da glicemia, osteoporose e risco de infecções. a interrupção abrupta é perigosa. **uso sob estrita supervisão médica.**",
        contraindicacao: "infecções fúngicas sistêmicas, hipersensibilidade à dexametasona. cautela em diabetes, osteoporose, úlcera."
    },
    mometasona: {
        indicacao: "tratamento da rinite alérgica (nasal), asma (inalatória) e condições inflamatórias da pele como eczema e psoríase (tópica).",
        seguranca: "dose e via variam. uso sem prescrição: para uso nasal ou tópico, é geralmente seguro se usado conforme a recomendação por curtos períodos. o uso inalatório para asma exige diagnóstico médico. uso prolongado pode levar a efeitos locais (candidíase nasal/oral) e raramente sistêmicos. **acompanhamento médico para uso crônico.**",
        contraindicacao: "hipersensibilidade à mometasona, infecções não tratadas na área de aplicação (para uso tópico/nasal). não para alívio rápido de broncoespasmo agudo."
    },
    ranitidina: {
        indicacao: "tratamento de úlceras gástricas e duodenais, doença do refluxo gastroesofágico (drge) e outras condições de hipersecreção ácida. (obs: uso diminuído devido a recalls por impurezas).",
        seguranca: "dose usual: 150-300mg/dia. uso sem prescrição: o uso de ranitidina foi amplamente descontinuado ou restringido globalmente devido à presença de impurezas (ndma) com potencial carcinogênico. alternativas como os inibidores da bomba de prótons (omeprazol, pantoprazol) são preferidas. **evite o uso de ranitidina sem orientação médica atualizada.**",
        contraindicacao: "hipersensibilidade à ranitidina. cautela em pacientes com insuficiência renal ou hepática."
    },
    bromoprida: {
        indicacao: "alívio de náuseas, vômitos, distúrbios de motilidade gastrointestinal e para facilitar exames radiológicos.",
        seguranca: "dose usual: 10mg, 3 vezes ao dia. uso sem prescrição: seguro para uso ocasional. pode causar sonolência, tontura e, mais raramente, reações extrapiramidais (tremores, espasmos musculares, agitação) em crianças e idosos. não usar em caso de sangramento, obstrução ou perfuração gastrointestinal.",
        contraindicacao: "hipersensibilidade à bromoprida, hemorragia gastrointestinal, obstrução mecânica ou perfuração do trato gastrointestinal, feocromocitoma, epilepsia, parkinson, gravidez (primeiro trimestre) e amamentação."
    },
    vitaminad: {
        indicacao: "suplementação de cálcio e vitamina d para prevenção e tratamento da osteoporose, raquitismo e osteomalácia.",
        seguranca: "dose varia. uso sem prescrição: seguro, mas a suplementação excessiva de cálcio pode levar a hipercalcemia (cálcio alto), cálculos renais e problemas cardíacos. a dose de vitamina d também deve ser monitorada. **converse com um médico ou nutricionista para determinar a necessidade e dose.**",
        contraindicacao: "hipersensibilidade aos componentes, hipercalcemia, hipercalciúria (cálcio alto na urina), insuficiência renal grave, cálculos renais de cálcio, hipervitaminose d."
    },
    complexob: {
        indicacao: "prevenção e tratamento de deficiências de vitaminas do complexo b, auxílio no metabolismo energético, saúde nervosa e da pele.",
        seguranca: "dose varia. uso sem prescrição: geralmente seguro, pois são vitaminas hidrossolúveis. o excesso é geralmente excretado. altas doses de vitamina b6 (piridoxina) podem causar neuropatia periférica. **consulte um médico ou nutricionista para avaliação da necessidade.**",
        contraindicacao: "hipersensibilidade a qualquer vitamina do complexo b. cautela em certas condições neurológicas ou renais."
    },

    
    allegra: {
        indicacao: "alívio dos sintomas associados à rinite alérgica sazonal e crônica (espirros, coriza, coceira nasal e ocular) e urticária idiopática crônica (manchas e coceira na pele).",
        seguranca: "dose usual: 60mg a cada 12h ou 120/180mg uma vez ao dia. uso sem prescrição: seguro para alívio ocasional de sintomas alérgicos, pois causa pouca ou nenhuma sonolência. geralmente bem tolerado. não recomendado para crianças menores de 6 anos sem orientação médica.",
        contraindicacao: "hipersensibilidade à fexofenadina ou a qualquer componente da fórmula."
    },
    celestamine: { 
        indicacao: "tratamento de diversas condições alérgicas e inflamatórias que respondem a corticosteroides e anti-histamínicos, como asma brônquica, rinite alérgica e reações cutâneas graves.",
        seguranca: "dose varia. uso sem prescrição: inseguro - por conter corticoide (betametasona) e anti-histamínico sedativo (dexclorfeniramina). pode causar sonolência intensa, supressão adrenal com uso prolongado, ganho de peso, aumento da glicemia e maior risco de infecções. **uso sob estrita supervisão médica e por curtos períodos.**",
        contraindicacao: "infecções fúngicas sistêmicas, prematuros e recém-nascidos, pacientes em terapia com inibidores da mao, hipersensibilidade aos componentes, glaucoma de ângulo fechado, úlcera péptica estenosante, obstrução piloro-duodenal, hipertrofia prostática com retenção urinária, doenças da bexiga urinária."
    },
    hidroxizina: {
        indicacao: "alívio da ansiedade, tratamento de prurido (coceira) associado a reações alérgicas como urticária, e como sedativo pré-operatório.",
        seguranca: "dose varia. uso sem prescrição: seguro para uso ocasional de coceira, mas pode causar sonolência significativa, boca seca e, raramente, prolongamento do intervalo qt. não dirigir ou operar máquinas. **evitar uso contínuo sem orientação médica.**",
        contraindicacao: "hipersensibilidade à hidroxizina, cetirizina, levocetirizina, piperazina ou aminofilina; pacientes com prolongamento do intervalo qt conhecido; gravidez e amamentação."
    },

    fluconazol: {
        indicacao: "tratamento de infecções fúngicas como candidíase vaginal, candidíase oral e esofágica, e algumas infecções fúngicas sistêmicas.",
        seguranca: "dose varia. uso sem prescrição: inseguro para infecções sistêmicas. para candidíase vaginal, uma dose única é comum, mas o diagnóstico deve ser preciso. pode causar dor de cabeça, náuseas, dor abdominal e, raramente, toxicidade hepática. interage com muitos medicamentos. **uso sob prescrição e orientação médica.**",
        contraindicacao: "hipersensibilidade ao fluconazol ou a outros azóis, uso concomitante com terfenadina, astemizol, cisaprida, eritromicina, pimozida ou quinidina (devido a risco de arritmias)."
    },
    cetoconazolcreme: {
        indicacao: "tratamento de infecções fúngicas da pele (micoses), como pé de atleta, micose de virilha, candidíase cutânea e pitiríase versicolor.",
        seguranca: "uso sem prescrição: seguro para uso tópico conforme a indicação. pode causar irritação local, queimação e coceira. evitar contato com olhos. não usar em áreas extensas ou por tempo prolongado sem orientação médica.",
        contraindicacao: "hipersensibilidade ao cetoconazol ou a qualquer componente da fórmula."
    },
    nistatinacremeoususpensaooral: {
        indicacao: "tratamento de infecções fúngicas por candida, como candidíase vaginal, candidíase oral (sapinho) e assaduras por fungos.",
        seguranca: "uso sem prescrição: seguro para uso tópico (creme) e oral (suspensão) conforme a indicação. baixa absorção sistêmica, poucos efeitos adversos. **não deve ser usado para candidíase sistêmica.**",
        contraindicacao: "hipersensibilidade à nistatina."
    },

    sertralina: { 
        indicacao: "tratamento da depressão, transtorno do pânico, transtorno obsessivo-compulsivo (toc), transtorno de estresse pós-traumático (tept), fobia social e transtorno disfórico pré-menstrual.",
        seguranca: "dose usual: 25-200mg/dia. uso sem prescrição: **altamente inseguro e contraindicado.** pode causar efeitos colaterais como náuseas, diarreia, insônia, disfunção sexual e, raramente, síndrome serotoninérgica. a descontinuação deve ser gradual. **exige diagnóstico e acompanhamento psiquiátrico.**",
        contraindicacao: "hipersensibilidade à sertralina, uso concomitante com inibidores da mao (imao) ou pimozida."
    },
    dipropionatodebetametasonamaisacidosalicilico: {
        indicacao: "tratamento de dermatoses responsivas a corticosteroides que também apresentam hiperceratose e ressecamento, como psoríase, dermatite atópica grave e líquen plano.",
        seguranca: "uso sem prescrição: inseguro para uso prolongado ou em grandes áreas. o ácido salicílico pode aumentar a absorção do corticoide e causar salicilismo em doses elevadas. risco de atrofia da pele, estrias e efeitos sistêmicos. **uso sob orientação médica.**",
        contraindicacao: "hipersensibilidade aos componentes, infecções cutâneas virais (herpes, varicela), fúngicas ou bacterianas não tratadas na área de aplicação, acne, rosácea, dermatite perioral, crianças menores de 2 anos."
    },
    miconazolcremevaginal: {
        indicacao: "tratamento de infecções vaginais por fungos (candidíase vaginal).",
        seguranca: "uso sem prescrição: seguro para uso em caso de candidíase vaginal confirmada, mas um médico deve confirmar o diagnóstico para evitar uso indevido para outras infecções. pode causar irritação e queimação local. não substitui consulta médica em caso de sintomas recorrentes.",
        contraindicacao: "hipersensibilidade ao miconazol ou outros derivados imidazólicos."
    },
    clotrimazolcremevaginal: {
        indicacao: "tratamento de infecções vaginais por fungos (candidíase vaginal).",
        seguranca: "uso sem prescrição: seguro para uso em caso de candidíase vaginal confirmada, similar ao miconazol. pode causar irritação e queimação local. **não usar sem diagnóstico preciso em casos recorrentes.**",
        contraindicacao: "hipersensibilidade ao clotrimazol ou a qualquer componente da fórmula."
    },

    ambroxol: {
        indicacao: "secretolítico e expectorante para tratamento de doenças broncopulmonares agudas e crônicas com secreção viscosa (catarro).",
        seguranca: "dose usual: xarope 15-30mg, 2-3 vezes ao dia. uso sem prescrição: seguro para alívio de tosse produtiva. pode causar distúrbios gastrointestinais (náuseas, diarreia). não recomendado para tosse seca ou crianças muito pequenas sem orientação. **não trata a causa da tosse.**",
        contraindicacao: "hipersensibilidade ao ambroxol ou bromexina, úlcera péptica ativa."
    },
    bromexina: {
        indicacao: "secretolítico e expectorante para tratamento de doenças broncopulmonares agudas e crônicas com secreção viscosa.",
        seguranca: "dose usual: xarope 8-16mg, 3 vezes ao dia. uso sem prescrição: seguro para alívio de tosse produtiva. similar ao ambroxol, pode causar distúrbios gastrointestinais. não usar para tosse seca. **apenas para alívio sintomático.**",
        contraindicacao: "hipersensibilidade à bromexina, úlcera péptica ativa."
    },
    acebrofilina: {
        indicacao: "tratamento de doenças respiratórias obstrutivas crônicas como asma, bronquite e enfisema, e condições agudas com broncoespasmo.",
        seguranca: "dose usual: 50-100mg, 2-3 vezes ao dia. uso sem prescrição: inseguro - embora tenha ação broncodilatadora e mucolítica, o tratamento de condições crônicas como asma e dpoc exige diagnóstico e acompanhamento médico. pode causar náuseas, vômitos, dor de cabeça e, raramente, taquicardia. **uso sob prescrição.**",
        contraindicacao: "hipersensibilidade à acebrofilina ou teofilina, doenças hepáticas e renais graves, úlcera péptica ativa."
    },
    acetilcisteina: {
        indicacao: "fluidificante de secreções respiratórias em bronquite, enfisema, fibrose cística e outras condições com muco espesso, e como antídoto para intoxicação por paracetamol.",
        seguranca: "dose usual: 200-600mg, 1-3 vezes ao dia. uso sem prescrição: seguro para fluidificar o catarro. pode causar náuseas, vômitos e reações alérgicas leves. não usar em caso de úlcera péptica ativa. **não trata a infecção subjacente.**",
        contraindicacao: "hipersensibilidade à acetilcisteína, úlcera péptica ativa."
    },

    torsilax: {
        indicacao: "alívio de dores intensas associadas a contraturas musculares, como dor lombar, torcicolo e dor pós-traumática.",
        seguranca: "dose usual: 1 comprimido a cada 12h. uso sem prescrição: inseguro para uso prolongado ou em pacientes com comorbidades. contém diclofenaco (aine), paracetamol (hepatotóxico em excesso) e carisoprodol (relaxante muscular que causa sonolência e pode levar à dependência). risco de problemas gastrointestinais, renais, hepáticos e cardiovasculares. **uso por curtos períodos e sob orientação médica.**",
        contraindicacao: "hipersensibilidade aos componentes, úlcera péptica ativa, sangramento gastrointestinal, insuficiência renal/hepática/cardíaca grave, histórico de asma/urticária por aines, gravidez (último trimestre) e amamentação, glaucoma, miastenia gravis."
    },
    cataflam: {
        indicacao: "tratamento de dores e inflamações de curta duração, como dores de garganta, dores de cabeça, dores pós-operatórias e dores musculares.",
        seguranca: "dose usual: 25-50mg, 2-3 vezes ao dia. uso sem prescrição: seguro para uso ocasional e de curta duração. similar ao diclofenaco, pode causar irritação gastrointestinal, sangramento e, em uso prolongado, problemas renais e cardiovasculares. **evitar em pacientes de risco.**",
        contraindicacao: "hipersensibilidade ao diclofenaco ou outros aines, úlcera péptica ativa, sangramento gastrointestinal, insuficiência renal/hepática/cardíaca grave, gravidez (último trimestre), histórico de asma/urticária por aines."
    },
    neosoro: {
        indicacao: "alívio da congestão nasal associada a resfriados, rinites e sinusites.",
        seguranca: "dose usual: 2-3 gotas em cada narina, até 3 vezes ao dia. uso sem prescrição: seguro para uso ocasional e por curtos períodos (máximo 3-5 dias). o uso prolongado (rinite medicamentosa) pode causar efeito rebote (piora da congestão) e dependência. cuidado em hipertensos e cardíacos, pois pode absorver sistemicamente e aumentar a pressão arterial.",
        contraindicacao: "hipersensibilidade à nafazolina, glaucoma de ângulo fechado, hipertensão arterial grave, doença cardíaca grave, uso concomitante com inibidores da mao, crianças menores de 6 anos."
    },
    sorine: { 
        indicacao: "alívio da congestão nasal associada a resfriados, rinites e sinusites.",
        seguranca: "dose usual: 2-3 gotas em cada narina, até 3 vezes ao dia. uso sem prescrição: segurança e contraindicações idênticas ao neosoro. o uso prolongado pode causar rinite medicamentosa.",
        contraindicacao: "hipersensibilidade à nafazolina, glaucoma de ângulo fechado, hipertensão arterial grave, doença cardíaca grave, uso concomitante com inibidores da mao, crianças menores de 6 anos."
    },
    luftal: {
        indicacao: "alívio do excesso de gases no trato gastrointestinal, que causam desconforto abdominal, inchaço e dor.",
        seguranca: "dose usual: 40-125mg, 3-4 vezes ao dia. uso sem prescrição: seguro, com baixo perfil de efeitos colaterais, pois não é absorvida. não trata a causa subjacente dos gases. **já incluído anteriormente.**",
        contraindicacao: "hipersensibilidade à simeticona, obstrução intestinal."
    },
    vickvaporub: { 
        indicacao: "alívio da tosse e congestão nasal e dores musculares devido a resfriados.",
        seguranca: "uso sem prescrição: seguro para uso tópico em adultos e crianças maiores de 2 anos. não ingerir, aplicar nas narinas, olhos ou pele lesionada. pode causar irritação na pele. cuidado em crianças pequenas, pois a cânfora pode ser tóxica se absorvida em grandes quantidades ou ingerida.",
        contraindicacao: "hipersensibilidade aos componentes, asma brônquica ou outras doenças respiratórias com hipersensibilidade brônquica, crianças menores de 2 anos (risco de broncoespasmo)."
    },
    aas: {
        indicacao: "alívio da dor (leve a moderada), redução da febre, e como anti-inflamatório. em doses baixas, prevenção de eventos cardiovasculares (infarto, avc).",
        seguranca: "dose analgésica/antipirética: 500-1000mg a cada 4-6h. dose preventiva: 75-100mg/dia. uso sem prescrição: seguro para dor/febre ocasional. cuidado com o uso prolongado devido a risco de sangramento gastrointestinal (úlceras), especialmente em idosos. **não usar em crianças e adolescentes com catapora ou gripe devido ao risco de síndrome de reye.** em doses baixas, para prevenção de doenças cardíacas, exige indicação médica.",
        contraindicacao: "hipersensibilidade ao aas ou outros aines, úlcera péptica ativa, sangramento gastrointestinal, hemofilia ou outros distúrbios hemorrágicos, insuficiência renal/hepática/cardíaca grave, gravidez (último trimestre), asma induzida por aines, síndrome de reye (em crianças/adolescentes com infecções virais)."
    },
    lorazepam: {
        indicacao: "tratamento de distúrbios de ansiedade, insônia associada à ansiedade, sedação pré-operatória e controle de convulsões agudas.",
        seguranca: "dose usual: 0,5-2mg, 2-3 vezes ao dia (ansiedade). uso sem prescrição: **altamente inseguro e contraindicado.** é um benzodiazepínico, com alto risco de sedação, tontura, dependência física e psicológica com uso prolongado. a descontinuação deve ser gradual para evitar síndrome de abstinência. **exige prescrição e acompanhamento médico rigoroso.**",
        contraindicacao: "hipersensibilidade ao lorazepam ou outros benzodiazepínicos, glaucoma de ângulo fechado agudo, miastenia gravis, insuficiência respiratória grave, apneia do sono grave."
    },
    clonazepam: {
        indicacao: "tratamento de transtornos de ansiedade (transtorno do pânico), epilepsia (convulsões) e alguns casos de insônia.",
        seguranca: "dose usual: 0,25-4mg/dia (ansiedade). uso sem prescrição: **altamente inseguro e contraindicado.** similar ao lorazepam, é um benzodiazepínico com alto risco de sedação, tontura, dependência e síndrome de abstinência. causa depressão respiratória. **exige prescrição e acompanhamento médico rigoroso.**",
        contraindicacao: "hipersensibilidade ao clonazepam ou outros benzodiazepínicos, glaucoma de ângulo fechado agudo, insuficiência respiratória grave, insuficiência hepática grave, miastenia gravis."
    },
    diazepam: {
        indicacao: "tratamento de distúrbios de ansiedade, insônia, espasmos musculares, síndrome de abstinência alcoólica e como sedativo pré-operatório.",
        seguranca: "dose usual: 5-10mg, 2-4 vezes ao dia (ansiedade). uso sem prescrição: **altamente inseguro e contraindicado.** é um benzodiazepínico clássico, com riscos significativos de sedação, dependência, depressão respiratória, especialmente em idosos. **exige prescrição e acompanhamento médico rigoroso.**",
        contraindicacao: "hipersensibilidade ao diazepam ou outros benzodiazepínicos, miastenia gravis, insuficiência respiratória grave, apneia do sono grave, insuficiência hepática grave, glaucoma de ângulo fechado."
    },
    buspirona: {
        indicacao: "tratamento de distúrbios de ansiedade (transtorno de ansiedade generalizada - tag).",
        seguranca: "dose usual: 10-60mg/dia (doses divididas). uso sem prescrição: inseguro - embora não seja um benzodiazepínico e tenha menor potencial de dependência, não tem efeito imediato e exige tempo para ação. pode causar tontura, dor de cabeça, náuseas e sonolência. **requer diagnóstico e acompanhamento médico.**",
        contraindicacao: "hipersensibilidade à buspirona, uso concomitante com inibidores da mao (imao)."
    },
    gabapentina: { 
        indicacao: "tratamento de dor neuropática (neuralgia pós-herpética, neuropatia diabética) e como terapia adjuvante para convulsões parciais.",
        seguranca: "dose usual: 300-3600mg/dia (em doses divididas). uso sem prescrição: inseguro - pode causar sonolência, tontura, ataxia (falta de coordenação) e edema periférico. há relatos de potencial de abuso. a interrupção abrupta pode causar ansiedade e insônia. **exige acompanhamento médico.**",
        contraindicacao: "hipersensibilidade à gabapentina."
    },
    pregabalina: {
        indicacao: "tratamento de dor neuropática, fibromialgia, transtorno de ansiedade generalizada (tag) e como terapia adjuvante para convulsões parciais.",
        seguranca: "dose usual: 75-600mg/dia (em doses divididas). uso sem prescrição: inseguro - pode causar tontura, sonolência, visão turva, ganho de peso e edema periférico. há relatos de potencial de abuso. a descontinuação deve ser gradual. **exige acompanhamento médico.**",
        contraindicacao: "hipersensibilidade à pregabalina."
    },
    amoxicilina: {
        indicacao: "tratamento de diversas infecções bacterianas, como infecções do trato respiratório superior (sinusite, otite, amigdalite), infecções do trato urinário e infecções da pele.",
        seguranca: "dose usual: 250-500mg a cada 8h. uso sem prescrição: **inseguro e promove resistência bacteriana.** o diagnóstico da infecção bacteriana é essencial. pode causar diarreia, náuseas e reações alérgicas (incluindo anafilaxia grave). **exige prescrição e orientação médica para o tipo e duração da infecção.**",
        contraindicacao: "hipersensibilidade à amoxicilina ou a qualquer penicilina. reações alérgicas graves a cefalosporinas."
    },
    clavulanato: {
        indicacao: "tratamento de infecções bacterianas mais resistentes, onde a amoxicilina isolada pode não ser eficaz, como algumas otites, sinusites, bronquites e infecções de pele e tecidos moles.",
        seguranca: "dose varia. uso sem prescrição: **inseguro e promove resistência bacteriana.** a adição de clavulanato pode aumentar o risco de diarreia e toxicidade hepática. **exige prescrição e orientação médica para infecção e duração.**",
        contraindicacao: "hipersensibilidade à amoxicilina ou clavulanato, ou a qualquer penicilina. histórico de disfunção hepática ou icterícia associada ao uso anterior da combinação."
    },
    azitromicina: {
        indicacao: "tratamento de infecções bacterianas do trato respiratório (bronquite, pneumonia, sinusite, faringite), infecções de pele e tecidos moles, infecções sexualmente transmissíveis (ists).",
        seguranca: "dose usual: 500mg em dose única no 1º dia, seguido de 250mg nos 4 dias seguintes (ou doses únicas). uso sem prescrição: **inseguro e promove resistência bacteriana.** pode causar náuseas, diarreia, dor abdominal e, raramente, prolongamento do intervalo qt e hepatotoxicidade. **exige prescrição e orientação médica.**",
        contraindicacao: "hipersensibilidade à azitromicina, eritromicina ou a qualquer macrolídeo ou cetolídeo. histórico de icterícia colestática/disfunção hepática associada a tratamento anterior com azitromicina."
    },
    cefalexina: {
        indicacao: "tratamento de infecções bacterianas, como infecções do trato respiratório, urinário, pele e tecidos moles, e otite média.",
        seguranca: "dose usual: 250-500mg a cada 6h. uso sem prescrição: **inseguro e promove resistência bacteriana.** pode causar diarreia, náuseas e reações alérgicas. **exige prescrição e orientação médica.**",
        contraindicacao: "hipersensibilidade à cefalexina ou a qualquer cefalosporina. reações alérgicas graves a penicilinas."
    },
    ciprofloxacino: {
        indicacao: "tratamento de infecções bacterianas graves e resistentes, incluindo infecções do trato urinário complicadas, infecções respiratórias, gastrointestinais e de pele.",
        seguranca: "dose varia. uso sem prescrição: **altamente inseguro e promove resistência bacteriana.** pode causar náuseas, diarreia, tontura, dor de cabeça, e efeitos adversos graves como ruptura de tendão, neuropatia periférica e prolongamento do intervalo qt. **uso restrito e sob estrita prescrição e acompanhamento médico.**",
        contraindicacao: "hipersensibilidade ao ciprofloxacino ou outras quinolonas, uso concomitante com tizanidina, histórico de tendinopatia associada a quinolonas, crianças e adolescentes em fase de crescimento (salvo exceções)."
    },
    levofloxacino: {
        indicacao: "tratamento de infecções bacterianas do trato respiratório (pneumonia), infecções urinárias, sinusite bacteriana aguda e infecções de pele.",
        seguranca: "dose varia. uso sem prescrição: **altamente inseguro e promove resistência bacteriana.** similar ao ciprofloxacino, com riscos de ruptura de tendão, neuropatia periférica, prolongamento do intervalo qt e efeitos no snc. **uso restrito e sob estrita prescrição e acompanhamento médico.**",
        contraindicacao: "hipersensibilidade ao levofloxacino ou outras quinolonas, histórico de tendinopatia associada a quinolonas, epilepsia, crianças e adolescentes em fase de crescimento, gravidez e amamentação."
    },
    claritromicina: {
        indicacao: "tratamento de infecções bacterianas respiratórias, de pele e tecidos moles, e em esquemas para erradicação de *h. pylori* (úlceras).",
        seguranca: "dose varia. uso sem prescrição: **inseguro e promove resistência bacteriana.** pode causar náuseas, diarreia, dor abdominal, alterações do paladar e, raramente, prolongamento do intervalo qt e hepatotoxicidade. interage com muitos medicamentos. **exige prescrição e orientação médica.**",
        contraindicacao: "hipersensibilidade à claritromicina ou outros macrolídeos, uso concomitante com terfenadina, astemizol, cisaprida, pimozida, ticagrelor, ranolazina, alcaloides do ergot, lovastatina ou sinvastatina (devido a risco de arritmias ou rabdomiólise)."
    },
    metronidazol: {
        indicacao: "tratamento de infecções causadas por bactérias anaeróbias (abcessos, infecções dentárias, intra-abdominais) e protozoários (tricomoníase, giardíase, amebíase).",
        seguranca: "dose varia. uso sem prescrição: **inseguro e promove resistência.** pode causar náuseas, vômitos, sabor metálico na boca e urina escura. evitar álcool durante e após o tratamento (efeito dissulfiram). **exige prescrição e orientação médica.**",
        contraindicacao: "hipersensibilidade ao metronidazol ou a outros derivados imidazólicos, gravidez (primeiro trimestre) e amamentação (evitar)."
    },
    nitratodemiconazolcreme: {
        indicacao: "tratamento de infecções fúngicas da pele (micoses), como pé de atleta, micose de virilha, candidíase cutânea e pitiríase versicolor.",
        seguranca: "uso sem prescrição: seguro para uso tópico conforme a indicação. pode causar irritação local, queimação e coceira. evitar contato com olhos. **não usar em áreas extensas ou por tempo prolongado sem orientação médica.**",
        contraindicacao: "hipersensibilidade ao miconazol ou a qualquer componente da fórmula."
    },
    aciclovircreme: {
        indicacao: "tratamento de infecções por vírus *herpes simplex* na pele e lábios (herpes labial, herpes genital inicial ou recorrente).",
        seguranca: "uso sem prescrição: seguro para uso tópico conforme a indicação para herpes labial. reduz a duração e a intensidade dos sintomas, mas não cura o vírus. pode causar queimação ou picada local. **não é eficaz para outras infecções virais.**",
        contraindicacao: "hipersensibilidade ao aciclovir, valaciclovir ou propilenoglicol."
    },
    aciclovircomprimido: {
        indicacao: "tratamento e prevenção de infecções por vírus *herpes simplex* (labial, genital), *varicela-zoster* (catapora, herpes zoster) e *epstein-barr*.",
        seguranca: "dose varia. uso sem prescrição: **inseguro.** exige diagnóstico preciso da infecção viral e acompanhamento. pode causar náuseas, vômitos, dor de cabeça e, raramente, problemas renais. **uso sob prescrição e orientação médica.**",
        contraindicacao: "hipersensibilidade ao aciclovir ou valaciclovir. cautela em pacientes com insuficiência renal."
    },
    ivermectina: {
        indicacao: "tratamento de infestações por parasitas, como escabiose (sarna), piolhos e algumas filariases. (obs: não aprovada para tratamento de covid-19).",
        seguranca: "dose varia, geralmente dose única. uso sem prescrição: **inseguro.** o diagnóstico da infestação parasitária é crucial. pode causar náuseas, diarreia, tontura e reações alérgicas. **o uso em massa ou para indicações não aprovadas (como covid-19) é perigoso e não recomendado pela anvisa e agências de saúde.**",
        contraindicacao: "hipersensibilidade à ivermectina, gravidez e amamentação, crianças menores de 15 kg ou 5 anos."
    },
    coliriomourabrasil: { 
        indicacao: "alívio temporário da vermelhidão e irritação dos olhos causadas por resfriados, poluição, fumaça, pó, etc.",
        seguranca: "dose usual: 1-2 gotas, até 4 vezes ao dia. uso sem prescrição: seguro para uso ocasional e de curta duração (máximo 3-5 dias). o uso prolongado pode causar efeito rebote (piora da vermelhidão) e danos oculares. cuidado em glaucoma, hipertensão e doenças cardíacas. **não para infecções oculares.**",
        contraindicacao: "glaucoma de ângulo fechado, hipersensibilidade à nafazolina, doenças cardíacas graves, hipertensão não controlada."
    },
    coliriolacrimaplus: {
        indicacao: "alívio do olho seco, irritação ocular e sensação de corpo estranho causadas por falta de lubrificação.",
        seguranca: "dose usual: 1-2 gotas conforme a necessidade. uso sem prescrição: seguro para alívio sintomático. são 'lágrimas artificiais'. geralmente não causam efeitos adversos significativos, exceto visão borrada temporária após a aplicação. não trata infecções oculares.",
        contraindicacao: "hipersensibilidade à carmellose sódica ou a qualquer componente da fórmula."
    },
    otrivina: {
        indicacao: "alívio da congestão nasal (como neosoro/sorine), não é um medicamento otológico.",
        seguranca: "dose e contraindicações: **idênticas ao neosoro/sorine (nafazolina).** uso excessivo ou prolongado leva à rinite medicamentosa. **não usar para problemas de ouvido, apesar do nome sugestivo.**",
        contraindicacao: "hipersensibilidade à oximetazolina, glaucoma de ângulo fechado, hipertensão arterial grave, doença cardíaca grave, uso concomitante com inibidores da mao, crianças menores de 6 anos."
    },
    otocalm: {
        indicacao: "alívio da dor e congestão no ouvido em otites externas e médias agudas não complicadas, e para remover cerúmen.",
        seguranca: "dose usual: algumas gotas no ouvido afetado. uso sem prescrição: inseguro. o uso em caso de perfuração do tímpano pode causar ototoxicidade (dano ao ouvido interno). pode mascarar infecções graves. **exige diagnóstico médico para garantir que o tímpano está íntegro.**",
        contraindicacao: "perfuração do tímpano, otite média supurativa (com pus), hipersensibilidade aos componentes, crianças menores de 6 meses."
    },
    losartana: {
        indicacao: "tratamento da hipertensão arterial, insuficiência cardíaca, proteção renal em pacientes com diabetes tipo 2 com proteinúria",
        seguranca: "dose usual: 25-100mg/dia. uso sem prescrição: extremamente inseguro - risco de hipotensão grave, hipercalemia e insuficiência renal aguda",
        contraindicacao: "gravidez (especialmente 2º e 3º trimestres), amamentação, estenose bilateral da artéria renal"
    },
    hidroclorotiazida: {
        indicacao: "tratamento da hipertensão arterial e edemas causados por insuficiência cardíaca congestiva, cirrose hepática ou terapia com corticosteroides",
        seguranca: "dose usual: 12,5-50mg/dia. uso sem prescrição: inseguro - risco de desequilíbrios eletrolíticos graves",
        contraindicacao: "anúria, hipersensibilidade às sulfonamidas, insuficiência renal grave"
    },
    dipirona: {
        indicacao: "alívio da dor leve a moderada e redução da febre",
        seguranca: "dose máxima: 4g/dia. uso sem prescrição: relativamente seguro para adultos saudáveis por curtos períodos",
        contraindicacao: "asma brônquica, porfiria hepática, alergia a pirazolonas"
    },
    ibuprofeno: {
        indicacao: "anti-inflamatório para dor, inflamação e febre",
        seguranca: "dose máxima: 3,2g/dia. uso sem prescrição: moderadamente seguro por até 3 dias",
        contraindicacao: "úlcera gastroduodenal, insuficiência renal grave, terceiro trimestre de gravidez"
    },
    amoxicilina: {
        indicacao: "infecções bacterianas das vias respiratórias, urinárias e de pele",
        seguranca: "dose máxima: 6g/dia. uso sem prescrição: inseguro - pode promover resistência bacteriana",
        contraindicacao: "hipersensibilidade a penicilinas, mononucleose infecciosa"
    },
    azitromicina: {
        indicacao: "infecções respiratórias, geniturinárias e dsts",
        seguranca: "dose máxima: 1.500mg/ciclo. uso sem prescrição: inseguro - risco de arritmias cardíacas",
        contraindicacao: "hipersensibilidade a macrolídeos, hepatopatia grave"
    },
    sertralina: {
        indicacao: "depressão maior e transtornos de ansiedade",
        seguranca: "dose máxima: 200mg/dia. uso sem prescrição: inseguro - risco de síndrome serotoninérgica",
        contraindicacao: "uso com imaos, hipersensibilidade à sertralina"
    },
    fluoxetina: {
        indicacao: "depressão, toc e bulimia nervosa",
        seguranca: "dose máxima: 80mg/dia. uso sem prescrição: inseguro - efeito pode demorar semanas",
        contraindicacao: "uso com imaos, epilepsia não controlada"
    },
    metformina: {
        indicacao: "diabetes mellitus tipo 2",
        seguranca: "dose máxima: 2.550mg/dia. uso sem prescrição: inseguro - risco de acidose láctica",
        contraindicacao: "insuficiência renal grave, acidose metabólica"
    },
    insulina: {
        indicacao: "controle glicêmico em diabetes tipo 1 e 2",
        seguranca: "dose individualizada. uso sem prescrição: extremamente inseguro - risco de hipoglicemia fatal",
        contraindicacao: "hipoglicemia, episódios hipoglicêmicos recorrentes"
    },
    omeprazol: {
        indicacao: "gastrite, refluxo gastroesofágico e úlceras",
        seguranca: "dose máxima: 40mg/dia. uso sem prescrição: pouco seguro para uso >14 dias",
        contraindicacao: "uso com rilpivirina, hipersensibilidade aos componentes"
    },
    sinvastatina: {
        indicacao: "redução do colesterol ldl e prevenção cardiovascular",
        seguranca: "dose máxima: 40mg/dia. uso sem prescrição: inseguro - risco de rabdomiólise",
        contraindicacao: "doença hepática ativa, gravidez, uso com inibidores da cyp3a4"
    },
    rivotril: {
        indicacao: "ansiedade, distúrbios do sono e epilepsia",
        seguranca: "dose máxima: 20mg/dia. uso sem prescrição: extremamente inseguro - risco de dependência",
        contraindicacao: "glaucoma de ângulo fechado, insuficiência respiratória grave"
    },
    venvanse: {
        indicacao: "tdah e narcolepsia",
        seguranca: "dose máxima: 70mg/dia. uso sem prescrição: extremamente inseguro - substância controlada",
        contraindicacao: "hipertensão não controlada, glaucoma, ansiedade severa"
    },
    cimegripe: {
        indicacao: "alívio dos sintomas de gripes e resfriados (febre, dor, congestão nasal)",
        seguranca: "dose máxima conforme componentes. uso sem prescrição: relativamente seguro por curto período (3-5 dias)",
        contraindicacao: "hipersensibilidade aos componentes, crianças menor 12 anos (sem orientação médica)"
    },
    loratadina: {
        indicacao: "alívio dos sintomas de alergia (rinite alérgica, urticária)",
        seguranca: "dose máxima: 10mg/dia. uso sem prescrição: relativamente seguro para uso ocasional",
        contraindicacao: "hipersensibilidade à loratadina, crianças maiores de 2 anos"
    },
    strepsils: {
        indicacao: "alívio sintomático de dores de garganta e irritação leve",
        seguranca: "dose máxima: 8 pastilhas/dia. uso sem prescrição: seguro por curto período (2-3 dias)",
        contraindicacao: "hipersensibilidade aos componentes, crianças menores de 6 anos"
    },
    nitrofurantoína: {
        indicacao: "tratamento e prevenção de infecções do trato urinário não complicadas",
        seguranca: "dose máxima conforme indicação médica. uso sem prescrição: inseguro - risco de resistência bacteriana",
        contraindicacao: "insuficiência renal grave, gravidez (termo final), crianças menores de 1 mês"
    },
    ponderaxr: {
        indicacao: "tratamento da fibromialgia e dor neuropática",
        seguranca: "dose máxima: 500mg/dia. uso sem prescrição: extremamente inseguro - risco de efeitos psicoativos",
        contraindicacao: "hipersensibilidade à pregabalina, insuficiência cardíaca grave"
    },
    risperidona: {
        indicacao: "esquizofrenia, transtorno bipolar e irritabilidade no autismo",
        seguranca: "dose máxima conforme indicação médica. uso sem prescrição: extremamente inseguro - antipsicótico",
        contraindicacao: "demência relacionada à psicose em idosos, hipersensibilidade"
    },
    dicloridratodebetaistina: {
        indicacao: "vertigem e distúrbios vestibulares (como doença de ménière)",
        seguranca: "dose máxima: 48mg/dia. uso sem prescrição: inseguro - pode mascarar condições graves",
        contraindicacao: "feocromocitoma, asma brônquica, úlcera péptica ativa"
    },
    levotiroxinasodica: {
        indicacao: "hipotireoidismo, reposição hormonal tireoidiana",
        seguranca: "dose individualizada por exames. uso sem prescrição: extremamente inseguro - risco de arritmias",
        contraindicacao: "hipertireoidismo, infarto agudo do miocárdio não compensado"
    },
    dexclorfeniramina: {
        indicacao: "bla",
        seguranca: "bla",
        contraindicacao: "bla"
    }

};

export default remedios;
