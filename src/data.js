// MiLana - Datos fiscales y guías financieras México 2026
// Fuentes: Anexo 8 RMF (DOF 28/12/2025), LFT vigente, INEGI, CONASAMI

// ISR 2026
export const ISR_TABLE = [
  { l: 0.01, u: 844.59, f: 0, r: 0.0192 },
  { l: 844.6, u: 7168.51, f: 16.22, r: 0.064 },
  { l: 7168.52, u: 12598.02, f: 420.95, r: 0.1088 },
  { l: 12598.03, u: 14644.64, f: 1011.68, r: 0.16 },
  { l: 14644.65, u: 17533.64, f: 1339.14, r: 0.1792 },
  { l: 17533.65, u: 35362.83, f: 1856.84, r: 0.2136 },
  { l: 35362.84, u: 55736.68, f: 5665.16, r: 0.2352 },
  { l: 55736.69, u: 106410.5, f: 10457.09, r: 0.3 },
  { l: 106410.51, u: 141880.66, f: 25659.23, r: 0.32 },
  { l: 141880.67, u: 425641.99, f: 37009.69, r: 0.34 },
  { l: 425642, u: 999999999, f: 133488.54, r: 0.35 },
];

export const RESICO_TABLE = [
  { l: 0.01, u: 25000, r: 0.01 },
  { l: 25000.01, u: 50000, r: 0.011 },
  { l: 50000.01, u: 83333.33, r: 0.015 },
  { l: 83333.34, u: 208333.33, r: 0.02 },
  { l: 208333.34, u: 291666.67, r: 0.025 },
];

export const UMA_DIARIA = 117.31;
export const SALARIO_MINIMO = 315.04;
export const VACACIONES = [12,14,16,18,20,22,22,22,22,22,24,24,24,24,24,26];

export const ISN_POR_ESTADO = {
  "CDMX": 0.03, "Edo. de México": 0.03, "Jalisco": 0.02, "Nuevo León": 0.03,
  "Puebla": 0.03, "Guanajuato": 0.0295, "Querétaro": 0.02, "Chihuahua": 0.03,
  "Veracruz": 0.03, "Yucatán": 0.025, "Sonora": 0.03, "Coahuila": 0.02,
  "Baja California": 0.0188, "Tamaulipas": 0.03, "Sinaloa": 0.025,
  "Aguascalientes": 0.025, "Oaxaca": 0.03, "Tabasco": 0.025, "Michoacán": 0.03,
  "Chiapas": 0.02, "Quintana Roo": 0.03, "San Luis Potosí": 0.025,
  "Guerrero": 0.02, "Hidalgo": 0.025, "Durango": 0.02, "Morelos": 0.02,
  "Zacatecas": 0.025, "Colima": 0.02, "Nayarit": 0.02, "Tlaxcala": 0.03,
  "Campeche": 0.025, "Baja California Sur": 0.025,
};

export function calcularISR(mensual) {
  if (mensual <= 0) return 0;
  for (const b of ISR_TABLE) {
    if (mensual >= b.l && mensual <= b.u) return b.f + (mensual - b.l) * b.r;
  }
  return 0;
}

