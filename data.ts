import { Module } from './types';

export const EBOOK_CONTENT: Module[] = [
  {
    id: 'intro',
    title: 'Introducción',
    subtitle: 'Bienvenido al curso profesional',
    sections: [
      {
        title: 'Manifiesto de la Repostería Canina',
        content: 'La repostería canina no es simplemente "darle sobras al perro". Es una ciencia culinaria que busca el equilibrio entre palatabilidad (sabor) y biodisponibilidad (nutrición). Este curso está diseñado para que dejes de ver los premios como "calorías vacías" y empieces a verlos como vehículos de salud. Nos basaremos en pautas de la NRC (National Research Council) y AAFCO.',
        type: 'text'
      },
      {
        title: '¿Por qué fallan la mayoría de los dueños?',
        list: [
          'Exceso de carbohidratos simples (harinas blancas) que causan inflamación.',
          'Uso de grasas rancias o inadecuadas (aceites vegetales oxidados).',
          'Desbalance de minerales (especialmente la relación Calcio:Fósforo).',
          'Ignorar las alergias alimentarias subclínicas.'
        ],
        type: 'list'
      },
      {
        title: 'Aviso Legal Veterinario',
        content: 'Este material es educativo. Si tu perro tiene insuficiencia renal, hepática o cardíaca, los ingredientes aquí listados deben ser revisados por su veterinario, ya que los requerimientos de sodio y fósforo cambian drásticamente.',
        type: 'warning'
      }
    ]
  },
  {
    id: 'mod1',
    title: 'Módulo 1: Fundamentos',
    subtitle: 'Bioquímica y Nutrición Avanzada',
    sections: [
      {
        title: 'El Perro: Un Carnívoro Facultativo',
        content: 'Aunque los perros pueden sobrevivir con dietas omnívoras, su fisiología prefiere las proteínas animales. Su mandíbula no tiene movimiento lateral (para moler granos), está hecha para desgarrar y engullir. Su amilasa salival es mínima comparada con la humana, lo que significa que la digestión de carbohidratos recae casi totalmente en el páncreas.',
        type: 'scientific'
      },
      {
        title: 'Biodisponibilidad: Lo que comen vs. Lo que absorben',
        content: 'No es lo mismo ingerir hierro que absorber hierro. La biodisponibilidad depende de la fuente. \n\nEjemplo Crítico: El calcio de una cáscara de huevo (Carbonato de Calcio) tiene alta absorción, mientras que el calcio de origen vegetal suele estar bloqueado por oxalatos (como en las espinacas crudas). Al formular recetas, priorizamos ingredientes con alta tasa de absorción biológica.',
        type: 'scientific'
      },
      {
        title: 'La Regla de Oro: Relación Calcio/Fósforo (Ca:P)',
        content: 'El equilibrio más delicado en nutrición canina es el Ca:P. Debe estar entre 1:1 y 2:1. \n\nLa carne es muy alta en Fósforo y baja en Calcio. Si solo das carne (pechuga, hígado) sin hueso o suplemento de calcio, a largo plazo descalcificas al perro (hiperparatiroidismo nutricional secundario). Todas nuestras recetas base consideran este equilibrio.',
        type: 'warning'
      },
      {
        title: 'Macronutrientes: La Triada Vital',
        content: '1. Proteínas (Estructural): Necesarias para tejidos y hormonas. Buscamos los 10 aminoácidos esenciales (Arginina, Histidina, Isoleucina, Leucina, Lisina, Metionina, Fenilalanina, Treonina, Triptófano, Valina).\n2. Grasas (Energía): La fuente principal de energía aeróbica. Es vital el balance Omega 6 (inflamatorio/defensa) y Omega 3 (antiinflamatorio).\n3. Carbohidratos (Fibra): No son esenciales, pero aportan fibra prebiótica para el microbioma.',
        type: 'text'
      },
      {
        title: 'Tabla de Requerimientos Mínimos (AAFCO Materia Seca)',
        type: 'table',
        table: {
          headers: ['Nutriente', 'Cachorros', 'Adultos', 'Función Clave'],
          rows: [
            ['Proteína Bruta', '22.5%', '18%', 'Músculo y sistema inmune'],
            ['Grasa Bruta', '8.5%', '5.5%', 'Energía y absorción de vit. liposolubles'],
            ['Calcio', '1.2%', '0.5%', 'Huesos y contracción muscular'],
            ['Fósforo', '1.0%', '0.4%', 'Estructura celular y energía (ATP)']
          ]
        }
      },
      {
        title: 'Micronutrientes Esenciales (Vitaminas)',
        list: [
          'Vitamina A (Hígado, Zanahoria): Visión e inmunidad. Cuidado con el exceso en hígado (hipervitaminosis).',
          'Complejo B (Levadura nutricional, Carne): Solubles en agua. Vitales para el metabolismo energético.',
          'Vitamina D (Pescado azul, Sol): Los perros NO sintetizan Vit D eficientemente por el sol, deben comerla.',
          'Vitamina E (Aceites vegetales, semillas): Antioxidante celular clave.'
        ],
        type: 'list'
      },
      {
        title: 'El Semáforo de Ingredientes',
        type: 'list',
        list: [
          '🟢 VERDE (Diario): Pollo, Pavo, Res, Hígado (máx 5%), Huevo, Calabaza, Zanahoria, Arándanos.',
          '🟡 AMARILLO (Moderado): Espinacas (oxalatos), Brócoli (gases), Arroz integral, Avena, Yogur griego (lactosa).',
          '🔴 ROJO (PROHIBIDO): Uvas/Pasas (insuficiencia renal), Chocolate, Cebolla/Ajo (anemia de cuerpos de Heinz), Nueces de Macadamia, Xilitol, Alcohol, Huesos cocidos (astillables).'
        ]
      }
    ],
    downloads: [
      { name: 'Tabla_Maestra_Ingredientes_Aptos.pdf', type: 'pdf' },
      { name: 'Guia_Microbioma_Canino.pdf', type: 'pdf' },
      { name: 'Checklist_Signos_Deficiencia_Nutricional.pdf', type: 'template' }
    ]
  },
  {
    id: 'mod2',
    title: 'Módulo 2: Lab & Equipos',
    subtitle: 'Seguridad Alimentaria y Herramientas',
    sections: [
      {
        title: 'Protocolo de Seguridad (HACCP Casero)',
        content: 'La salmonela y la listeria son riesgos reales, no para el perro (cuyo ácido estomacal suele neutralizarlas), sino para TI y tu familia al manipular los premios.',
        type: 'warning'
      },
      {
        title: 'Mise en Place y Materiales',
        content: 'Evita utensilios de madera para carnes crudas (son porosos y guardan bacterias). Prefiere siempre acero inoxidable, vidrio o silicona de grado alimenticio. Ten tablas de corte diferenciadas por color: Roja (Carnes), Verde (Vegetales), Blanca (Masas/Cocinados).',
        type: 'tip'
      },
      {
        title: 'El Kit del Repostero Canino',
        type: 'list',
        list: [
          'Moldes de Silicona: Esenciales para "Gummies" y premios congelados. Busca formas pequeñas (patitas, huesos) para controlar la porción.',
          'Tapetes de horneado (Silpat): Para evitar aceites innecesarios en las bandejas.',
          'Deshidratador (Opcional pero recomendado): Permite conservar enzimas al secar a baja temperatura (<70°C).',
          'Procesador de Alimentos: Indispensable para hacer purés de órganos (hígado/bazo) y mezclar masas densas sin gluten.'
        ]
      }
    ],
    videoScript: {
      title: 'Flujo de Trabajo Higiénico',
      duration: '4:15 min',
      scenes: [
        { time: '0:00-1:00', visual: 'Diferenciación de zonas en la mesada.', audio: 'Zona sucia (crudos) vs Zona limpia (cocidos).' },
        { time: '1:00-2:30', visual: 'Lavado de manos y desinfección de molde.', audio: 'Técnica correcta de lavado antes de tocar ingredientes secos.' },
        { time: '2:30-4:15', visual: 'Guardado final.', audio: 'Etiquetado obligatorio: Ingredientes + Fecha de elaboración.' }
      ]
    }
  },
  {
    id: 'mod3',
    title: 'Módulo 3: Técnicas Pro',
    subtitle: 'Más allá de hornear: Química Culinaria',
    sections: [
      {
        title: 'La Ciencia de las Harinas Alternativas',
        content: 'Como evitamos el trigo (alérgeno común), trabajamos con harinas funcionalmente diferentes. La harina de arroz absorbe mucha agua; la de avena aporta elasticidad; la de coco absorbe x4 veces su peso en líquido (cuidado, reseca la masa).',
        type: 'text'
      },
      {
        title: 'Colorimetría Natural: Pintando sin Químicos',
        content: 'Para lograr acabados profesionales (tipo "Icing" de colores) nunca usamos colorantes artificiales n°5 o n°40 (asociados a alergias). Usamos pigmentos vegetales:',
        type: 'list',
        list: [
          'ROSA/ROJO: Remolacha en polvo o jugo concentrado (Betalaína).',
          'AMARILLO: Cúrcuma (Curcumina) - activa con una pizca de pimienta.',
          'VERDE: Espirulina o Clorofila líquida (también aporta antioxidantes).',
          'MORADO: Arándano azul (Antocianinas).',
          'NARANJA: Zanahoria cocida y procesada.'
        ]
      },
      {
        title: 'Técnica: Aglutinantes para Alérgicos al Huevo',
        content: 'Muchos perros son alérgicos a la proteína del huevo. Para unir la masa usamos el "Huevo de Linaza": Mezcla 1 cucharada de linaza molida con 3 cucharadas de agua tibia. Deja reposar 5 minutos hasta que se forme un gel mucilaginoso. Esto reemplaza 1 huevo en cualquier receta horneada.',
        type: 'tip'
      },
      {
        title: 'Técnica: Gummies de Colágeno',
        content: 'Usar gelatina sin sabor (grenetina) es excelente para las articulaciones. El secreto es "florecer" la gelatina en agua fría 5 minutos antes de agregar el líquido caliente (caldo de huesos).',
        type: 'tip'
      },
      {
        title: 'Técnica: El Glaseado Seguro (Dog-Safe Icing)',
        list: [
          'Opción 1 (Blanco): Yogur griego drenado (sin suero) + Fécula de patata para espesar.',
          'Opción 2 (Colores): Usar superalimentos. Remolacha (Rosa), Cúrcuma (Amarillo), Espirulina (Verde), Algarroba (Marrón/Símil chocolate).',
          'Opción 3 (Duro): Queso crema bajo en grasa + Harina de coco.'
        ],
        type: 'list'
      },
      {
        title: 'Tiempos y Temperaturas Críticas',
        type: 'table',
        table: {
          headers: ['Método', 'Temperatura', 'Objetivo'],
          rows: [
            ['Deshidratado Carne', '70°C (160°F)', 'Matar patógenos, eliminar humedad'],
            ['Deshidratado Vegetal', '55°C (130°F)', 'Preservar vitaminas termosensibles'],
            ['Horneado Galletas', '160°C (320°F)', 'Cocción lenta para secar el centro'],
            ['Horneado Muffins', '180°C (350°F)', 'Reacción de Maillard (dorado) y leudado']
          ]
        }
      }
    ]
  },
  {
    id: 'mod4',
    title: 'Módulo 4: Recetario Base',
    subtitle: '25 Recetas Comerciales Exitosas',
    sections: [
      {
        title: 'Nota sobre Conservación',
        content: 'Estas recetas no tienen conservantes artificiales. En nevera duran 5-7 días. En congelador hasta 3 meses. Asegúrate de enfriar completamente antes de guardar.',
        type: 'warning'
      }
    ],
    recipes: [
      // 1-10 Recetas Originales
      {
        id: 'r1',
        title: 'Clásicas de Pollo y Calabaza',
        category: 'Base',
        description: 'La receta más vendida. Alta digestibilidad.',
        nutrition: { kcal: 28, protein: '12%', fat: '4%' },
        ingredients: [
          '200g Pechuga de pollo cocida y desmenuzada',
          '150g Puré de calabaza (hervida/vapor)',
          '1 Huevo L',
          '300g Harina de avena integral',
          '1 cda Aceite de coco'
        ],
        instructions: [
          'Precalentar horno a 160°C.',
          'Mezclar pollo, puré, huevo y aceite.',
          'Incorporar harina poco a poco hasta que no se pegue en las manos.',
          'Estirar a 5mm de espesor. Cortar.',
          'Hornear 25-30 min. Dejar enfriar DENTRO del horno apagado para mayor crocancia.'
        ],
        conservation: 'Tarro hermético: 1 semana.'
      },
      {
        id: 'r2',
        title: 'Liver Brownies (Entrenamiento)',
        category: 'Base',
        description: 'Altísima palatabilidad. Úsalos en trozos muy pequeños.',
        nutrition: { kcal: 15, protein: '18%', fat: '6%' },
        ingredients: [
          '400g Hígado de res (crudo)',
          '200g Harina de arroz integral',
          '1 Huevo',
          '1 cda Perejil fresco picado (para el aliento)'
        ],
        instructions: [
          'Procesar el hígado crudo hasta que sea líquido (textura smoothie).',
          'Mezclar con huevo y harina. Quedará una masa pegajosa tipo bizcocho.',
          'Verter en bandeja con papel manteca.',
          'Hornear 20 min a 180°C.',
          'Cortar en cubos de 1x1cm.'
        ],
        conservation: 'Congelar en bolsas ziploc.'
      },
      {
        id: 'r3',
        title: 'Fishy Crunch (Omega 3)',
        category: 'Base',
        description: 'Ideal para piel y pelaje. Olor fuerte que les encanta.',
        nutrition: { kcal: 22, protein: '15%', fat: '8%' },
        ingredients: [
          '1 lata de Atún al natural (bajo en sodio) o Sardinas',
          '1 Huevo',
          '200g Harina de garbanzo (sin gluten)',
          '1 cdita Cúrcuma'
        ],
        instructions: [
          'Escurrir el atún (guardar un poco del agua).',
          'Mezclar todo en procesadora.',
          'Si está muy seco, añadir el agua del atún.',
          'Formar bolitas y aplastar con tenedor.',
          'Hornear 20 min a 170°C.'
        ]
      },
      {
        id: 'r4',
        title: 'Donas de Manzana y Canela',
        category: 'Festiva',
        description: 'Perfectas para fotos y cumpleaños.',
        nutrition: { kcal: 45, protein: '8%', fat: '5%' },
        ingredients: [
          '1 Manzana roja (sin semillas ni corazón) rallada',
          '150g Yogur griego natural',
          '2 tazas Harina de avena',
          '1 cdita Canela (Ceylan preferiblemente)',
          '1 cdita Miel de abeja (opcional)'
        ],
        instructions: [
          'Mezclar yogur y manzana.',
          'Añadir secos.',
          'Usar moldes de donas engrasados con aceite de coco.',
          'Hornear 20 min a 180°C.',
          'Decorar con "Icing" de yogur frío.'
        ]
      },
      {
        id: 'r5',
        title: 'Tiras de Camote (Sweet Potato Chews)',
        category: 'Base',
        description: 'Masticable natural, un solo ingrediente. Vegano.',
        nutrition: { kcal: 18, protein: '1%', fat: '0%' },
        ingredients: [
          '2 Camotes grandes (Batata/Boniato)'
        ],
        instructions: [
          'Lavar bien (se puede dejar la piel).',
          'Cortar en láminas longitudinales de 0.5cm.',
          'Horno al mínimo (100-120°C).',
          'Hornear 3 horas, volteando a la mitad.',
          'Deben quedar chiclosos, no quemados.'
        ],
        conservation: 'Frasco vidrio: 2 semanas.'
      },
      {
        id: 'r6',
        title: 'Muffins "Desayuno de Campeones"',
        category: 'Base',
        description: 'Desayuno completo con fibra y proteína.',
        nutrition: { kcal: 55, protein: '10%', fat: '6%' },
        ingredients: [
          '100g Carne molida magra (cocida)',
          '1 Zanahoria rallada',
          '1 Huevo',
          '1/2 taza Avena en hojuelas',
          '1/2 taza Harina integral'
        ],
        instructions: [
          'Mezclar carne fría con vegetales y huevo.',
          'Añadir harinas.',
          'Colocar en pirotines o moldes de muffin.',
          'Hornear 25 min a 180°C.'
        ]
      },
      {
        id: 'r7',
        title: 'Bocaditos de Coco y Arándanos',
        category: 'Premium',
        description: 'Antioxidantes potentes. Aroma tropical.',
        nutrition: { kcal: 32, protein: '6%', fat: '12%' },
        ingredients: [
          '1/2 taza Aceite de Coco (sólido)',
          '1/2 taza Arándanos frescos o congelados',
          '2 tazas Harina de Coco',
          '1/3 taza Agua fría'
        ],
        instructions: [
          'Mezclar aceite de coco con la harina hasta arenar.',
          'Incorporar arándanos machacados.',
          'Agregar agua poco a poco.',
          'Cortar con moldes pequeños.',
          'Hornear 15 min a 170°C.'
        ]
      },
      {
        id: 'r8',
        title: 'Meatloaf Canino (Pastel de Carne)',
        category: 'Festiva',
        description: 'Ideal para cortar en rebanadas.',
        nutrition: { kcal: 120, protein: '25%', fat: '15%' },
        ingredients: [
          '500g Pavo o Pollo molido',
          '2 Huevos',
          '1 taza Vegetales mixtos picados (chauchas, zanahoria)',
          '1/2 taza Avena',
          'Cáscara de huevo molida (1/2 cdita - Calcio)'
        ],
        instructions: [
          'Mezclar todo en un bowl grande.',
          'Colocar en budinera engrasada.',
          'Hornear 45-60 min a 180°C hasta que el jugo salga claro.',
          'Dejar enfriar antes de desmoldar.'
        ]
      },
      {
        id: 'r9',
        title: 'Premios Hipoalergénicos (Sin Proteína Animal)',
        category: 'Base',
        description: 'Para dietas de exclusión.',
        nutrition: { kcal: 20 },
        ingredients: [
          '2 tazas Harina de Arroz',
          '1 taza Puré de Batata',
          '1/4 taza Manteca de Maní (SIN Xilitol, solo maní)',
          'Agua necesaria'
        ],
        instructions: [
          'Integrar manteca de maní con el puré.',
          'Añadir harina.',
          'Hornear 20-25 min a 170°C.'
        ]
      },
      {
        id: 'r10',
        title: 'Gelatinas de Frutas de Verano',
        category: 'Funcional',
        description: 'Hidratación pura para días de calor.',
        nutrition: { kcal: 10 },
        ingredients: [
          '1 taza Sandía sin semillas (licuada)',
          '1 sobre (7g) Gelatina sin sabor (Grenetina)',
          '1/2 taza Agua de coco (sin azúcar)'
        ],
        instructions: [
          'Hidratar gelatina en agua de coco fría.',
          'Calentar ligeramente para disolver (sin hervir).',
          'Mezclar con el jugo de sandía.',
          'Verter en moldes y refrigerar 4 horas.'
        ],
        conservation: 'Mantener siempre en nevera.'
      },
      // NUEVAS 15 RECETAS AÑADIDAS
      {
        id: 'r11',
        title: 'Bolitas Energéticas de Chía y Plátano',
        category: 'Premium',
        description: 'Snack sin horno, ideal para paseos largos.',
        nutrition: { kcal: 40, protein: '4%', fat: '8%' },
        ingredients: [
          '2 Plátanos maduros',
          '2 tazas Avena arrollada',
          '1 cda Semillas de Chía (hidratadas 10 min)',
          '1 cda Miel'
        ],
        instructions: [
          'Machacar los plátanos hasta hacer puré.',
          'Mezclar con avena, chía hidratada y miel.',
          'Formar bolitas con las manos.',
          'Refrigerar 2 horas antes de servir (no necesita horno).'
        ],
        conservation: 'Refrigerador: 5 días.'
      },
      {
        id: 'r12',
        title: 'Jerky de Res Casero (Carne Seca)',
        category: 'Premium',
        description: 'El premio de mayor valor para entrenamiento. Solo carne.',
        nutrition: { kcal: 25, protein: '90%', fat: '10%' },
        ingredients: [
          '500g Carne magra de res (sin grasa visible)'
        ],
        instructions: [
          'Congelar la carne 30 min para facilitar el corte.',
          'Cortar tiras muy finas (3mm) a favor de la fibra.',
          'Colocar en deshidratador a 70°C por 6-8 horas, o en horno al mínimo con la puerta entreabierta.',
          'Debe quedar seco y quebradizo, sin humedad.'
        ],
        conservation: 'Frasco hermético: 2 semanas fuera de nevera.'
      },
      {
        id: 'r13',
        title: 'Galletas "Digestión Feliz" (Jengibre)',
        category: 'Funcional',
        description: 'Ayuda con gases y mareos por movimiento.',
        nutrition: { kcal: 22 },
        ingredients: [
          '2 tazas Harina de arroz',
          '1 cda Jengibre fresco rallado (o 1 cdita en polvo)',
          '1 Huevo',
          '1/2 taza Puré de manzana sin azúcar'
        ],
        instructions: [
          'Mezclar todos los ingredientes hasta formar una masa homogénea.',
          'Extender con rodillo y usar cortadores.',
          'Hornear 25 min a 170°C.'
        ]
      },
      {
        id: 'r14',
        title: 'Helado de Yogur y Bacon (Falso)',
        category: 'Festiva',
        description: 'Postre refrescante y muy atractivo.',
        nutrition: { kcal: 60, protein: '8%', fat: '10%' },
        ingredients: [
          '1 taza Yogur griego natural (sin azúcar)',
          '1 tira de Tocino de pavo cocido y picado (bajo en sal)',
          '1/2 Plátano'
        ],
        instructions: [
          'Licuar yogur con plátano.',
          'Añadir los trocitos de tocino (el crujiente les encanta).',
          'Verter en moldes de helado o cubitera.',
          'Congelar por 4 horas.'
        ]
      },
      {
        id: 'r15',
        title: 'Sticks Dentales de Espirulina',
        category: 'Funcional',
        description: 'Ayuda a combatir el sarro y mal aliento.',
        nutrition: { kcal: 18 },
        ingredients: [
          '1 taza Harina de garbanzo',
          '1 cdita Espirulina en polvo (verde)',
          '1/2 taza Caldo de huesos (sin sal)',
          '1 cda Aceite de coco'
        ],
        instructions: [
          'Mezclar secos y húmedos.',
          'Formar cilindros largos (tipo grisines).',
          'Hornear 30 min a 160°C para que queden muy duros.',
          'La textura dura ayuda a limpiar los dientes mecánicamente.'
        ]
      },
      {
        id: 'r16',
        title: 'Gummies de Pata de Pollo',
        category: 'Funcional',
        description: 'Colágeno puro para perros ancianos.',
        nutrition: { kcal: 12, protein: '95%', fat: '5%' },
        ingredients: [
          '500g Patas de pollo (limpias)',
          'Agua suficiente para cubrir',
          '1 cda Vinagre de manzana'
        ],
        instructions: [
          'Hervir patas con vinagre y agua por 3-4 horas (o 45 min en olla presión).',
          'Colar el líquido (descartar huesos).',
          'Dejar enfriar el líquido en moldes. Se gelificará solo por el colágeno natural.',
          'Servir frío.'
        ]
      },
      {
        id: 'r17',
        title: 'Cupcakes de Hígado y Queso',
        category: 'Festiva',
        description: 'Un premio de alto valor para ocasiones especiales.',
        nutrition: { kcal: 85 },
        ingredients: [
          '250g Hígado de pollo',
          '100g Queso crema bajo en grasa',
          '1 Huevo',
          '1 taza Harina integral'
        ],
        instructions: [
          'Procesar hígado crudo con huevo.',
          'Mezclar con harina.',
          'Hornear en moldes de cupcake 20 min a 180°C.',
          'Decorar con un poco de queso crema frío encima.'
        ]
      },
      {
        id: 'r18',
        title: 'Galletas de Espinaca y Queso Parmesano',
        category: 'Base',
        description: 'Sabor umami intenso que aman los perros.',
        nutrition: { kcal: 30 },
        ingredients: [
          '1 taza Espinacas baby picadas finamente (o procesadas)',
          '2 cdas Queso Parmesano rallado (poco, por la sal)',
          '1.5 tazas Harina de avena',
          '1 Huevo'
        ],
        instructions: [
          'Mezclar espinaca, huevo y queso.',
          'Añadir harina hasta masa firme.',
          'Estirar y cortar.',
          'Hornear 20 min a 170°C.'
        ]
      },
      {
        id: 'r19',
        title: 'Chips de Calabacín (Zucchini)',
        category: 'Base',
        description: 'Bajo en calorías para perros con sobrepeso.',
        nutrition: { kcal: 5, protein: '1%', fat: '0%' },
        ingredients: [
          '2 Calabacines grandes'
        ],
        instructions: [
          'Cortar en rodajas finas.',
          'Colocar en deshidratador o horno a 80°C.',
          'Secar por 4-5 horas hasta que crujan.',
          'Excelente reemplazo de premios comerciales grasos.'
        ]
      },
      {
        id: 'r20',
        title: 'Mordedores de Zanahoria Congelada',
        category: 'Base',
        description: 'Ideal para cachorros con dolor de encías.',
        nutrition: { kcal: 15 },
        ingredients: [
          '3 Zanahorias enteras grandes',
          'Caldo de pollo sin sal'
        ],
        instructions: [
          'Pelar las zanahorias.',
          'Hervir 10 minutos (para ablandar ligeramente pero mantener firmeza).',
          'Sumergir en caldo de pollo.',
          'Congelar enteras.',
          'Ofrecer bajo supervisión.'
        ]
      },
      {
        id: 'r21',
        title: 'Albóndigas de Pavo y Arándanos',
        category: 'Premium',
        description: 'Suaves, ideales para esconder pastillas.',
        nutrition: { kcal: 45 },
        ingredients: [
          '250g Pavo molido',
          '1/4 taza Arándanos secos o frescos',
          '1/4 taza Pan rallado integral',
          '1 Huevo'
        ],
        instructions: [
          'Mezclar todo con las manos.',
          'Formar bolitas pequeñas.',
          'Hervir en agua o hornear 15 min a 180°C.',
          'Guardar en nevera.'
        ]
      },
      {
        id: 'r22',
        title: 'Pizza para Perros',
        category: 'Festiva',
        description: 'Diversión asegurada.',
        nutrition: { kcal: 110 },
        ingredients: [
          'Base: 1 taza Harina, 1/2 taza agua, 1 cda aceite.',
          'Salsa: Puré de tomate natural (sin cebolla/sin sal).',
          'Topping: Queso mozzarella rallado y trocitos de pollo.'
        ],
        instructions: [
          'Amasar la base y estirar en forma de pizza.',
          'Pre-hornear la masa 10 min.',
          'Añadir salsa y toppings.',
          'Gratinar 5-8 minutos más.'
        ]
      },
      {
        id: 'r23',
        title: 'Galletas de Mantequilla de Maní (Clásicas)',
        category: 'Base',
        description: 'El sabor favorito universal.',
        nutrition: { kcal: 35 },
        ingredients: [
          '1 taza Mantequilla de maní natural (Revisar etiqueta: SIN Xilitol)',
          '2 tazas Harina de trigo integral (o avena)',
          '1 Huevo',
          '1/3 taza Agua'
        ],
        instructions: [
          'Mezclar mantequilla y huevo.',
          'Alternar harina y agua.',
          'Amasar, estirar y cortar con forma de hueso.',
          'Hornear 20 min a 175°C.'
        ]
      },
      {
        id: 'r24',
        title: 'Cubos de Hielo de Sandía y Menta',
        category: 'Funcional',
        description: 'Hidratante y refrescante del aliento.',
        nutrition: { kcal: 8 },
        ingredients: [
          '2 tazas Sandía picada',
          '1 cda Menta fresca picada'
        ],
        instructions: [
          'Licuar la sandía (con sus semillas blancas es ok, evitar las negras duras).',
          'Añadir la menta.',
          'Congelar en cubitera.'
        ]
      },
      {
        id: 'r25',
        title: 'Training Treats de Corazón de Res',
        category: 'Premium',
        description: 'Rico en taurina, vital para el corazón.',
        nutrition: { kcal: 20 },
        ingredients: [
          '500g Corazón de res (limpio de grasa dura)',
          '1 pizca de orégano'
        ],
        instructions: [
          'Hervir el corazón 20 min.',
          'Cortar en cubitos muy pequeños (0.5cm).',
          'Secar en horno a 100°C por 30-40 min para endurecerlos un poco y que no manchen el bolsillo.',
          'Guardar en nevera.'
        ]
      }
    ]
  },
  {
    id: 'mod5',
    title: 'Módulo 5: Nutrición Funcional',
    subtitle: 'Alimentos que Curan (Nutracéuticos)',
    sections: [
      {
        title: 'Concepto de Nutracéutico',
        content: 'No es medicina, pero es más que comida. Usamos ingredientes específicos para apoyar fisiológicamente al organismo. La diferencia entre un remedio y un veneno es la dosis, así que respeta las cantidades.',
        type: 'text'
      },
      {
        title: 'Receta Maestra: Caldo de Huesos (Bone Broth)',
        content: 'El "Oro Líquido". Rico en colágeno, glucosamina y condroitina. \n\nIngredientes: Patas de pollo, rodilla de res, vinagre de manzana, agua. \n\nInstrucción: Cocinar en olla lenta por 12-24 horas con un chorrito de vinagre (ayuda a extraer minerales del hueso). Al enfriar debe quedar gelatinoso. Dar 1 cda por día.',
        type: 'tip'
      },
      {
        title: 'Protocolos para Dolencias Comunes',
        content: 'Aquí tienes estrategias nutricionales para apoyar tratamientos veterinarios:',
        type: 'text'
      },
      {
        title: '1. Protocolo Articular (Artritis/Displasia)',
        list: [
          'Mejillón de Labio Verde: Rico en Glicosaminoglicanos naturales.',
          'Cúrcuma + Pimienta (Golden Paste): Potente antiinflamatorio natural.',
          'Aceite de Pescado (EPA/DHA): Reduce la inflamación sistémica.',
          'Evitar: Cereales pro-inflamatorios (trigo, maíz) y solanáceas (papas, berenjenas).'
        ],
        type: 'scientific'
      },
      {
        title: '2. Protocolo Piel Atópica (Alergias)',
        list: [
          'Kefir de Cabra/Vaca: Probióticos para sanar el intestino (leaky gut).',
          'Aceite de Coco (MCTs): Antifúngico natural contra la levadura (malassezia).',
          'Ortiga (Nettle): Antihistamínico natural suave.',
          'Quercetina: El "Benadryl de la naturaleza" (presente en piel de manzana).'
        ],
        type: 'scientific'
      },
      {
        title: '3. Protocolo Ansiedad',
        list: [
          'Triptófano: Precursor de la serotonina (presente en Pavo y Banano).',
          'Manzanilla: Infusión suave mezclada con la comida.',
          'Masticación: El acto de masticar libera endorfinas (ver receta Jerky).',
          'CBD (Aceite de Cáñamo): Consultar legislación local y dosis veterinaria.'
        ],
        type: 'scientific'
      },
      {
        title: 'Ingredientes Estrella',
        type: 'list',
        list: [
          'Cúrcuma + Pimienta: Potente antiinflamatorio (artritis).',
          'Jengibre: Antiemético (mareos en coche) y digestivo.',
          'Kefir / Yogur: Probióticos naturales.',
          'Espirulina: Refuerzo inmunológico (usar pizcas).',
          'Aceite de Salmón: Omega 3 concentrado (EPA/DHA).'
        ]
      }
    ],
    recipes: [
      {
        id: 'f1',
        title: 'Golden Paste "Boost Inmunológico"',
        category: 'Funcional',
        description: 'Pasta base para añadir a cualquier comida.',
        nutrition: { kcal: 45 },
        ingredients: [
          '60g Cúrcuma en polvo',
          '250ml Agua',
          '70ml Aceite de Coco',
          '2 cditas Pimienta Negra recién molida'
        ],
        instructions: [
          'Cocer agua y cúrcuma a fuego lento 7-10 min hasta formar pasta espesa.',
          'Retirar del fuego.',
          'Añadir aceite y pimienta (la piperina aumenta absorción de curcumina un 2000%).',
          'Guardar en frasco de vidrio en nevera (dura 2 semanas).'
        ]
      },
      {
        id: 'f2',
        title: 'Galletas "Aliento Fresco"',
        category: 'Funcional',
        description: 'Combate bacterias orales.',
        nutrition: { kcal: 18 },
        ingredients: [
          '1 taza Harina de Avena',
          '1 Huevo',
          '1/2 taza Perejil fresco picado',
          '1/4 taza Hojas de menta fresca',
          '1 cda Aceite de Coco'
        ],
        instructions: [
          'Procesar las hierbas con el huevo y aceite.',
          'Unir con harina.',
          'Hornear 20 min a 170°C.'
        ]
      },
      {
        id: 'f3',
        title: 'Premios "Piel de Acero"',
        category: 'Funcional',
        description: 'Alto en Zinc y Omega 3.',
        nutrition: { kcal: 35 },
        ingredients: [
          '1 lata Sardinas en aceite de oliva',
          '1/2 taza Semillas de linaza molidas',
          '1 taza Harina de garbanzo'
        ],
        instructions: [
          'Triturar sardinas con todo y aceite.',
          'Mezclar con secos.',
          'Hornear hasta que estén bien secas y crocantes.'
        ]
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Módulo 6: Conservación Pro',
    subtitle: 'Ciencia de los Alimentos y Envasado',
    sections: [
      {
        title: 'La Ciencia de la Actividad de Agua (Aw)',
        content: 'No importa cuán limpio cocines, si hay agua disponible, habrá vida. La Actividad de Agua (Aw) es la cantidad de agua "libre" para que las bacterias la usen.\n\n- Carne fresca: 0.99 Aw (Se pudre rápido)\n- Bacterias peligrosas crecen sobre: 0.90 Aw\n- Moho crece sobre: 0.60 Aw\n\nTU OBJETIVO: Al hornear o deshidratar, buscamos reducir la Aw por debajo de 0.6 para que el producto sea estable a temperatura ambiente sin conservantes fuertes.',
        type: 'scientific'
      },
      {
        title: 'Tecnología de Empaques y Barreras',
        type: 'table',
        table: {
            headers: ['Material', 'Barrera Oxígeno', 'Barrera Humedad', 'Uso Recomendado'],
            rows: [
                ['Polietileno (Bolsa Ziploc)', 'Baja', 'Media', 'Congelación (Corto plazo)'],
                ['Celofán / Polipropileno', 'Media', 'Alta', 'Galletas secas (Venta rápida)'],
                ['Bolsas de Vacío (Nylon/PE)', 'Alta', 'Alta', 'Carnes y Húmedos (Refrigerados)'],
                ['Doypack con Aluminio', 'Muy Alta', 'Muy Alta', 'Productos Premium Larga Duración']
            ]
        }
      },
      {
        title: 'Conservantes Naturales (Antioxidantes)',
        content: 'Evitamos químicos como BHA/BHT. Usamos:\n1. Tocoferoles Mixtos (Vit E): Retrasa la oxidación de grasas.\n2. Extracto de Romero: Potente antioxidante (evitar en perros con epilepsia).\n3. Ácido Ascórbico (Vit C): Baja el pH creando un ambiente hostil para bacterias.',
        type: 'text'
      },
      {
        title: 'Normativa de Etiquetado Profesional',
        list: [
            'Nombre del Producto: Debe ser claro (ej. "Snacks de Hígado").',
            'Peso Neto: En gramos/kg.',
            'Análisis Garantizado (Obligatorio): % Proteína Mín, % Grasa Mín, % Fibra Máx, % Humedad Máx.',
            'Lista de Ingredientes: Ordenados de MAYOR a MENOR peso antes de cocinar.',
            'Datos del Fabricante: Tu contacto y fecha de vencimiento/lote.'
        ],
        type: 'warning'
      }
    ],
    downloads: [
      { name: 'Calculadora_Costos_Receta.xls', type: 'template' },
      { name: 'Logos_Etiquetas_Editables.pdf', type: 'template' },
      { name: 'Guia_Vida_Util_Por_Producto.pdf', type: 'pdf' }
    ]
  },
  {
    id: 'mod7',
    title: 'Módulo 7: Negocio & Plan',
    subtitle: 'Emprendimiento y Nutrición Avanzada',
    sections: [
      {
        title: 'Planificación Nutricional: Cálculo de Calorías (RER)',
        content: 'Como profesional, no adivinas porciones, las calculas. Usamos la fórmula de Requerimiento Energético en Reposo (RER):\n\nRER = 70 × (Peso Corporal en kg) ^ 0.75\n\nLuego multiplicamos por el factor de actividad (MER):\n- Castrado: RER x 1.6\n- Intacto: RER x 1.8\n- Trabajo/Deporte: RER x 2 a 5\n- Pérdida de peso: RER x 1.0',
        type: 'scientific'
      },
      {
        title: 'Estrategias de Marketing "Human Grade"',
        content: 'La tendencia actual es la "Humanización". El cliente quiere ver que el premio de su perro es tan bueno que él mismo podría comerlo. \n\nTip de Foto: Usa luz natural. Muestra la textura. Si la galleta tiene trozos de arándano, pon arándanos frescos al lado en la foto para reforzar el ingrediente real.',
        type: 'tip'
      },
      {
        title: 'Canales de Venta y Alianzas',
        list: [
            'B2C (Venta Directa): Instagram/TikTok. Margen más alto (100%), pero requiere mucho tiempo de atención al cliente.',
            'B2B (Alianzas): Deja tus productos en peluquerías caninas o guarderías. Margen menor (50-60%), pero volumen constante.',
            'Cajas de Suscripción: Modelo de ingresos recurrentes. Envía una caja temática mensual a tus suscriptores.',
            'Mercados de Agricultores: Excelente para testear productos nuevos cara a cara.'
        ],
        type: 'list'
      },
      {
        title: 'Análisis de Costos Real (Breakdown)',
        content: 'Muchos olvidan el "Costo Oculto". \n\nPrecio Venta = (Materia Prima + Empaque + Mano de Obra (Tu tiempo por hora) + Energía/Gas + Margen de ganancia).\n\nSi solo cobras los ingredientes, estás pagando por trabajar.',
        type: 'warning'
      }
    ],
    downloads: [
      { name: 'Hoja_Calculo_RER_Calorias.xls', type: 'template' },
      { name: 'Plan_Transicion_7dias.pdf', type: 'pdf' },
      { name: 'Contrato_Consignacion_Tiendas.doc', type: 'template' },
      { name: 'Certificado_Finalizacion_Curso.pdf', type: 'pdf' }
    ]
  }
];