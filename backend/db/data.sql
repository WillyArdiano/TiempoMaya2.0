INSERT INTO `tiempomaya`.`Tipo_Elemento`
(`id_tipo_elemento`,
`descripcion`)
VALUES
(
"Kin",
"La escritura maya era un sistema logosilábico cuyo significado es discutido. Los símbolos individuales ('glifos') podían representar bien una palabra (normalmente un morfema) o una sílaba; a decir verdad, el mismo glifo con frecuencia podía usarse de las dos formas."
),
(
"Uinal",
"
El uinal se puede ver como el equivalente a nuestros meses ya que constan de 20 días, pero en lugar de 12 de ellos, el calendario Haab Maya cuenta con 18 de ellos. Los uinales, a parte de contar el tiempo se utilizaban para realizar ciertas actividades."
),
(
"Nahual",
"
Nahual, también llamado nagual o nawal​ (en náhuatl: nahualli ‘oculto, escondido, disfraz’), dentro de las creencias mesoamericanas, es una especie de brujo o ser sobrenatural que tiene la capacidad de tomar forma animal. El término refiere tanto a la persona que tiene esa capacidad como al animal mismo que hace las veces de su alter ego o animal tutelar.

De acuerdo con la tradición y cosmovisión de los pueblos Mesoamericanos los Nahuales son espíritus y energías protectoras que acompañan a todos los elementos de la naturaleza, incluyendo a los humanos y animales a lo largo de toda su existencia.

Para la civilización Maya el nahual de cada persona era de suma importancia. Era algo que todos debían conocer y aprender a manejarlo. Debían saber cuándo se fue engendrado, la fecha de nacimiento, el año, la energía que le protege y su misión.

Dentro de la cultura maya se dice que cada uno está relacionado con un animal que es quién le dirige, como un ángel guardián, alguien con quien se identifica, con quien se encuentra conectado espiritualmente. Se dice también que cada persona incluso nace con el espíritu de un animal, y este se encarga de protegerlo y guiarlo."
),
(
"Energia",
"El calendario Cholq'ij utiliza las energías del 1 al 13 pero su ciclo es de meses y días.

La relación del 13 con los ciclos de la vida es múltiple, entre ellas se pueden mencionar:

Las 13 energías en el nacimiento
Los 13 ciclos de 20 días de un año Cholq’ij.
El 13 es una cantidad importante en el pensamiento maya. Se utiliza para indicar el nivel de energía y al combinar con el significado de los nawales construye la personalidad. Este número tiene influencia en toda la vida, marca la niñez, juventud, madurez y ancianidad."
)
;