export const formatMoney = (n) =>
  (Number(n) || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ═══ 25 GUÍAS COMPLETAS ═══
export const GUIAS = [
  { id: "isr", titulo: "Cómo se calcula el ISR en México 2026: La guía definitiva para no expertos", calc: "isr",
    texto: `INTRODUCCIÓN: ¿POR QUÉ MI RECIBO DE NÓMINA DICE QUE GANO MENOS?
Si acabas de recibir tu primer pago del año o simplemente te dio curiosidad revisar tu recibo de nómina, lo más probable es que hayas sentido un pequeño “bajón” al ver la diferencia entre lo que dice tu contrato y lo que realmente llegó a tu cuenta de banco. Esa diferencia tiene un nombre principal: Impuesto Sobre la Renta (ISR).

En México, el ISR es el impuesto más importante para los trabajadores. Es la “lana” que el gobierno nos quita directamente de nuestro esfuerzo para, en teoría, financiar servicios públicos, infraestructura y programas sociales. Sin embargo, para la mayoría de nosotros, el cálculo parece una fórmula alquímica secreta que solo los contadores entienden. En esta guía, vamos a romper ese misterio. Como si estuviéramos platicando con un café, te voy a explicar cómo se mueve tu dinero en este 2026, usando los datos oficiales más recientes.

EL CONCEPTO CLAVE: EL IMPUESTO PROGRESIVO
Lo primero que debes entender es que el ISR en México no es una tasa fija. No es como el IVA, que es el 16% para casi todo. El ISR es “progresivo”. Esto significa que quien gana más, paga una tasa mayor. 

Pero ojo, hay un mito muy común que debemos desmentir ahora mismo: “Si me suben el sueldo, voy a ganar menos porque voy a saltar de categoría de impuesto”. ¡Falso! El sistema mexicano funciona por “escalones”. Solo el dinero que “sobra” de un escalón paga la tasa del siguiente. Tu dinero base sigue pagando las tasas bajitas. Imagina que tu sueldo es un edificio: la planta baja paga muy poquito, el primer piso un poco más, y solo el “penthouse” paga el 35%. Jamás ganarás menos por recibir un aumento; siempre recibirás más, aunque el SAT se lleve una rebanada un poquito más grande de ese extra.

LAS TABLAS OFICIALES DE 2026 (ANEXO 8 RMF)
Para este año, el SAT publicó las tablas actualizadas en el Anexo 8 de la Resolución Miscelánea Fiscal (DOF 28/12/2025). Estas tablas son la biblia para cualquier departamento de nómina. Se dividen en cuatro columnas:
- Límite Inferior: El piso del escalón.
- Límite Superior: El techo del escalón.
- Cuota Fija: Un monto base que ya debes por estar en ese nivel.
- Porcentaje sobre el excedente: Lo que pagas por cada peso que se pase del límite inferior.

En 2026, las tasas empiezan desde el 1.92% para los sueldos más bajos y llegan hasta el 35% para quienes ganan más de $425,642 pesos al mes.

EL ROL DE LA UMA Y EL SALARIO MÍNIMO
Para entender tu cálculo, debemos mirar dos números clave de este año:
- El Salario Mínimo 2026: $315.04 pesos diarios. Por ley, si tú ganas exactamente el salario mínimo, el SAT no puede quitarte ISR. Es un derecho para proteger el poder adquisitivo básico.
- La UMA (Unidad de Medida y Actualización): $117.31 pesos diarios. La UMA se usa para calcular exenciones. Por ejemplo, tu aguinaldo está libre de impuestos hasta por 30 UMAs ($3,519.30).

CASO PRÁCTICO: ¿CÓMO SE HACE LA CUENTA PASO A PASO?
Vamos a poner un ejemplo real. Imagina que ganas $25,000 pesos brutos al mes. Aquí está la receta de cocina del SAT:

A) Ubicamos tu sueldo en la tabla: Los $25,000 entran en el renglón que tiene un límite inferior de $17,533.65.
B) Restamos el límite inferior: $25,000 - $17,533.65 = $7,466.35. A este resultado se le llama “Excedente”.
C) Aplicamos el porcentaje: A ese excedente le aplicamos la tasa de ese renglón, que es el 21.36%. ($7,466.35 x 0.2136) = $1,594.81. Esto es el “Impuesto Marginal”.
D) Sumamos la cuota fija: El SAT dice que para ese nivel, la cuota fija es de $1,856.84. Sumamos: $1,594.81 + $1,856.84 = $3,451.65.

¡Listo! Ese es tu ISR mensual: $3,451.65. 

NO TE OLVIDES DEL IMSS
Mucha gente se confunde y piensa que todo lo que les falta en el recibo es ISR. Pero falta el “primo” del ISR: la cuota obrera del IMSS. Aproximadamente, te van a descontar un 2.5% adicional para tener derecho a servicios médicos, guarderías y tu pensión. En nuestro ejemplo de $25,000, el IMSS te quitaría unos $625 pesos adicionales.

Entonces, de tus $25,000 brutos, después de ISR e IMSS, te quedarían libres cerca de $20,923 pesos. Esa es tu “lana” neta.

6. ERRORES COMUNES AL REVISAR TU NÓMINA
- Confundir Bruto con Neto: Muchas empresas anuncian sueldos de “$20,000”, pero no aclaran si son antes o después de impuestos. Siempre pregunta en la entrevista: “¿Es sueldo neto libre?”.
- No considerar bonos: Si te dan un bono de puntualidad o de productividad, ese dinero se suma a tu sueldo base y puede hacer que “brinques” de escalón de ISR ese mes, por lo que verás un descuento mayor.
- Olvidar la declaración anual: Si tienes dos patrones al mismo tiempo o ganas más de $400,000 al año, el SAT te obliga a hacer un ajuste en abril. Ahí puedes recuperar dinero si tienes deducciones personales (dentista, lentes, intereses de Infonavit).

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si gano el salario mínimo me quitan ISR?
R: No. En 2026, ganar el mínimo ($315.04 diarios) te exenta del pago de ISR por protección constitucional.

P: ¿Por qué en la primera quincena me quitan menos que en la segunda?
R: Algunas empresas hacen un ajuste mensual. En la primera quincena hacen un cálculo estimado y en la segunda ajustan todo el mes según lo que realmente ganaste.

P: ¿Puedo bajar lo que pago de ISR?
R: Como trabajador asalariado, la única forma legal es a través de las deducciones personales en tu declaración anual de abril. Guarda todas tus facturas de gastos médicos pagadas con tarjeta.

P: ¿El ISR aplica para las propinas?
R: Legalmente, las propinas son parte del salario según la LFT y deberían integrar para el cálculo, aunque en la práctica muchas veces no se reportan.

P: ¿Qué pasa si mi patrón no me retiene ISR?
R: Es una señal de alerta roja. Probablemente no te tiene dado de alta legalmente ante el IMSS o el SAT, lo que significa que no estás acumulando puntos de Infonavit ni semanas para tu pensión.

CONCLUSIÓN: TOMA EL CONTROL DE TU DINERO
Saber cuánto y por qué te descuentan ISR no solo te quita el miedo al SAT, sino que te da poder para negociar mejores sueldos y planear tus gastos. Recuerda que este impuesto se actualiza cada año, así que mantente pendiente de MiLana para tener siempre los números frescos. ¡Tu esfuerzo vale mucho, aprende a cuidarlo!` },
  { id: "fin", titulo: "Finiquito 2026: Todo lo que te deben pagar al renunciar (Guía para que no te den “gato por liebre”)", calc: "fin",
    texto: `INTRODUCCIÓN: CERRAR CICLOS SIN PERDER DINERO
Qué onda, colega. Si estás leyendo esto, es muy probable que estés pensando en dar el siguiente paso en tu carrera, que ya tengas otra oferta en la mesa o que simplemente necesites un respiro de tu chamba actual. Renunciar es un derecho que todos tenemos, pero hacerlo bien —con la cabeza fría y los números claros— es la diferencia entre irte con una buena lana en la bolsa o dejar dinero que te pertenece en la cuenta de la empresa.

Mucha gente le tiene miedo a la palabra “renuncia” porque piensan que “pierden todo”. La neta es que no. Aunque tú decidas irte, la Ley Federal del Trabajo (LFT) protege el esfuerzo que ya hiciste durante los meses que trabajaste. A ese pago se le llama Finiquito. En esta guía te voy a explicar, como si estuviéramos en una carne asada, qué es, qué incluye y cómo calcularlo para que este 2026 no te falte ni un peso.

¿QUÉ ES EL FINIQUITO Y EN QUÉ SE DIFERENCIA DE LA LIQUIDACIÓN?
Vamos a empezar por lo básico para que no te confundas. 
- El Finiquito es lo que te toca cuando la relación laboral se acaba “por las buenas” o por causas ajenas a un despido injustificado. Aplica si tú renuncias, si se termina tu contrato temporal o, lamentablemente, si hay una invalidez o fallecimiento. 
- La Liquidación (o indemnización) es lo que te toca si la empresa decide que ya no puedes estar ahí sin que tú hayas hecho nada malo (despido injustificado). Es un pago mucho más grande porque incluye “castigos” económicos para la empresa, como los 3 meses de sueldo.

En resumen: Al renunciar, te llevas tu Finiquito. Es el dinero que ya te ganaste proporcionalmente por el tiempo que estuviste trabajando en el año actual.

LOS 4 INGREDIENTES DE UN BUEN FINIQUITO
Para que tu finiquito esté completo en este 2026, debe tener estos cuatro conceptos obligatorios por ley:

Los días trabajados y no pagados: 
Si renuncias un día 10 y te pagan por quincena, te deben esos 10 días que ya sudaste. Parece obvio, pero a veces en las cuentas rápidas se les “olvida” a los de RH.

Aguinaldo Proporcional: 
Por ley, en México el mínimo son 15 días de aguinaldo al año. Si trabajaste de enero a junio (6 meses), te toca la mitad de ese aguinaldo. No importa que no sea diciembre; el aguinaldo se va acumulando día con día desde el 1 de enero.

Vacaciones Proporcionales: 
Aquí es donde la cosa se pone buena gracias a la reforma de “Vacaciones Dignas”. Recuerda que ahora, desde tu primer año, ya tienes 12 días de vacaciones. Si renuncias a los 6 meses de tu primer año, te deben el pago de 6 días de vacaciones que no te tomaste. 

Prima Vacacional (25%): 
La ley dice que por cada peso que te paguen de vacaciones, te deben dar 25 centavos extra para que “disfrutes” tu descanso. Si te deben 6 días de vacaciones, te deben también la prima de esos 6 días.

DATOS OFICIALES QUE DEBES TENER A LA MANO (2026)
Para que tu cálculo sea exacto como el de un contador, necesitamos los valores vigentes de este año:
- Salario Mínimo General: $315.04 pesos diarios. 
- UMA (Unidad de Medida y Actualización): $117.31 pesos diarios.
- Tabla de Vacaciones: 1er año = 12 días, 2do año = 14 días, 3er año = 16 días, etc.

EL CASO PRÁCTICO: “CON PERAS Y MANZANAS”
Imagina que trabajas en una oficina, ganas $18,000 brutos al mes y decides renunciar el 30 de junio (exactamente a mitad de año). Llevas 1 año cumplido en la empresa (vas por tu segundo año).

Paso 1: Saca tu sueldo diario.
$18,000 / 30 días = $600 pesos diarios.

Paso 2: Aguinaldo Proporcional.
Como trabajaste 6 meses de 12, te toca la mitad de tus 15 días de ley. 
7.5 días x $600 = $4,500 pesos.

Paso 3: Vacaciones Proporcionales.
Como ya vas en tu segundo año, te corresponden 14 días de vacaciones al año según la tabla oficial. Como trabajaste medio año del segundo ciclo, te tocan 7 días.
7 días x $600 = $4,200 pesos.

Paso 4: Prima Vacacional.
Es el 25% de tus vacaciones. 
$4,200 x 0.25 = $1,050 pesos.

Total de tu Finiquito Bruto: $4,500 + $4,200 + $1,050 = $9,750 pesos.
*Ojo: A esto todavía hay que quitarle un poquito de ISR, pero ya tienes una idea clara de cuánto debe ser el cheque.*

LA REGLA DE ORO: ¡NO FIRMES NADA TODAVÍA!
Este es el consejo más importante que te voy a dar hoy: No firmes tu carta de renuncia ni el recibo del finiquito hasta que veas el dinero. 
Muchas empresas te dicen: “Firma aquí y en 3 días te depositamos”. ¡No lo hagas! Legalmente, al firmar el finiquito estás declarando que ya recibiste el dinero y que no le debes nada a la empresa ni ellos a ti. Si firmas y luego no te depositan, será muy difícil reclamar porque tú mismo pusiste tu firma diciendo que ya te pagaron.

Si te presionan, diles con calma: “Con gusto firmo en cuanto el depósito aparezca en mi banca móvil o me entreguen el cheque”. Es tu derecho.

¿QUÉ PASA SI NO ME QUIEREN PAGAR?
A veces los patrones se lo toman personal y quieren “castigarte” no pagándote el finiquito. La ley es muy clara: el finiquito es irrenunciable. No importa si te fuiste “mal”, si hubo una discusión o si dejaste un proyecto a medias; el dinero de tus días trabajados, aguinaldo y vacaciones ya es tuyo.

Si se niegan a pagar o te quieren dar mucho menos de lo que calculamos:
1. No pelees. Solo di que vas a revisar los números con tu contador.
2. Ve a la PROFEDET (Procuraduría Federal de la Defensa del Trabajo). Ofrecen asesoría legal gratuita y tienen una tasa de éxito altísima conciliando con los patrones.
3. Tienes un año completo a partir de tu renuncia para reclamar tu pago legalmente.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Me toca Prima de Antigüedad si renuncio?
R: Solo si llevas más de 15 años trabajando en la misma empresa. Si llevas menos, la prima de antigüedad solo te toca en caso de despido o fallecimiento.

P: ¿El finiquito paga impuestos?
R: Sí, se le descuenta ISR, pero recuerda que el aguinaldo tiene una parte exenta de 30 UMAs ($3,519.30) y las vacaciones también tienen ciertas reglas para pagar menos impuestos.

P: ¿Puedo renunciar por WhatsApp?
R: Legalmente, la renuncia debe ser por escrito y con tu firma (y a veces huella digital). Aunque un mensaje avisa, lo mejor es entregar tu carta formal para evitar que luego digan que “abandonaste el trabajo”.

P: ¿Tengo que avisar con dos semanas de anticipación?
R: En México, la ley no te obliga a dar un aviso previo (el famoso ‘two weeks notice’), pero es una buena práctica profesional para irte por la puerta grande.

P: ¿Si no tomé mis vacaciones de hace 2 años, me las pagan?
R: Cuidado aquí. Las vacaciones “caducan”. Tienes un año y medio para tomarlas desde que se generan. Si dejas pasar mucho tiempo, podrías perder el derecho a reclamar ese pago.

CONCLUSIÓN: TU ESFUERZO TIENE VALOR
Renunciar es el inicio de una nueva aventura, y qué mejor que empezarla con la tranquilidad de que recibiste lo que es justo. Usa nuestra calculadora en MiLana para meter tus datos exactos y obtener el PDF de tu cálculo. No dejes que el miedo o la pena te impidan cobrar lo que por ley te ganaste con tu tiempo y talento. ¡Mucho éxito en lo que venga!` },
  { id: "liq", titulo: "Liquidación por Despido Injustificado 2026: La guía completa para defender tu dinero", calc: "liq",
    texto: `INTRODUCCIÓN: CUANDO TE DAN LAS GRACIAS SIN MOTIVO
Hola de nuevo. Hoy vamos a tocar un tema que a nadie le gusta, pero que es vital conocer: el despido. Que te llamen a la oficina de RH y te digan que “ya no requieren tus servicios” es un golpe duro, no solo emocionalmente, sino para tu estabilidad financiera. Sin embargo, en México, la Ley Federal del Trabajo (LFT) es una de las más protectoras del mundo para el trabajador.

Si te están corriendo y tú no hiciste nada malo (no robaste, no faltaste tres días seguidos sin aviso, no llegaste en mal estado), te corresponde una Liquidación. No dejes que la empresa te confunda con un “finiquito” chiquito. Aquí te voy a explicar, paso a paso y con los números de 2026, cuánto dinero debe tener ese cheque para que no te vean la cara.

¿QUÉ ES REALMENTE UN DESPIDO INJUSTIFICADO?
Para que una empresa te pueda despedir “justificadamente” (es decir, sin pagarte indemnización), tiene que demostrar que cometiste una falta grave de las que vienen en el artículo 47 de la LFT. Si te dicen que te vas por “recorte de personal”, “reestructura”, “porque no llegaste a la meta” o simplemente “porque ya no encajas”, eso es un DESPIDO INJUSTIFICADO.

En estos casos, tú tienes derecho a elegir: o pides que te devuelvan tu puesto (reinstalación) o pides que te indemnicen. El 99% de la gente prefiere la lana para buscar algo mejor, y ahí es donde entra el cálculo de la liquidación.

EL CONCEPTO MAESTRO: EL SALARIO DIARIO INTEGRADO (SDI)
Antes de sumar pesos, tienes que entender qué es el SDI. Para una liquidación, no se usa tu sueldo normal, se usa el sueldo “mejorado”.
El SDI incluye tu sueldo diario más la parte proporcional de tu aguinaldo y tu prima vacacional. En 2026, si tienes las prestaciones mínimas de ley y es tu primer año, tu sueldo diario se multiplica por el factor 1.0493. 
¿Por qué importa esto? Porque si ganas $600 pesos al día, tu liquidación se calcula sobre $629.58 pesos. Esa diferencia de 30 pesos, multiplicada por todos los días de la indemnización, se convierte en miles de pesos a tu favor.

LOS TRES PILARES DE TU LIQUIDACIÓN
Una liquidación de ley en 2026 se compone de tres pagos grandes que se suman:

Los 3 meses de sueldo (Indemnización Constitucional):
Es el pago base por el simple hecho de perder tu empleo. Se calcula multiplicando tu SDI por 90 días. Es el “colchón” que la ley te da para que sobrevivas mientras buscas otra chamba.

Los 20 días por año:
Este concepto es polémico. Legalmente, se paga si tú pides la reinstalación, ganas el juicio y el patrón se niega a recibirte. Sin embargo, en la práctica, casi todas las empresas serias lo incluyen en la negociación inicial para evitar irse a un juicio largo. Son 20 días de tu SDI por cada año que trabajaste.

Prima de Antigüedad:
Son 12 días de salario por cada año trabajado. Aquí hay un truco: el salario para este cálculo tiene un “techo”. No puede ser más de dos veces el salario mínimo. 
- Salario Mínimo 2026: $315.04.
- Tope de Prima: $630.08 diarios.
Si ganas más de eso, se calcula con el tope. Si ganas menos, se calcula con tu sueldo real.

SUMANDO EL FINIQUITO (LO QUE YA TE GANASTE)
Además de la indemnización anterior, te tienen que pagar lo que ya habías acumulado en el año:
- Aguinaldo proporcional (desde el 1 de enero hasta el día del despido).
- Vacaciones no gozadas (según tu antigüedad, mínimo 12 días).
- Prima vacacional (25% de esas vacaciones).
- Salarios devengados (los días que trabajaste en la quincena actual).

EJEMPLO REAL CON NÚMEROS DE 2026
Imagina que ganas $20,000 mensuales brutos y llevas 3 años en la empresa. Te despiden hoy injustificadamente.

- Sueldo Diario: $666.66.
- SDI (estimado): $700.00.

Cálculo de Liquidación:
1. 90 días de SDI: 90 x $700 = $63,000.
2. 20 días por año (3 años): 60 x $700 = $42,000.
3. Prima de Antigüedad (36 días): 36 x $630.08 (tope) = $22,682.
4. Total estimado (sin contar el finiquito proporcional): $127,682 pesos.

¿Ves la diferencia? Si solo te dieran finiquito, te llevarías unos $10,000. Por ser despido, te llevas más de $120,000. Por eso es vital que no firmes una “renuncia voluntaria” si te están corriendo.

CONSEJOS DE SUPERVIVENCIA EN RH
Si te llaman para despedirte, mantén la calma y sigue estos pasos de “amigo contador”:
- No firmes nada de inmediato: Tienes derecho a llevarte los papeles para revisarlos o pedir que un abogado los vea. Si te dicen “firma ahorita o no hay pago”, es una amenaza vacía. El dinero es tu derecho y no caduca en ese momento.
- Revisa el concepto: Si el papel dice “RENUNCIA”, no lo firmes. Debe decir “CONVENIO DE TERMINACIÓN” o mencionar el despido. Al firmar una renuncia, le estás regalando a la empresa los 3 meses de sueldo y los 20 días por año.
- Grabaciones y testigos: En México es legal grabar tus propias conversaciones. Si puedes, graba la reunión de despido. Eso sirve como prueba si luego niegan que te corrieron.

¿A DÓNDE IR SI SE PONEN DIFÍCILES?
Si la empresa te ofrece una miseria o se niega a pagarte, no te desesperes. Tienes a la PROFEDET (Procuraduría Federal de la Defensa del Trabajo). Ellos te asignan un abogado gratis que citará a la empresa a una conciliación. En el 80% de los casos, las empresas pagan ahí mismo para evitar multas de la Secretaría del Trabajo.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Me pueden despedir por bajo rendimiento?
R: Sí pueden, pero sigue siendo despido injustificado. La ley no considera el “bajo rendimiento” como una causa para no pagarte liquidación.

P: ¿Qué pasa si me obligaron a firmar una hoja en blanco cuando entré?
R: Es una práctica ilegal y muy sucia. Si lo hicieron, avísale a tu abogado de inmediato. Hay formas periciales de demostrar que la firma se puso antes que el texto.

P: ¿La liquidación paga ISR?
R: Sí, pero tiene una exención muy grande. En 2026, una buena parte de tu indemnización está libre de impuestos (90 veces la UMA por cada año trabajado). Casi siempre el golpe del impuesto es pequeño comparado con el total.

P: ¿Tengo derecho a liquidación si estaba por honorarios?
R: Si tenías un horario, un jefe que te mandaba y usabas las herramientas de la empresa, aunque factures, eres empleado. Puedes demandar el reconocimiento de la relación laboral y tu liquidación.

P: ¿Cuánto tiempo tengo para demandar?
R: Tienes solo 2 meses a partir del día siguiente al despido. ¡No te duermas en tus laureles!

CONCLUSIÓN: TU DIGNIDAD TAMBIÉN TIENE UN PRECIO
Perder el trabajo es un momento de mucha presión, pero conocer tus derechos te da la fuerza para no aceptar menos de lo que marca la ley. En MiLana queremos que estés informado. Usa nuestra calculadora de liquidación para obtener tu cifra exacta según tus años de servicio y tu sueldo real. ¡Mucha suerte y recuerda que una puerta se cierra para que se abra otra mejor!` },
  { id: "agu", titulo: "Aguinaldo 2026: La guía completa para calcular tu “mes 13” sin errores", calc: "agu",
    texto: `INTRODUCCIÓN: EL PAGO MÁS ESPERADO DEL AÑO
¡Qué onda! Si ya estás oliendo el pavo o simplemente estás planeando las vacaciones de fin de año, seguramente tienes una palabra en la mente: Aguinaldo. Es, posiblemente, el derecho laboral más querido en México, ese respiro financiero que nos ayuda a liquidar deudas, comprar regalos o simplemente ahorrar para la cuesta de enero.

El aguinaldo no es un regalo ni un bono opcional que el patrón te da porque “le caes bien” o porque a la empresa le fue de maravilla. Es un derecho irrenunciable establecido en la Ley Federal del Trabajo (LFT). En esta guía detallada, te voy a explicar todo lo que necesitas saber para este 2026, desde cuánto te toca hasta qué parte se queda el SAT, para que no te den “gato por liebre”.

¿QUÉ ES EL AGUINALDO Y QUIÉN TIENE DERECHO?
El aguinaldo es una gratificación anual obligatoria. Es, básicamente, tu decimotercer sueldo del año. Tienen derecho a él todos los trabajadores subordinados: ya seas de planta, de confianza, sindicalizado, contratado por obra o tiempo determinado, o incluso si eres un trabajador eventual.

Incluso si ya no trabajas en la empresa pero estuviste ahí parte del año, tienes derecho a recibir la parte proporcional. No importa si renunciaste o si te despidieron antes de diciembre; ese dinero ya te lo ganaste con tus días de esfuerzo.

¿CUÁNDO DEBEN PAGARLO? (FECHA LÍMITE 2026)
La ley es muy estricta con los tiempos. Tu patrón tiene la obligación de pagarte el aguinaldo antes del día 20 de diciembre. 

Esto significa que el último día que tiene la empresa para depositarte o entregarte tu cheque es el 19 de diciembre a las 11:59 PM. Si llega el 20 y no tienes tu lana, la empresa ya está incumpliendo con la ley y puede ser acreedora a multas pesadas que van desde las 50 hasta las 5,000 UMAs por cada trabajador afectado.

¿CUÁNTOS DÍAS ME TOCAN POR LEY?
La LFT establece un mínimo de 15 días de salario base por un año completo de servicios. 

Sin embargo, muchas empresas ofrecen “prestaciones superiores a las de la ley” y dan 20, 30 o hasta 40 días de aguinaldo. Revisa muy bien tu contrato individual o el contrato colectivo de tu empresa para saber cuál es tu cifra exacta. Si tu contrato dice 30 días, eso es lo que te deben pagar, no los 15 mínimos.

EL CÁLCULO PASO A PASO CON DATOS DE 2026
Para que hagas tu propia cuenta como todo un profesional, necesitamos dos datos clave de este año:
* Tu Salario Diario: Es tu sueldo mensual bruto dividido entre 30.
* Días trabajados en el año: Si estuviste todo el año, son 365 días.

Si trabajaste el año completo:
Imagina que ganas $15,000 brutos al mes y tu contrato dice que te tocan los 15 días de ley.
1. Sacamos el sueldo diario: $15,000 / 30 = $500 pesos al día.
2. Multiplicamos por los días de aguinaldo: $500 x 15 días = $7,500 pesos brutos.

Si trabajaste solo una parte del año (Proporcional):
Imagina que entraste a trabajar el 1 de julio y te despiden o renuncias el 31 de diciembre (trabajaste 184 días).
1. Sacamos lo que te tocaría por día de año: 15 días / 365 días del año = 0.04109 días de aguinaldo por cada día trabajado.
2. Multiplicamos por tus días laborados: 0.04109 x 184 días = 7.56 días de aguinaldo.
3. Multiplicamos por tu sueldo diario ($500): 7.56 x $500 = $3,780 pesos brutos.

LA REBANADA DEL SAT: EXENCIONES E IMPUESTOS
Aquí es donde muchos se desilusionan al ver su recibo, pero hay buenas noticias. No todo el aguinaldo paga impuestos. 

Para 2026, la ley dice que el aguinaldo está exento de ISR hasta por un monto equivalente a 30 UMAs (Unidad de Medida y Actualización).
* Valor de la UMA diaria en 2026: $117.31.
* Monto exento (30 UMAs): $117.31 x 30 = $3,519.30 pesos.

¿Qué significa esto? Que si tu aguinaldo es de $7,500, los primeros $3,519.30 son “limpios” para ti. El SAT solo te cobrará impuesto sobre la diferencia ($7,500 - $3,519.30 = $3,980.70). Si tu aguinaldo es menor a $3,519.30, lo recibes íntegro, sin que te descuenten ni un centavo de ISR.

SALARIO MÍNIMO Y AGUINALDO
Un punto vital para este 2026 es el salario mínimo. El salario mínimo general es de $315.04 diarios ($9,451.20 mensuales). Si tú ganas el salario mínimo, tu aguinaldo base de 15 días sería de $4,725.60. Como mencionamos antes, este sueldo está exento de ISR, por lo que deberías recibir tu aguinaldo completo.

¿QUÉ HACER SI NO TE PAGAN O TE PAGAN MENOS?
Si llega el 20 de diciembre y no has recibido tu pago, o si te quieren pagar con “vales de despensa”, “mercancía” o “promesas”, el patrón está violando la ley. El aguinaldo debe pagarse en moneda de curso legal (transferencia o efectivo).

Pasos a seguir:
1. Habla con RH: A veces hay errores administrativos. Pregunta de forma amable pero firme.
2. Acude a la PROFEDET: La Procuraduría Federal de la Defensa del Trabajo ofrece asesoría gratuita.
3. Denuncia ante la STPS: La Secretaría del Trabajo puede enviar inspectores a la empresa. Las multas para los patrones que no pagan a tiempo son muy altas.
4. Plazo para reclamar: Tienes un año completo a partir del 20 de diciembre para reclamar el pago de tu aguinaldo ante las autoridades laborales.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Me pueden descontar mis faltas o retardos del aguinaldo?
R: No. El aguinaldo se calcula sobre los días que el contrato estuvo vigente. Solo podrían descontar los días de faltas injustificadas o permisos sin goce de sueldo, pero nunca por “castigo” o retardos.

P: Si estoy de incapacidad por maternidad o riesgo de trabajo, ¿me dan menos aguinaldo?
R: No. Esos periodos se consideran como tiempo trabajado para efectos del aguinaldo. Debes recibirlo completo como si hubieras estado en la oficina o fábrica.

P: ¿Los trabajadores por honorarios reciben aguinaldo?
R: Legalmente no, a menos que puedas demostrar que existe una relación laboral subordinada (tienes jefe, horario y lugar de trabajo fijo). En ese caso, podrías demandar el pago.

P: ¿Puedo pedir mi aguinaldo por adelantado para el Buen Fin?
R: La ley no obliga al patrón a adelantarlo, pero muchas empresas lo hacen de forma voluntaria. Pregunta en tu área de RH si tienen esa política.

P: ¿Si la empresa dice que no tuvo utilidades, me puede negar el aguinaldo?
R: ¡Jamás! El aguinaldo es independiente de las utilidades. No importa si la empresa perdió dinero en el año, el aguinaldo se paga porque se paga.

CONCLUSIÓN: USA TU DINERO CON INTELIGENCIA
El aguinaldo es el fruto de todo un año de levantarse temprano y cumplir con tus metas. En MiLana queremos que cada peso cuente. Te recomendamos usar nuestra calculadora de aguinaldo 2026 para que sepas exactamente cuánto te deben depositar después de impuestos. ¡Disfruta tu dinero, te lo ganaste!` },
  { id: "res", titulo: "RESICO vs Régimen General 2026: La guía definitiva para freelancers y emprendedores", calc: "res",
    texto: `INTRODUCCIÓN: SER TU PROPIO JEFE NO TIENE POR QUÉ SER UNA PESADILLA FISCAL
¡Qué onda! Si estás leyendo esto es porque ya diste el salto o estás a punto de lanzarte como freelancer, consultor o dueño de negocio. Ser tu propio jefe es increíble: tú mandas en tu tiempo, eliges a tus clientes y no tienes que pedir permiso para ir al dentista. Pero, como bien sabes, con la gran libertad viene la gran responsabilidad… de pagar impuestos al SAT.

En México, durante mucho tiempo, los trabajadores independientes sufríamos mucho con las tablas del ISR, pagando casi lo mismo que una empresa grande. Pero todo cambió con la llegada del RESICO. Si no sabes qué es o si te conviene más quedarte en el Régimen General, quédate conmigo. Como tu amigo contador, te voy a desmenuzar estos dos mundos con los números de 2026 para que dejes de regalarle lana al gobierno de forma innecesaria.

¿QUÉ ES EL RESICO Y POR QUÉ ES EL ‘REGALO’ DEL SAT?
El Régimen Simplificado de Confianza (RESICO) es, básicamente, una vía rápida y barata para cumplir con tus obligaciones. Se diseñó para que más gente se formalice ofreciendo tasas de impuestos ridículamente bajas. 

La gran diferencia es que, mientras en otros regímenes pagas impuestos sobre tu ‘utilidad’ (lo que te queda después de gastos), en el RESICO pagas sobre tus ‘ingresos brutos’ (el total de lo que facturas). Parece un truco, pero con las tasas que maneja, casi siempre sales ganando. En el RESICO de 2026, las tasas de ISR van desde apenas el 1% hasta un máximo del 2.5%.

EL RÉGIMEN GENERAL: EL CAMINO TRADICIONAL
El Régimen de Actividad Empresarial y Profesional (o Régimen General) es donde ‘caemos’ todos por defecto si no elegimos el RESICO o si no cumplimos sus requisitos. Aquí, el cálculo es más complejo:
- Sumas tus ingresos del mes.
- Restas tus gastos deducibles (renta, luz, papelería, gasolina).
- Al resultado (tu utilidad) le aplicas la tabla progresiva del ISR que llega hasta el 35%.

LAS TABLAS DE 2026: MIRA LA DIFERENCIA
Para que veas que no te miento, analicemos las tablas de este año. En el RESICO, si ganas hasta $25,000 pesos al mes, tu tasa de ISR es del 1%. Si ganas entre $25,000 y $50,000, subes apenas al 1.1%. Incluso si te va muy bien y facturas más de $208,333 pesos mensuales, lo máximo que pagarás es el 2.5%.

En cambio, en el Régimen General, en cuanto superas los $17,533 pesos de utilidad, ya estás pagando una tasa marginal del 21.36%. Si tu utilidad es alta, el SAT se puede quedar con una tercera parte de tu esfuerzo.

CASO PRÁCTICO: EL PODER DEL RESICO EN PESOS REALES
Pongamos un ejemplo con números de este 2026. Imagina que eres un diseñador independiente que factura $40,000 pesos mensuales.

Escenario A (RESICO):
Sobre tus $40,000 brutos, te toca la tasa del 1.1%. 
Impuesto a pagar: $440 pesos mensuales.

Escenario B (Régimen General):
Supongamos que tienes pocos gastos (porque trabajas desde casa) y tu utilidad es casi total. 
Impuesto estimado: Aproximadamente $5,000 pesos mensuales.

¡La diferencia es enorme! En este ejemplo, estar en RESICO te ahorra más de $4,500 pesos al mes, lo que se traduce en un ahorro superior a los $55,000 pesos al año. Con esa lana podrías cambiar tu compu, pagar un buen seguro o irte de vacaciones.

EL ‘GANCHO’: ¿POR QUÉ NO TODO EL MUNDO ESTÁ EN RESICO?
Como todo en la vida, el RESICO tiene sus reglas y no es para todos. La principal ‘desventaja’ es que en este régimen NO puedes deducir gastos. No importa si compraste la silla más cara del mundo o pagaste una oficina en Reforma; el impuesto se calcula sobre el total facturado. Sin embargo, como ya vimos, la tasa es tan baja que tendrías que tener muchísimos gastos para que el Régimen General te conviniera más.

Además, existen restricciones para entrar:
- Tus ingresos anuales no deben superar los 3.5 millones de pesos.
- No puedes ser socio o accionista de empresas.
- No puedes ser residente en el extranjero con establecimiento en México.

OBLIGACIONES Y ‘TRAMPAS’ QUE DEBES EVITAR
Para gozar de estas tasas bajas en 2026, el SAT te pide ser un contribuyente ejemplar. Si te descuidas, te pueden expulsar y mandarte al régimen caro de por vida.
- Facturación total: Debes emitir un CFDI (factura electrónica) por absolutamente todos tus ingresos.
- Cobros bancarizados: Debes recibir tus pagos preferentemente por transferencia electrónica para que todo sea transparente.
- Puntualidad extrema: Tus declaraciones mensuales deben presentarse a más tardar el día 17 del mes siguiente.
- Buzón Tributario: Debes tenerlo activo y actualizado. Si el SAT te busca y no respondes, es causa de expulsión del RESICO.

¿QUÉ PASA CON EL IVA?
Es muy importante que no confundas el ISR con el IVA. El ahorro del RESICO es solo en el ISR. El IVA sigue siendo el mismo 16% en ambos regímenes. Si facturas $40,000 + IVA, esos $6,400 de IVA no son tuyos, son del SAT, y los tienes que declarar y pagar igual, restando el IVA de tus gastos.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Puedo estar en nómina (Sueldos y Salarios) y tener RESICO al mismo tiempo?
R: ¡Sí! Es una excelente combinación. Puedes tener tu chamba fija y tus proyectos por fuera en RESICO, siempre y cuando el total de ambos no supere los 3.5 millones al año.

P: ¿Tengo que pagar ISR si gano menos del salario mínimo en RESICO?
R: Aunque el salario mínimo 2026 es de $315.04 diarios ($9,451.20 mensuales), en RESICO pagas sobre lo que factures. Si facturas $5,000, pagarías el 1% ($50 pesitos).

P: ¿Qué valor tiene la UMA para mis exenciones en 2026?
R: La UMA vale $117.31 diarios. En RESICO no hay muchas exenciones de este tipo, pero es bueno saberlo por si tienes otros ingresos.

P: ¿Si me expulsan del RESICO puedo volver?
R: Normalmente no. Por eso es vital que cuides tu situación fiscal, presentes tus declaraciones a tiempo y no te pases del límite de ingresos.

P: ¿Necesito un contador para estar en RESICO?
R: Aunque el régimen es ‘simplificado’, siempre recomiendo tener un experto que revise que tus facturas estén bien hechas y que no se te pase ninguna declaración mensual. Un error de dedo te puede salir carísimo.

CONCLUSIÓN: TOMA LA MEJOR DECISIÓN PARA TU BOLSILLO
El RESICO es, sin duda, la mejor oportunidad que hemos tenido los independientes en México para crecer sin que los impuestos nos ahoguen. Usa nuestra calculadora de RESICO en MiLana para comparar exactamente cuánto pagarías en cada régimen con tus números actuales. No dejes que la flojera de los trámites te haga perder miles de pesos. ¡Infórmate, compáralo y haz que tu lana rinda más!` },
  { id: "ptu", titulo: "PTU 2026: Todo sobre el Reparto de Utilidades y cómo defender tu rebanada del pastel", calc: "ptu",
    texto: `INTRODUCCIÓN: ¿TE TOCA PARTE DE LAS GANANCIAS?
¡Qué onda! Si estás leyendo esto entre los meses de abril y junio, seguramente has escuchado en los pasillos de tu oficina o fábrica la palabra mágica: Utilidades. O como nos gusta decirle a los contadores para sonar más formales: PTU (Participación de los Trabajadores en las Utilidades).

El reparto de utilidades no es un “bono de buena onda” que el patrón decide darte si le sobró dinero. Es un derecho constitucional en México. Básicamente, la ley dice que si tú ayudaste a la empresa a generar riqueza con tu trabajo, tienes derecho a recibir una parte de esa riqueza. En esta guía te voy a explicar, con manzanitas y con los números reales de este 2026, cómo se calcula, cuándo te llega y qué trucos usan algunas empresas para no pagar, para que no te dejes.

¿QUÉ ES EXACTAMENTE LA PTU?
La PTU es el 10% de las ganancias anuales que una empresa generó el año anterior. Es decir, en este 2026, lo que te van a pagar es una parte de lo que la empresa ganó durante todo el 2025. 

Este dinero se divide en dos partes iguales:
- El 50% se reparte entre los trabajadores según los días trabajados en el año.
- El otro 50% se reparte proporcionalmente al sueldo de cada quien.
De esta forma, la ley intenta que el reparto sea justo tanto para el que gana menos pero nunca falta, como para el que tiene un puesto de mayor responsabilidad.

LAS FECHAS CLAVE: ¿CUÁNDO CAE LA LANA EN 2026?
Dependiendo de para quién trabajes, la fecha límite cambia:
- Si trabajas para una empresa (Persona Moral): Tienen del 1 de abril al 30 de mayo para pagarte.
- Si trabajas para un patrón físico (Persona Física, como un despacho o un comercio a nombre de alguien): Tienen del 1 de mayo al 29 de junio.

Si llega julio y no has visto ni un peso, y sabes que la empresa tuvo éxito el año pasado, es momento de empezar a preguntar en RH o buscar asesoría.

LA REFORMA DE 2021 Y LOS FAMOSOS “TOPES”
Desde hace unos años, las reglas del juego cambiaron para ponerle un límite a lo que puedes recibir. No importa si la empresa ganó miles de millones, tu PTU tiene un tope máximo que será lo que más te convenga de estas dos opciones:
- Tres meses de tu salario actual.
- El promedio de la PTU que recibiste en los últimos tres años.

Esto se hizo para estandarizar el pago en sectores como la minería o el acero, donde las utilidades eran gigantescas, pero también sirve para que tú tengas una idea clara de cuál es el “techo” de tu cheque.

EL CÁLCULO DE IMPUESTOS: LA REGLA DE LAS 15 UMAS
Al igual que el aguinaldo, el SAT te deja una parte de tus utilidades “limpia” de impuestos. Para este 2026, la exención es de 15 UMAs (Unidad de Medida y Actualización).
- Valor de la UMA 2026: $117.31 diarios.
- Monto exento de PTU: $117.31 x 15 = $1,759.65 pesos.

Si tus utilidades son de $10,000 pesos, solo pagarás ISR sobre $8,240.35 ($10,000 - $1,759.65). Si recibes menos de $1,759.65, no te deben descontar ni un centavo de impuesto.

¿QUIÉN TIENE DERECHO Y QUIÉN NO?
Tienen derecho todos los trabajadores que hayan laborado al menos 60 días durante el año anterior, ya sean de planta o eventuales. Incluso si ya no trabajas ahí pero cumpliste con esos 60 días en 2025, ¡tienes que ir a cobrar tus utilidades!

¿Quiénes NO reciben utilidades?
- Directores, administradores y gerentes generales de las empresas.
- Trabajadores domésticos.
- Personas que trabajan por honorarios (porque técnicamente no son empleados).
- Trabajadores de empresas que están exentas.

EMPRESAS QUE NO PAGAN (Y ES LEGAL)
No te enojes con tu patrón antes de tiempo; hay casos donde la ley los perdona de pagar PTU:
- Empresas de nueva creación durante su primer año de funcionamiento.
- Empresas nuevas que se dedican a fabricar un producto nuevo (exentas por dos años).
- Instituciones de asistencia privada sin fines de lucro (como fundaciones o el Teletón).
- El IMSS y otras instituciones públicas descentralizadas con fines culturales o de beneficencia.

¿QUÉ HACER SI SOSPECHAS QUE TE ESTÁN ENGAÑANDO?
Es muy común que las empresas digan: “No hubo utilidades este año, salimos en tablas”. Como trabajador, tienes derecho a verificar si esto es cierto. 
La empresa tiene la obligación de entregar a un comité de trabajadores una copia de su declaración anual 10 días después de presentarla al SAT. Ahí puedes ver si realmente hubo ganancias o si el patrón se compró un coche nuevo a nombre de la empresa para bajar las utilidades.

Si crees que hay algo raro, puedes acudir a la Secretaría del Trabajo o a la PROFEDET para solicitar una inspección. Tienes un año de plazo para reclamar tu PTU a partir de la fecha en que debió pagarse.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si estoy por outsourcing me tocan utilidades?
R: Con la reforma de 2021, la mayoría de los esquemas de outsourcing de personal desaparecieron. Si estás contratado legalmente, te tocan las utilidades de la empresa para la que realmente trabajas.

P: ¿El salario mínimo afecta mi PTU?
R: El salario mínimo de 2026 es de $315.04 diarios. Si ganas el mínimo, igual tienes derecho a PTU si la empresa tuvo ganancias, y tu pago estará exento de ISR.

P: ¿Me pueden pagar las utilidades en especie (con producto)?
R: ¡Jamás! La PTU se debe pagar en moneda de curso legal (dinero en efectivo o transferencia). No aceptes “vales” ni “mercancía”.

P: ¿Si tuve incapacidad por maternidad me quitan días de utilidades?
R: No. Los periodos de incapacidad por maternidad y por riesgo de trabajo se consideran como días trabajados para el reparto de utilidades.

P: ¿Qué pasa si la empresa se fusionó o cambió de nombre?
R: La nueva empresa adquiere las obligaciones de la anterior, incluyendo el reparto de utilidades proporcional al tiempo laborado.

CONCLUSIÓN: TU TRABAJO VALE
La PTU es el reconocimiento de que tú eres parte fundamental del éxito de tu empresa. No lo veas como un “extra”, sino como el fruto de tu esfuerzo de todo un año. En MiLana te invitamos a usar nuestra calculadora de PTU para que estimes cuánto te toca y verifiques que el descuento de ISR sea el correcto. ¡Haz valer tus derechos y disfruta tu lana!` },
  { id: "vac", titulo: "Vacaciones Dignas 2026: Todo sobre tus días de descanso y la prima vacacional", calc: "vac",
    texto: `INTRODUCCIÓN: ¿POR QUÉ AHORA DESCANSAMOS MÁS EN MÉXICO?
¡Qué onda! Si sientes que este año te urge un respiro, te tengo una excelente noticia. Estamos en 2026 y la reforma de ‘Vacaciones Dignas’, que entró en vigor en enero de 2023, ya es una realidad totalmente establecida en todas las empresas del país. Antes de este cambio, México era uno de los países con menos vacaciones en el mundo, dándonos apenas 6 tristes días después de un año entero de chamba. 

Hoy, el panorama es muy distinto. La ley reconoce que el descanso no es un lujo, sino una necesidad básica para tu salud mental y tu productividad. En esta guía te voy a explicar, como el amigo contador que se sabe todas las de la Ley Federal del Trabajo (LFT), cuántos días te tocan exactamente según tus años de servicio, cómo pedir tus vacaciones y cuánto dinero extra te deben depositar por concepto de Prima Vacacional. ¡Prepara las maletas porque aquí te digo qué onda!

LA NUEVA TABLA DE VACACIONES 2026
La regla de oro en 2026 es que, desde que cumples tu primer año de trabajo, ya tienes derecho a 12 días de vacaciones pagadas. A partir de ahí, la tabla va subiendo de dos en dos hasta llegar al quinto año. 

Aquí tienes el desglose oficial para que lo cheques con tu contrato:
- Año 1: 12 días.
- Año 2: 14 días.
- Año 3: 16 días.
- Año 4: 18 días.
- Año 5: 20 días.
- De 6 a 10 años: 22 días.
- De 11 a 15 años: 24 días.
- De 16 a 20 años: 26 días.

Fíjate bien que después del quinto año, el aumento ya no es cada año, sino cada bloque de cinco años. Si llevas 7 años en tu empresa actual, te tocan 22 días de descanso. ¡Casi un mes de vacaciones!

¿DÍAS NATURALES O DÍAS HÁBILES?
Este es el error número uno que cometen los trabajadores y algunos patrones ‘vivos’. La ley dice que las vacaciones se computan en días hábiles. ¿Qué significa esto? Que si tú trabajas de lunes a viernes, el sábado y el domingo NO cuentan como días de vacaciones. 

Por ejemplo, si te tomas tus 12 días del primer año y te vas un lunes, estarías regresando hasta el tercer martes después de irte. En la práctica, esos 12 días se convierten en más de dos semanas reales de desconexión total. Si tu patrón quiere contarte los domingos como parte de tus vacaciones, recuérdale que la LFT no permite eso; el día de descanso semanal es independiente de tu periodo vacacional.

LA PRIMA VACACIONAL: DINERO EXTRA PARA EL VIAJE
Las vacaciones no solo son días de descanso; también vienen con un ‘bono’ obligatorio llamado Prima Vacacional. La ley establece que el patrón debe pagarte, como mínimo, un 25% adicional sobre tu salario de los días que te tomas. 

Es decir, si te tomas 10 días de vacaciones, la empresa te paga esos 10 días de sueldo normal (porque las vacaciones son pagadas) y además te da un cheque extra por el valor de 2.5 días de sueldo. Ese dinero es para que ‘tengas para el refresco’ o para los gastos del viaje.

EL CÁLCULO PASO A PASO (EJEMPLO 2026)
Vamos a ponerle números reales a esto. Imagina que ganas el salario mínimo general de este año, que es de $315.04 pesos diarios. Acabas de cumplir 3 años en tu trabajo.

Paso 1: Ver cuántos días te tocan.
Según la tabla, por 3 años de antigüedad te corresponden 16 días de vacaciones.

Paso 2: Calcular el pago de los días.
16 días x $315.04 = $5,040.64 pesos. (Este dinero lo recibes como si hubieras ido a trabajar).

Paso 3: Calcular la Prima Vacacional (25%).
$5,040.64 x 0.25 = $1,260.16 pesos.

En total, por irte a descansar tus 16 días, recibirás tu sueldo normal más esos $1,260.16 pesos adicionales de prima.

LAS REGLAS DEL JUEGO: ¿CUÁNDO Y CÓMO PEDIRLAS?
No puedes simplemente dejar de ir el lunes y decir que estás de vacaciones. Hay un proceso legal:
- Aniversario: El derecho a las vacaciones se genera el día que cumples años en la empresa.
- Periodo para tomarlas: Tienes 6 meses después de tu aniversario para que la empresa te asigne las fechas. 
- La última palabra: Aunque tú puedes proponer las fechas, el patrón tiene la facultad de organizarlas según las necesidades del negocio, pero ¡ojo!, no puede negártelas. 
- Caducidad: Tienes un año y medio en total (los 6 meses de asignación más 1 año de reclamo) para disfrutar tus días. Si no las pides en ese tiempo, podrías perder el derecho a reclamarlas legalmente.

PROHIBICIONES Y DERECHOS IRRENUNCIABLES
Como tu amigo contador, te doy estos tips para que no te chamaqueen:
- No se pueden vender: El patrón no puede decirte ‘no te vayas y te pago los días extra’. Está prohibido por ley cambiar vacaciones por dinero. El objetivo es que descanses.
- No se pueden acumular infinitamente: Aunque algunos patrones lo permiten, la ley no los obliga a dejarte juntar 50 días de tres años distintos. Trata de tomarlas cada año.
- Pago proporcional en finiquito: Si renuncias o te despiden antes de tomar tus vacaciones, te las tienen que pagar en dinero como parte de tu finiquito o liquidación.

IMPUESTOS Y LA UMA 2026
Al igual que otros pagos, la prima vacacional tiene una parte libre de impuestos para que no todo se lo lleve el SAT. La exención es de 15 UMAs.
- Valor UMA 2026: $117.31 diarios.
- Monto exento: $117.31 x 15 = $1,759.65 pesos.

Si tu prima vacacional es menor a esa cantidad, la recibes completita. Si es mayor, solo pagas ISR sobre la diferencia.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Me pueden obligar a tomar mis vacaciones en fechas que yo no quiero?
R: La ley dice que las fechas se fijan ‘de común acuerdo’. Si no hay acuerdo, el patrón tiene cierta preferencia por las necesidades de la empresa, pero nunca puede dejarte sin ellas.

P: ¿Qué pasa si trabajo medio tiempo?
R: Tienes exactamente el mismo derecho a los días de la tabla (12 el primer año, etc.). Lo que cambia es el monto de tu pago, que será proporcional a tu sueldo de medio tiempo.

P: ¿Si estoy en periodo de prueba tengo vacaciones?
R: El derecho se genera al cumplir el año. Si tu periodo de prueba es de 3 meses y luego te contratan, esos 3 meses cuentan para tu antigüedad total.

P: ¿Puedo tomar mis 12 días seguidos?
R: ¡Sí! La ley establece que el trabajador tiene derecho a disfrutar de al menos 12 días de vacaciones en forma continua. Tú decides si los quieres todos juntos o repartidos.

P: ¿Si me enfermo durante mis vacaciones, me regresan los días?
R: Legalmente no. Si ya estabas de vacaciones, los días corren. Sin embargo, si te enfermas ANTES de que empiecen y tienes incapacidad del IMSS, tus vacaciones se deben posponer.

CONCLUSIÓN: DESCANSAR ES TU DERECHO
Las Vacaciones Dignas son un logro histórico para los trabajadores en México. No sientas culpa por pedir tus días; es tiempo que ya te ganaste con tu esfuerzo diario. En MiLana te sugerimos usar nuestra tabla de vacaciones para que verifiques cuántos días te tocan este año y cuánto debes recibir de prima vacacional. ¡Disfruta tu descanso, te lo mereces!` },
  { id: "cos", titulo: "¿Cuánto cuesta realmente contratar a un empleado en 2026? La guía para no quebrar tu negocio", calc: "cos",
    texto: `INTRODUCCIÓN: MÁS ALLÁ DEL SUELDO EN EL CONTRATO
¡Qué onda, emprendedor! Si estás aquí es porque tu negocio está creciendo y ya no puedes tú solo con todo. ¡Felicidades por ese paso! Pero antes de que pongas el anuncio en Facebook o LinkedIn ofreciendo “X” cantidad de dinero, siéntate un momento conmigo. Como tu amigo contador, mi deber es evitar que te lleves una sorpresa desagradable al ver tu cuenta bancaria a final de mes.

Muchos patrones primerizos cometen el error de pensar que si contratan a alguien por $15,000 pesos al mes, eso es lo que les va a costar. La realidad en México es muy distinta. Entre cuotas al IMSS, aportaciones para vivienda, impuestos estatales y prestaciones de ley, ese empleado te va a costar entre un 28% y un 35% más de lo que dice su sueldo bruto. En esta guía vamos a desglosar cada peso para que este 2026 presupuestes como un profesional.

LA DIFERENCIA ENTRE SUELDO BRUTO Y COSTO PATRONAL
Lo primero es separar las cosas. El sueldo bruto es la cantidad que acuerdas con el trabajador antes de cualquier descuento. De ahí sale el ISR y la cuota obrera que el trabajador paga. Pero tú, como patrón, tienes que poner “lana” extra de tu propia bolsa para cubrir sus derechos sociales.

Para este 2026, si ofreces un sueldo de $15,000 pesos, el costo real para tu empresa andará rondando los $19,500 o incluso los $21,000 pesos mensuales, dependiendo del estado donde operes.

EL “COMBO” DE SEGURIDAD SOCIAL: IMSS, INFONAVIT Y SAR
Este es el bloque más pesado del costo extra. Al registrar a alguien legalmente, te conviertes en su protector ante la ley.
* IMSS Patronal: Es la cuota más alta y cubre servicios médicos, guarderías e invalidez. En promedio, representa un 20.4% adicional sobre el sueldo.
* Infonavit: Como patrón, debes aportar obligatoriamente el 5% del sueldo base de tu empleado para su fondo de vivienda. Este dinero no se le descuenta al trabajador; lo pones tú.
* SAR / Retiro: Para que tu empleado tenga una pensión algún día, debes depositar el 2% de su salario en su cuenta de Afore.

EL IMPUESTO SOBRE NÓMINA (ISN): EL COSTO POR ESTADO
Además de lo federal, cada estado en México te cobra un impuesto por el simple hecho de tener empleados. El ISN varía según la entidad donde esté registrada tu empresa.
* En la CDMX, el Estado de México, Nuevo León, Puebla y otros estados grandes, la tasa es del 3%.
* En lugares como Jalisco o Querétaro, es un poco más bajo, del 2%.
* Hay casos específicos como Guanajuato con 2.95% o Yucatán con 2.5%.
Nuestra calculadora en MiLana ya tiene cargadas estas tasas actualizadas a marzo de 2026 para que no tengas que andar buscando en la ley estatal.

PRESTACIONES MÍNIMAS “DERRETIDAS” EN EL MES
Aunque el aguinaldo y las vacaciones se pagan en momentos específicos, un buen contador te dirá que debes “provisionar” (ahorrar) una parte cada mes para que no te descapitalices cuando llegue diciembre.
* Aguinaldo: El mínimo son 15 días de salario al año. Esto equivale a un 4.16% extra sobre el sueldo mensual.
* Vacaciones y Prima Vacacional: Con la ley de Vacaciones Dignas, el primer año son 12 días. La prima vacacional del 25% sobre esos 12 días también suma al costo total.

EL EFECTO DE LA UMA Y EL SALARIO MÍNIMO 2026
Para tus cálculos de este año, no olvides los valores vigentes:
* Salario Mínimo General: $315.04 diarios. Nunca puedes pagar menos de esto por una jornada completa.
* UMA (Unidad de Medida y Actualización): $117.31 diarios. Se usa para calcular los topes de las cuotas del IMSS y ciertas exenciones.

CASO PRÁCTICO: ¿CUÁNTO CUESTA UN EMPLEADO DE $15,000 EN CDMX?
Vamos a hacer la cuenta rápida para un empleado en la Ciudad de México con prestaciones mínimas:
* Sueldo Bruto: $15,000.00.
* IMSS Patronal (~20.4%): $3,060.00.
* Infonavit (5%): $750.00.
* SAR (2%): $300.00.
* ISN CDMX (3%): $450.00.
* Aguinaldo y Prima Vacacional (prorrateado): ~$750.00.

Total Mensual: $20,310.00 pesos. 
Como ves, ese empleado te cuesta $5,310 pesos más de lo que dice su sueldo nominal. Es un sobrecosto del 35% sobre el sueldo.

¿POR QUÉ NO DEBES PAGAR “POR FUERA” O EN EFECTIVO?
Muchos emprendedores caen en la tentación de no registrar al empleado o pagarle una parte en efectivo para “ahorrar”. Te lo digo como amigo: es el peor error que puedes cometer.
1.  Riesgo de demanda: Si el empleado se pelea contigo, puede demandar el reconocimiento de la relación laboral y te obligarán a pagar todas las cuotas retroactivas con multas gigantescas.
2.  Accidentes laborales: Si alguien se accidenta en tu negocio y no tiene IMSS, tú eres responsable de todos los gastos de hospitalización y, en el peor de los casos, de una pensión de por vida. Eso puede quebrar cualquier PyME.
3.  No es deducible: El sueldo que pagas “por fuera” no lo puedes restar de tus impuestos (ISR), por lo que terminas pagando más impuestos al final del año.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Puedo registrar a alguien con el salario mínimo y pagarle el resto por fuera?
R: Es una práctica común pero ilegal llamada “subdeclaración”. El IMSS tiene algoritmos para detectar esto y las multas son severas. Además, le quitas puntos de Infonavit y ahorro para el retiro a tu gente.

P: ¿El costo cambia si el empleado es de medio tiempo?
R: Sí, las cuotas son proporcionales al sueldo pagado, pero recuerda que el registro ante el IMSS siempre debe ser por el tiempo real laborado.

P: ¿Tengo que pagar ISN si solo tengo un empleado?
R: Sí. En la mayoría de los estados, el Impuesto Sobre Nómina se causa desde el primer trabajador que tengas dado de alta.

P: ¿Qué pasa si mi empresa está en la frontera norte?
R: El salario mínimo allá es más alto ($472.56 diarios), por lo que tu base de costo inicial será mayor, aunque existen algunos estímulos fiscales para el IVA e ISR en esa zona.

P: ¿La calculadora de MiLana me da el costo exacto?
R: Te da un estimado muy preciso basado en los porcentajes de ley y las tasas de ISN por estado vigentes en marzo de 2026. Siempre es bueno validarlo con tu contador para casos muy específicos.

CONCLUSIÓN: CONTRATA CON LA CABEZA FRÍA
Contratar personal es la mejor forma de escalar tu negocio, pero debes hacerlo con los números reales en la mano. No te quedes solo con el sueldo bruto; suma ese 30-35% de carga patronal a tu presupuesto mensual. En MiLana queremos que tu negocio crezca de forma sana y legal. Usa nuestra calculadora de costo real del empleado para planear tu siguiente contratación con total seguridad. ¡Mucho éxito con tu equipo!` },
  { id: "aum", titulo: "Simulador de Aumento 2026: ¿Cuánto te cuesta realmente subirle el sueldo a tu equipo?", calc: "aum",
    texto: `INTRODUCCIÓN: EL DILEMA DEL PATRÓN “BUENA ONDA”
¡Qué onda, jefe! Si estás leyendo esto es porque tienes a alguien en tu equipo que se la está rifando y quieres reconocer su esfuerzo con un aumento. ¡Eso habla muy bien de ti y de tu empresa! Retener el talento es mucho más barato que andar contratando gente nueva cada tres meses. Pero, antes de que le des la noticia a tu colaborador, hay una realidad financiera que debes conocer: subir un sueldo no es solo cambiar una cifra en el sistema.

Como tu amigo contador, mi chamba es decirte la verdad sin rodeos. En México, cuando tú decides subirle, por ejemplo, $3,000 pesos al mes a alguien, ese dinero no sale “limpio” de tu cuenta bancaria. Hay un efecto cascada de impuestos y cuotas que hace que tu costo se dispare. En esta guía vamos a ver por qué sucede esto y cómo presupuestar correctamente este 2026 para que tu generosidad no ponga en riesgo tu flujo de caja.

¿POR QUÉ UN AUMENTO NO ES SOLO EL MONTO NOMINAL?
Imagina que un empleado gana actualmente $15,000 pesos brutos y quieres subirle a $18,000. Para el empleado, el aumento es de $3,000 pesos. Pero para ti, como patrón, ese aumento “arrastra” otros costos obligatorios que se calculan como un porcentaje del sueldo base.

Si subes la base, suben automáticamente:
- Tus cuotas al IMSS.
- Tu aportación al Infonavit.
- Tu depósito al SAR/Afore.
- El Impuesto Sobre Nómina (ISN) de tu estado.

LA REGLA DEL “1.30”: EL TRUCO DEL CONTADOR
Para que no te quiebres la cabeza con fórmulas matemáticas complejas en cada junta, los contadores usamos una regla de dedo muy efectiva en México: Multiplica cualquier aumento por 1.30.

Esta regla nos dice que por cada peso que le subas al sueldo bruto, tú terminarás pagando aproximadamente 30 centavos adicionales en cargas sociales e impuestos patronales. Si le subes $3,000 pesos, el impacto real en tus gastos será de unos $3,900 pesos mensuales. En un año, esos $900 pesos de diferencia se convierten en casi $11,000 pesos extra que no tenías planeados.

EL DESGLOSE DE LAS CARGAS PATRONALES EN 2026
Para que entiendas a dónde se va ese 30% extra, aquí tienes el desglose de lo que tú pagas como patrón este año:
- IMSS Patronal: Representa aproximadamente el 20.4% del sueldo. Es la cuota que cubre el servicio médico y guarderías de tu gente.
- Infonavit: Debes aportar el 5% mensual sobre el nuevo sueldo. Es dinero para la vivienda del trabajador.
- SAR (Retiro): El 2% del sueldo va directo a su Afore.
- Impuesto Sobre Nómina (ISN): Depende de tu estado. Por ejemplo, en CDMX, Nuevo León o el Estado de México, es el 3%. En otros como Jalisco o Querétaro, es el 2%.

Al sumar 20.4% + 5% + 2% + 3%, llegamos a ese 30.4% de sobrecosto que mencionamos en la regla del 1.30.

CASO PRÁCTICO: EL AUMENTO DE $15,000 A $18,000 (CDMX)
Vamos a ver los números reales para un empleado en la Ciudad de México:
- Sueldo Actual: $15,000. Costo total para ti: ~$19,500.
- Sueldo Nuevo: $18,000. Costo total para ti: ~$23,400.
- Aumento Nominal: $3,000.
- Aumento Real para tu empresa: $3,900.

Como ves, el aumento te cuesta un 30% más de lo que el empleado recibe en su contrato.

EL EFECTO EN EL TRABAJADOR: EL SUELDO NETO
Es importante que también hables con tu empleado sobre el sueldo “neto” (lo que le llega a su tarjeta). Al subir el sueldo bruto, también sube el ISR (impuesto) que se le retiene. 
A veces, un aumento de $3,000 pesos brutos se traduce en solo $2,300 o $2,400 pesos adicionales en su cuenta, porque el SAT se lleva una rebanada más grande al subir de escalón en la tabla del ISR. Asegúrate de aclarar si el aumento es “bruto” o “neto” para evitar decepciones.

ALTERNATIVAS AL AUMENTO EN EFECTIVO
Si los números no te dan para un aumento de sueldo base por el alto costo patronal, hay formas creativas y legales de dar más dinero sin que se disparen los impuestos:
- Vales de Despensa: Tienen beneficios fiscales y no siempre integran para el pago de cuotas del IMSS e Infonavit.
- Bonos de Productividad: Se pueden pagar de forma variable.
- Apoyos para estudios o capacitación: Son deducibles para ti y de gran valor para el empleado.
Recuerda que cualquier concepto que “integre” al salario subirá tus cuotas, así que consulta con tu contador qué opciones te convienen más.

DATOS OFICIALES PARA TUS CÁLCULOS 2026
No olvides tener estos valores presentes para tus proyecciones de este año:
- Salario Mínimo General: $315.04 diarios.
- UMA (Unidad de Medida y Actualización): $117.31 diarios.
- Factor de Integración (1er año): 1.0493.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Puedo dar un aumento que solo dure unos meses?
R: Legalmente, el sueldo no se puede bajar una vez que se ha otorgado. Si quieres dar algo temporal, es mejor manejarlo como un “Bono Extraordinario”.

P: ¿El aumento afecta el pago de la PTU?
R: Sí, al final del año, el reparto de utilidades se calcula basándose en los días trabajados y el sueldo percibido. Un sueldo mayor significa un reparto mayor.

P: ¿Si mi empresa está en la frontera, el costo es menor?
R: El salario mínimo allá es más alto ($472.56), por lo que el piso de tus costos es más elevado, aunque los porcentajes de cuotas patronales son similares.

P: ¿Tengo que actualizar el sueldo ante el IMSS cada vez que doy un aumento?
R: ¡Por supuesto! Tienes 5 días hábiles para reportar el cambio de salario al IMSS. Si no lo haces y hay un accidente, el seguro solo cubrirá basándose en el sueldo viejo y tú tendrás que pagar la diferencia.

P: ¿La calculadora de MiLana incluye el ISN estatal?
R: Sí, nuestra herramienta te permite seleccionar tu estado para aplicar la tasa correspondiente (2%, 2.5% o 3%) de forma automática.

CONCLUSIÓN: VALORA A TU EQUIPO CON LOS PIES EN LA TIERRA
Subir el sueldo es la mejor inversión que puedes hacer en tu activo más valioso: tu gente. Solo asegúrate de hacer bien las cuentas. Usa nuestra calculadora de aumento en MiLana para ver el impacto real en tu presupuesto mensual y anual. Así podrás dar la noticia con la seguridad de que tu empresa seguirá siendo rentable y sana. ¡Mucho éxito con ese crecimiento!` },
  { id: "des", titulo: "Costo de Despido 2026: Guía para patrones sobre liquidaciones e indemnizaciones", calc: "des",
    texto: `INTRODUCCIÓN: LA IMPORTANCIA DE CALCULAR ANTES DE ACTUAR
¿Qué onda, jefe? Si estás leyendo esto, probablemente estés pasando por un momento difícil en tu empresa. Tener que dejar ir a alguien nunca es plato de buen gusto, ya sea por falta de presupuesto, por una reestructura o porque el desempeño del colaborador simplemente no es el que esperabas. Pero, como tu amigo contador, mi deber es recordarte que en México, "dar las gracias" tiene un precio por ley, y suele ser más alto de lo que la mayoría de los emprendedores imagina.

México tiene una de las legislaciones laborales más protectoras de Latinoamérica. Esto significa que, si no tienes una causa de despido perfectamente justificada y documentada ante la ley, te toca pagar una 'Liquidación' completa. En esta guía te voy a explicar, con los números de 2026, cuánto dinero necesitas tener en la cuenta antes de llamar a alguien a la oficina de RH para evitar que un despido mal planeado ponga en jaque la estabilidad de tu negocio.

1. ¿POR QUÉ ES TAN CARO DESPEDIR EN MÉXICO?
La Ley Federal del Trabajo (LFT) parte de la base de que el trabajador es la parte más vulnerable en la relación laboral. Por eso, si tú como patrón decides terminar el contrato sin que el empleado haya cometido una falta grave (como robo, violencia o faltas injustificadas acumuladas), la ley te obliga a pagar una indemnización por el daño que le causas al dejarlo sin su fuente de ingresos.

Un error muy común entre patrones es pensar que con pagar el 'finiquito' (lo proporcional de aguinaldo y vacaciones) es suficiente. La realidad es que un empleado con un sueldo de $18,000 pesos y 5 años de antigüedad puede generar una liquidación superior a los $157,000 pesos. Y eso es solo la base; si te vas a un juicio y lo pierdes, la cifra puede duplicarse o triplicarse con los salarios caídos.

2. EL CONCEPTO CLAVE PARA EL PATRÓN: EL SDI
Para calcular cuánto te va a costar el despido, olvídate del sueldo mensual que le depositas. La base de todo es el Salario Diario Integrado (SDI). Este salario incluye el sueldo diario más la parte proporcional de todas las prestaciones que el empleado recibe. 
En el primer año, con las prestaciones mínimas de 2026, el factor de integración es de 1.0493. Esto significa que, si el sueldo diario es de $600 pesos, para efectos de despido estarás pagando sobre una base de $629.58 pesos. Este pequeño ajuste hace que cada día de indemnización sea más caro para tu bolsillo.

3. LOS TRES "GOLPES" AL PRESUPUESTO: LA INDEMNIZACIÓN
Cuando el despido es injustificado, la liquidación obligatoria se compone de tres conceptos principales:

A) Los 3 meses de sueldo (Indemnización Constitucional):
Es el pago de 90 días de SDI. Es obligatorio y no hay forma de negociarlo hacia abajo si el despido no tiene causa legal justificada.

B) Los 20 días por cada año trabajado:
Este es el concepto que más asusta a los patrones. Consiste en pagar 20 días de SDI por cada año que el empleado estuvo en tu empresa. Aunque técnicamente se aplica cuando el trabajador demanda la reinstalación y tú te niegas, en la práctica se incluye en casi todos los convenios de terminación para que el empleado acepte irse sin demandar.

C) Prima de Antigüedad:
Consiste en pagar 12 días de salario por cada año trabajado. Aquí hay un tope legal: el salario para este cálculo no puede exceder de dos salarios mínimos diarios.
- Salario Mínimo 2026: $315.04 diarios.
- Tope de Prima de Antigüedad: $630.08 diarios.
Si tu empleado gana más de ese tope, haces el cálculo con los $630.08.

4. EL "PILÓN": EL FINIQUITO PROPORCIONAL
Además de las indemnizaciones anteriores, no puedes olvidar lo que el empleado ya se ganó por el tiempo trabajado en el año actual:
- Aguinaldo proporcional: Los días acumulados desde el 1 de enero hasta la fecha del despido.
- Vacaciones y Prima Vacacional: Los días que no haya tomado de su último año y los proporcionales del año en curso. En 2026, recuerda que el primer año ya son 12 días mínimos.

5. CASO PRÁCTICO: EL COSTO DE UN DESPIDO EN 2026
Vamos a poner números reales para que veas el impacto. Supongamos que tienes un empleado con estas condiciones:
- Sueldo mensual: $18,000.
- Antigüedad: 5 años.
- Sueldo Diario: $600.
- SDI (estimado): $630.

Cálculo de la Liquidación:
1. Indemnización de 90 días (90 x $630): $56,700.
2. 20 días por año (100 días x $630): $63,000.
3. Prima de Antigüedad (60 días x $630.08 tope): $37,804.

Subtotal de Liquidación: $157,504 pesos. 
*A esto todavía le falta sumar el finiquito proporcional (aguinaldo y vacaciones), lo que elevará la cifra final cerca de los $170,000 pesos.*

6. ESTRATEGIAS PARA PATRONES: ¿CÓMO REDUCIR RIESGOS?
Como amigo contador, te doy estos consejos para que no te veas sorprendido:
- Documenta todo: Si un empleado no está cumpliendo, levanta actas administrativas. Si tienes pruebas de sus fallas, puedes intentar un despido justificado (aunque es difícil de ganar, te da una mejor posición para negociar).
- Presupuesta el despido desde la contratación: Incluye en tus costos de operación una pequeña reserva mensual para indemnizaciones. Así, cuando llegue el momento, tendrás el dinero listo y no descapitalizarás tu negocio.
- Negocia convenios: Siempre es mejor llegar a un acuerdo amistoso y firmarlo ante el Centro de Conciliación Laboral. Un "buen arreglo" suele ser más barato que un "mal juicio".
- Verifica el registro IMSS: Asegúrate de que el SDI con el que lo tienes dado de alta es el correcto. Si lo tienes con el mínimo y lo despides, él puede demandar la diferencia de cuotas y salarios, lo que te saldrá mucho más caro.

7. EL IMPACTO DE LA UMA Y EL SALARIO MÍNIMO 2026
- UMA 2026: $117.31. Se usa para calcular la parte exenta de impuestos de la liquidación.
- Salario Mínimo 2026: $315.04. Define el tope de la prima de antigüedad.
Es fundamental usar estos valores actualizados para que tu cálculo sea legalmente válido y no te quedes corto en el pago.

8. PREGUNTAS FRECUENTES (FAQ)
P: ¿Puedo pagar la liquidación en parcialidades?
R: Legalmente, la liquidación debe pagarse en una sola exhibición al momento de la terminación. Si el empleado acepta pagos, debe quedar muy bien documentado ante la autoridad laboral, pero siempre hay riesgo de que luego demande el pago total inmediato.

P: ¿Qué pasa si el empleado no quiere firmar la liquidación?
R: Tienes que acudir al Centro de Conciliación Laboral para depositar el dinero y notificar oficialmente el despido. No le entregues el dinero sin que firme el convenio correspondiente.

P: ¿La liquidación es deducible de impuestos para mi empresa?
R: Sí, los pagos por indemnizaciones y finiquitos son deducibles para el ISR de tu empresa, siempre y cuando estén correctamente timbrados en un CFDI de nómina.

P: ¿El empleado paga impuestos sobre su liquidación?
R: Sí, pero hay una exención importante. Una gran parte de la indemnización está libre de ISR (90 veces la UMA por cada año de servicio). Solo la diferencia paga el impuesto que tú debes retener.

P: ¿Si la empresa quiebra, tengo que pagar liquidación?
R: Sí. En caso de quiebra o cierre, los salarios e indemnizaciones de los trabajadores tienen prioridad sobre cualquier otra deuda de la empresa (incluyendo deudas con bancos o proveedores).

CONCLUSIÓN: LA PREVENCIÓN ES TU MEJOR HERRAMIENTA
Terminar una relación laboral es costoso y complejo en México. En MiLana queremos que seas un patrón informado y exitoso. Usa nuestra calculadora de costo de despido 2026 para planear tus movimientos con precisión financiera y evitar sorpresas que afecten tu patrimonio. Recuerda que un negocio sano es aquel que cumple con la ley y respeta los derechos de su gente. ¡Mucho éxito en la gestión de tu equipo!` },
  { id: "sdi", titulo: "Salario Diario Integrado (SDI) 2026: La clave para entender tu verdadera protección legal", calc: null,
    texto: `INTRODUCCIÓN: EL NÚMERO “INVISIBLE” QUE MUEVE TU VIDA LABORAL
¡Qué onda! Hoy vamos a hablar de un término que seguramente has visto en tu recibo de nómina o escuchado en alguna junta de RH y que, para ser sinceros, suena a chino para la mayoría: el Salario Diario Integrado o SDI. 

Muchos trabajadores viven pensando que su sueldo es solo lo que les depositan cada quincena. Pero, como tu amigo contador, te voy a contar un secreto: para la ley, tú vales más de lo que dice tu pago neto. Existe un número “mejorado” que incluye no solo tu sueldo, sino también tus prestaciones “derretidas” en cada día del año. Ese es el SDI. En esta guía de 2026, te voy a explicar por qué este número es el más importante cuando te enfermas, cuando quieres comprar casa o cuando, lamentablemente, te despiden. ¡Vamos a desmenuzarlo!

¿QUÉ ES EXACTAMENTE EL SALARIO DIARIO INTEGRADO?
El SDI es la suma de tu salario diario más todas las prestaciones que recibes por tu trabajo, ya sean las mínimas de ley o las que tu empresa te dé de forma extra. La idea de la Ley Federal del Trabajo (LFT) es que, si te pasa algo, no te paguen solo por tu sueldo base, sino por todo el paquete de beneficios que recibes.

Imagina que tu sueldo es un café americano. El SDI es ese mismo café pero con azúcar, crema y un panecito a un lado. Es el “combo” completo de tu valor diario para la seguridad social y las indemnizaciones.

SDI VS. SBC: ¿SON LO MISMO?
Aquí es donde hasta a los contadores se nos puede ir la onda si no tenemos cuidado. 
- El SDI (Salario Diario Integrado) se usa principalmente para calcular liquidaciones e indemnizaciones laborales bajo la LFT.
- El SBC (Salario Base de Cotización) es el término que usa el IMSS para calcular tus cuotas y tus incapacidades.
Aunque en la práctica para la mayoría de los mortales son casi el mismo número, el SBC tiene ciertos topes (como el límite de 25 UMAs) que el SDI para liquidaciones no siempre tiene. Pero para efectos de esta charla de amigos, quédate con que es tu salario “inflado” con prestaciones.

EL FAMOSO “FACTOR DE INTEGRACIÓN” 2026
¿Cómo pasamos de tu sueldo normal al SDI? Usamos una cifra mágica llamada Factor de Integración. Este factor representa cuánto valen tus prestaciones mínimas por cada peso que ganas.

Para este 2026, si tienes las prestaciones mínimas de ley y es tu primer año en la empresa, el factor es de 1.0493. Este número sale de sumar:
- Los 365 días del año.
- Los 15 días de aguinaldo mínimo.
- Los 3 días de prima vacacional (que es el 25% de tus 12 días de vacaciones del primer año).
Al dividir el total (383 días de pago) entre los 365 días del año, obtenemos el 1.0493. 



¿PARA QUÉ SIRVE EL SDI EN TU DÍA A DÍA?
Este número no está ahí solo para adornar el recibo; tiene tres funciones vitales para tu bolsillo:

Tu pensión y tu Afore:
Las aportaciones que tu patrón hace a tu cuenta de retiro (el 2% de SAR) se calculan sobre tu salario integrado, no sobre el básico. Si tu SDI es alto, tu cuenta de jubilación crece más rápido.

Tu crédito Infonavit:
El 5% que el patrón deposita para tu casa también se basa en este número. Entre más alto sea tu SDI reportado, más puntos acumulas y más grande será el préstamo que te den para tu depa o casa.

Liquidaciones e Indemnizaciones:
Como ya vimos en otras guías, si te despiden injustificadamente, los 90 días de indemnización y los 20 días por año se pagan al valor del SDI. Por eso, si ganas $600 diarios, tu liquidación se calcula sobre $629.58 (usando el factor 1.0493).

EL RIESGO DE ESTAR REGISTRADO CON EL “MÍNIMO”
Aquí viene el consejo de “amigo contador” más importante: Muchos patrones, para ahorrar dinero en impuestos y cuotas del IMSS, registran a sus empleados con el salario mínimo ($315.04 diarios en 2026) y les pagan el resto “por fuera” o en efectivo.

Esto te pega directamente a ti en el SDI:
- Si te enfermas y vas al IMSS, tu incapacidad se pagará basándose en el sueldo mínimo, no en lo que realmente ganas.
- Tu ahorro para la casa (Infonavit) será una miseria.
- Si te despiden, la empresa querrá liquidarte sobre el sueldo mínimo, robándote miles de pesos de indemnización.

CASO PRÁCTICO: CALCULANDO TU SDI 2026
Vamos a hacer la cuenta para alguien que gana $15,000 brutos al mes y lleva un año en la chamba.

1. Salario Diario Base: $15,000 / 30 = $500 pesos.
2. Aplicamos el Factor de Integración: $500 x 1.0493 = $524.65 pesos.

Ese $524.65 es tu SDI. Es el número que debe aparecer en tu reporte de semanas cotizadas del IMSS. Si ahí dice $315.04 (el mínimo) pero tú ganas $15,000, tienes un problema legal que debes arreglar.

¿CÓMO REVISAR SI TU SDI ES CORRECTO?
No tienes que creerle a ciegas a tu patrón. Tú mismo puedes verificarlo en menos de 5 minutos:
1. Descarga la app “IMSS Digital” en tu celular.
2. Ve a la sección de “Reporte de Semanas Cotizadas”.
3. Ahí aparecerá el nombre de tu patrón actual y el “Salario Base de Cotización” (que es tu SDI para el seguro).
4. Si el número es menor a tu sueldo diario real multiplicado por 1.0493, acude a RH a pedir una explicación.

PREGUNTAS FRECUENTES (FAQ)
P: ¿El SDI cambia si me aumentan el sueldo?
R: ¡Claro! En cuanto tu sueldo base sube, el patrón tiene la obligación de reportar el nuevo SDI al IMSS en un plazo máximo de 5 días hábiles.

P: ¿Las vacaciones influyen en el SDI?
R: Sí. Como en 2026 el mínimo son 12 días, eso aumenta la prima vacacional y por lo tanto sube un poquito el factor de integración respecto a lo que se usaba hace años.

P: ¿Qué pasa si recibo vales de despensa o bonos?
R: Algunos bonos y vales “integran" (suman al SDI) y otros no, dependiendo de si pasan ciertos topes legales basados en la UMA ($117.31). Si tus bonos son fijos y constantes, lo más seguro es que deban ser parte de tu SDI.

P: ¿El SDI tiene un tope máximo?
R: Para el IMSS, el tope son 25 UMAs diarias ($2,932.75 en 2026). Si ganas más de eso, tu registro ante el seguro se queda topado ahí, aunque para una liquidación legal se debe usar tu sueldo real sin tope.

P: ¿Si estoy por honorarios tengo SDI?
R: No. El SDI es exclusivo de las relaciones de trabajo subordinadas (empleados). Los freelancers no tienen este concepto porque no cotizan al IMSS a través de un patrón.

CONCLUSIÓN: TU SDI ES TU ESCUDO
Entender qué es el Salario Diario Integrado es entender tu valor ante la ley. No permitas que te registren con menos de lo que ganas; es hipotecar tu futuro y tu seguridad médica. En MiLana queremos que cada peso de tu esfuerzo esté bien protegido. Usa nuestra información para auditar tu propio sueldo y asegúrate de que tu patrón esté cumpliendo con su parte. ¡Tu lana y tu futuro valen mucho!` },
  { id: "imss", titulo: "IMSS 2026: Mucho más que doctores y medicinas. Conoce tus derechos como asegurado", calc: null,
    texto: `INTRODUCCIÓN: EL SEGURO QUE PAGAS Y QUE DEBES CONOCER
¡Qué onda! Hoy vamos a platicar de una de las instituciones más grandes de México: el IMSS. Seguramente cada quincena ves en tu recibo de nómina un descuento que dice “IMSS” o “Cuota Obrera” y, como a todos, te duele un poquito ver que se llevan una parte de tu lana. Pero, como tu amigo contador, mi misión hoy es explicarte que ese dinero no se va al vacío; es el pago de un seguro completísimo que te protege a ti y a tu familia en los momentos más difíciles.

Mucha gente piensa que el IMSS es solo para ir cuando te duele la panza o te da gripe, pero la realidad es que es un sistema de protección social que cubre desde guarderías para tus hijos hasta tu pensión cuando seas viejito. En este 2026, con las cuotas y leyes actualizadas, es vital que sepas exactamente por qué estás pagando y qué le puedes exigir a la institución y a tu patrón. ¡Vamos a ver qué onda con tu Seguro Social!

¿QUIÉN PAGA EL IMSS Y CUÁNTO CUESTA EN 2026?
El Seguro Social es un esfuerzo compartido. No lo pagas tú solo, ni lo paga el patrón solo; es una “tripartita” donde entran el trabajador, el patrón y el Gobierno Federal. 

- Tu parte (Cuota Obrera): Aproximadamente te descuentan el 2.5% de tu Salario Base de Cotización. Si ganas $15,000 brutos, tu aportación es de unos $375 pesos al mes.
- La parte de tu patrón (Cuota Patronal): Tu jefe pone la mayor parte, cerca del 20.4% de tu salario. Es decir, por cada peso que tú pones, tu patrón pone casi ocho.
- La parte del Gobierno: El Estado pone una pequeña cuota social para fortalecer el fondo.

LAS 5 RAMAS DE PROTECCIÓN DEL IMSS
El IMSS no es un solo seguro, son cinco seguros en uno. Aquí te explico qué cubre cada uno en este 2026:

Enfermedades y Maternidad:
Cubre la atención médica, quirúrgica, farmacéutica y hospitalaria para ti y tus beneficiarios. También incluye el pago de incapacidades si te enfermas y no puedes ir a trabajar (te pagan el 60% de tu sueldo a partir del cuarto día). Para las mujeres, incluye el pago del 100% de su salario durante el descanso por maternidad.

Riesgos de Trabajo:
Este es vital. Te protege contra accidentes o enfermedades que te pasen haciendo tu chamba o en el trayecto de tu casa al trabajo. Si te accidentas trabajando, el IMSS te paga el 100% de tu sueldo desde el primer día de incapacidad.

Invalidez y Vida:
Si por una enfermedad o accidente no laboral quedas incapacitado para trabajar de forma permanente, este seguro te da una pensión. También, si llegaras a faltar, protege a tus beneficiarios (esposa e hijos) con una pensión de viudez u orfandad.

Retiro, Cesantía en Edad Avanzada y Vejez:
Es el ahorro para tu futuro. Aquí es donde se acumula el dinero en tu Afore para cuando cumplas 60 o 65 años y decidas jubilarte. Entre más alto sea el sueldo con el que te tiene registrado tu patrón, más grande será esta pensión.

Guarderías y Prestaciones Sociales:
Si tienes hijos pequeños, tienes derecho al servicio de guardería gratuito mientras trabajas. También incluye centros deportivos, teatros y cursos de capacitación.

¿A QUIÉN PUEDES DAR DE ALTA COMO BENEFICIARIO?
Tu pago del IMSS no solo te protege a ti. En 2026, puedes registrar sin costo extra a:
- Tu esposa(o) o concubina(o).
- Tus hijos (hasta los 16 años, o hasta los 25 si siguen estudiando en escuelas públicas).
- Tus padres (siempre y cuando vivan contigo y dependan económicamente de ti).

EL PELIGRO DE LA “SUBDECLARACIÓN” (REGISTRO CON SUELDO BAJO)
Como amigo contador, tengo que ser muy claro: si tu patrón te paga $15,000 pero te tiene registrado ante el IMSS con el salario mínimo ($315.04 diarios), te está robando protección. 
¿Por qué? Porque si te accidentas, el IMSS te va a pagar tu incapacidad basándose en esos $315.04 y no en tus $15,000 reales. Además, tu ahorro para la pensión y tus puntos de Infonavit van a crecer a paso de tortuga. Verifica siempre tu Salario Diario Integrado (SDI) en la app del IMSS; en 2026, con el factor de integración mínimo de 1.0493, tu registro debe ser correcto.

¿QUÉ PASA SI TU PATRÓN NO TE DA DE ALTA?
Trabajar sin IMSS es como manejar un coche sin frenos. Si tu patrón se niega a darte de alta, está cometiendo una falta grave ante la Ley del Seguro Social. 
Si tienes un accidente y no tienes IMSS, el patrón es responsable de pagar todos tus gastos médicos, medicinas y, si quedas con alguna secuela, deberá pagarte una pensión de por vida de su propio bolsillo. Muchas PyMEs quiebran por un solo accidente de un trabajador no registrado. ¡No te arriesgues ni dejes que tu jefe se arriesgue!

SERVICIOS DIGITALES 2026: OLVÍDATE DE LAS FILAS
Ya no estamos en los tiempos de ir a las 4 de la mañana a formarte para una carnet o una vigencia. En este 2026, casi todo lo haces desde la app “IMSS Digital”:
- Consultar tu Vigencia de Derechos (para ver si tu patrón sí te está pagando).
- Obtener tu Número de Seguridad Social (NSS).
- Dar de alta a tus familiares.
- Cambiarte de clínica.
- Revisar cuántas semanas cotizadas llevas para tu jubilación.

DATOS OFICIALES PARA TU SEGURO EN 2026
Para que no te confundan con los números, recuerda los valores vigentes:
- Salario Mínimo General: $315.04 diarios.
- UMA (Unidad de Medida y Actualización): $117.31 diarios.
- Tope de cotización: 25 UMAs ($2,932.75 diarios).

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si renuncio, cuánto tiempo sigo teniendo seguro?
R: Tienes una “conservación de derechos” de 8 semanas posteriores a tu baja, siempre y cuando hayas trabajado al menos 8 semanas antes de salir.

P: ¿Puedo pagar el IMSS por mi cuenta si soy freelancer?
R: ¡Sí! Existe la “Modalidad 40” o el nuevo esquema para Personas Trabajadoras Independientes donde tú pagas tus cuotas y tienes casi todos los beneficios de un empleado.

P: ¿El IMSS cubre cirugías estéticas?
R: No. El IMSS solo cubre cirugías que sean necesarias para tu salud o rehabilitaciones por accidentes. Lo estético no entra en el paquete básico.

P: ¿Qué es el Número de Seguridad Social (NSS)?
R: Es tu identidad ante el seguro para toda la vida. Nunca cambia, aunque cambies de patrón o de ciudad. ¡Cuídalo como a tu CURP!

P: ¿Cómo sé si mi patrón me dio de alta con el sueldo real?
R: Descarga tu Constancia de Semanas Cotizadas en la web o app del IMSS. Ahí aparece el salario con el que cada patrón te ha tenido registrado día por día.

CONCLUSIÓN: TU SEGURO ES TU TRANQUILIDAD
El IMSS es la red de seguridad que nos permite trabajar con la confianza de que, si algo sale mal, no estaremos solos. Aunque a veces el servicio pueda ser lento, la cobertura financiera que ofrece ante enfermedades graves o accidentes es algo que ningún seguro privado te da por el mismo precio. En MiLana te invitamos a ser un asegurado informado. Revisa tus recibos, verifica tu registro y haz valer cada peso que se te descuenta. ¡Tu salud y tu futuro son lo primero!` },
  { id: "infonavit", titulo: "Infonavit 2026: La guía definitiva para entender tu Subcuenta de Vivienda y sacar tu crédito", calc: null,
    texto: `INTRODUCCIÓN: TU DINERO TRABAJANDO PARA TU FUTURO HOGAR
¡Qué onda! Si alguna vez te has preguntado a dónde va esa parte de tu esfuerzo que no ves en tu cuenta de banco, pero que tu patrón reporta cada mes, hoy vamos a hablar de uno de los pilares más importantes de tu patrimonio: el Infonavit. 

Mucha gente le tiene miedo al Infonavit porque escuchan historias de deudas eternas, pero la realidad en este 2026 es muy distinta. El Instituto ha cambiado sus reglas para que sea más fácil comprar, construir o incluso mejorar la casa que ya tienes. Como tu amigo contador, hoy te voy a explicar qué es ese famoso 5%, cómo se acumula tu lana y qué tienes que hacer para que ese dinero trabaje para ti y no al revés. ¡Vamos a darle!

¿QUÉ ES EL INFONAVIT Y DE DÓNDE SALE EL DINERO?
El Infonavit (Instituto del Fondo Nacional de la Vivienda para los Trabajadores) es un fondo solidario donde se guarda el dinero de todos los trabajadores de México para darnos préstamos con tasas accesibles. 

Lo primero que debes saber es que el dinero que se va al Infonavit NO te lo descuentan de tu sueldo. Es una aportación obligatoria que tu patrón debe pagar de su propia bolsa. Cada bimestre, tu jefe debe depositar el equivalente al 5% de tu Salario Diario Integrado (SDI) en una cuenta a tu nombre llamada Subcuenta de Vivienda.

LA SUBCUENTA DE VIVIENDA: TU ALCANCÍA “INVISIBLE”
Esa lana que el patrón deposita no se pierde en un agujero negro; es dinero tuyo, con nombre y apellido. Se guarda en la Subcuenta de Vivienda y el Infonavit le va sumando rendimientos (intereses a tu favor) cada año para que no pierda su valor frente a la inflación.

En este 2026, si ganas $15,000 pesos al mes, tu patrón está depositando $750 pesos mensuales en esa alcancía. En un año, ya tienes $9,000 pesos guardados sin que te haya costado ni un centavo de tu sueldo neto.

¿PARA QUÉ PUEDES USAR TU CRÉDITO EN 2026?
El Infonavit ya no es solo para comprar casas en las orillas de la ciudad. Ahora tiene muchas opciones:
- Comprar una casa nueva o usada: Es el uso tradicional.
- Comprar un terreno: Para que tú diseñes tu casa desde cero.
- Construir en terreno propio: Si ya tienes el lote, el Infonavit te presta para los materiales y la mano de obra.
- Remodelar o reparar: Si tu casa necesita pintura, impermeabilizante o una ampliación, hay créditos pequeños como “Mejoravit”.
- Pagar un crédito hipotecario bancario: Si ya le debes a un banco, puedes usar tu crédito Infonavit para pagar esa deuda y quedarte con una tasa más barata.

EL SISTEMA DE PUNTOS: ¿YA ME ALCANZA?
Para que el Infonavit te preste, necesitas juntar un mínimo de 1,080 puntos. Estos puntos no se compran; se ganan con el tiempo y la estabilidad. En 2026, el sistema toma en cuenta:
- Tu edad y tu salario: Entre más joven y mejor sueldo, más puntos.
- Tu ahorro en la Subcuenta de Vivienda: Entre más lana tengas guardada, mejor.
- Cotización continua: Es vital que no dejes de trabajar. Si cambias de chamba y te dan de alta rápido, no pierdes tus puntos.
- El comportamiento de tu empresa: Si tu patrón paga a tiempo sus cuotas, tú ganas puntos más rápido.

LOS NÚMEROS CLAVE DE 2026: UMA Y SALARIO MÍNIMO
Para entender tu crédito este año, recuerda estos valores:
- Salario Mínimo General: $315.04 diarios.
- UMA (Unidad de Medida y Actualización): $117.31 diarios.
Los créditos del Infonavit ahora se dan en PESOS y no en Veces Salario Mínimo (VSM), lo que evita que tu deuda suba cada vez que aumenta el salario mínimo.

¿QUÉ PASA SI NUNCA USAS EL CRÉDITO?
Esta es la duda más frecuente. “Oye, contador, yo ya tengo casa o no quiero deudas, ¿qué pasa con mi 5%?”. ¡Buenas noticias! Ese dinero sigue siendo tuyo. 
Si llegas a la edad de jubilación (60 o 65 años) y nunca sacaste un crédito, el Infonavit te devuelve toda la lana acumulada en tu Subcuenta de Vivienda junto con los rendimientos que generó. Ese dinero se suma a tu Afore para que tengas un retiro mucho más digno.

7. CONSEJOS DE “AMIGO CONTADOR” PARA TU CRÉDITO
- Revisa “Mi Cuenta Infonavit”: Es el portal oficial. Ahí puedes ver cuánta lana tienes acumulada y cuántos puntos llevas. No necesitas intermediarios ni “coyotes” que te cobren por esto.
- Verifica tu salario real: Si tu patrón te paga $15,000 pero te tiene registrado con el mínimo de $315.04 diarios, tu ahorro de Infonavit será de solo $15.75 pesos diarios en lugar de los $25 que te corresponden. Eso hará que nunca juntes los puntos o que te presten muy poquito.
- Aportaciones voluntarias: Tú puedes meterle dinero extra a tu Subcuenta si quieres que tu crédito sea más grande o pagar más rápido tu deuda actual.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si cambio de trabajo pierdo mis puntos?
R: No, siempre y cuando el nuevo patrón te dé de alta antes de que pasen dos meses. Si tardas más, podrías perder la continuidad y tener que esperar unos meses para volver a calificar.

P: ¿Puedo juntar mi crédito con alguien más?
R: ¡Sí! Con el programa “Unamos Créditos” puedes juntar tu monto con tu pareja (aunque no estén casados), un amigo, tu hermano o tus papás para comprar una casa mejor.

P: ¿Qué pasa con mi crédito si me quedo sin trabajo?
R: El Infonavit tiene seguros de desempleo y prórrogas. Lo importante es acercarse a ellos en cuanto pierdas la chamba para aplicar las protecciones y que los intereses no te coman.

P: ¿Me pueden quitar la casa si dejo de pagar?
R: Es el último recurso. El Infonavit siempre prefiere negociar. Si tienes problemas, busca una reestructura de deuda antes de que el problema crezca.

P: ¿Cómo sé si mi patrón está pagando el 5%?
R: En tu estado de cuenta de la Afore o en el portal de Mi Cuenta Infonavit aparece el historial de pagos de tu patrón. Si ves meses vacíos, es momento de reclamar en RH.

CONCLUSIÓN: TU CASA ES TU SEGURIDAD
El Infonavit es una de las herramientas más poderosas que tienes como trabajador en México. No lo veas como una carga, sino como una inversión que tu patrón está haciendo por ti cada mes. Ya sea que lo uses para comprar tu hogar hoy o para mejorar tu pensión mañana, es dinero que te pertenece. En MiLana te invitamos a que te informes y tomes el control de tu Subcuenta de Vivienda. ¡Tu futuro hogar te lo va a agradecer!` },
  { id: "afore", titulo: "Tu Afore y pensión 2026: Cómo asegurar que tu “yo del futuro” viva tranquilo", calc: null,
    texto: `INTRODUCCIÓN: EL REGALO QUE TE ESTÁS HACIENDO HOY
¡Qué onda! Vamos a platicar de un tema que, para ser honestos, a muchos nos da flojera o hasta miedo: el retiro. Cuando estamos jóvenes y en plena edad de chambear, vernos a los 65 años nos parece algo de una película de ciencia ficción. Pero, como tu amigo contador, te voy a decir una verdad que duele pero ayuda: el tiempo es el activo más valioso que tienes para tu jubilación, y cada día que dejas pasar sin entender tu Afore es dinero que estás perdiendo.

En México, el sistema de pensiones cambió hace décadas para que cada quien ahorre lo suyo en una cuenta individual. Esa cuenta es tu Afore. En este 2026, con las nuevas tablas y rendimientos, es vital que sepas cómo funciona esta alcancía gigante, por qué no te va a alcanzar con lo mínimo y qué puedes hacer hoy mismo para no ser un “viejito” que sufra por dinero. ¡Vamos a desmenuzarlo!

¿QUÉ ES EXACTAMENTE UNA AFORE?
AFORE significa Administradora de Fondos para el Retiro. No son bancos, son instituciones financieras privadas que se dedican exclusivamente a administrar, invertir y cuidar el dinero de tu cuenta individual de retiro. 

Imagina que es una caja fuerte con tu nombre donde se guarda una parte de tu sueldo para cuando ya no puedas o no quieras trabajar. Pero no es una caja fuerte estática; ese dinero se invierte en grandes proyectos, carreteras y bonos para que genere intereses (rendimientos) y crezca con el paso de los años.

¿DE DÓNDE VIENE EL DINERO DE MI AFORE?
Tu cuenta de Afore no se llena sola; se alimenta de tres fuentes principales:
* Aportación Patronal: Es la más importante. Tu patrón debe depositar obligatoriamente el 2% de tu salario por concepto de SAR (Sistema de Ahorro para el Retiro). Además, aporta otra parte para Cesantía y Vejez.
* Aportación del Trabajador: Una pequeña parte se descuenta de tu sueldo mensual.
* Cuota Social del Gobierno: El Estado pone una pequeña parte para fortalecer el fondo de los trabajadores de menores ingresos.

EL GRAN PROBLEMA: LA “TASA DE REEMPLAZO”
Aquí es donde te tengo que hablar con la verdad de un amigo contador. Si tú solo te quedas con las aportaciones obligatorias que hace tu patrón y el gobierno, tu pensión final será de apenas el 30% o 40% de tu último salario.

Piénsalo un segundo: si hoy ganas $20,000 pesos y estás acostumbrado a ese estilo de vida, ¿podrías vivir tranquilo con solo $7,000 u $8,000 pesos al mes cuando seas mayor y posiblemente tengas más gastos médicos? La respuesta es un rotundo no. A este fenómeno se le llama baja tasa de reemplazo y es el mayor riesgo financiero que enfrentamos los trabajadores en México.

TU SUPERPODER: LAS APORTACIONES VOLUNTARIAS
La ley te permite meterle dinero extra a tu Afore por tu cuenta. Esto se llama aportaciones voluntarias y es, literalmente, un superpoder financiero. 
¿Por qué? Por dos razones:
1. Interés Compuesto: El dinero que metes hoy genera intereses, y esos intereses generan más intereses. Si empiezas a los 25 años a meter $500 pesitos al mes, a los 65 tendrás una fortuna comparado con alguien que empezó a los 50.
2. Beneficios Fiscales: ¡El SAT te premia por ahorrar! Las aportaciones voluntarias que hagas para tu retiro son deducibles de impuestos en tu declaración anual de abril. Es decir, ahorras para tu futuro y hoy mismo el gobierno te regresa una parte de tus impuestos. Es un ganar-ganar.

CÓMO ELEGIR LA MEJOR AFORE EN 2026
No todas las Afores son iguales. En México hay varias opciones y tú tienes el derecho de cambiarte a la que más te convenga una vez al año. Para elegir bien, la CONSAR (que es la jefa de las Afores) recomienda fijarse en tres cosas:
* Rendimiento Neto: Es la ganancia real que te da la Afore después de cobrarte su comisión. Siempre busca la que esté en los primeros lugares de la tabla según tu edad (SIEFORE).
* Comisión: Es lo que la Afore te cobra por administrar tu lana. Actualmente están topadas, pero pequeñas diferencias pueden significar mucho dinero en 30 años.
* Servicios: Qué tan buena es su app, si tienen sucursales cerca y qué tan fácil es hacer trámites.

EL RETIRO POR DESEMPLEO: ÚSALO CON MUCHO CUIDADO
Si te quedas sin chamba, la ley te permite sacar un poquito de dinero de tu Afore para sobrevivir. Parece una salvación, pero tiene un “costo oculto” muy alto: el IMSS te quita semanas cotizadas. 
Si sacas dinero hoy, podrías tardar uno o dos años más en jubilarte o incluso no alcanzar el mínimo de semanas necesarias para tener una pensión. Úsalo solo en una emergencia extrema y, en cuanto tengas chamba de nuevo, trata de devolver ese dinero para recuperar tus semanas.

DATOS OFICIALES PARA TU RETIRO EN 2026
Para que tus cálculos sean exactos, recuerda los valores vigentes de este año:
* Salario Mínimo General: $315.04 diarios.
* UMA (Unidad de Medida y Actualización): $117.31 diarios. Se usa para topar algunas exenciones y cálculos de ahorro.
* Aportación Patronal SAR: 2% del salario.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Cómo sé en qué Afore estoy?
R: Es muy fácil. Puedes llamar a SARTEL o descargar la app “AforeMóvil” con tu CURP y correo electrónico. Ahí te dirán quién tiene tu lana.

P: ¿Si soy freelancer puedo tener Afore?
R: ¡Claro! Puedes abrir una cuenta individual como trabajador independiente y empezar a ahorrar por tu cuenta con todos los beneficios de rendimientos e intereses.

P: ¿Qué pasa con mi Afore si fallezco?
R: El dinero de tu Afore es heredable. Tus beneficiarios legales (esposa, hijos) o los beneficiarios sustitutos que tú nombres pueden reclamar ese dinero. No se lo queda el gobierno ni la Afore.

P: ¿Puedo tener dos Afores?
R: No, solo puedes tener una cuenta individual. Si tienes dos por error, debes hacer un trámite de unificación de cuentas para que todo tu dinero esté en un mismo lugar.

P: ¿A qué edad me puedo jubilar en 2026?
R: La edad mínima para la pensión por Cesantía es a los 60 años, y por Vejez a los 65. Entre más tarde te jubiles, el porcentaje de pensión que te corresponde es mayor.

CONCLUSIÓN: EL MEJOR MOMENTO PARA EMPEZAR FUE AYER, EL SEGUNDO MEJOR ES HOY
Tu Afore no es un tema de “viejitos”, es un tema de libertad. Entre más dinero tengas ahí, más libre serás para decidir cómo quieres vivir tu vejez. En MiLana te invitamos a que te metas a tu app de Afore hoy mismo, veas cuánto tienes y te propongas meterle aunque sea $100 pesos de ahorro voluntario al mes. ¡Tu “yo” del futuro te lo va a agradecer con una sonrisa y mucha tranquilidad!` },
  { id: "horas", titulo: "Horas Extras 2026: La guía definitiva para cobrar lo justo por tu tiempo adicional", calc: null,
    texto: `INTRODUCCIÓN: ¿PONERSE LA CAMISETA O COBRAR LO QUE ES?
¡Qué onda! Vamos a platicar de un tema que genera muchísimas dudas, discusiones y, lamentablemente, muchos abusos en las oficinas y fábricas de México: las horas extras. Todos hemos escuchado esa famosa frase de ‘hay que ponerse la camiseta’ o ‘aquí sabemos a qué hora entramos pero no a qué hora salimos’. Pero, como tu amigo contador, te voy a decir algo muy claro: tu tiempo tiene un precio legal y tu esfuerzo adicional debe verse reflejado en tu cartera.

En este 2026, con el salario mínimo al alza y las inspecciones de la Secretaría del Trabajo más estrictas, no hay pretexto para que te ‘chamaqueen’ con el pago de tu tiempo extra. Tu jornada laboral tiene límites muy claros en la Ley Federal del Trabajo (LFT) y saltarse esos límites le sale caro al patrón si tú sabes cómo reclamar. En esta guía te voy a explicar cómo se calculan las horas dobles, las triples y qué hacer si tu jefe se hace ‘el que no ve’ cuando te quedas tarde. ¡Vamos a darle!

LA JORNADA LABORAL: ¿CUÁNTAS HORAS DEBES TRABAJAR?
Antes de hablar de extras, hay que saber qué es lo ‘normal’. En México existen tres tipos de jornadas legales:
- Jornada Diurna: Entre las 6:00 y las 20:00 horas. El máximo son 8 horas diarias.
- Jornada Nocturna: Entre las 20:00 y las 6:00 horas. El máximo son 7 horas diarias.
- Jornada Mixta: Tiene periodos de ambas, pero si el periodo nocturno es mayor a 3.5 horas, se considera nocturna. El máximo son 7.5 horas diarias.

Cualquier minuto que trabajes después de esos límites se considera tiempo extraordinario y debe pagarse aparte.

LA REGLA DE ORO: EL 3x3x3
La LFT es muy específica para evitar que los patrones exploten a la gente. La regla dice que el tiempo extra no puede exceder de:
- 3 horas diarias.
- 3 veces a la semana.

Esto nos da un total de 9 horas extras ‘permitidas’ a la semana bajo ciertas condiciones. Si tu patrón te pide quedarte 5 horas extras en un solo día, ya está violando la ley, aunque te las pague.

¿CÓMO SE PAGAN? DOBLES Y TRIPLES
Aquí es donde la mayoría se confunde. Vamos a simplificarlo:

Horas Extras Dobles (200%):
Las primeras 9 horas extras que trabajes en una semana deben pagarse con un 100% más del salario que corresponde a las horas de tu jornada normal. Es decir, cada hora extra te la pagan como si hubieras trabajado dos.

Horas Extras Triples (300%):
Si por alguna razón trabajas más de 9 horas extras a la semana, ese excedente (a partir de la hora 10) se debe pagar con un 200% más del salario normal. O sea, cada hora te la pagan por tres.

CÁLCULO PASO A PASO CON EL SALARIO MÍNIMO 2026
Vamos a ponerle números reales de este año para que veas cómo se hace la cuenta. Imagina que ganas el Salario Mínimo General de 2026.

- Salario Diario Mínimo 2026: $315.04 pesos.
- Sueldo por hora (Jornada de 8h): $315.04 / 8 = $39.38 pesos por hora.

Ahora, supongamos que esta semana trabajaste 12 horas extras:
Primeras 9 horas (Dobles): $39.38 x 2 = $78.76 por hora.
  Total dobles: $78.76 x 9 = $708.84 pesos.
Siguientes 3 horas (Triples): $39.38 x 3 = $118.14 por hora.
  Total triples: $118.14 x 3 = $354.42 pesos.

En total, esa semana deberías recibir $1,063.26 pesos adicionales solo de horas extras.

¿QUÉ PASA CON EL DESCANSO Y LOS DÍAS FESTIVOS?
Muchos confunden las horas extras con trabajar en tu día de descanso o en un día festivo oficial.
- Día de Descanso: Si trabajas en tu día libre, te lo deben pagar al triple (tu salario normal más un 200% adicional). Además, si es domingo, te toca tu prima dominical del 25%.
- Día Festivo: Se paga igual que el día de descanso (triple).

Las horas extras son los minutos que sumas a tu día normal de chamba, no los días completos adicionales, aunque ambos se pagan muy bien si conoces la ley.

LA CARGA DE LA PRUEBA: ¿CÓMO DEMUESTRO QUE ME QUEDÉ?
Este es el punto más importante si alguna vez tienes un conflicto con tu patrón. En México, la ley dice que el patrón es quien tiene la obligación de llevar el registro de asistencia y horarios.

Si tú demandas el pago de horas extras y el patrón no presenta las tarjetas de asistencia o los registros de huella digital, la ley suele darle la razón al trabajador. Sin embargo, como tu amigo contador, te recomiendo:
- Toma fotos de tus registros de entrada y salida.
- Guarda correos o mensajes de WhatsApp donde tu jefe te pida quedarte tarde o te asigne tareas a última hora.
- Ten una bitácora personal. Todo esto sirve de prueba ante un juez.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Me pueden obligar a trabajar horas extras?
R: Solo en casos de siniestro o riesgo inminente donde peligre la vida de las personas o la existencia de la empresa. En condiciones normales, el tiempo extra es voluntario y de común acuerdo.

P: ¿Pueden pagarme las horas extras con ‘tiempo x tiempo’?
R: No. La ley es clara: el tiempo extraordinario se paga con dinero. Si tú aceptas que te den el viernes libre porque te quedaste tarde el lunes, es un acuerdo entre ustedes, pero legalmente te las deben pagar.

P: ¿Las horas extras pagan impuestos?
R: Sí, pero tienen una exención. Para los trabajadores que ganan el mínimo, las horas extras (hasta el límite de 3x3) están exentas de ISR al 100%. Para los que ganan más, el 50% de las horas extras está exento, con un tope de 5 UMAs por semana ($586.55 en 2026).

P: ¿Qué pasa si soy empleado ‘de confianza’?
R: Aunque los puestos de confianza tienen reglas distintas, el derecho al pago de tiempo extraordinario también les aplica si demuestran que excedieron la jornada legal.

P: ¿Si mi patrón no me paga las horas extras, puedo renunciar con liquidación?
R: Sí. El impago de salarios y prestaciones es una causa de rescisión de contrato sin responsabilidad para el trabajador, lo que te daría derecho a una liquidación completa.

CONCLUSIÓN: TU TIEMPO ES TU ACTIVO MÁS VALIOSO
No dejes que el concepto de ‘ponerte la camiseta’ signifique regalar tu trabajo. Las horas extras existen porque tu tiempo libre también tiene un valor y la ley busca compensar el desgaste de trabajar más de lo normal. En MiLana te invitamos a usar nuestra calculadora de horas extras para que sepas exactamente cuánto debe venir en tu siguiente recibo. ¡Haz que tu esfuerzo valga la pena y cobra lo que es justo!` },
  { id: "contrato", titulo: "Tipos de Contrato Laboral 2026: Conoce tus derechos según el papel que firmaste", calc: null,
    texto: `INTRODUCCIÓN: NO TODO ES LO QUE PARECE EN EL PAPEL
¡Qué onda! Vamos a platicar de un momento que todos vivimos al entrar a una nueva chamba, pero que pocos tomamos con la seriedad que merece: la firma del contrato. Normalmente, estamos tan emocionados por el nuevo sueldo o el puesto que firmamos las 20 hojas que nos pone RH enfrente sin leer la “letra chiquita”. Pero, como tu amigo contador, te voy a decir algo: el tipo de contrato que firmaste define cómo te pueden despedir, cuánto tiempo vas a durar y qué beneficios tienes.

En este 2026, las leyes laborales en México son muy claras para evitar que las empresas se aprovechen de los trabajadores. Ya sea que tengas un contrato “de planta” o uno por tiempo definido, tus derechos básicos como el salario mínimo de $315.04 diarios o tus 12 días de vacaciones son sagrados. En esta guía vamos a ver los diferentes tipos de contratos que existen y, lo más importante, qué pasa si trabajas sin haber firmado nada. ¡Vamos a desmenuzarlo!

CONTRATO POR TIEMPO INDETERMINADO: EL “SANTO GRIAL”
Este es el contrato que todos queremos. Es el famoso contrato “de planta”. No tiene una fecha de terminación; se entiende que vas a estar ahí hasta que tú decidas renunciar o la empresa decida liquidarte.

- ¿Por qué es el mejor?: Te da estabilidad y es el que más te protege en caso de un despido. Si te corren sin una causa justificada, tienes derecho a tu liquidación completa de 3 meses de sueldo más 20 días por año.
- Prestaciones: Tienes derecho a todo lo que marca la ley: aguinaldo, IMSS, Infonavit y tus vacaciones que ahora empiezan en 12 días desde el primer año.

CONTRATO POR TIEMPO DETERMINADO: CON FECHA DE CADUCIDAD
Este contrato se usa cuando la chamba tiene un fin claro en el calendario. Por ejemplo, si te contratan para cubrir una incapacidad por maternidad de 3 meses o para la temporada navideña en una tienda.

- La regla de oro: La empresa no puede contratarte por tiempo determinado solo porque “quiere probarte”. Debe haber una causa real que justifique por qué el trabajo se va a acabar en esa fecha.
- ¿Qué pasa si sigue la chamba?: Si se acaba la fecha del contrato pero tú sigues yendo a trabajar y el patrón te sigue pagando, legalmente tu contrato se convierte en uno de “tiempo indeterminado” de forma automática.

CONTRATO POR OBRA DETERMINADA: PARA PROYECTOS ESPECÍFICOS
Es muy común en la construcción o en la industria del software. Te contratan para construir un edificio o para programar una app específica.

- El fin del contrato: En cuanto se termina la obra o el proyecto, la relación laboral se acaba legalmente sin que el patrón tenga que pagarte una indemnización de 3 meses, pero sí debe pagarte tu finiquito proporcional.
- El riesgo: Si la obra no se ha terminado pero el patrón te corre, te debe pagar tu liquidación completa como si fueras de planta.

EL PERIODO DE PRUEBA Y CAPACITACIÓN: LOS LÍMITES
Mucha gente piensa que “estar a prueba” significa no tener derechos. ¡Error! En 2026, los periodos de prueba están muy vigilados:
- Duración: El periodo de prueba normal es de máximo 30 días. Solo para puestos directivos o gerenciales puede extenderse hasta 180 días.
- Derechos: Durante la prueba, debes tener IMSS, ganar al menos el salario mínimo de $315.04 y acumular antigüedad.
- Al final de la prueba: Si la empresa decide que no das el ancho, pueden terminar la relación sin pagarte los 3 meses de indemnización, pero deben demostrar por qué no cumpliste con el puesto.

EL MITO DEL “CONTRATO DE PALABRA”
“Es que no firmé nada, así que no tengo derechos”. ¡Mentira total! La Ley Federal del Trabajo dice que la falta de un contrato escrito es culpa del patrón, no del trabajador.

Si tú tienes un horario, recibes órdenes de un jefe y te pagan un sueldo, existe una relación laboral legal. Tienes exactamente los mismos derechos que alguien que firmó 50 hojas:
- Tienes derecho al IMSS y tus aportaciones al Afore (2% de SAR).
- Tienes derecho a tus 15 días de aguinaldo mínimo.
- Tu patrón debe aportar el 5% al Infonavit para tu casa.

¿QUÉ REVISAR ANTES DE FIRMAR EN 2026?
Como tu amigo contador, te doy esta lista de “supervivencia” para cuando tengas el contrato enfrente:
- El sueldo real: Que diga la cantidad bruta que acordaron. Evita contratos que digan que ganas el mínimo si en realidad vas a ganar más.
- La jornada: Que especifique si es diurna (8 horas), nocturna (7 horas) o mixta.
- Las prestaciones: Que mencione claramente el aguinaldo, las vacaciones (mínimo 12 días) y la prima vacacional (25%).
- El lugar de trabajo: Para que no te quieran mandar a otra ciudad de un día para otro sin tu consentimiento.

DATOS OFICIALES PARA TU CONTRATO EN 2026
Para que tus cuentas cuadren, recuerda los valores de este año:
- Salario Mínimo General: $315.04 diarios.
- UMA (Unidad de Medida y Actualización): $117.31 diarios.
- Factor de Integración (1er año): 1.0493.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Me pueden renovar un contrato de 3 meses muchas veces?
R: No. Si el trabajo es permanente, después de la primera o segunda renovación, la ley entiende que ya eres empleado de planta.

P: ¿Qué es el contrato por temporada?
R: Es para trabajos que solo ocurren en ciertas épocas del año (como la cosecha o ferias). Tienes derechos, pero la relación se “pausa” cuando se acaba la temporada y se “reactiva” en la siguiente.

P: ¿Puedo renunciar si mi contrato es por tiempo determinado?
R: Sí, puedes renunciar en cualquier momento. Solo debes dar tu aviso y te deben pagar tu finiquito proporcional.

P: ¿El contrato de outsourcing sigue siendo legal?
R: El outsourcing de personal está prohibido desde 2021. Solo se permite la subcontratación de servicios especializados que no sean el giro principal de la empresa.

P: ¿Qué pasa si mi contrato dice que no tengo derecho a liquidación?
R: Esa cláusula es nula. Ningún contrato privado puede estar por encima de la Constitución o de la Ley Federal del Trabajo. Tus derechos son irrenunciables.

CONCLUSIÓN: EL CONTRATO ES TU ESCUDO, NO TU CADENA
No le tengas miedo a leer tu contrato. Es el documento que garantiza que tu esfuerzo será pagado y respetado. En MiLana queremos que seas un trabajador informado que sabe dónde está parado. Si tienes dudas sobre lo que firmaste, usa nuestra información para comparar tus prestaciones con lo que marca la ley. ¡Tu seguridad laboral empieza con un contrato justo y bien leído!` },
  { id: "incapacidad", titulo: "Incapacidad IMSS 2026: Guía completa sobre pagos, tipos y tus derechos legales", calc: null,
    texto: `INTRODUCCIÓN: CUANDO LA SALUD NO TE DEJA SEGUIR
¡Qué onda! Nadie tiene planeado enfermarse o sufrir un accidente, pero la realidad es que a todos nos puede pasar. Cuando eso sucede, la preocupación número uno (después de recuperarse, claro) es: “¿Qué va a pasar con mi sueldo?”. Es un miedo muy válido, porque las cuentas no dejan de llegar aunque tú estés en cama.

Como tu amigo contador, hoy te voy a explicar cómo funciona el sistema de incapacidades del IMSS en este 2026. Es vital que entiendas que, durante esos días, tu patrón no te paga tu sueldo normal; lo que recibes es un subsidio del Seguro Social. Pero ojo, no siempre te pagan el 100% ni te pagan desde el primer día. Vamos a ver los detalles para que sepas exactamente cuánta lana te va a caer y cómo proteger tu chamba.

LOS TRES TIPOS DE INCAPACIDAD EN 2026
El IMSS clasifica tu incapacidad en tres grandes grupos, y de esto depende totalmente cuánto dinero vas a recibir:

Enfermedad General:
Es cuando te enfermas de algo que no tiene que ver con tu trabajo (una gripe fuerte, una cirugía programada o un accidente el fin de semana). 
- Pago: El IMSS te paga el 60% de tu Salario Base de Cotización (SBC).
- Tiempo: Se paga a partir del cuarto día de incapacidad. Los primeros tres días no se pagan, a menos que tu empresa tenga esa prestación extra.

Riesgo de Trabajo:
Es si te accidentas dentro de la empresa, haciendo una tarea que te pidió tu jefe o incluso en el trayecto de tu casa al trabajo y viceversa.
- Pago: El IMSS te paga el 100% de tu sueldo registrado.
- Tiempo: Se paga desde el primer día que el médico te da la incapacidad.

Maternidad:
Para las futuras mamás, cubre el descanso antes y después del parto.
- Pago: Se paga el 100% del sueldo registrado.
- Tiempo: Cubre los 84 días que marca la ley (42 antes y 42 después del parto).

EL RIESGO DE ESTAR REGISTRADO CON EL MÍNIMO
Aquí es donde mi consejo de “amigo contador” se vuelve crítico. El subsidio que el IMSS te deposita se calcula con el salario que tu patrón tiene reportado ante el seguro (SBC).

Si tú ganas $20,000 pesos al mes pero tu patrón te tiene registrado con el Salario Mínimo de 2026 ($315.04 diarios), y te enfermas de algo general, el IMSS te va a pagar el 60% de esos $315.04. Estarías recibiendo una miseria comparado con tu nivel de vida real. Por eso es fundamental que verifiques que tu registro sea el correcto con el factor de integración de 1.0493.

¿CÓMO SE COBRA EL DINERO EN 2026?
Ya no tienes que andar dando vueltas a la ventanilla del banco como antes. El IMSS ha modernizado mucho este proceso:
- Cuenta CLABE: Debes registrar tu cuenta bancaria en el portal del IMSS o en tu clínica para que el depósito te caiga directo.
- Pago a través de la empresa: Algunas empresas tienen convenios con el IMSS donde ellas te pagan el sueldo completo y luego ellas le cobran al seguro. Pregunta en tu área de RH si tienen este beneficio.

LA PROTECCIÓN CONTRA EL DESPIDO
Una duda muy común es: “¿Me pueden correr si estoy incapacitado?”. La respuesta corta es NO.
Mientras tengas una incapacidad vigente emitida por el IMSS, tu relación laboral está “suspendida”. Esto significa que el patrón no puede despedirte legalmente durante ese periodo. Si lo hace, se considera un despido injustificado y tendrías derecho a una liquidación completa.

EL PAPEL DE LA UMA Y EL SALARIO MÍNIMO
Para este año, recuerda estos valores que afectan tus límites:
- Salario Mínimo 2026: $315.04 diarios.
- UMA (Unidad de Medida y Actualización): $117.31 diarios.
El subsidio por enfermedad general tiene un tope basado en UMAs, pero si ganas el salario mínimo o un poco más, no deberías tener problemas con los techos máximos.

CASO PRÁCTICO: UNA CIRUGÍA DE 10 DÍAS
Imagina que ganas $500 pesos diarios (SBC) y te operan de la apéndice (Enfermedad General). El médico te da 10 días de incapacidad.
- Días 1, 2 y 3: No se pagan (a menos que tu empresa sea muy buena onda).
- Días 4 al 10: Se pagan al 60%.
- Cuenta: 7 días x ($500 x 0.60) = $2,100 pesos es lo que te depositará el IMSS.
Si hubiera sido un accidente de trabajo, te pagarían los 10 días al 100%: $5,000 pesos. ¡Ves qué importante es que el médico califique bien tu incapacidad!

7. CONSEJOS DE “SUPERVIVENCIA”
- Reporta de inmediato: En cuanto tengas tu papel de incapacidad, mándale una foto a tu jefe o a RH. Es tu justificante legal para no ir a chambear.
- Vigencia de derechos: Asegúrate de estar “vigente” en el IMSS. Si tu patrón no ha pagado las cuotas, el IMSS podría negarte el pago del subsidio, aunque tú no tengas la culpa.
- Seguimiento médico: No faltes a tus citas de control. Si no vas, el médico puede no renovarte la incapacidad y tendrías que regresar a trabajar aunque te sientas mal.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si me enfermo en el extranjero me pagan la incapacidad?
R: Solo si el IMSS valida los documentos médicos extranjeros a través de un proceso administrativo largo. Lo ideal es avisar al consulado y tener todo traducido.

P: ¿Puedo trabajar desde casa si estoy incapacitado?
R: Legalmente no deberías. Si estás incapacitado es porque no tienes aptitud física para laborar. Si el IMSS detecta que estás trabajando, podrían cancelarte el subsidio.

P: ¿La incapacidad cuenta para mis semanas de jubilación?
R: Sí. Durante el tiempo que estés incapacitado, sigues acumulando semanas de cotización para tu pensión y puntos para el Infonavit.

P: ¿Qué pasa si la incapacidad dura más de un año?
R: Después de 52 semanas, el IMSS evalúa si te da el alta o si ya procede una pensión por invalidez temporal o definitiva.

P: ¿Me descuentan ISR de mi pago de incapacidad?
R: No. El subsidio que paga el IMSS se considera una prestación de previsión social y está exento de impuestos.

CONCLUSIÓN: TU RECUPERACIÓN ES LO PRIMERO
Las incapacidades son la red de seguridad que nos permite sanar sin la angustia de perderlo todo. En MiLana te invitamos a que revises siempre con qué sueldo estás registrado para que, en caso de necesitarlo, el IMSS te responda como es debido. ¡Cuida mucho tu salud y recuerda que informado vales por dos!` },
  { id: "maternidad", titulo: "Maternidad y Paternidad 2026: Guía completa de tus derechos laborales al ser mamá o papá", calc: null,
    texto: `INTRODUCCIÓN: UN NUEVO COMIENZO SIN MIEDOS LABORALES
¡Qué onda! Si estás leyendo esto porque viene un bebé en camino o acabas de recibir a un nuevo integrante en la familia, primero que nada: ¡Muchas felicidades! Es una de las etapas más emocionantes de la vida, pero también una de las que más dudas genera en el plano laboral. Es normal que entre pañales y mamilas te preguntes: ‘¿Me pueden correr por estar embarazada?’, ‘¿Quién paga mi sueldo mientras no estoy?’ o ‘¿Cuántos días le tocan al papá?’.

Como tu amigo contador, mi misión hoy es darte la paz mental que necesitas para disfrutar a tu bebé. En este 2026, las leyes en México protegen fuertemente la maternidad y, aunque falta camino, también reconocen el derecho de los padres a estar presentes. Vamos a desmenuzar tus derechos, desde los 84 días de descanso hasta los periodos de lactancia, con los números reales de este año. ¡Prepárate, que aquí te explico todo!

MATERNIDAD: EL DESCANSO QUE TÚ Y TU BEBÉ MERECEN
La Ley Federal del Trabajo (LFT) y el IMSS protegen a la madre trabajadora con un periodo de descanso pagado al 100%. Este descanso es un derecho irrenunciable y no negociable.

- Duración total: Tienes derecho a 12 semanas (84 días naturales) de incapacidad por maternidad.
- Distribución: Tradicionalmente se dividen en 6 semanas antes del parto y 6 semanas después. Sin embargo, la ley permite que, con autorización del médico del IMSS, puedas transferir hasta 4 de las semanas previas para después del parto, permitiéndote pasar más tiempo con tu bebé recién nacido (quedando como 2 semanas antes y 10 después, por ejemplo).
- Pago al 100%: Durante estos 84 días, no recibirás tu sueldo de la empresa, sino un subsidio del IMSS que equivale al 100% de tu Salario Base de Cotización. Para esto, debes tener al menos 30 semanas cotizadas en los últimos 12 meses antes de la fecha en que inicia tu incapacidad.

PROTECCIÓN CONTRA EL DESPIDO: EL FUERO MATERNAL
Este es el punto más importante para tu tranquilidad. En México, es absolutamente ilegal despedir a una mujer por el hecho de estar embarazada o por haber tenido un hijo.

- Prohibición total: Ningún empleador puede despedirte basándose en tu estado de embarazo. Si intentan hacerlo o te presionan para que firmes una ‘renuncia voluntaria’, no lo hagas. Se considera un despido injustificado y discriminatorio que te daría derecho a una liquidación completa y posiblemente a una demanda por discriminación.
- Estabilidad en el empleo: Tu lugar de trabajo debe ser conservado por lo menos durante un año después del parto, siempre y cuando cumplas con tus obligaciones laborales fuera de tus periodos de incapacidad.

DERECHOS DURANTE LA LACTANCIA
Una vez que regresas a la chamba, los derechos no se acaban. La ley reconoce la importancia de la lactancia materna para la salud del bebé.

- Descansos diarios: Durante los primeros 6 meses después del parto, tienes derecho a dos descansos de 30 minutos cada uno por día para alimentar a tu hijo o para realizar la extracción de leche en un lugar higiénico que la empresa debe proporcionar.
- Opción B: Si no puedes o no quieres tomar esos dos descansos, puedes acordar con tu patrón reducir una hora tu jornada laboral diaria, saliendo una hora antes o entrando una hora después para atender a tu bebé.
- Sin descuentos: Estos periodos de tiempo se consideran trabajados, por lo que no pueden descontarte ni un peso de tu sueldo por tomarlos.

PATERNIDAD: LOS DERECHOS DEL PAPÁ EN 2026
Aunque históricamente el hombre ha tenido pocos días, la ley ya reconoce su papel fundamental. Los padres trabajadores tienen derecho a un permiso de paternidad.

- Días de descanso: Tienes derecho a 5 días laborales con goce de sueldo por el nacimiento de tu hijo o por la adopción de un infante.
- ¿Quién los paga?: A diferencia de la maternidad (que la paga el IMSS), el permiso de paternidad corre por cuenta del patrón. Te deben pagar tu sueldo completo como si hubieras ido a trabajar.
- Obligación del patrón: Tu jefe no puede negarte estos días ni pedirlos a cuenta de vacaciones. Es un derecho independiente de tus días de descanso anuales.

ADOPCIÓN: TAMBIÉN HAY PROTECCIÓN LEGAL
La ley no distingue entre hijos biológicos y adoptivos cuando se trata de derechos laborales básicos.

- Para las madres adoptivas: Tienen derecho a un descanso de 6 semanas con goce de sueldo, posteriores al día en que reciban al menor.
- Para los padres adoptivos: Tienen derecho a los mismos 5 días laborales pagados que los padres biológicos.

DATOS OFICIALES Y VALORES 2026
Para que tus cálculos de subsidios o finiquitos (en caso de que tú decidas renunciar después del parto) sean correctos, ten en cuenta los valores de este año:

- Salario Mínimo General: $315.04 diarios.
- UMA (Unidad de Medida y Actualización): $117.31 diarios.
- Factor de Integración (1er año): 1.0493.

Recuerda que si tu sueldo es el mínimo de $315.04, tu pago por parte del IMSS o del patrón debe ser sobre esa base como mínimo.

7. CONSEJOS DE “AMIGO CONTADOR” PARA LOS NUEVOS PADRES
- Avisa a tiempo: Aunque no estás obligada a decirlo el primer día, avisa a RH sobre tu embarazo en cuanto te sientas cómoda. Hazlo por escrito y quédate con una copia recibida. Esto te protege legalmente ante cualquier movimiento extraño en la empresa.
- Prepara tus papeles del IMSS: Para cobrar tu incapacidad de maternidad, necesitas tener tu cartilla de salud actualizada y acudir a tus citas de control prenatal. El IMSS es muy estricto con sus fechas para otorgar los certificados.
- Revisa tu salario registrado: Como siempre te digo, si te tienen con el sueldo mínimo pero ganas más, tu subsidio de maternidad será menor a lo que realmente necesitas para los gastos del bebé.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Qué pasa si el bebé nace antes de la fecha prevista?
R: No pierdes tus días. Si el parto se adelanta, los días que no usaste antes se suman automáticamente al descanso posterior al parto hasta completar los 84 días.

P: ¿Me pueden pedir una prueba de embarazo para contratarme?
R: ¡Jamás! Es ilegal y se considera un acto de discriminación solicitar pruebas de embarazo para el ingreso, permanencia o ascenso en un empleo.

P: ¿Tengo derecho a vacaciones después de mi incapacidad de maternidad?
R: Sí. El tiempo que estuviste de incapacidad cuenta como tiempo trabajado para tu antigüedad, así que sigues acumulando tus días de vacaciones de forma normal.

P: ¿El permiso de paternidad puede ser de más de 5 días?
R: La ley marca 5 días como mínimo. Si tu empresa es moderna o tiene prestaciones superiores, podría darte más, pero nunca menos de 5 días hábiles.

P: ¿Si tengo complicaciones en el embarazo, el descanso es mayor?
R: Si después de los 84 días no puedes regresar por motivos de salud relacionados con el parto o embarazo, el IMSS puede extender tu incapacidad como ‘enfermedad general’, donde se te pagaría el 60% de tu sueldo.

CONCLUSIÓN: DISFRUTA LA ETAPA, LA LEY TE RESPALDA
Tener un hijo es un proyecto de vida, no un obstáculo laboral. En MiLana queremos que cada familia en México sepa que su estabilidad económica está protegida durante este proceso. Usa nuestra información para exigir tus derechos y recuerda que un trabajador feliz y tranquilo es mucho más productivo. ¡Mucha suerte con el nuevo integrante de la familia y disfruta cada momento!` },
  { id: "declaracion", titulo: "Declaración Anual 2026: La guía para que el SAT te devuelva “lana” en lugar de quitártela", calc: null,
    texto: `INTRODUCCIÓN: EL MOMENTO DE LA VENGANZA (LEGAL) CONTRA EL FISCO
¡Qué onda! Llegamos a uno de los temas que más flojera, miedo o confusión generan, pero que paradójicamente es el que más alegría puede darte: la Declaración Anual. Si cada quincena sientes un pequeño dolor en el pecho al ver cuánto te descuentan de ISR, abril es el mes donde las cosas se pueden poner a tu favor.

Como tu amigo contador, hoy te voy a explicar cómo funciona este proceso en 2026. No veas la declaración solo como un trámite aburrido; vela como la oportunidad anual de que el Gobierno te regrese una parte de lo que ya pagaste. Si hiciste las cosas bien durante el 2025, el SAT podría estarte debiendo miles de pesos. En esta guía te voy a enseñar quiénes están obligados, qué gastos puedes deducir y cómo lograr que ese depósito caiga en tu cuenta. ¡Vamos a darle!

¿QUÉ ES LA DECLARACIÓN ANUAL Y CUÁNDO SE PRESENTA?
La declaración anual es el reporte final que le entregas al SAT sobre todo lo que ganaste y todo lo que gastaste durante el año anterior (2025). Sirve para hacer un “ajuste de cuentas” final.

- Fecha oficial: Se presenta durante todo el mes de abril de 2026.
- El objetivo: Verificar si las retenciones mensuales que te hizo tu patrón fueron exactas. Si pagaste de más (porque tienes deducciones), el SAT te devuelve el “Saldo a Favor”.

¿ESTÁS OBLIGADO A PRESENTARLA?
No todos los trabajadores tienen que hacerla, pero muchos “quieren” hacerla para recuperar dinero. Estás obligado por ley si en 2025:
- Tuviste ingresos mayores a $400,000 pesos brutos en el año.
- Trabajaste para dos o más patrones de forma simultánea (aunque no hayas llegado a los $400k).
- Dejaste de trabajar antes del 31 de diciembre de 2025.
- Recibiste ingresos por otros conceptos como rentas, intereses bancarios altos o actividad empresarial (como RESICO).
- Si recibiste una herencia, premio o préstamo mayor a $600,000 pesos (aunque no pague impuesto, hay que avisar).

Si no estás en esta lista pero tienes gastos médicos o intereses de Infonavit, puedes presentarla voluntariamente para buscar tu devolución.

EL SECRETO DEL ÉXITO: LAS DEDUCCIONES PERSONALES
Aquí es donde ocurre la magia. Las deducciones personales son gastos que el SAT te permite restar de tus ingresos totales para que tu impuesto baje. Si tu impuesto baja, lo que ya te quitaron en la nómina se convierte en dinero que te deben regresar.

En 2026, los gastos que puedes deducir son:
- Salud: Honorarios médicos, dentistas, psicólogos, nutricionistas, gastos hospitalarios, medicinas incluidas en facturas de hospital, análisis clínicos y lentes ópticos graduados (hasta por $2,500 pesos).
- Educación: Colegiaturas desde preescolar hasta bachillerato con montos específicos (ej. Primaria hasta $12,900, Preparatoria hasta $24,500). El transporte escolar también cuenta si es obligatorio.
- Vivienda: Los intereses reales que pagaste por tu crédito hipotecario de Infonavit o del banco.
- Retiro: Las aportaciones voluntarias que hayas hecho a tu Afore o a un Plan Personal de Retiro (PPR).
- Otros: Gastos funerarios de familiares directos y donativos a instituciones autorizadas.

LOS LÍMITES QUE DEBES CONOCER
Como tu amigo contador, te advierto que no puedes deducir todo de forma infinita. El SAT pone un “techo” para que no abuses. El límite de tus deducciones totales es lo que resulte menor entre:
- El 15% de tus ingresos totales anuales.
- 5 veces el valor de la UMA anual.

Para 2026, la UMA diaria es de $117.31. Esto significa que el tope de deducciones suele andar cerca de los $200,000 pesos para la mayoría de las personas. ¡Ojo! Los gastos médicos por discapacidad y las aportaciones al retiro no entran en este límite general, lo que te permite recuperar aún más.

REQUISITOS PARA QUE EL SAT TE DIGA QUE SÍ
Si quieres que tu devolución pase a la primera y no te la rechacen, debes cumplir estas reglas de oro:
- Factura (CFDI) obligatoria: Cada gasto debe tener una factura a tu nombre con el concepto correcto (ej. “Honorarios médicos”).
- Método de pago: ¡Vital! Los gastos médicos, educativos y de transporte NO pueden pagarse en efectivo. Deben ser pagados con tarjeta de crédito, débito, transferencia o cheque. Si pagaste al dentista con un billete de $500, esa factura no te sirve para deducir.
- Uso del CFDI: Al pedir tu factura, asegúrate de que el receptor ponga el uso correcto (ej. D01 para honorarios médicos, D10 para colegiaturas).

6. PASO A PASO PARA TU DECLARACIÓN EN ABRIL 2026
1. Entra al portal del SAT: Necesitas tu RFC y tu contraseña (o tu e.firma si el saldo a favor es grande).
2. Revisa la información precargada: El SAT ya sabe cuánto ganaste porque tu patrón timbró tus recibos, y ya sabe qué gastaste porque las facturas están en su sistema.
3. Verifica tus facturas: Checa que todas tus deducciones aparezcan. Si falta alguna y tienes el comprobante, puedes agregarla manualmente.
4. Envía y espera: Si tienes saldo a favor, ingresa tu cuenta CLABE (debe estar a tu nombre). El SAT suele devolver el dinero en un plazo de 5 a 10 días hábiles si todo está correcto.

DATOS OFICIALES PARA 2026
Recuerda estos valores para tus cálculos finales de este año:
- Salario Mínimo General: $315.04 diarios.
- UMA Diaria: $117.31.
- Tope de deducciones: 5 UMAs anuales o 15% de ingresos.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Qué pasa si no presento mi declaración estando obligado?
R: El SAT te puede multar y las multas en 2026 son bastante pesadas. Además, pierdes la oportunidad de recuperar tu saldo a favor.

P: ¿Puedo deducir el ticket de la farmacia?
R: No. Solo son deducibles las medicinas que vienen incluidas en una factura de hospitalización. Las que compras por fuera en la farmacia de la esquina no cuentan.

P: ¿Si estoy en RESICO tengo que declarar?
R: Sí, los RESICO presentan declaración anual, pero recuerda que ellos no pueden aplicar deducciones personales de salud o educación para bajar su ISR mensual, aunque deben presentar el reporte anual de sus ingresos.

P: ¿Puedo deducir la colegiatura de la universidad?
R: Lamentablemente no. El beneficio de deducción de colegiaturas solo llega hasta el nivel bachillerato o equivalente.

P: ¿Qué hago si el SAT rechaza mi devolución?
R: No entres en pánico. Normalmente es por un error en la factura o en la CLABE. Puedes presentar una “Declaración Complementaria” corrigiendo el error o solicitar una “Devolución Manual” adjuntando tus comprobantes.

CONCLUSIÓN: HAZ QUE EL SAT TE PAGUE
La declaración anual es el único momento del año donde tú tienes el control frente al fisco. No dejes pasar la oportunidad por miedo o por flojera. En MiLana te invitamos a que revises tus facturas desde ya y te prepares para abril. Ese dinero que te regresen es fruto de tu esfuerzo y te sirve para ahorrar, invertir o darte un gusto que te mereces. ¡Informado, siempre ganas más!` },
  { id: "nomina", titulo: "Cómo leer tu recibo de nómina 2026: Guía paso a paso para entender a dónde se va tu dinero", calc: null,
    texto: `INTRODUCCIÓN: EL MISTERIO DEL PAPELITO QUINCENAL
¡Qué onda! Vamos a platicar de uno de los documentos que más recibimos y que, curiosamente, menos entendemos: el recibo de nómina. Para la mayoría de los trabajadores, el ritual es el mismo cada quincena: te llega un correo o te dan un papel, buscas rápido la cifra que dice “Neto a pagar”, sonríes (o suspiras) al ver que ya cayó la lana y cierras el archivo. 

Pero, como tu amigo contador, te voy a decir algo muy importante: tu recibo de nómina es mucho más que un aviso de depósito. Es un comprobante legal (CFDI), una herramienta de auditoría y tu mejor defensa ante el SAT o el IMSS. Entender cada numerito que viene ahí es la diferencia entre ser un trabajador que “solo cobra” y uno que tiene el control total de sus finanzas. En este 2026, con los nuevos salarios y tablas de impuestos, saber leer tu nómina es vital. ¡Vamos a desmenuzarlo juntos!

LOS DATOS DE IDENTIFICACIÓN: ¿ERES TÚ REALMENTE?
Antes de irnos a los pesos y centavos, revisa la parte de arriba del recibo. Parece aburrido, pero un error aquí puede invalidar tu antigüedad o tus puntos de Infonavit.
- RFC y CURP: Deben estar perfectos. Si hay una letra mal, tus impuestos se están yendo a la cuenta de “alguien más”.
- Número de Seguridad Social (NSS): Es tu llave para el hospital y la pensión.
- Fecha de ingreso: De aquí sale el cálculo de tus vacaciones (recuerda que en 2026 el primer año ya son 12 días).
- Salario Diario Integrado (SDI): Este es el número “mágico”. Es lo que ganas al día más tus prestaciones. En 2026, si ganas el mínimo de $315.04, tu SDI debería ser al menos de $330.57 (usando el factor 1.0493).

EL BLOQUE DE LAS PERCEPCIONES: LO QUE SUMA
Aquí es donde viene la alegría. Las percepciones son todos los conceptos por los que la empresa te está dando dinero o beneficios.
- Sueldo/Salario: Es tu pago base por los días trabajados en el periodo.
- Séptimo día: Si te pagan por día, verás desglosado tu día de descanso pagado.
- Horas Extras: Recuerda la regla del 3x3x3; las primeras 9 son dobles y las siguientes triples.
- Vales de despensa: Es un ingreso que no siempre paga impuestos (está exento según el valor de la UMA de $117.31).
- Primas y Bonos: Aquí entran el bono de puntualidad, asistencia o productividad.
- Aguinaldo y Prima Vacacional: Aparecen en los recibos de diciembre o cuando te vas de vacaciones.

EL BLOQUE DE LAS DEDUCCIONES: LO QUE RESTA
Este es el bloque que nos hace llorar un poquito. Son los descuentos legales o acordados que se le quitan a tu sueldo bruto.
- ISR (Impuesto Sobre la Renta): Es la “rebanada” para el gobierno. En 2026 se calcula con las tablas progresivas del Anexo 8. Recuerda que si ganas el salario mínimo de $315.04 diarios, este concepto debería estar en $0 porque estás exento.
- IMSS (Cuota Obrera): Es tu aportación para el Seguro Social (aprox. 2.5% de tu sueldo). Cubre tus medicinas, incapacidades y retiro.
- Préstamo Infonavit: Si ya sacaste casa, aquí es donde verás el descuento quincenal para pagar tu deuda.
- Fondo de ahorro: Es dinero que tú guardas y la empresa suele poner otra parte igual. ¡Es una excelente forma de ahorrar!
- Cuotas sindicales o pensiones alimenticias: Si aplican en tu caso, aquí aparecerán por orden de un juez o contrato colectivo.

EL “NETO”: LA LANA REAL
Al final del recibo verás la operación matemática: Total de Percepciones – Total de Deducciones = Neto a Recibir. 
Esa es la cantidad que debe coincidir centavo por centavo con lo que aparece en tu estado de cuenta bancario. Si no coincide, corre a RH; alguien hizo mal un movimiento.

LA IMPORTANCIA DEL CFDI Y EL TIMBRADO
Desde hace unos años, los recibos de nómina son facturas electrónicas (CFDI). Esto significa que cada vez que te pagan, el patrón le avisa al SAT: “Oye, le pagué a este trabajador tanto dinero y le quité tanto de impuesto”.
- XML y PDF: El PDF es lo que tú ves bonito, pero el XML es el archivo real que vale para el SAT.
- Verificación: Puedes entrar al portal del SAT con tu RFC y ver todos tus recibos timbrados. Si tu patrón te da un papel pero no aparece en el SAT, “aguas”, porque no te está reconociendo legalmente el pago ni las semanas ante el IMSS.

CASO PRÁCTICO: LEYENDO UN RECIBO DE $12,000 MENSUALES (2026)
Imagina que te pagan por quincena y ganas $6,000 brutos a la quincena.
- Percepción (Sueldo): $6,000.00.
- Deducción ISR: Digamos que son unos $450.00 (según tablas 2026).
- Deducción IMSS: Unos $150.00.
- Neto a recibir: $5,400.00.
Si te llega menos, revisa si hay una falta injustificada o un préstamo que no recordabas.

DATOS OFICIALES PARA TU NÓMINA EN 2026
Para que verifiques que los cálculos de ISR e IMSS son justos, no olvides estos valores:
- Salario Mínimo General: $315.04 diarios ($9,451.20 mensuales).
- UMA (Unidad de Medida y Actualización): $117.31 diarios. Muchos bonos y exenciones se calculan con esto.
- Factor de Integración (1er año): 1.0493. Sirve para que tu patrón reporte tu sueldo real ante el seguro.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Por qué en la segunda quincena del mes me quitan más ISR que en la primera?
R: Se llama “Ajuste Mensual”. En la primera quincena el SAT hace un cálculo estimado, y en la segunda suma todo lo que ganaste en el mes para aplicar la tasa exacta de la tabla mensual.

P: ¿Si gano el salario mínimo me deben descontar IMSS?
R: Sí, la cuota obrera del IMSS se descuenta a todos los trabajadores, excepto si el patrón decide absorberla, pero el ISR sí es el que queda en cero para el salario mínimo.

P: ¿Qué significa “Subsidio para el Empleo”?
R: Es un apoyo que el gobierno daba a los sueldos muy bajos. En 2026, con el aumento del salario mínimo, este concepto ha desaparecido para casi todos, ya que el sueldo mínimo actual supera los límites del subsidio antiguo.

P: ¿Me pueden descontar mis errores o material roto del recibo?
R: La LFT lo permite solo bajo condiciones muy específicas, con un tope máximo del 30% del excedente del salario mínimo y siempre que se demuestre tu responsabilidad.

P: ¿El recibo de nómina sirve para pedir un crédito?
R: ¡Es tu mejor carta! Los bancos y tiendas departamentales lo usan para ver tu estabilidad y capacidad de pago. Mantenlos bien guardaditos y ordenados.

CONCLUSIÓN: TU RECIBO ES TU VOZ
No dejes que tu nómina sea un misterio. Al entenderla, puedes detectar si te están pagando de menos, si te están quitando impuestos de más o si tu patrón está cumpliendo con sus obligaciones ante el IMSS e Infonavit. En MiLana queremos que seas un experto en tu propio dinero. Usa nuestra información para auditar tu recibo cada quincena y asegúrate de que cada peso de tu esfuerzo sea respetado. ¡Informado, tu lana rinde más!` },
  { id: "salariominimo", titulo: "Salario Mínimo 2026 en México: ¿Cuánto es lo menos que puedes ganar legalmente?", calc: null,
    texto: `INTRODUCCIÓN: LA BASE DE TU ECONOMÍA LABORAL
¡Qué onda! Hoy vamos a platicar de un tema que es la piedra angular de todo el sistema laboral en México: el salario mínimo. Si alguna vez has sentido que los precios en el súper suben y suben, el salario mínimo es la herramienta que tiene el gobierno para intentar que tu bolsillo no se quede atrás. Pero, como tu amigo contador, te voy a decir algo: el salario mínimo es mucho más que un simple número; es un derecho constitucional que define el piso de tu dignidad como trabajador.

En este 2026, hemos visto cambios muy interesantes. Ya no estamos en los tiempos donde el salario mínimo subía ‘pesitos’ que no alcanzaban ni para un refresco. Ahora, los incrementos son más agresivos, pero también traen reglas fiscales que debes conocer para que no te ‘chamaqueen’ con los descuentos. En esta guía vamos a ver cuánto es lo menos que te pueden pagar en el centro del país y en la frontera, por qué este sueldo es ‘intocable’ para el SAT y qué onda con la famosa UMA. ¡Vamos a darle!

LOS NÚMEROS OFICIALES DE 2026
Para este año, la Comisión Nacional de los Salarios Mínimos (CONASAMI) estableció dos montos principales que entraron en vigor el 1 de enero de 2026:

- Salario Mínimo General: $315.04 pesos diarios. Si vives en la Ciudad de México, Guadalajara, Monterrey (fuera de la franja fronteriza), Puebla o cualquier otra ciudad del interior, este es tu número base. Al mes, esto equivale a unos $9,451.20 pesos brutos.
- Salario Mínimo en la Zona Libre de la Frontera Norte (ZLFN): $472.56 pesos diarios. Esta zona incluye los municipios que colindan con Estados Unidos, desde Baja California hasta Tamaulipas. El sueldo es más alto aquí para compensar el costo de vida y evitar que la gente se cruce al otro lado. Al mes, esto suma unos $14,176.80 pesos brutos.

¿QUÉ SIGNIFICA “SALARIO MÍNIMO” SEGÚN LA LEY?
La Ley Federal del Trabajo (LFT) define al salario mínimo como la cantidad menor que debe recibir en efectivo el trabajador por los servicios prestados en una jornada de trabajo. Pero ojo, la ley dice algo muy bonito: el salario mínimo debe ser suficiente para satisfacer las necesidades normales de un jefe de familia en el orden material, social y cultural, y para proveer a la educación obligatoria de los hijos.

Como tu amigo contador, te recuerdo: si trabajas una jornada completa (normalmente 8 horas), NADIE puede pagarte menos de esos $315.04 diarios. Si te están pagando $200 o $250 pesos por un día completo, tu patrón está violando la ley de forma grave y puedes denunciarlo ante la Secretaría del Trabajo.

EL GRAN BENEFICIO FISCAL: ¡ESTÁS EXENTO DE ISR!
Esta es la mejor parte de ganar el salario mínimo en 2026. El artículo 96 de la Ley del Impuesto Sobre la Renta (LISR) dice que no se efectuará retención de ISR a las personas que únicamente perciban un salario mínimo general.

¿Qué significa esto en la práctica?
Si tú ganas exactamente $315.04 al día, el SAT no te quita ni un centavo de impuesto. Mientras que a alguien que gana $12,000 pesos le quitan una rebanada para el gobierno, tú recibes tus $315.04 íntegros. El único descuento que podrías ver es el del IMSS (cuota obrera), pero incluso en muchos casos, si ganas el mínimo, el patrón decide absorber esa cuota para que te llegue el dinero completo.

LA DESVINCULACIÓN DE LA UMA: UN CAMBIO HISTÓRICO
Antes, todo en México (multas, créditos Infonavit, trámites) subía cada vez que subía el salario mínimo. Eso era un problema porque si el salario subía mucho, las multas se volvían impagables. Por eso se creó la UMA (Unidad de Medida y Actualización).

En este 2026:
- El Salario Mínimo ($315.04) sirve exclusivamente para pagar tu trabajo.
- La UMA ($117.31) sirve para pagar multas, impuestos y trámites.
Esto es genial porque permite que el salario mínimo suba mucho para ayudar a los trabajadores sin que suban las multas de tránsito o los intereses de tus deudas con el gobierno. Son dos mundos totalmente separados.

CASO PRÁCTICO: EL RECIBO DE NÓMINA CON SALARIO MÍNIMO
Vamos a ver cuánto te debería caer a la quincena si ganas el mínimo en el centro del país:
- Salario diario: $315.04.
- Días de la quincena: 15.
- Sueldo Bruto: $4,725.60.
- Descuento ISR: $0.00 (por estar exento).
- Descuento IMSS (aprox): $118.00 (si el patrón no lo absorbe).
- Neto a recibir: $4,607.60 pesos.

Si trabajas en la frontera norte:
- Salario diario: $472.56.
- Sueldo Bruto Quincenal: $7,088.40.
- Neto a recibir: Aprox. $6,900.00 pesos (también exento de ISR por ser el mínimo de su zona).

¿ME PUEDEN DESCONTAR ALGO DEL SALARIO MÍNIMO?
La ley protege el salario mínimo como si fuera un tesoro. El artículo 110 de la LFT dice que los descuentos al salario mínimo están prohibidos, EXCEPTO en estos casos:
1. Pensiones Alimenticias: Si un juez lo ordena para tus hijos o expareja.
2. Pago de rentas: Si vives en una casa que te renta el patrón (no puede ser más del 15% del sueldo).
3. Abonos al Infonavit: Para pagar tu casa.
4. Abonos al FONACOT: Si sacaste un préstamo para muebles o ropa.
Fuera de eso, el patrón no puede descontarte por errores, por material roto o por “castigos” si ganas el mínimo.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si gano el salario mínimo tengo derecho a aguinaldo y vacaciones?
R: ¡Claro! Tienes los mismos derechos que cualquier directivo. Te tocan al menos 15 días de aguinaldo ($4,725.60) y tus 12 días de vacaciones desde el primer año ($3,780.48 de sueldo más tu prima vacacional).

P: ¿Qué pasa si trabajo medio tiempo?
R: El salario mínimo es por jornada completa. Si trabajas 4 horas (media jornada), te pueden pagar la mitad: $157.52 pesos.

P: ¿Las propinas cuentan para el salario mínimo?
R: No. El patrón debe pagarte al menos el mínimo de su bolsillo. Las propinas son un extra que te da el cliente y no pueden usarse para “completar” el salario mínimo legal.

P: ¿El salario mínimo es el mismo para todas las profesiones?
R: Casi todas. Existen los “Salarios Mínimos Profesionales” para oficios específicos (como albañiles, secretarias, choferes o reporteros) que son un poquito más altos que el general. Revísalos en la tabla de la CONASAMI.

P: ¿Qué hago si mi patrón me paga menos del mínimo?
R: Tienes dos caminos: hablar con él y recordarle que es ilegal, o acudir a la PROFEDET para poner una queja. Las multas para los patrones que no respetan el mínimo son de las más altas que existen.

CONCLUSIÓN: TU TRABAJO TIENE UN PISO DE DIGNIDAD
El salario mínimo es la garantía de que nadie puede abusar de tu necesidad pagándote una miseria. En 2026, con un monto de $315.04 diarios, tenemos una base más sólida, pero la clave es que tú la conozcas y la hagas respetar. En MiLana queremos que seas un trabajador empoderado. Usa nuestra información para revisar tu recibo y asegúrate de que, como mínimo, estés recibiendo lo que la ley manda. ¡Tu esfuerzo vale y tiene un precio justo!` },
  { id: "umaexplicada", titulo: "UMA 2026: La guía para entender la unidad que mide tus impuestos, multas y beneficios", calc: null,
    texto: `INTRODUCCIÓN: EL NÚMERO QUE NO ES DINERO, PERO VALE DINERO
¡Qué onda! Hoy vamos a platicar de un término que seguramente has escuchado en las noticias, en tu oficina o cuando te ponen una multa de tránsito, y que suele causar mucha confusión: la UMA. Si alguna vez te has preguntado: ‘¿Por qué si el salario mínimo subió un 20%, mi multa de estacionamiento no subió lo mismo?’ o ‘¿Por qué mi aguinaldo exento se mide en UMAs y no en pesos?’, estás en el lugar correcto.

Como tu amigo contador, te voy a confesar que la creación de la UMA fue una de las mejores ideas que ha tenido el gobierno para proteger el bolsillo de los trabajadores, aunque al principio parezca un enredo de siglas. En este 2026, entender la diferencia entre el salario mínimo y la UMA es vital para que sepas cuánto vas a pagar de impuestos y cuánto te puedes ahorrar. ¡Vamos a desmenuzar este concepto “con peras y manzanas”!

¿QUÉ DIABLOS ES LA UMA?
UMA significa Unidad de Medida y Actualización. Es una referencia económica en pesos que sirve para determinar el pago de obligaciones y supuestos previstos en las leyes federales y estatales. 

Básicamente, es una ‘regla’ que usa el gobierno para medir cosas que no son sueldos. Antes de 2016, todo en México se medía en ‘Veces Salario Mínimo’ (VSM). Si te pasabas un alto, la multa era de ’10 salarios mínimos’. El problema era que, si el gobierno quería subir mucho el sueldo de los trabajadores para que vivieran mejor, automáticamente subían todas las multas, los impuestos y los créditos de Infonavit, generando una inflación terrible. Para romper ese círculo vicioso, se inventó la UMA.

LOS VALORES OFICIALES DE 2026
La UMA no se queda fija; se actualiza cada año el 1 de febrero basándose en la inflación del año anterior. Para este 2026, los valores oficiales que debes conocer son:
- UMA Diaria: $117.31 pesos.
- UMA Mensual: $3,568.22 pesos (aprox).
- UMA Anual: $42,818.64 pesos (aprox).

Fíjate bien en la diferencia: mientras el Salario Mínimo 2026 es de $315.04 diarios, la UMA vale apenas $117.31. Esa brecha es la que protege tu economía.

¿PARA QUÉ SIRVE LA UMA EN TU VIDA DIARIA?
La UMA es la unidad que el SAT y otras instituciones usan para casi todo lo que no sea tu pago quincenal. Aquí te doy los ejemplos más comunes:

Exenciones de Impuestos (La parte buena):
El SAT dice que ciertos pagos que recibes están libres de ISR hasta cierto límite de UMAs.
- Aguinaldo: Exento hasta 30 UMAs ($3,519.30).
- PTU (Utilidades): Exento hasta 15 UMAs ($1,759.65).
- Prima Vacacional: Exento hasta 15 UMAs ($1,759.65).
Si estas exenciones se midieran con el salario mínimo, pagarías mucho más impuesto sobre tu dinero extra.

Multas y Trámites (La parte necesaria):
Si te ponen una multa de tránsito de ’10 UMAs’, en 2026 pagarás $1,173.10. Si todavía se usara el salario mínimo, esa misma multa te costaría $3,150.40. ¡Ves cómo la UMA te ayuda a que los errores no salgan tan caros!

Créditos de Infonavit:
Si sacaste tu casa hace años y tu crédito estaba en ‘Veces Salario Mínimo’, el Infonavit creó un seguro para que tu deuda no suba tanto como el sueldo, usando la UMI (Unidad Mixta Infonavit), que está muy ligada al valor de la UMA.

¿POR QUÉ LA UMA NO ES TU SUELDO?
Este es el error más grande que cometen algunas empresas ‘vivas’ y que tú debes detectar. La ley es muy clara: la UMA NO puede ser utilizada como índice, unidad de medida o referencia para determinar el monto del pago de sueldos y salarios.

Si tú trabajas una jornada completa, tu patrón NO puede decirte: ‘Te voy a pagar 2 UMAs al día’. Eso sería ilegal porque 2 UMAs son $234.62, y el Salario Mínimo legal en 2026 es de $315.04. El salario mínimo siempre debe ser la base de tu pago, nunca la UMA.

EL IMPACTO EN LAS PENSIONES
Aquí hay un tema polémico que ha llegado hasta la Suprema Corte. Actualmente, muchas pensiones del IMSS e ISSSTE se calculan y se topan en UMAs y no en salarios mínimos. 
El tope máximo de cotización al IMSS es de 25 UMAs diarias ($2,932.75 en 2026). 
Aunque para algunos pensionados esto parece injusto porque la UMA vale menos que el salario, es la regla que el sistema usa para mantenerse estable financieramente.

CASO PRÁCTICO: CALCULANDO TU AGUINALDO LIBRE DE IMPUESTOS
Imagina que en diciembre de 2026 te dan $10,000 pesos de aguinaldo. ¿Sobre cuánto vas a pagar ISR?
1. Valor de la UMA 2026: $117.31.
2. Límite exento (30 UMAs): $117.31 x 30 = $3,519.30.
3. Parte que sí paga impuesto: $10,000 - $3,519.30 = $6,480.70.

Gracias a que la UMA existe, esos $3,519.30 son totalmente tuyos sin que el SAT les toque un pelo.

¿QUIÉN DETERMINA EL VALOR DE LA UMA?
El encargado de hacer las cuentas es el INEGI. Cada año, en enero, revisan cuánto subieron los precios de la canasta básica, la gasolina y los servicios (la inflación) y anuncian el nuevo valor de la UMA que empezará a aplicar el 1 de febrero. 

Es importante que si tienes deudas o trámites pendientes, los hagas en enero antes de que la UMA suba su valor anual, aunque el cambio suele ser pequeño (entre el 4% y 7% normalmente).

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si mi contrato dice que gano en UMAs es legal?
R: No. Como ya mencionamos, la UMA no debe usarse para salarios. Tu contrato debe especificar tu sueldo en pesos mexicanos y nunca puede ser menor al salario mínimo vigente.

P: ¿Por qué la UMA cambia en febrero y no en enero como el salario mínimo?
R: Porque el INEGI necesita que termine el año para calcular la inflación real de diciembre y poder dar el número exacto. Por eso tenemos un mes de ‘desfase’.

P: ¿La UMA afecta mi crédito hipotecario bancario?
R: Normalmente no. Los bancos comerciales usan tasas de interés fijas o variables en pesos. La UMA afecta principalmente a los créditos de instituciones públicas como Infonavit o FOVISSSTE que no han sido convertidos a pesos.

P: ¿Cómo afecta la UMA a mis deducciones personales?
R: Mucho. El tope de lo que puedes deducir en tu declaración anual (lentes, dentista, etc.) es de 5 UMAs anuales o el 15% de tu ingreso. En 2026, ese tope de 5 UMAs anuales es de aproximadamente $214,093 pesos.

P: ¿Si gano el salario mínimo, la UMA me importa?
R: ¡Claro! Porque tus exenciones de aguinaldo y PTU se calculan con UMAs. Gracias a que la UMA es más baja, el rango de lo que queda libre de impuestos te beneficia para que recibas más dinero neto.

CONCLUSIÓN: LA UMA ES TU ALIADA SILENCIOSA
Aunque parezca solo un dato técnico, la UMA es la que evita que el costo de la vida legal (multas, trámites e impuestos) se dispare sin control. En MiLana queremos que seas un experto en estos términos para que nadie te engañe. Recuerda: el Salario Mínimo de $315.04 es para tu bolsillo, y la UMA de $117.31 es para medir tus obligaciones y beneficios fiscales. ¡Tener claras estas dos cifras es el primer paso para una salud financiera de diez!` },
  { id: "outsourcing", titulo: "Reforma al Outsourcing 2026: ¿Sigues trabajando para una empresa “fantasma”?", calc: null,
    texto: `INTRODUCCIÓN: EL FIN DE UN MODELO QUE NOS QUEDABA CHICO
¡Qué onda! Hoy vamos a platicar de uno de los cambios más profundos y “revolucionarios” que ha vivido el mundo del trabajo en México en las últimas décadas: la prohibición del outsourcing de personal. Si llevas unos años en el mundo laboral, seguramente te acuerdas de cuando trabajabas en una oficina muy elegante, pero tu recibo de nómina venía a nombre de “Servicios Administrativos Patito S.A. de C.V.”. 

Eso, mi estimado amigo, era el outsourcing de personal en su forma más pura (y a veces más mañosa). Se usaba mucho para que las empresas grandes evitaran pagar utilidades o para que no tuvieras antigüedad real. Pero en 2021 las reglas cambiaron para siempre y hoy, en este 2026, ese modelo es cosa del pasado. Como tu amigo contador, te voy a explicar qué fue lo que pasó, cómo te beneficia hoy y qué debes revisar para asegurarte de que tu patrón no esté dándole la vuelta a la ley. ¡Vamos a desmenuzarlo!

¿QUÉ ERA EL OUTSOURCING Y POR QUÉ LO PROHIBIERON?
El outsourcing (o subcontratación) consistía en que una empresa le pedía a otra que le “prestara” a sus trabajadores. Tú trabajabas en la Empresa A, pero tu patrón legal era la Empresa B. 

¿Cuál era el problema? Que muchas veces la Empresa B no tenía ni un escritorio a su nombre. Se usaba para:
- Evitar el reparto de utilidades (PTU), porque la Empresa B “nunca tenía ganancias”.
- Registrar a los trabajadores con el salario mínimo ($315.04 en 2026) aunque ganaran mucho más, para ahorrar en cuotas del IMSS.
- Cortar la antigüedad de los empleados cada cierto tiempo para evitar que acumularan años de servicio.

En septiembre de 2021, el gobierno dijo “¡Basta!” y prohibió que una empresa subcontrate personal para realizar las tareas principales de su negocio.

LA NUEVA REGLA: SOLO SERVICIOS ESPECIALIZADOS
Hoy en 2026, la subcontratación de personal está prohibida, pero existe una excepción legal: los Servicios Especializados. 

¿Qué significa esto? Que una empresa SÍ puede contratar a otra para tareas que no tengan que ver con su actividad principal.
Ejemplo: Si trabajas en un Banco, todos los cajeros y ejecutivos deben estar contratados directamente por el Banco. Pero el Banco sí puede contratar a una empresa externa para la limpieza, la seguridad o el mantenimiento de los elevadores.
Esas empresas externas son “servicios especializados” y deben cumplir con un requisito sagrado: el REPSE.

EL REPSE: LA LLAVE DE LA LEGALIDAD
El REPSE (Registro de Prestadoras de Servicios Especializados u Obras Especializadas) es el padrón de la Secretaría del Trabajo donde todas las empresas de outsourcing legal deben estar inscritas.

Si tú trabajas para una empresa que le presta servicios a otra:
- Tu empresa debe tener su registro REPSE vigente.
- Debes estar perfectamente identificado con un gafete o uniforme que diga quién es tu patrón real.
- Tu patrón debe estar al corriente con el pago de tus cuotas al IMSS e Infonavit basadas en tu sueldo real y no solo en la UMA de $117.31.

EL GRAN GANADOR DE LA REFORMA: EL REPARTO DE UTILIDADES (PTU)
La razón principal de esta reforma fue que el dinero de las ganancias llegara a los trabajadores. Antes, como estabas en una “empresa fantasma” de outsourcing, nunca veías utilidades porque esa empresa siempre salía en ceros.

Al pasar a la nómina de la empresa principal, ahora tienes derecho a participar en las ganancias reales del negocio donde dejas tu sudor diario. Recuerda que en 2026 el tope de PTU es de 3 meses de tu sueldo o el promedio de lo recibido en los últimos 3 años. Si tu empresa genera mucha lana, ¡tu cheque de mayo o junio ahora sí debe venir sustancioso!

RESPONSABILIDAD SOLIDARIA: NADIE SE LAVA LAS MANOS
Esto es algo que pocos trabajadores saben y es una joya de la ley. Si tú trabajas para un servicio especializado (una empresa de limpieza, por ejemplo) y tu patrón no te paga o no te da de alta en el IMSS, la empresa donde estás prestando el servicio es “responsable solidaria”.

Esto significa que tú puedes demandar a ambas empresas y la empresa grande (la que contrató el servicio) tiene la obligación legal de pagarte si tu patrón directo desaparece o no tiene lana. Ya no pueden decir “yo no sé, él no es mi empleado”.

¿QUÉ PASÓ CON TU ANTIGÜEDAD?
Si tú estabas en un esquema de outsourcing antes de 2021 y te pasaron a la empresa principal con la reforma, la ley obligó a los patrones a reconocer toda tu antigüedad acumulada. 
- Si entraste en 2015 por outsourcing y en 2021 te “absorbió” la empresa principal, hoy en 2026 tú tienes 11 años de antigüedad oficial.
- Esto es vital para tus vacaciones (recuerda que con 11 años te tocan 24 días de descanso) y para tu prima de antigüedad si algún día te liquidan.

DATOS OFICIALES PARA ESTE 2026
No olvides que, independientemente de quién sea tu patrón, tus derechos base este año son:
- Salario Mínimo: $315.04 diarios.
- UMA (para exenciones): $117.31 diarios.
- Factor de Integración mínimo: 1.0493.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Me pueden contratar por honorarios para evitar el outsourcing?
R: Si tienes un jefe, un horario y usas las herramientas de la empresa, eso es una relación laboral. Contratarte por honorarios para ocultar una chamba normal es ilegal y se considera una simulación.

P: ¿Cómo sé si mi empresa tiene REPSE?
R: Puedes consultarlo en el portal público de la Secretaría del Trabajo buscando el nombre o RFC de tu patrón. Si no aparecen, están trabajando fuera de la ley.

P: ¿Sigue existiendo el outsourcing en el gobierno?
R: La reforma aplicó para todos, incluyendo las dependencias de gobierno. Ellos también tuvieron que basificar o contratar directamente a miles de trabajadores.

P: ¿Qué pasa si me despiden y mi patrón era un outsourcing ilegal?
R: Tienes derecho a demandar a la empresa donde trabajabas físicamente. La ley te protegerá como si fueras empleado directo de ellos desde el primer día.

P: ¿La reforma al outsourcing subió los impuestos?
R: No para el trabajador, pero para las empresas sí subió la recaudación porque ya no pueden “esconder” empleados para pagar menos IMSS o ISR.

CONCLUSIÓN: LA MEJOR DEFENSA ES LA INFORMACIÓN
La reforma al outsourcing se hizo para devolverte lo que es tuyo: tus utilidades, tu antigüedad y tu seguridad social completa. En este 2026, ya no hay excusa para las empresas “fantasma”. En MiLana queremos que seas un trabajador con ojos de halcón; revisa tu recibo, verifica quién es tu patrón real y asegúrate de que tus prestaciones sean las que marca la ley. ¡Tu estabilidad y tu futuro no son negociables!` },
  { id: "retirodesempleo", titulo: "Retiro por Desempleo 2026: ¿Es buena idea sacar dinero de tu Afore si te quedas sin chamba?", calc: null,
    texto: `INTRODUCCIÓN: UNA LLAVE DE EMERGENCIA QUE DEBES CONOCER
¡Qué onda! Hoy vamos a platicar de un tema que, para ser honestos, surge en momentos de mucha presión y nervios: el retiro por desempleo. Perder el trabajo es una de las situaciones más estresantes que podemos vivir. Las cuentas no dejan de llegar, el súper sigue costando y la incertidumbre de no saber cuándo llegará el próximo sueldo te puede quitar el sueño.

En México, tenemos una “llave de emergencia” en nuestra Afore. Es dinero que tú y tu patrón han ahorrado y que puedes usar si te quedas sin ingresos. Sin embargo, como tu amigo contador, tengo la obligación de decirte que esta llave tiene un costo oculto que podría afectar tu jubilación en el futuro. En esta guía de 2026 te voy a explicar cómo funciona el retiro por desempleo, cuáles son los requisitos, cuánto dinero te pueden dar y, lo más importante, qué pasa con tus semanas cotizadas. ¡Vamos a desmenuzarlo con cuidado!

¿QUÉ ES EL RETIRO POR DESEMPLEO?
El retiro parcial por desempleo es un beneficio que tenemos todos los trabajadores que cotizamos al IMSS o al ISSSTE. Básicamente, la ley te permite retirar una pequeña parte de los recursos de tu cuenta individual de la Afore para ayudarte a solventar tus gastos mientras encuentras una nueva oportunidad laboral.

No es un préstamo; es tu propio dinero. Pero es un dinero que estaba destinado exclusivamente para cuando fueras viejito. Al sacarlo hoy, estás “asaltando” a tu “yo del futuro”. Por eso, aunque es un derecho, hay que usarlo con mucha inteligencia financiera.

REQUISITOS PARA SOLICITARLO EN 2026
Para que la Afore te suelte la lana este año, debes cumplir con ciertas reglas de oro:
- Estar desempleado: Debes tener al menos 46 días naturales sin trabajo desde que el patrón te dio la baja ante el IMSS.
- Tener cuenta de Afore: Debes estar registrado en una administradora desde hace al menos 3 años.
- Tiempo entre retiros: No debes haber ejercido este derecho en los últimos 5 años. Si sacaste dinero en 2022, todavía no puedes volver a pedirlo.
- Semanas cotizadas: Debes tener al menos 12 bimestres (2 años) de cotización al IMSS.
- Expediente de identificación: Debes tener tus datos biométricos (huellas y foto) actualizados en tu Afore.

¿CUÁNTA LANA TE DAN? LAS DOS MODALIDADES
El monto que puedes retirar depende de cuánto tiempo lleves con tu cuenta de Afore y cuántas semanas tengas cotizadas ante el seguro. Existen dos opciones (Modalidades):

Modalidad A: Para quienes tienen una cuenta de Afore de entre 3 y 5 años de antigüedad.
- Te entregan una cantidad equivalente a 30 días de tu último Salario Base de Cotización, con un tope de 10 UMAs.
- Valor UMA 2026: $117.31.
- Tope máximo: $1,173.10 diarios x 30 días = $35,193.00 pesos.

Modalidad B: Para quienes tienen una cuenta de Afore de 5 años o más.
- Te entregan lo que sea menor entre:
  A) 90 días de tu Salario Base de Cotización de las últimas 250 semanas.
  B) El 11.5% del saldo acumulado en tu Subcuenta de Retiro, Cesantía en Edad Avanzada y Vejez (RCV).

EL COSTO OCULTO: LA REDUCCIÓN DE SEMANAS COTIZADAS
Aquí es donde quiero que pongas mucha atención, porque es la parte que casi nadie te explica en la ventanilla. Cuando tú sacas dinero por desempleo, el IMSS te quita semanas de cotización de forma proporcional al monto retirado.

¿Por qué importa esto? Porque para jubilarte y tener una pensión de por vida en 2026, necesitas cumplir con un número mínimo de semanas (actualmente la meta es llegar a las 1,000 semanas). Si hoy sacas dinero y te quitan 50 o 100 semanas, podrías estar retrasando tu jubilación uno o dos años, o incluso quedarte corto y no alcanzar la pensión mínima garantizada. Es un precio muy alto por un dinero que a veces usamos para gastos que podrían esperar.

¿CÓMO RECUPERAR TUS SEMANAS? (EL CONSEJO PRO)
¡Buenas noticias! La ley permite que recuperes esas semanas que te quitaron. Lo único que tienes que hacer es devolver el dinero a tu Afore.
Como tu amigo contador, te sugiero que en cuanto encuentres chamba nueva y te estabilices, hagas un ahorro voluntario específico para “reponer” ese retiro. Una vez que deposites la lana, la Afore le avisa al IMSS y tus semanas vuelven a aparecer como si nunca te hubieras ido. ¡No lo dejes para después!

PASO A PASO PARA EL TRÁMITE EN 2026
Ya no tienes que ir a las oficinas de la Afore a formarte. Casi todo se hace digital:
1. App AforeMóvil: Descarga la app y busca la opción “Retiros”.
2. Solicitud: Ingresa tus datos y elige la modalidad.
3. Validación: La Afore verificará con el IMSS que realmente tengas los 46 días desempleado.
4. Pago: Una vez aprobado, el dinero te cae en tu cuenta bancaria en un plazo de 5 a 10 días hábiles. Algunas Afores te pagan en una sola exhibición y otras en mensualidades (si es la Modalidad B).

DATOS OFICIALES PARA TUS CÁLCULOS 2026
Recuerda los valores que definen los topes de tu retiro este año:
- Salario Mínimo General: $315.04 diarios.
- UMA (Unidad de Medida y Actualización): $117.31 diarios.
- Plazo de espera: 46 días naturales.
- Periodicidad: Cada 5 años.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si renuncio voluntariamente tengo derecho al retiro por desempleo?
R: ¡Sí! No importa si te corrieron o si tú te fuiste. El único requisito es que el patrón te haya dado de baja en el IMSS y hayan pasado los 46 días reglamentarios.

P: ¿Puedo sacar dinero de mi Infonavit por desempleo?
R: No. El dinero del Infonavit solo se puede usar para vivienda o se te entrega hasta que te jubiles. El único retiro parcial “en efectivo” que existe es el de la Afore.

P: ¿El retiro por desempleo paga impuestos?
R: No. Este retiro está exento de ISR, por lo que la cantidad que te calculen es la que te debe llegar íntegra a tu cuenta.

P: ¿Qué pasa si vuelvo a trabajar antes de los 46 días?
R: Si consigues chamba rápido y te dan de alta en el IMSS antes de cumplir los 46 días, pierdes el derecho a solicitar este retiro. ¡Pero felicidades, ya tienes sueldo de nuevo!

P: ¿Si tengo dos cuentas de Afore puedo sacar de las dos?
R: No. Primero debes hacer el trámite de unificación de cuentas. Solo puedes tener una Afore y un solo retiro por desempleo cada 5 años.

CONCLUSIÓN: ÚSALO COMO ÚLTIMO RECURSO
El retiro por desempleo es una red de seguridad muy valiosa, pero úsala solo si realmente ya agotaste tus ahorros de emergencia y no tienes otra opción. Recuerda que ese dinero es para tu vejez y que las semanas que pierdas hoy son tiempo que te faltará mañana. En MiLana queremos que tomes decisiones informadas. Si decides sacar el dinero, haz el compromiso contigo mismo de devolverlo en cuanto puedas. ¡Mucho éxito en tu búsqueda de empleo, recuerda que eres capaz de salir de esta!` },
  { id: "primadom", titulo: "Prima Dominical 2026: ¿Te toca cobrar un extra por trabajar los domingos?", calc: null,
    texto: `INTRODUCCIÓN: EL SACRIFICIO DEL DOMINGO TIENE PRECIO
¡Qué onda! Vamos a cerrar con broche de oro esta serie de guías platicando de un tema que afecta a miles de trabajadores en México, especialmente en sectores como el comercio, el turismo, los restaurantes y los servicios de emergencia: la Prima Dominical. 

Mientras la mayoría de la gente está en el “brunch”, en el estadio o simplemente echando la flojera en pijama, hay muchísimos valientes que se levantan temprano los domingos para que el mundo siga girando. Pero, como tu amigo contador, te voy a decir algo: trabajar en domingo no es “chamba normal”. La Ley Federal del Trabajo (LFT) reconoce que el domingo es el día familiar por excelencia y que, si te toca sacrificarlo, el patrón debe compensarte con un extra en tu pago.

En este 2026, con el salario mínimo en niveles históricos, no puedes permitir que se les “olvide” incluir este concepto en tu recibo. En esta guía te voy a explicar quién tiene derecho a cobrarla, cuánto es el porcentaje exacto y cómo se calcula paso a paso. ¡Vamos a darle!

¿QUÉ ES LA PRIMA DOMINICAL Y POR QUÉ EXISTE?
La Prima Dominical es una compensación adicional que se otorga a los trabajadores que prestan sus servicios de manera ordinaria en día domingo. Está fundamentada en el artículo 71 de la Ley Federal del Trabajo.

La lógica de la ley es muy humana: el descanso semanal debería ser, de preferencia, el domingo. Si por la naturaleza de tu trabajo (como en un cine o un hospital) tú descansas un martes o un miércoles y el domingo vas a laborar, el patrón debe pagarte un “premio” por no estar con tu familia o amigos en el día de descanso tradicional de la sociedad.

¿CUÁNDO SÍ Y CUÁNDO NO APLICA? (EL GRAN MITO)
Hay mucha confusión aquí, así que pon mucha atención. Como tu amigo contador, te aclaro los dos escenarios posibles:

- Escenario A (SÍ aplica): Tu descanso oficial es CUALQUIER DÍA que no sea domingo (por ejemplo, descansas los jueves) y el domingo es un día normal de tu jornada semanal. Aquí te toca tu sueldo normal + el 25% de Prima Dominical.
- Escenario B (OTRA REGLA): Tu descanso oficial SÍ es el domingo, pero tu jefe te pide que vayas a trabajar “porque hay mucha chamba”. En este caso, no se llama Prima Dominical a secas; se llama “Trabajo en día de descanso”. Aquí el pago es mucho mayor: te deben pagar el día al triple (sueldo normal + 200% adicional). 

En resumen: La Prima Dominical “estándar” es para quienes tienen su jornada normal en domingo y descansan otro día entre semana.

¿CUÁNTO ES EL MONTO LEGAL EN 2026?
La ley marca un mínimo, pero tu contrato podría decir más.
- Porcentaje de ley: 25% adicional sobre el salario de un día ordinario de trabajo.
- Prestaciones superiores: Algunas empresas, para atraer talento, pagan el 30%, 40% o hasta el 50% de prima dominical. Revisa tu contrato colectivo o individual.

CÁLCULO PASO A PASO CON EL SALARIO MÍNIMO 2026
Vamos a hacer la cuenta con los números reales de este año para que veas que sí es una lana que suma a final de mes.

- Salario Mínimo General 2026: $315.04 diarios.
- Cálculo de la Prima Dominical (25%): $315.04 x 0.25 = $78.76 pesos extra por cada domingo trabajado.

Si en el mes trabajaste los 4 domingos, deberías recibir $315.04 pesos adicionales en tu mes (básicamente un día más de sueldo gratis solo por ser domingo).



Ahora, si ganas un sueldo mayor, digamos $600 pesos diarios:
- Prima Dominical por día: $600 x 0.25 = $150 pesos extra.
- Al mes (4 domingos): $600 pesos adicionales. 

¡Ya sale para la cena o para el ahorro!

IMPUESTOS Y LA UMA 2026
Como siempre, el SAT quiere su parte, pero la ley nos da un pequeño respiro. La Prima Dominical tiene una parte exenta de ISR.
- Exención: 1 UMA por cada domingo trabajado.
- Valor de la UMA 2026: $117.31 diarios.

¿Qué significa esto? Que si tu prima dominical es de $78.76 (ganando el mínimo), no pagas ni un centavo de impuesto sobre ese concepto porque es menor a una UMA. Si tu prima es de $150, solo pagarás ISR sobre la diferencia ($150 - $117.31 = $32.69). Como ves, la UMA es tu aliada para que te llegue más dinero neto a la bolsa.

¿CÓMO DEBE APARECER EN TU RECIBO DE NÓMINA?
Como ya vimos en la guía de recibos de nómina, la Prima Dominical debe venir desglosada en el bloque de “Percepciones” con su propio nombre y código. 
- No permitas que te digan: “Ya viene incluida en tu sueldo base”. Eso es ilegal. Debe aparecer aparte para que sepas cuántos domingos te están pagando y para que el cálculo del IMSS (tu SDI) sea el correcto. 
- Recuerda que la Prima Dominical “integra” al salario; es decir, sube un poquito tu Salario Diario Integrado, lo que te ayuda a tener más puntos de Infonavit y una mejor pensión.

7. CONSEJOS DE “AMIGO CONTADOR”
- Registra tus días: Lleva un calendario de qué domingos trabajaste. A veces en las nóminas quincenales se “saltan” un domingo por error administrativo.
- Revisa tu día de descanso: Si tu jefe te cambia el día de descanso de última hora del martes al domingo, técnicamente no debería haber prima, pero si te lo cambia “para no pagarte el extra”, podrías estar ante una práctica abusiva.
- Guarda tus recibos: Son tu prueba ante cualquier reclamación en la PROFEDET si decides salir de la empresa.

PREGUNTAS FRECUENTES (FAQ)
P: ¿Si trabajo el domingo pero solo medio tiempo me toca la prima?
R: Sí. La prima dominical se paga proporcionalmente al tiempo trabajado, pero lo más común y justo es que se pague el 25% del salario diario completo si cumpliste con tu jornada asignada.

P: ¿Si trabajo de noche y mi turno empieza el sábado y termina el domingo me toca prima?
R: Sí, la ley protege las horas trabajadas dentro del día domingo. Normalmente se paga la prima si la mayor parte del turno o el final del mismo cae en domingo.

P: ¿Me pueden quitar el día de descanso para que siempre trabaje los domingos?
R: El patrón puede fijar los días de descanso según las necesidades del negocio, pero siempre tienes derecho a al menos un día de descanso por cada seis de trabajo. Si ese descanso no es domingo, te tienen que pagar la prima dominical de ley.

P: ¿Qué pasa si el domingo también es día festivo (ej. 16 de septiembre)?
R: ¡Doble premio! Te deben pagar la Prima Dominical (25%) Y además el pago por día festivo (triple sueldo). No son excluyentes; se suman.

P: ¿Si gano por comisión tengo derecho a prima dominical?
R: ¡Claro! Se calcula el promedio de tus ingresos diarios y sobre eso se aplica el 25% adicional por el domingo laborado.

CONCLUSIÓN: QUE TU DOMINGO VALGA CADA MINUTO
Trabajar mientras los demás descansan es un esfuerzo que merece ser recompensado. La Prima Dominical es ese pequeño reconocimiento legal a tu dedicación. En MiLana queremos que cada peso que te ganes sea respetado. Usa nuestra calculadora para verificar que el 25% esté bien aplicado y que el SAT no te esté quitando de más. ¡Haz que tu esfuerzo rinda y disfruta tu lana, que para eso la trabajaste!` },
];

export const GLOSARIO = [
  { termino: "SDI", definicion: "Salario Diario Integrado. Tu sueldo diario más prestaciones prorrateadas. Base para IMSS y liquidaciones." },
  { termino: "UMA", definicion: "Unidad de Medida y Actualización. $117.31/día en 2026. Para multas, exenciones y créditos." },
  { termino: "IMSS", definicion: "Instituto Mexicano del Seguro Social. Cuota obrera aproximadamente 2.5%." },
  { termino: "ISR", definicion: "Impuesto Sobre la Renta. El descuento principal de tu nómina (1.92% a 35%)." },
  { termino: "CFDI", definicion: "Comprobante Fiscal Digital por Internet. Tu factura electrónica y recibo de nómina." },
  { termino: "RFC", definicion: "Registro Federal de Contribuyentes. Tu identificación fiscal ante el SAT." },
  { termino: "Infonavit", definicion: "5% de tu sueldo que tu patrón aporta para crédito de vivienda." },
  { termino: "SAR", definicion: "Sistema de Ahorro para el Retiro. 2% a tu Afore." },
  { termino: "PTU", definicion: "Participación de los Trabajadores en las Utilidades. 10% de ganancias de la empresa." },
  { termino: "RESICO", definicion: "Régimen Simplificado de Confianza. ISR del 1-2.5% para freelancers." },
  { termino: "LFT", definicion: "Ley Federal del Trabajo." },
  { termino: "PROFEDET", definicion: "Procuraduría Federal de la Defensa del Trabajo. Asesoría gratuita." },
  { termino: "SBC", definicion: "Salario Base de Cotización. Lo que tu patrón reporta al IMSS." },
  { termino: "DOF", definicion: "Diario Oficial de la Federación. Donde se publican leyes y tablas fiscales." },
  { termino: "CONSAR", definicion: "Comisión Nacional del Sistema de Ahorro para el Retiro. Regula las Afores." },
];

export const CALENDARIO = [
  { mes: "Enero", eventos: ["1 — Día inhábil SAT", "17 — Declaración mensual de diciembre", "31 — Fecha límite constancias de retenciones"] },
  { mes: "Febrero", eventos: ["3 — Día inhábil (Constitución)", "17 — Declaración mensual de enero"] },
  { mes: "Marzo", eventos: ["17 — Declaración mensual de febrero", "17 — Día inhábil (Benito Juárez)"] },
  { mes: "Abril", eventos: ["1 — Inicia declaración anual personas físicas", "1 — Inicia plazo pago PTU empresas", "17 — Declaración mensual de marzo", "30 — Fecha límite declaración anual"] },
  { mes: "Mayo", eventos: ["1 — Día inhábil (Día del Trabajo)", "17 — Declaración mensual de abril", "30 — Fecha límite PTU empresas"] },
  { mes: "Junio", eventos: ["17 — Declaración mensual de mayo", "29 — Fecha límite PTU personas físicas"] },
  { mes: "Julio", eventos: ["17 — Declaración mensual de junio"] },
  { mes: "Agosto", eventos: ["17 — Declaración mensual de julio"] },
  { mes: "Septiembre", eventos: ["16 — Día inhábil (Independencia)", "17 — Declaración mensual de agosto"] },
  { mes: "Octubre", eventos: ["17 — Declaración mensual de septiembre"] },
  { mes: "Noviembre", eventos: ["17 — Declaración mensual de octubre", "18 — Día inhábil (Revolución)"] },
  { mes: "Diciembre", eventos: ["17 — Declaración mensual de noviembre", "20 — Fecha límite pago de aguinaldo", "25 — Día inhábil"] },
];