INSERT INTO `tiempomaya`.`Elemento`
(`tipo_elemento`,
`nombre`,
`descripcion`,
`significado`)
VALUES
(
"Kin",
"Imix'",
"Es el guardián fiero de la vida, de las ideas y proyectos que pone en marcha. Es el gestor, el productor, el iniciador. Goza de una gran sensibilidad existencial y una creatividad única. Si no está en armonía consigo mismo puede tener muchas ideas pero no realizar ninguna por no saber por dónde empezar o también dedicarse a tantos proyectos al mismo tiempo que no logra entregarse por entero a ninguno. Dejar lo que empiece sin terminar lo retrasa energéticamente. Espiritualmente representa la memoria ancestral y si está despierto logra integrarla en todo lo que hace.",
"Dragon"
),
(
"Kin",
"Ik'",
"Es la comunicación, el aliento divino, la flexibilidad y el cambio. Tiene el don de la palabra, así que deberá usarla estratégicamente y con bondad. Necesita de novedades todo el tiempo, suele ser sumamente social aunque en sombra puede guardar mucho de sí mismo aún rodeado de gente y hablando sin decir nada. A nivel espiritual puede canalizar mensajes del más allá. Necesita focalizarse y decir todo lo que siente en lo más profundo de sí, sabiendo también cuándo guardar silencio.",
"Viento"
),
(
"Kin",
"Ak'bal'",
"Es el sol de la oscuridad. Representa nuestro inconsciente, el mundo onírico y la capacidad de realizar nuestros sueños. Tiene el potencial de recibir mensajes en sueños, solo hay que hacerles caso. Necesita descansar mucho y estar solo por periodos. Es importante saber salir también y relacionarse con el mundo, con la espontaneidad que la caracteriza. Suelen ser histriónicos, sumamente intuitivos y más bien estancar su abundancia si no creen en sí mismos. Es importante estar atento a las posibles locuras, impulsividades, deseos sin resolver, y a un ego desmedido, para poder equilibrarse.",
"Noche"
),
(
"Kin",
"K'an",
"Es la capacidad de inyectarle vida a todo lo que nos propongamos para que florezca, para que tenga resultados, para que se materialice y sea exitoso. En primer lugar la Semilla debe sentir, identificar sus pasiones, aquello que ama hacer, para que pueda dedicarse a eso y no desbalancearse entregando toda su infinita energía en proyectos ajenos o en aquellos a los que se ha acostumbrado por presión social o solo porque funcionan. También es la danza, el gozo, el placer, la curiosidad y el saber atinar, saber esperar al momento correcto para actuar",
"La Semilla"
),
(
"Kin",
"Chikchan",
"Es la fuerza vital, la astucia para vivir en el mundo material, así como la sabiduría para entender que no hay espiritualidad sin equilibrio físico. La Serpiente se dedica a reunir los recursos necesarios para tener una buena vida, en sombra ese será su único objetivo, en luz, sabrá que ese es solo el medio para poder evolucionar a este plano. Suele ser dominante, territorial y austera, pero también muy culta y noble.",
"La Serpiente"
),
(
"Kin",
"Kimi",
"Es el puente entre diferentes dimensiones. En este plano domina la capacidad de ser como un relacionista público, de crear contactos, de saber cómo relacionarse con los demás para generar redes y oportunidades. En el plano espiritual es el mensajero de los espíritus y, aunque lo suela bloquear por miedo, puede recibir información para sí mismo o para ser transmitida a los demás como forma de ayuda. Su misión es entender la muerte como parte de la vida, profundizar en su conocimiento espiritual sobre la misma para saber dejar ir cuando corresponda.",
"El enlazador de mundos"
),
(
"Kin",
"Manik'",
"Representa el servicio, la sanación y la realización. Es el poder de llevar a cabo todo lo que uno se proponga. En sombra, la Mano hace por hacer, es adicto al trabajo, pero no se arriesga a dedicarse a lo que más sueña. En luz, todo lo que haga además estará conectado con su capacidad de ayudar y de sanar. Debe tener mucho cuidado con control y aprender a poner límites sanos entre lo que le da a los demás y a sí mismo.",
"La mano"
),
(
"Kin",
"Lamat",
"Representa el arte, la belleza, la elegancia, la armonía, la creatividad, pero también el pensamiento abstracto, el mundo de las ideas y la producción intelectual. Las personas Estrella gozan hasta de un garbo natural, y si bien su misión es desarrollar su gran creatividad pueden perderse fácilmente en el plano racional. En sombra buscan el perfeccionismo, dañando su sistema nervioso. En luz pueden llegar a ser grandes y virtuosos artistas. Es importante que dejen la terquedad de lado, la necesidad de relativizarlo todo y de querer encontrar la verdad en la mente conceptual.",
"La estrella"
),
(
"Kin",
"Muluk",
"Es el mundo de las emociones. La Luna lo siente todo, su sensibilidad es vasta y todo le impacta profundamente. De hecho es capaz de saber cómo se siente cada persona a su alrededor, tendiendo a querer acobijar a todo el que sufra. Esto puede traerle muchos problemas ya que se cargará de cosas que no le corresponden. En este sentido goza de una poderosa intuición y de una gran imaginación. Representa la energía de lo femenino, el poder de las aguas y la maestría en relación a los elementos de la naturaleza. Necesita trascender el drama ahí donde lo ve, purificarse de todo lo que sienta y dejarse fluir.",
"La luna"
),
(
"Kin",
"Ok",
"Es la energía del amor incondicional. El Perro representa la fidelidad, la lealtad y el compañerismo, es el guardián de sus seres queridos. En sombra tiene problemas de autoestima, dando siempre demás a quienes no le corresponden y exigiendo en consecuencia. En luz es capaz del máximo altruismo, sabiéndose amar a sí mismo primero, poniendo límites sanos a todo lo que no le haga bien en sus relaciones afectivas y amando sin aprehensión. Tenderá a dedicarse de alguna u otra manera a proyectos sociales, a hacer el bien por la humanidad. En este sentido tendría que tener cuidado con inconscientemente actuar como el salvador de los demás.",
"El perro"
),
(
"Kin",
"Chuwen",
"Es el niño interior que con su sabiduría ilumina la vida de los demás. En luz es el sentido del humor, lo lúdico, la irreverencia que cuestiona todo como jugando. En sombra suele tender a tomarse todo demasiado en serio y actuar como el abogado defensor de las causas justas. No se permite relajarse y guarda situaciones de la infancia por resolver. Su misión será mostrarle al mundo que nada es tan sólido como parece y que a veces es necesario confrontarnos desde la risa para lograr soltar el ego.",
"El mono"
),
(
"Kin",
"Eb'",
"Representa el más alto estándar de integridad. Es el sabio que defiende las causas justas, habitualmente sacrificándose en el proceso. En luz está en conexión profunda con su libertad y sabrá equilibrar su gran necesidad de generar armonía alrededor suyo con el camino que quiera elegir. En sombra, se pospondrá por el resto o caerá en la indecisión aguda de no saber qué decisiones tomar, por tener un concepto rígido del deber ser.",
"El humano"
),
(
"Kin",
"B'en",
"Es el explorador, el buscador del sentido último de la existencia. Su principal motivación es conocer, conocerlo todo, sobre todo otras culturas, otros territorios, otros saberes, otras idiosincrasias. En luz, sabrá dejarse guiar por su intuición y todo lo que conozca logrará transformarlo, para luego compartirlo con el mundo. En sombra, el escepticismo le jugará malas pasadas, y solo buscará que conocer hacia fuera, sin tener el coraje de viajar dentro suyo ni de encontrar un camino espiritual.",
"El caminante del cielo"
),
(
"Kin",
"Ix",
"Es el que con su encanto natural logra transformarlo todo. Artista, performer, alquimista, sanador, brujo, ingeniero, consejero, orador. En luz, podrá cumplir con su misión de ser fuente de inspiración para los seres humanos, en sombra la soberbia lo llevará a preocuparse solo por la valoración externa, por los aplausos.",
"El mago"
),
(
"Kin",
"Men",
"Representa la visión panorámica, la agudeza analítica y la creatividad de vanguardia. Es visionaria y muy profunda, sintiéndose siempre responsable del bienestar ajeno. En luz logrará creer en sí misma para emprender el vuelo y evolucionar, en sombra se quedará procastinando distrayéndose con todo lo que su mente es capaz de vislumbrar, y poniendo el bien común adelante de sus prioridades como pretexto.",
"El aguila"
),
(
"Kin",
"Kib'",
"Es el samurai, el que con disciplina y entrega se entrena para ir a la batalla a ganar. Pero la batalla no es el conflicto, es la posibilidad de transformar la realidad, aquello que es injusto, de manera estratégica, intrépida, frontal y sobre todo humilde. Un Guerrero en sombra lo cuestiona todo solo por ego, incluso a sí mismo, autoboicoteándose. En luz es el maestro espiritual, perfil bajo, que ilumina con sus acciones.",
"El guerrero"
),
(
"Kin",
"Kab'an",
"Representa la estabilidad suprema. Es la dadora de base, de estructura, tanto en el plano físico como en el emocional, psíquico o espiritual. Suelen ser personas bastante fuertes que logran impulsar, con su gran empuje, a que se genere aquello que hace falta para salir adelante. En sombra caen en la sobre interpretación, en ser retadoras, creando argumentos solo para validar aquello con lo que se han entercado. En luz, saben que la verdadera estabilidad es fluir con lo que la realidad les propone, sin presionar, sin recurrir a la fuerza.",
"La tierra"
),
(
"Kin",
"Etz'anab'",
"Es el equilibrio perfecto, la ecuanimidad, la paz interior que brota gracias a una verdadera aceptación de todo tal y como es. En luz el Espejo fluye con todo sin filtros ni reparos, generando una gran armonía entre quienes lo rodean. Es uno de los sellos que se suele llevar mejor con la gente. En sombra sin embargo tiende al juicio extremo, no encuentra orden nada, menos en sí mismo, y termina en crisis por criticarlo todo. No es capaz de verse y suele proyectar sus defectos en los demás. En el calendario maya tradicional se le asocia al cuchillo de obsidiana, cualidad espiritual para cortar de raíz con todo lo que no nos sirve en nuestra vida",
"El espejo"
),
(
"Kin",
"Kawak",
"Es la fuerza transformadora de la realidad. Cuando aparece la tormenta es momento de cambios radicales, no hay de otra. En general es una energía poderosa de creación, suele pasar perfil bajo pero cuando llega el momento se manifiesta con una gran fiereza. En sombra se estacan y no se permiten cambiar, o al revés, generan cierta adicción a los movimientos fuertes permanentes. Pueden también quedarse en la extrema introspección, son muy sensibles, y no mostrarse. En luz logran generar situaciones límites para dejar ir aquello que ya le tocaba irse y poder volver a empezar en un nuevo nivel de evolución.",
"La tormenta"
),
(
"Kin",
"Ajaw",
"Es la energía de mayor evolución. Representa la luz generadora de vida, la sabiduría, la verdad, las cosas tal y como son. Cuando aparece el Sol es momento de brillar, de confiar en quienes ya somos y en lo que ya sabemos de manera intrínseca, y asumir los roles de autoridad, de liderazgo que nos correspondan. Es momento de afrontar la realidad como se presente, así nos cueste. El problema con el Sol es que al ser la verdad puede tornarse intransigente, radical con la ética, con los paradigmas, con lo que considera correcto o cierto, así, debe trabajar por sobre todas las cosas la humildad. La verdadera sabiduría no se anda mostrando, defendiendo o convenciendo, es un estado del alma, de conexión permanente con nuestro ser auténtico.",
"El sol"
),
(
"Uinal",
"Wayeb'",
"Cuando llegaban los cinco días sin nombre conocidos como uayeb, los mayas no se bañaban, no hacían obras serviles o de trabajo, porque temían que al realizar alguna actividad, les iría mal.",
"Dias desafortunados, reflexion, gracia y penitencia"
),
(
"Uinal",
"Pop",
"Este mes era una especie de año nuevo, era una fiesta muy celebrada, renovaban todas las cosas de utensilios de casa, como platos, vasos, banquillos, ropa, mantillas, barrían su casa y la asura la echaban fuera del pueblo, pero antes de la fiesta al menos 13 días ayunaban y se abstenían de tener sexo, no comían sal, ni chile, algunas personas ampliaban este período de abstinencia hasta tres uinales. Después todos los hombres se reunían con el sacerdote en el patio del templo y ponían una porción de copal en el brasero para quemarlo.",
"Mat (símbolo de comunidad y matrimonio), petate"
),
(
"Uinal",
"Woo",
"En este mes se realizaban festividades para sacerdotes, adivinadores, la ceremonia era llamada pocam, y oraban quemando copal a Kinich Ahau Itzamná, a quien consideraban el primer sacerdote. Con «agua virgen traída del monte, donde no llegase mujer» untaban las tablas de los libros y el sacerdote realizaba los pronósticos del año, realizaban un baile llamado okotuil.",
"Rana, sapo, negro"
),
(
"Uinal",
"Zip",
"En este mes se juntaban los sacerdotes con sus mujeres, y usaban idolillos de la diosa Ixchel, y la fiesta se llamaba Ibcil Ixchel, invocaban a los dioses de la medicina que eran Itzamná, Citbolontun y Ahau Chamahez, realizaban un baile llamado Chantunyab. El día siete del uinal zip día invocaban a los dioses de la caza Ah Cancum, Zuhuyzib Zipitabai, y otros, cada cazador sacaba una flecha y una cabeza de venado las cuales eran untadas de betún azul, y bailaban con las flechas en las manos, se horadaban las orejas, otros la lengua y pasaban por los agujeros siete hojas de una hierba llamada Ac. Al día siguiente era el turno de los pescadores, pero ellos untaban de betún azul sus aparejos de pesca y no se horadaban las orejas, sino que se ponían arpones, y bailaban el Chohom, y después de realizada la ceremonia iban a la costa a pescar, los dioses eran Abkaknexoi, Abpua, y Ahcitzamalcun.",
"Rojo, conjuncion"
),
(
"Uinal",
"Sotz'",
"En este mes los apicultores comenzaban los preparativos pero celebraban su fiesta en el uinal siguiente tsek, los sacerdotes y oficiales ayunaban, así como algunos voluntarios.",
"Bat (murcielago)"
),
(
"Uinal",
"Tzek",
"En este mes no derramaban sangre, los dioses venerados eran los cuatro bacabs, especialmente Hobnil. Ofrecían a los bacabs platos con figuras de miel, y los mayas bebían un vino llamado balche, el cual se procesaba de la corteza del árbol de ese nombre (Lonchucarpus violaceus), los apicultores regalaban miel en abundancia.",
"Fin, palma, calavera"
),
(
"Uinal",
"Xul",
"Este mes era dedicado a Kukulcán, los mayas iban por el jefe supremo de los guerreros llamado Nacom, al cual sentaban en el templo quemando copal, realizaban un baile de guerreros llamado Holkanakot, sacrificando un perro y quebrando ollas llenas de bebida para terminar su fiesta, y regresar con honores al Nacom a su casa. Esta ceremonia se celebraba en todos lados hasta la destrucción de Mayapán, después solo se celebraba en Maní en la jurisdicción de los Tutul xiúes, todos los señores se juntaban presentaban cinco banderas de pluma, y se iban al templo de Kukulcán, donde oraban durante cinco días, después de los cuales bajaba Kukulcán del cielo y recibía las ofrendas, la fiesta se llamaba Chikabán.",
"Perro, instrumento musical"
),
(
"Uinal",
"Yaxk'in",
"En este mes se realizaba la ceremonia se llamaba Olob-Zab-Kamyax, se untaban todos los instrumentos de todos los oficios con betún azul, se juntaban los niños y las niñas del pueblo y les daban unos golpecillos en los nudillos, con la idea que los niños fueran expertos en los oficios de sus padres. Desde este uinal comenzaban a aparejarse para la ceremonia del uinal Mol.",
"Primer Sol (o verde), inicio agricola, nuevo dia"
),
(
"Uinal",
"Mol",
"En este mes los apicultores oraban a los dioses para que hubiese buenas flores y de esta manera tener una buena producción de las abejas,.en este mes era cuando fabricaban las efigies o ídolos de madera, los cuales eran de alguna forma bendecidos por los sacerdotes. Se practicaba un ritual en el cual se sangraban las orejas.",
"Inicio de lluvia, agua, jade"
),
(
"Uinal",
"Ch'en",
"En este mes hacían una fiesta llamaba ocná, que quiere decir «renovación del templo», la hacían en honor de los dioses de los maizales; los mayas acostumbraban tener ídolos de los dioses con pequeños braseros en donde quemaban copal, en esta fiesta cada año se renovaban los ídolos de barro y sus braseros.",
"Lluvia, negro, acido"
),
(
"Uinal",
"Yax",
"En este mes hacían una fiesta llamaba ocná, que quiere decir «renovación del templo», la hacían en honor de los dioses de los maizales; los mayas acostumbraban tener ídolos de los dioses con pequeños braseros en donde quemaban copal, en esta fiesta cada año se renovaban los ídolos de barro y sus braseros.",
"Verde, humedad"
),
(
"Uinal",
"Sak",
"En este mes el sacerdote y los cazadores hacían una ceremonia para aplacar a los dioses de la ira, y como una forma de penitencia por la sangre derramada durante la cazas (los mayas tenían como «cosa horrenda» cualquier derramamiento de sangre si dicho derramamiento no era en sus sacrificios), por eso cuando iban a la caza invocaban al dios de la caza, le quemaban copal y si podían le untaban al rostro del ídolo de la caza, la sangre del corazón de la presa.",
"Blanco, lluvia"
),
(
"Uinal",
"Keh",
"En las proximidades de este mes existía una fiesta muy grande y de fecha movible que duraba tres días, con quema de copal, a la cual Landa llamaba «sahumerías», ofrendas y borrachera. Los sacerdotes tenían cuidado de avisar con tiempo para realizar un ayuno previo",
"Rojo, venado"
),
(
"Uinal",
"Mak",
"En este mes la gente anciana realizaba una ceremonia llamada «tupp kak» (matar el fuego), era dirigida a los dioses de los panes y a Itzamná, en una fogata quemaban corazones de aves y animales, una vez incinerados los corazones apagaban el fuego con cántaros de agua. Se juntaba el pueblo y los sacerdotes y untaban con lodo y betún azul los primeros escalones de las escaleras de sus templos. En esta fiesta no realizaban ayuno, a excepción del sacerdote",
"Red, cautiverio, pecado"
),
(
"Uinal",
"K'ank'in",
"Hasta la fecha se desconocen los dioses que se honraban en este periodo del año maya",
"Sol amarillo"
),
(
"Uinal",
"Muwan",
"Este mes correspondía a los cultivadores de cacao realizar una ceremonia a los dioses Chac Ek chuah, y Hobnil, sacrificaban un perro manchado con el color de cacao, y quemaban incienso y ofrecían iguanas de las azules (probablemente untadas de betún azul) y ciertas plumas de pájaros, terminada la ceremonia los mayas se comían las ofrendas.",
"Halcon, buho"
),
(
"Uinal",
"Pax",
"En este mes la ceremonia se llamaba pacum chac, y por un período de cinco noches se juntaban los señores (batab) y los sacerdotes (ah kin) de los pueblos menores (batabil), en las capitales y veneraban a Cit chac cob. Se homenajeaba con copal al jefe de los guerreros (nacom) durante cinco días, realizaban un baile de los guerreros llamado HOLKANAKOT. El sentido de esta ceremonia era para pedir a sus dioses alcanzar la victoria frente a sus enemigos. Se sacrificaba un perro, al cual se le extraía el corazón, se rompían ollas grandes que contenían bebida, y daban por finalizada la ceremonia, regresando a sus pueblos.",
"Tiempo de siembra, tambor, musica"
),
(
"Uinal",
"K'ayab'",
"Durante los meses kayab y Kumku en cada población hacían fiestas a las cuales llamaban zabacilthan, se reunían para presentar ofrendas, comer y beber preparándose para el uayeb, el mes corto de los cinco días nefastos.",
"Tortuga, guacamaya"
),
(
"Uinal",
"K'umk'u'",
"Durante los meses kayab y Kumku en cada población hacían fiestas a las cuales llamaban zabacilthan, se reunían para presentar ofrendas, comer y beber preparándose para el uayeb, el mes corto de los cinco días nefastos.",
"Maiz maduro, granero, oscuridad"
),
(
"Nahual",
"Tzikin",
"Características: Significa pájaro. Es el símbolo de la suerte, la fortuna y los bienes materiales. También es símbolo de libertad y es el nawal de las aves.

Simboliza el pájaro sagrado Q’uq’umatz. Este día es propicio para pedir por la abundancia de los bienes como el dinero. Se quema el ajonjolí y el chocolate como ofrendas a Ajaw. Se encienden candelas de colmena pura y se le pide a Ajaw un buen negocio. Tz’ikin significa pájaro y simboliza la intermediación entre los seres humanos y Ajaw, representado por todo lo que hay en el espacio: el aire, las nubes, el frío y el calor. Son fuerzas invisibles, pero que El Corazón del Cielo y El Corazón de la Tierra las ha puesto a nuestro servicio y protección.

También es un día de desarrollo espiritual y, por tanto, de la plena realización humana. Es el día para agradecer los bienes materiales principalmente lo relacionado a dinero. Sin embargo, al no agradecer estos favores también puede traer la miseria.

Función Espiritual:

Agradecimiento por los bienes materiales, principalmente lo del dinero.
Propicia buena suerte en el negocio.
Día de invocación porque las aves no molesten los sembradíos.
Día para la protección del negocio.
Día para realizar invocaciones para que las siembras estén protegidas de los animales.
Su origen: Kej destino: Aq'ab'al

Fortalezas:

Es bueno para el negocio.
Es mensajero, paciente y amable.
De buen temperamento.
Tiene habilidad para el análisis y es buen observador.
Desarrolla mejor su inteligencia.
Puede tener dotes para la predicción de las cosas.
Puede ser afortunado en lo material.
Puede tener bien desarrollado la parte espiritual.
Debilidades:

Envidia
Infidelidad
Avaricia
Tacañería
En algún vicio",
"Pajaro"
),
(
"Nahual",
"Ajmaq",
"Características: Esta palabra significa pecador en K’iche’. Es el día de los pecadores. Este día se dedica a pedir perdón por los pecados y por los pecadores. Es el día dedicado a los difuntos. El pecado es una columna de humo que nos oculta delante de la presencia de Dios. Nuestros antepasados dijeron: “que el pecado es la ofensa que se hace directamente a Dios. No creer, no servir, no alabar al Corazón del Cielo, al corazón de la Tierra. Mak es ofensa a Dios y Wuqub’ qak’ix es ofensa al prójimo”

Es el día de los que no podemos ver, el día de los difuntos. El día de la fortaleza que nos da la historia de nuestro pasado. También es el día del castigo cuando no estamos actuando en concordancia con las enseñanzas que ellos nos legaron. Es el día del enojo de los difuntos. (BEA)

“Ajmaq no es un mal día. Es un día para pedir perdón por los pecados. Son los días en los cuales se reza por protección, ya que de estos días puede venirle a uno, daño por sus pecados o sus malos pensamientos.

es la muerte en casa, la muerte natural por enfermedad, la muerte tranquila. En ese día se habla con los difuntos, es para pedir perdón en el caso de los pecadores.

Significa:

Purificar el espíritu de los muertos y vivos.
Día para conmemorar los difuntos.
Perdón para nuestros pecados.
Significado Clave: Autoridad y Estatus.

Fortalezas:

Posee sabiduría, inteligencia
Buena memoria
Muy valiente
Se les facilita el diálogo
Prudente, discreto
Buenos maestros y consejeros
Muy sociable
Es profundo
Es serio
Realista
Predicador
Comunicativo
Debilidades:

Pecador
Enamorado
Alcohólico
Destructores de la herencia
Mentirosos
Afamados
Resentido
Ladrón
Adúltero
Fríos e insensibles
Minimizan los sentimientos de los demás
Interesados en la autoridad y posición social y política
",
"Búho, falta o culpa"
),
(
"Nahual",
"No'j",
"Características: Es la sabiduría y el conocimiento. Es el nawal de la inteligencia. Es el buen consejo, según los abuelos y abuelas. Es la sabiduría que viene del Formador y Creador. También es uno de los Cargadores del Tiempo. Día propicio para agradecer el conocimiento y pedir buenos pensamientos.

El que nace bajo la influencia del No’j será inteligente, activo y tendrá buenos pensamientos, siempre y cuando sepa manejar las energías del día. Significa también idea y sabiduría. Según los mayas ningún hombre es sabio. Por eso, el hombre, para recibir ideas y consejos, debe consultar al Ajaw por medio del “xukulem” o la ceremonia maya. También puede realizar dichas consultas por medio del tz’ite’, mediante la intermediación del Ajq’ij, para recibir los consejos de los abuelos y abuelas. Dentro de la espiritualidad maya, el hombre tiene ideas pero no sabiduría. Por eso, es importante juntarse en consejo para unir ideas y formar así una ciencia. Nuestros antepasados se reunían en consejo bajo la protección del No’j.

es el día de la sabiduría. Es el día para tomar decisiones de manera particular o en consejo. Es un día que propicia la planificación de algún proyecto y de los lineamientos a seguir en la conducción de la comunidad y de la sociedad en general. También es el día en que nuestro pensamiento puede tener mayor fluidez.

Función espiritual:

Agradecer el conocimiento y las ideas.
Agradecer la inteligencia.
Día para acrecentar la memoria.
Agradecer la inteligencia.
Día para pedir buenos consejos.
Su origen: Toj destino: Kan

Fortalezas:

Es poseedor de muchos conocimientos.
Es inteligente y es consejero.
Puede llegar a ser científico.
Es ordenado y creativo.
Es justo y humanista.
Es buen estudiante.
Puede llegar a ser un buen líder.
Debilidades:

Puede caer en el orgullo.
Se puede enojar con facilidad.
Le cuesta tomar decisiones.
Puede ser individualista y egoísta.",
"Idea o sabiduria"
),
(
"Nahual",
"Tijax",
"Características: Significa piedra y obsidiana. Es el símbolo del pedernal. Es la energía de la persona que cura en la cultura maya. Es el poder del trueno y el rayo. La persona que nace bajo la influencia de este día, puede ser un gran curandero o médico con mucha energía en las manos. Es ajq’íj, cura enfermedades físicas y psicológicas. Puede arreglar fracturas de los huesos.

Una de las influencias negativas del día es que puede causar algún sufrimiento o malestar. Según los Ajq’ijab’, es un día que “come”. Para no ser alcanzado por estas influencias negativas debe hacerse alguna ofrenda y solicitar la intermediación del Guía Espiritual.

Es un día que puede evitar la humillación y la ruina a causa de algo o alguien. Es un día de protección. Los que nacen es este día pueden llegar a ser coléricos y pueden destruir espiritual o emocionalmente a alguien. A veces, nadie les aguanta y resulta difícil comprenderlos.

Su origen: Tz'i destino: Keme

Fortalezas:

Es protector de la justicia.
Es fuerte y servicial.
Es incansable por lo que quiere lograr.
Puede llegar a ser Guía Espiritual.
Posee habilidad para arreglar fracturas en los huesos.
Se puede defender muy bien ante cualquier problema.
Debilidades:

Puede ser violento y enojado.
Puede sufrir enfermedades.
Puede ofenderse fácilmente.
Puede caer en la venganza y en los pleitos.",
"Pedernal o obsidiana"
),
(
"Nahual",
"Kawoq",
"Características: Es el nawal de la mujer como comadrona. Es el día de la Vara Espiritual, le Pisom Q’aq’al. Es el relámpago. Es la dualidad del fuego sagrado en función de la espiritualidad maya. Es el día de la comunidad, de la familia, del grupo y de la sociedad. Es la energía que facilita las lluvias para darnos buenas cosechas, principalmente la del maíz.

Proporciona capacidad y habilidad para curar y orientar. Es la energía que fortalece a las Guías Espirituales. Mantiene la energía y la fertilidad. Es un día de mucha relación con la Madre Tierra y los elementos al proveer sabiduría para el manejo de las plantas medicinales. Facilita la unidad y el cuidado de la familia. Es el día de la mujer como esposa y madre que calienta el seno del hogar. También es un día especial para la plena realización de la mujer en la comunidad y en la sociedad.

Función Espiritual:

Día del terapeuta (el que arregla huesos) y de la comadrona.
Uno de los días para tratar enfermedades.
Día para invocar por la familia (hogar) y la comunidad.
Uno de los días especiales para pedir lluvia.
Día para invocar para que los niños y niñas al nacer no vengan con defectos físicos.
Su origen: B'atz' destino: Kej

Fortalezas:

Es equilibrado y cariñoso.
Vive y trabaja por su familia.
Si es mujer, puede ser comadrona.
Puede llegar a ser Guía Espiritual.
Es buen comunicador y expositor.
Debilidades:

Puede caer en el enojo.
A veces es perseguido por los problemas y los pleitos.
No es muy afortunado en el amor.
Se le puede culpar de todo lo que pasa.
Muy hablador.
Se puede meter en donde no es llamado.",
"Trueno o dificultad"
),
(
"Nahual",
"Ajpu",
"Características: Es la luz y es la representación del Abuelo Sol. Significa cerbatanero, cazador, tirador y caminante. Es el día de la fuerza corporal y del triunfo del bien sobre los obstáculos. Es la representación del triunfo de Jun Ajpu e Ixbalamke sobre los señores de Xib’alb’a. Esta señal le fue dada a la abuela Ixmukane cuando retoñó el cañaveral que sembraron los dos muchachos en el patio de la casa.

Es el día del gran Ajaw, el padre y su representación solar, el día de la grandeza, de la fuerza de la vida. Es el que trae luz y claridad a los seres humanos y sobre toda la humanidad.

Es la fuerza regenerativa, el ciclo de la vida. La facultad para tener a toda la galaxia. Rige los eclipses lunares y solares. Es el momento de servir a los demás.

Función Espiritual:

Día para ofrendar a los abuelos y abuelas fallecidas.
Día propicio para tratar enfermedades.
Se pide la vida y la fuerza.
Día para pedir el triunfo del bien sobre el mal.
Su origen: E destino: Q'anil

Fortalezas:

Puede desarrollar mejor la inteligencia.
Puede tener dotes de artista.
Es alegre.
Se defiende muy bien.
Puede llegar a ser Guía Espiritual.
Es bueno para la cacería.
Debilidades:

Puede caer en el enojo.
Puede ser tajante.
Es delicado.
Puede enfermarse.
Puede evadir responsabilidades.
Le dificulta aceptar correcciones.
Puede tener una actitud autosuficiencia.",
"Cerbatanero o señor principal"
),
(
"Nahual",
"Imox",
"Características: Símbolo de las fuerzas ocultas del universo manifestadas en demencia. “Imox” es el nombre de todas las cosas secretas. En general, es un día de influencias negativas. Es un día peligroso. Es símbolo del hemisferio izquierdo, la parte sutil de los seres humanos, es la sensibilidad. Es la esencia de nuestra conciencia y de nuestra mente.

Es el nawal o espíritu del agua. Genera movimiento pero, también, descontrol emocional. Es un día con influencias negativas y los que nacen en este día pueden convertirse en busca pleitos. Por eso, el día es propicio para las ceremonias de limpieza emocional.

Significa idiotez y locura. Es un día especial para pedir la abundancia de agua. Día para invocar por los ríos y nacimientos de agua para que no se sequen. Su trabajo es ayudar al hemisferio derecho del cerebro a realizar un mejor trabajo y a tomar una buena actitud.

Es el día de la perturbación mental o de la equivocación. No es indicado para tomar decisiones. Es el día en que se puede implorar y limpiar las perturbaciones provocadas por el enemigo en todos los órdenes de la vida.

Funcion Espiritual:

Tratamiento de las perturbaciones mentales.
Día especial para invocar por el agua.
Invocaciones para mantener el equilibrio mental, espiritual, físico y emocional.
Su origen: Aj destino: Toj

Fortalezas:

Puede desarrollar la clarividencia.
Puede captar los mensajes y señales de la naturaleza.
Puede desarrollar con mayor grado su hemisferio izquierdo.
Puede tener buenas iniciativas.
Debilidades:

Se le olvida con facilidad las cosas.
Puede resultar muy inseguro.
Puede tener reacciones violentas.
Es ordenado en sus cosas.
Puede tener un carácter variado.",
"Locura o pez"
),
(
"Nahual",
"Iq'",
"Características: Es el viento y la vida. Es nawal de la lluvia. Es el día del Corazón del Cielo y Corazón de la Tierra. Es el aire y el soplo sagrado que da fuerza y vida. En este día se le pide al viento que se lleve los sufrimientos o las enfermedades de la persona.

Significa aire y aliento de vida. También, es el nawal de Junraqan (Huracán) convertido en tornado. Es uno de los Cargadores del Tiempo. Es, también, la respiración de la persona. Es el soplo sagrado, suave y apacible purificador del cuerpo, de la mente, del espíritu y de las emociones. Es el espacio invisible existente entre la materia. Es uno de los elementos que produce los fenómenos naturales.

El niño que nace en Iq’ es un niño que hace de todo pero no llega a nada. Es como el aire que toca y arrastra todo lo que encuentra en su camino. Puede construir pero también destruye.

Función Espiritual:

Es día propicio para efectuar ceremonias al espíritu del aire o viento.
Día para tratar enfermedades respiratorias, psicológicas y emocionales.
Día de invocación para que el aire no destruya las siembras.
Su origen: I'x destino: Tz'i'

Fortalezas:

Puede adaptarse a cualquier situación.
Posee fuerza física.
Es soñador e imaginativo.
Puede tener ideas futuristas.
No asusta casi nada.
Debilidades:

De carácter muy fuerte.
Puede resultar inseguro e impulsivo.
Puede caer en la infidelidad con su pareja.
Puede sufrir algunos problemas sociales y económicos.
Le encanta decir directamente las cosas.",
"Viento o luna"
),
(
"Nahual",
"Aq'ab'al",
"Características: Es el símbolo de la mano y de la aurora formada por los primeros rayos del sol que se asoman sobre las montañas para disipar las tinieblas y la oscuridad de la noche.

Significa amanecer, aurora, luz, claridad, nuevo día. Es la renovación de energía. Es la llegada de la luz, del crepúsculo, la luz que se asoma detrás de los cerros y montañas.

Es el día del amanecer, del futuro promisorio que esperamos cada día, los mejores días para nuestro pueblo y para cada persona en particular.

Función Espiritual:

Aclara los conocimientos.
Aclara el camino de la vida.
Conduce a nuevas oportunidades de la vida.
Ilumina las cosas ocultas.
Día para agradecer la creación del ser humano.
Su origen: Tz'ikin destino: Batz'

Fortalezas:

Es madrugador, alegre y sereno.
Puede tener buen carácter.
Puede tener dotes para tratar enfermedades.
Puede ser Guía Espiritual.
Son fuertes, dinámicos y astutos.
Puede tener seguridad mental y física.
Debilidades:

No es bien reconocido en su tierra.
Puede encontrar el fracaso.
Puede caer en la mentira y la traición.
Puede tener dificultades en lo económico.
Es un poco reservado y aislado.",
"Amanecer, aurora y mano"
),
(
"Nahual",
"K'at",
"Características: Está relacionado con la palabra k’atik que significa arder. Símbolo del fuego y de la red. En el ritual se hace mención del día como tiempo para el enredo y el desenredo. Es el que enreda y desenreda la vida.

Es la red donde se guarda la mazorca. La red con la que se pesca. La red donde mueren los peces. Significa cautiverio y ausencia de libertad. Signo de opresión que se ejerce sobre una comunidad.

Es el trastecito o el bracero que le entregan a uno cuando recibe el Pisom Q’aq’al o la Vara Sagrada. Para los nacidos en K’at, en la espiritualidad maya, se les recomienda visitar al Ajq’ij cada veinte días para efectuar su ceremonia. De lo contrario, pueden tener muchos enredos en el camino, en el trabajo y en la vida.

Función Espiritual:

Se puede pedir por la liberación de algún preso.
Pedir porque el parto sea normal.
Día del desenvolvimiento e investigación de la ciencia.
Día para arreglar problemas emocionales y de amor.
Su origen: Ajmaq destino: E

Fortalezas:

Persona sincera y ordenada.
Puede ser líder.
Puede ser una persona muy afortunada en lo económico.
Puede ser Guía Espiritual.
Persona muy activa y curiosa.
Puede recordar las cosas facilidad.
Puede ser muy tajante en su decisión.
Debilidades:

Puede caer en los chismes y en el enojo.
Puede resultar nervioso.
Puede perder las cosas con facilidad.
Puede estar propenso a malas influencias.
Puede caer en el individualismo.
Puede caer en el orgullo.
Con tendencia a meterse en los problemas ajenos.",
"Red, cautiverio o iguana"
),
(
"Nahual",
"Kan",
"Características: Significa movimiento, Es el símbolo de la Gran Energía que creó el Universo. Es la Serpiente Emplumada o Q’uq’umatz. Es la evaluación humana y el desarrollo espiritual. Es la Sabiduría y el ciclo del tiempo. Es guardián del bosque. Es el día de la transformación.

significa justicia y equilibrio. Es un día muy fuerte y “enojado”. Es un día que puede traer malas influencias como el enojo y la riña. Sin embargo, es un símbolo de la verdad y es rápido e implacable cuando la justicia señala a alguien el lugar de los perdedores. La energía del día se presta para la solución de problemas.

Función Espiritual:

Invocaciones por la igualdad y justicia.
Día para desarrollar la fuerza física.
Día para desarrollar el fuego interior y la evolución espiritual.
Uno de los días para realizar invocaciones por la lluvia.
Día para alejar el enojo, la timidez y el mal carácter.
Su origen: No'j destino: Aj

Fortalezas:

Persona con mucho conocimiento.
Puede tener mucha habilidad para la intuición.
Muy inteligente.
Practica la sinceridad y la justicia.
Puede llegar a ser líder.
Puede tener habilidad para los pronósticos y la clarividencia.
Puede ser Guía Espiritual.
Es humilde.
Debilidades:

Puede estar influenciado por el enojo y la traición.
Puede caer en el resentimiento y la avaricia.
Es desconfiado y sorpresivo.",
"Serpiente emplumada"
),
(
"Nahual",
"Kame",
"Características: Es el símbolo de la muerte. Símbolo de la disolución final de todas las cosas, buenas y malas. Significa tecolote y muerte. Es el renacimiento. Significado que se expresa a través de los sagrados granos de Tz’ite’ o Palo de Pito. Es día propicio para pedir por la salud de los enfermos y para hacer ofrendas porque progrese el negocio.

Es la energía de las personas que mueren de manera natural. Puede restar fuerza a una persona o fortalecerla. Pronostica lo bueno y lo malo. Es la comunicación con las abuelas y abuelos a través de las candelas de cebo que se ofrecen en las ceremonias. Prudencia y protección para evitar accidentes. Es el Juez Supremo de todas las cosas. Nawal de la enfermedad y de la muerte.

Función Espiritual:

Es un día bueno para el negocio.
Día especial para comunicarse con los ancestros.
Fortalecimiento de la vida.
Día para pedir protección en los viajes.
Día para contrarrestar enfermedades.
Su origen: Tijax destino: I’x

Fortalezas:

Puede ser médico.
Es fuerte ante sus enemigos.
Es inteligente, respetuoso y seguro.
Puede controlarse.
Puede desarrollar habilidades para la clarividencia.
Debilidades:

Puede tener un temperamento fuerte.
Propenso al suicidio.
Puede sufrir mucho al no cumplir con sus obligaciones con la Madre Naturaleza.
Puede tener tendencias a la mentira y a la infidelidad con su pareja.",
"Muerte o dueño de la oscuridad"
),
(
"Nahual",
"Kej",
"Características: El nawal del Kej es muy masculino y si una mujer nace en este día, tiene el carácter y voz fuertes y es de alguna manera varonil.

Simboliza venado, los cuatro sostenes, los cuatro pilares, es decir los cuatro puntos cardinales. Es el día fuerte y bueno. Es un día que aplasta. Es un día que demuestra su fuerza y su poder.

Los que nacen en este día: son de carácter fuerte y poseen fortaleza física. Son buenos defensores de otras personas, pero no pueden defenderse a sí mismos. pueden ser ricos y poseer muchos bienes. generalmente gozan de buena salud pues no se enferman con facilidad.

Son los cuatro puntos cardinales que sostienen el mundo; sostiene la vida del hombre. Los que nacen en este día son caminantes y tienen suerte en el negocio.

Es el día en que se pide fuerza, fortalecimiento, endurecimiento, para que uno sea duro, aguantador en caso de enfermedades, golpes, críticas, que uno aguante lo duro de la vida. Los que nacen en Kej podrían ser buenos guías espirituales mayas.

Significado:

La cruz maya.
Los cuatro puntos cardinales.
Los cuatro sostenes de la tierra.
Nawal de los defensores.
Los cuatro colores de las energías.
Caballo, fuerza, aguantador.
Fortalezas:

Buenos defensores
Poseen riquezas
Gozan de buena salud
Son buenos guías espirituales
Son muy sociables
Son fuertes, inteligentes, responsables, positivos y triunfadores.
En el matrimonio son muy equilibrados
Debilidades:

Puede hacer el mal con su pensamiento
Tiene un carácter fuerte
Pueden ser muy compulsivos
Les gusta la popularidad y el poder
Podrían ser autocráticos, manipuladores etc.
Les gusta la comodidad
Son muy reservados
Autoritarios
Suelen ser exigentes
Les gusta hundir y aplastar a las personas.
Podrían ser necios",
"Venado"
),
(
"Nahual",
"Q'anil",
"Características: Este es un día propicio para las rogativas que se hacen con relación al maíz y para darle gracias a la divinidad de la tierra, por la cosecha de maíz.

Es el nawal de las cosechas. El que nace en este día es buen agricultor. Hay que buscar este tanto para la siembra como para la cosecha del maíz.

Simboliza los cuatro colores del maíz existentes en Meso América: rojo, negro, blanco y amarillo. Los cuatro colores de la piel de la humanidad. Los cuatro puntos cardinales del universo. En este día se pide buena cosecha. Es el día del agricultor.

Significado:

Nawal de la semilla.
germinación de todos los seres vivientes.
Día de la construcción de los primeros abuelos del maíz.
Día de: La Fecundación y de La Germinación.

Fortalezas:

Afortunados en las siembras o crianza de animales
Muy fértiles en tener hijos
Son buenos comerciantes
suelen tener Signos de intensa energía en su cuerpo
Extremadamente inteligentes
Les gusta hablar, debatir, leer, escribir
Aficionados al ejercicio físico o la danza
Mente compleja
Se interesan de detalles
Debilidades:

Padecen de dolor de cabeza, resfriados
Podrían destruir su propio hogar
Incrédulos
Creen en su imaginación
Regularmente son nerviosos
Pueden ser cobardes
Autodestructivos
Evitan las grandes responsabilidades
Propensos a adquirir vicios relacionados con estimulantes
Muy agresivos, enojados
A veces son obsesivos, compulsivos
Llegan a donde no son llamados
Orgullosos
Suelen ser egoístas",
"Semilla, simiente o conejo"
),
(
"Nahual",
"Toj",
"Características: Significa pago, ofrenda y agradecimiento. Se ponen presentes para el pago de alguna culpa o para enmendar algún error.

Es el día especial de las ofrendas. Se agradece el sol, el agua, el aire, el alimento y todo lo que nos rodea y lo que hemos recibido de la Madre Tierra. Los que nacen en Toj, algunas veces, son los que pagan la deuda de la familia, por eso es que pueden sufrir problemas de salud.

Función Espiritual:

Agradecimiento a Ajaw por los beneficios recibidos.
Día para ponerse en paz con Ajaw, con los abuelos y abuelas y con el prójimo.
Se hacen ceremonias para lograr el equilibrio, moral y espiritual.
Día para retirar los sufrimientos, accidentes y enfermedades.
Su origen: Imox destino: No'j

Fortalezas:

De grandes virtudes.
Es creativo, comunicativo y dinámico.
Practica la sinceridad.
Es analista, imaginativo e intuitivo.
De carácter abierta.
Es romántico.
Debilidades:

Puede sufrir enfermedades.
Puede caer en la miseria.
Puede tener inestabilidad mental.
Puede estar expuesto a accidentes.
Puede caer en el orgullo y la vanidad.
Vicioso y orgulloso",
"Ofrenda, pago o lluvia"
),
(
"Nahual",
"Tz'i'",
"Características: El antiguo significado de Tz’i’ es tepescuintle. En idioma k’iche’ es Lalo. Guardián de la milpa de la abuela Ixmukane de donde Ixk’ik’ trajo la red llena de mazorcas, y que le ayudó a cumplir con su tarea de una manera mágica. En el Popol Wuj significa Jun Ajpu Wuch’, cazador tacuacín y Jun Ajpu Utiw, cazador coyote. También es guardián de los cerros, las montañas, las veredas y los barrancos.

Es la fidelidad, la autoridad y la ley. Por tanto, es el guardián de la ley natural y espiritual. Hace los papeles de secretario.

Puede influir en excesivas conductas sexuales. Por eso, algunos Guías Espirituales le atribuyen como símbolo del pecado, especialmente de impureza sexual. El que nace en este día puede resultar muy sexual, sea hombre o mujer. La intensidad de esta conducta dependerá del numeral que acompaña al Tz’i’ como día de nacimiento.

Función Espiritual:

Invocar por el orden y la exactitud.
Puede interpretar lo conocido y lo desconocido.
Se invoca el día para que guíe y cuide el camino.
Día para contrarrestar calumnias y ofensas.
Día de protección ante la ley.
Su origen: Iq' destino: Tijax

Fortalezas:

Atento, valiente, respetado, justo.
Es defensor de otras personas.
Es cordial.
Logra lo que busca.
Buen investigador y presiente las cosas o actos.
Enamorado.
Es el día de los abogados
Debilidades:

Puede resultar vicioso e infiel.
Puede caer en la mentira.
Puede tener mucha tendencia sexual.
Puede resultar con temperamento fuerte.",
"Perro o mapache"
),
(
"Nahual",
"B'atz'",
"Características: Es el símbolo del hombre y de la humanidad, de la realización del hombre.

Símbolo de continuidad con el pasado, como se ha englobado dentro del ritual. “Un buen día, de la perpetración de las ceremonias y costumbres de nuestros antepasados.

Es el día en que se realiza aquella parte del matrimonio en que se pide la novia, y el casamiento cuarenta días después, en un día B’atz’ con un número más alto. En 8 B’atz’ se presenta públicamente el aprendiz de sacerdote maya, y cuarenta días después se realiza el agradecimiento.

Simboliza el tiempo. Nuestros antepasados, los mayas representaron el tiempo imaginándolo como un hilo enrollado a un carrizo que se encuentra debajo de la tierra. Este hilo se va desenrollando a medida que el tiempo pasa. La historia se teje con el tiempo, así como el hilo teje los vestidos. El ciclo Nuevo Maya, Wajxaqib’ B’atz’, en la ceremonia se ameniza con marimba y se baila alrededor del fuego. El B’atz’ amarra y desata. Se le dice B’atz’ porque gira. Y es el talento del ser humano.

Significa:

Enlace matrimonial
Mono, hilo, amarrador
El tiempo. desarrollo de la evolución humana, dándonos la vida
Nawal de medidor del tiempo y de toda clase de tejidos
Es un buen día para recibir el destino como sacerdote Maya
Orador, escultor, tallador y artista, música, flauta, deporte y siembra.
Significado Clave: La representación y el talento artístico

Fortalezas:

Inteligente, astuto
Amable
Reservado
Suelen imitar lo que ven
Tienen buenas señales
Adinerados (Ricos)
Maestros de todas las artes
Debilidades:

Inseguro
Haragán
Enojado, agresivo
Envidioso, calumniador
Mala imaginación, incrédulo
Ambicioso de cualquier cosa
Débil de voluntad",
"Mono o hilo"
),
(
"Nahual",
"E'",
"Características: Simboliza el camino y el destino. Es el guía. Es el que nos lleva a un punto fijo. Uno de los Cargadores del Tiempo. Es la protección de los viajeros y caminantes. Conduce la vida espiritual y material.

Es el que hace posible la realización humana en todos los órdenes y en todas las manifestaciones. Pero también puede simbolizar los obstáculos con que los seres humanos se tropiezan en la continua búsqueda de esa realización.

Es un día bueno para desplazarse en cualquier lugar. En caso de peligro, el Ajaw E es el que da la protección. También es día bueno para agradecer el bienestar físico, la vida misma de las personas y el trabajo. Es un día muy sagrado. Por esta razón, se puede pedir su protección, como dice el Popol Wuj “que no se caigan en la bajada ni en la subida del camino. Que no encuentren obstáculos ni detrás ni delante de ellos, ni cosa que los golpee. Concédeles buenos caminos, hermosos caminos planos…”.

Es el viaje, la travesía y el trayecto. Se ofrecen ceremonias o invocaciones para que limpie el camino de los peligros y de los accidentes.

Función Espiritual:

Protección ante las tentaciones
Protección ante los peligros del camino
Día para iniciar un proyecto
Día de protección de los pilotos
Día para encauzar mejor el destino
Su origen: K'at destino: Ajpu

Fortalezas:

Es amable y trabajador
Es guía y consejero
Es cariñoso y alegre
Es viajero y puede ser comerciante
Afortunado, decidido, comprensivo
Cuidadoso en las cosas
Debilidades:

Desconfiado e inseguro
Algunas veces se puede resentir
Es variable con su carácter
Es nervioso y frágil
Impaciente en algunas ocasiones",
"Camino o diente"
),
(
"Nahual",
"Aj",
"Características: Simboliza caña veral y milpa. Todo lo que se relaciona al hogar y la familia. Es el símbolo que dejó Jun Ajpu Ixb’alamkej de su vida, cuando sembró la caña en medio del patio de la casa de la abuela Ixmukane. Aj es símbolo de la resurrección de Jun Ajpu e Ixb’alamkej, quienes no murieron en manos de los señores de Xib’alb’a. Es el triunfo del bien sobre el mal.

Es el destino representado por el Nawal o los Nawales. 8 Aj es el día en el cual se establece el destino de uno, para llamarlo y reconocerlo.

también es elote, maíz tierno. Día relacionado con todo lo que concierne a los niños. Es día bueno y sobre todo para rezar por las criaturas.

También es el día de la enfermedad debilidad en el tejido óseo, pero de mucha energía espiritual. Es el hogar, la casa, todo lo que se relaciona con la casa. Los que nacen en Aj pueden ser sacerdotes mayas.

Función Espiritual:

El hogar y la familia de todas las generaciones tiernas; 8 Aj se celebra el día del niño.
El bastón del poder de las virtudes divinas, sensatez, la palabra sagrada.
Caña, símbolo que dejó Jun Ajpu Ixbalanke de su vida, cuando sembró la caña en el patio, dueño del Hogar, y ternura.
Nawal de las artes.
Significado Clave: La integridad de la fe

Fortalezas:

Autoridad
Inteligente
Estricto
Es respetado por sus amigos
Principios sólidos en el terreno moral y ético
Atraído por la religión o los estudios filosóficos y teológicos
Trabajador
Bromista
Debilidades:

Regaña
Celoso
Nervioso
Expuesto a discutir y juzgar
Hace lo que le plazca
Extremista, no es de moderación
Hace bromas pesadas
No es constante en la fe
Variable
Sufre con frecuencia, se enferma en la niñez
Alcohólico
Destructor
Una vida variable, de dolor
tristeza y alegría
",
"Caña o cañaveral"
),
(
"Nahual",
"I'x",
"Características: Es el símbolo y energía de la Madre Tierra. Representa los lugares o centros ceremoniales donde se llevan a cabo las ceremonias. Son los cerros, las montañas, las planicies. Significa Jaguar.

Representa el altar maya o sea el tab’al. Es un día especial para pedir la vida de los animales tanto domésticos como salvajes. Se le pide a Ajaw una buena cosecha de cualquier cultivo, en especial el de las verduras. En este día se encienden candelas de color verde, ya que simbolizan el color de la Madre Tierra.

Representa el altar maya o sea el tab’al. Es un día especial para pedir la vida de los animales tanto domésticos como salvajes. Se le pide a Ajaw una buena cosecha de cualquier cultivo, en especial el de las verduras. En este día se encienden candelas de color verde, ya que simbolizan el color de la Madre Tierra.

Función Espiritual:

Propicia energía espiritual y física.
Invocación por la lluvia.
Invocación por la vida de los animales.
Día de invocación por la salud de toda la humanidad.
Día para realizar invocaciones para que las siembras estén protegidas de los animales.
Su origen: Keme destino: Iq'

Fortalezas:

Es paciente, fuerte, responsable, valiente, respetuoso, vigoroso y atrevido.
Es decisivo y realista.
Es de buen corazón.
Buen padre de familia.
Puede ser líder y famoso si sabe encauzar sus energías.
Debilidades:

Puede llegar a tener un carácter fuerte.
Algunas veces se enoja y se impacienta.
Su carácter le puede hacer prepotente, orgulloso, colérico, serio y vengativo.
",
"Jaguar"
),
(
"Energia",
"Jun",
"Principio de Unidad.
Propósito, Atraer, Unificar.
El principio y origen, el ser humano como un todo.
La unidad establece el propósito, el objeto y la meta de acción por pequeña que esta sea.
La unidad es el todo, la única verdad absoluta, es la creación mental del todo.
En el circulo de la perfección todos los seres están unidos inseparablemente sin importar su dimensión de manifestación, la creencia de que no es así, crea una grieta en la relación original y esa grieta en el campo de energía crea una polaridad (como proceso de cicatrización) que ha de convertirse en vibración.",
"El Todo, La Unidad, El Absoluto, La Pureza"
),
(
"Energia",
"Keb'",
"Principio de Polaridad.
Desafió, Estabilizar, Polarizar.
Esqueleto y esencia, Masculino y femenino; forman el principio generador dual, la simetría dual de los seres. Son los extremos de un mismo fenómeno, opuestos idénticos en su naturaleza: espíritu y materia, luz y oscuridad, yin y yang.
Armonizar la vibración es resolver la polaridad equilibrando los dos extremos, o sea, incluyéndolos
Si todo es luz, las formas se difuminan, por eso es necesario el contraste de las sombras.
Cultivar nuestra resonancia es armonizar nuestra vibración con resonancias superiores como la planetaria, solar y galáctica.
",
"La Pareja, La Polaridad, El Complemento, El Apoyo"
),
(
"Energia",
"Oxib'",
"Principio del ritmo o compensación.
Servicio, Unir, Activar.
Flujo y reflujo, ascenso y descenso, acción y relación; es el movimiento entre los polos de todos los planos (físico, mental y espiritual).
Cada fenómeno, cada proceso tiene su propio ritmo: todo tiene un inicio, nace, crece, muere y renace. Liquido precioso que da calor y energía al cuerpo, sangre, el agua de la naturaleza, lluvia.
Al crear polaridades, desencadenamos eventos, circunstancias que experimentamos y superamos, las acciones que producen un campo de negatividad (ignorancia, oscuridad espiritual) son kharmas, las acciones que suprimen y corrigen la negatividad (sabiduría) son Dharmas y crean un campo benéfico.",
"Los Resultados, Los Hijos, El Temor, Los Frutos"
),
(
"Energia",
"Kajib'",
"Principio de la medida.
Forma, Medir, Definir.
El cuatro como medida de todas las estructuras materiales (la pirámide), entra siempre en relación con la composición trina de lo espiritual, formando la estructura Septernal de todo lo que Es.
El poder del ordenamiento matemático del macro y microcosmos. Todo cuanto existe es según la medida de la ley del todo.
Establece los limites de las estructuras; las 4 fuerzas principales, 4 rumbos sagrados, 4 elementos: calor, viento y agua sobre tierra. Cuatro son las regiones mayas, 4 los elementales, 4 los nucleótidos, 4 los elementos químicos primarios, 4 las razas cósmicas, rumbos cardinales, estaciones solares, chacras de personalidad, etc",
"La Solidez, La Fortaleza, La Felicidad, La Estabilidad"
),
(
"Energia",
"Job'",
"Principio de lo nuclear.
Esplendor, Mandar, Dar poder.
La capacidad de realización, la movilidad de los dedos, percibir la belleza de la naturaleza, el 5to. punto o centro del Universo.
Toda unidad, por pequeña que sea, objetiva o subjetiva comporta un núcleo como atractor y una periferia de manifestación (núcleo del átomo y electrones, por ejemplo).
Deriva la concepción del matiz cromático de cinco, que es la acción de la quinta fuerza galáctica; el matiz del color da la entonación.",
"El Amor, El Trabajo, El Esfuerzo, Analizar"
),
(
"Energia",
"Waqib'",
"Principio del equilibrio orgánico: 2x3. (Polaridad por ritmo)
Igualdad, Equilibrar, Organizo.
La polaridad del ritmo genera el principio orgánico, la ley del ordenamiento Hexagonal de las estructuras cristalinas y celulares. La tendencia de las estructuras ligadas al proceso de la vida es la de alcanzar el equilibrio relativo, estado de realización intermedio, a partir del cual continuar el movimiento hacia la conciencia superior.
El principio del Diferencial de Potencial aporta la resolución de situaciones a través de saltos cualitativos entre estados de la energía. Nada de cuanto sucede es casual, todo esta sujeto al poder de la ley primigenia; todo efecto tiene su causa y a la vez es causal de otros efectos, la Causa Centro Primera es el Creador.
Su acción es equilibrar, el principio de la integración de nuestra introspección",
"El Mundo Material, La Materia, La Amistad, La Reacción"
),
(
"Energia",
"Wuqub'",
"Principio de unificación mental. (Poder místico)
Armonización, Inspirar, Canalizo.
Los hombres somos unidades resonantes dentro de un todo Mental, el orden material es un fractal del ordenamiento mental del universo; nosotros no controlamos la mente, somos pensados por la mente, vivimos inmersos en ella.
El siete canaliza energía inspirando la armonización. Representa las fases lunares de 7 días, el segundo paso de la transformación interior; el intelecto activo, inquieto, la influencia lunar.",
"El Equilibrio, El Movimiento, El Integrar, El Realizar"
),
(
"Energia",
"Wajxaqib'",
"Principio de Resonancia armónica. (Octavas resonantes)
Integridad, Modelar, Armonizar.
Así como en música, las escalas se suceden en octavas, las energías vibratorias contactan y resuenan con sus respectivas equisonantes en los niveles superiores e inferiores de manifestación, como también con los armónicos secundarios derivados de la vibración.
Las octavas son el vehículo de información del todo, como ley de la armonía; el tono ocho otorga la habilidad de dar forma, de modelar, de describir aspectos del nivel inmediatamente superior de vibración.
Ocho es la esencia interior, el ser como recipiente de la esencia cósmica, el 2 veces NAHUI (4), conjuga las 4 direcciones (+) y los 4 rincones (X) del mundo.
",
"La Espiritualidad, El Arte, La Alegría, La Energía Masculina"
),
(
"Energia",
"B'elejeb'",
"Principio de la Periodicidad cíclica.
Intención, Realizar, Pulso.
Todo cuanto se mueve lo hace de acuerdo a la Ley Cósmica; la periodicidad cíclica, no la repetición de los sucesos, es la cualidad por la que un evento se asocia a otros anteriores y posteriores en el tiempo como fenómenos resonantes (ciclos entre ciclos).
Representa lo femenino del principio generatriz (Yin), el polo creativo en el cual se manifiesta la generación o producción de formas, energías y conceptos nuevos dinamizadores del proceso evolutivo de la vida, el objetivo; la intención de poner la acción en movimiento",
"La Realización, El Poder, Acción, La Energía Femenina"
),
(
"Energia",
"Lajuj",
"Principio de la Manifestación.
Manifestar, Producir, Perfecciono.
El movimiento como energía se manifiesta en cada nivel u octava de vibración (dimensión); todo lo que se manifiesta, es decir, que cobra presencia (objetiva o subjetiva) se puede medir y viceversa.
La manifestación de la energía en todos los planos, implica vencer o enfrentar los obstáculos inherentes al plano dimensional y al tipo de presencia a manifestarse. Las manos juntas, la dualidad de las manos (5+5=10), equilibrándose mutuamente, como flecha al objetivo.
",
"La Ley, La Autoridad, La Rectitud, La Impecabilidad"
),
(
"Energia",
"Julajuj",
"Principio de las Estructuras disonantes.
Liberación, Divulgar, Disolver.
Todas las estructuras, cualquiera sea su naturaleza, tienden a ingresar a nuevas realidades; el movimiento perpetuo implica mutación y cambio constante, en la vida vamos haciendo conscientes estas nuevas realidades.
Las estructuras que se 'desordenan' como un aparente caos para el mundo material, en realidad están ingresando a otro orden superior no comprensible desde la tridimensional. La grieta que nos escinde del todo es la no evolución, nuestra tendencia a quedarnos resguardados donde nos sentimos cómodos y seguros es un espejismo; un orden superior que hoy asimilamos como caos esta a la espera de nuestro ingreso, es la quinta dimensión que trasciende a las anteriores
",
"Compartir, Separar, Las Posibilidades, Dejarse-abandonarse"
),
(
"Energia",
"Kab'lajuj",
"Principio de la Estabilidad compleja: 2x6.
Cooperación, Universalizar, Dedicación.
Es la polarización del equilibrio orgánico, mediante el cual cada especie gana su propio nivel de frecuencia armónica, es decir, su estatuto como especie: código, nicho, hábitat, etc. Genera las fuerzas conservacionistas de los organismos vivos, incluida la tierra, como cooperación simbiotica.
",
"La Familia, La Comunidad, Los Grupos, La Seguridad"
),
(
"Energia",
"Oxlajuj’",
"Principio del movimiento universal o principio de vibración.
Presencia, Trascender, Perdurar.
Todo cuanto existe esta en perpetuo movimiento, desde lo mas sutil con las vibraciones, hasta lo mas denso y pesado como expresión de las bajas frecuencias, a tal punto que estos extremos parecen en reposo.
El movimiento es la energía que fluye desde la fuente y regresa a ella. Este principio otorga trascendencia a todo lo que funciona con y obedece a la ley del uno, trascendencia es la cualidad de perdurar mas allá del tiempo y del espacio. La unión total de todos los números anteriores, el ultimo numero representa el conocimiento interno, la introspección, centralidad y transparencia, Sabiduría del Universo, La Madre Tierra, respeto a lo que existe, florece y da frutos.",
"La Magia, EL Poder del Camino, La Teurgia, El Trasmutar"
)
;
