/* מועד ב', סמסטר אביב תשפ"א (17.10.21) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2021B', label: 'אביב תשפ״א, מועד ב׳', date: '17.10.21', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`יהי $T:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ האופרטור
$$T\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}a+c+d&3a+3c+3d\\4a+b+5d&-2a-3b+10c-5d\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>מצאו אופרטור לינארי $S:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ כך ש-$\dim\operatorname{Im}S=3$ וגם $\operatorname{Im}T\subset\operatorname{Im}S$.</li>
<li>(לגבי $T$ הנתון) הוכיחו כי $\mathbb{R}^{2\times2}=\operatorname{Im}T\oplus\ker T$.</li>
<li>הוכיחו או הפריכו: לכל $A\in\mathbb{R}^{2\times2}$ מתקיים $A\in\ker T$ או $A\in\operatorname{Im}T$.</li>
</ol>`,
      hint: R`בסעיף ג' – משפט הקיום והיחידות: מספיק להגדיר את $S$ על בסיס. בסעיף ד' – חשבו את החיתוך והשתמשו במשפט המימדים הראשון $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$.`,
      solution: R`<p><b>א.</b> מדרגים את הממ"ל ההומוגנית ומקבלים $a+c+d=0,\ b-4c+d=0$:
$(a,b,c,d)=(-c-d,4c-d,c,d)=c(-1,4,1,0)+d(-1,-1,0,1)$, לכן
$B_{\ker T}=\left\{\begin{pmatrix}-1&4\\1&0\end{pmatrix},\begin{pmatrix}-1&-1\\0&1\end{pmatrix}\right\}$, $\dim\ker T=2$.</p>
<p><b>ב.</b> לפי משפט המימדים השני $\dim\operatorname{Im}T=4-2=2$.
$T\begin{pmatrix}a&b\\c&d\end{pmatrix}=a\begin{pmatrix}1&3\\4&-2\end{pmatrix}+b\begin{pmatrix}0&0\\1&-3\end{pmatrix}+c\begin{pmatrix}1&3\\0&10\end{pmatrix}+d\begin{pmatrix}1&3\\5&-5\end{pmatrix}$,
וניקח 2 פורשים בת"ל: $B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&3\\4&-2\end{pmatrix},\begin{pmatrix}0&0\\1&-3\end{pmatrix}\right\}$.</p>
<p><b>ג.</b> נגדיר $S$ על הבסיס הסטנדרטי: $S(E_{11})=\begin{pmatrix}1&3\\4&-2\end{pmatrix}$, $S(E_{12})=\begin{pmatrix}0&0\\1&-3\end{pmatrix}$, $S(E_{21})=\begin{pmatrix}0&0\\0&1\end{pmatrix}$, $S(E_{22})=0$.
3 התמונות בת"ל, לכן $\dim\operatorname{Im}S=3$ ו-$\operatorname{Im}T\subset\operatorname{Im}S$. לפי משפט הקיום והיחידות קיים $S$ כזה, ובמפורש:
$S\begin{pmatrix}x&y\\z&w\end{pmatrix}=\begin{pmatrix}x&3x\\4x+y&-2x-3y+z\end{pmatrix}$.</p>
<p><b>ד.</b> איבר כללי בתמונה: $x\begin{pmatrix}1&3\\4&-2\end{pmatrix}+y\begin{pmatrix}0&0\\1&-3\end{pmatrix}=\begin{pmatrix}x&3x\\4x+y&-2x-3y\end{pmatrix}$. נאלץ את תנאי הגרעין:
$x+(4x+y)+(-2x-3y)=0,\ 3x-4(4x+y)+(-2x-3y)=0 \Rightarrow 3x-2y=0,\ -15x-7y=0\Rightarrow x=y=0$.
לכן $\operatorname{Im}T\cap\ker T=\{0\}$, ולפי משפט המימדים הראשון $\dim(\operatorname{Im}T+\ker T)=2+2-0=4$, כלומר $\operatorname{Im}T+\ker T=\mathbb{R}^{2\times2}$, והסכום ישר.</p>
<p><b>ה. הטענה לא נכונה.</b> $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$: $T(A)=\begin{pmatrix}1&3\\4&-2\end{pmatrix}\neq0$ ולכן $A\notin\ker T$. ו-$\begin{pmatrix}1&0\\0&0\end{pmatrix}=\begin{pmatrix}x&3x\\4x+y&-2x-3y\end{pmatrix}$ דורש $x=1$ וגם $3x=0$ – אין פתרון, לכן $A\notin\operatorname{Im}T$.</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}0&1&2\\2&1&4\\-1&-1&-3\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הערכים העצמיים והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>הוכיחו כי $\operatorname{trace}(A^{2022})=\operatorname{rank}(A^{2022})$.</li>
</ol>`,
      hint: R`בסעיף ג': אם $A=PDP^{-1}$ אז $A^{k}=PD^{k}P^{-1}$, ולמטריצות דומות אותה עקבה ואותה דרגה.`,
      solution: R`<p><b>א+ב.</b>
$$|\lambda I-A|\underset{C_1\to C_1-C_2}{=}\begin{vmatrix}\lambda+1&-1&-2\\-\lambda-1&\lambda-1&-4\\0&1&\lambda+3\end{vmatrix}\underset{R_2\to R_2+R_1}{=}(\lambda+1)\left[(\lambda-2)(\lambda+3)+6\right]=\lambda(\lambda+1)^2$$
ע"ע: $\lambda_1=0$ (ר"א 1), $\lambda_2=-1$ (ר"א 2).<br>
$\lambda_1=0$: $x+z=0,\ y+2z=0$, בסיס $\{(-1,-2,1)\}$, ר"ג 1.<br>
$\lambda_2=-1$: $x+y+2z=0$, בסיס $\{(-1,1,0),(-2,0,1)\}$, ר"ג 2.<br>
לכל ע"ע ר"א = ר"ג ולכן $A$ לכסינה:
$D=\begin{pmatrix}0&0&0\\0&-1&0\\0&0&-1\end{pmatrix}$, $P=\begin{pmatrix}-1&-1&-2\\-2&1&0\\1&0&1\end{pmatrix}$.</p>
<p><b>ג.</b> $A^{2022}=(PDP^{-1})^{2022}=PD^{2022}P^{-1}$, לכן $A^{2022}$ דומה ל-$D^{2022}$, ולמטריצות דומות אותה עקבה ואותה דרגה. $D^{2022}=\operatorname{diag}(0,1,1)$, ולכן
$\operatorname{trace}(A^{2022})=2=\operatorname{rank}(A^{2022})$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'lt', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $T:\mathbb{R}^2\to\mathbb{R}^2$ העתקה לינארית המקיימת $\dim\operatorname{Im}T=\dim\ker T=1$ אזי $\operatorname{Im}T\cap\ker T=\{0\}$.`,
      hint: R`חפשו העתקה ששולחת את $e_2$ לאפס ואת $e_1$ ל-$e_2$.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $T(x,y)=(0,x)$. מימד התמונה 1 ולפי משפט המימדים השני גם מימד הגרעין 1. אבל $\operatorname{Im}T=\ker T=\operatorname{sp}\{(0,1)\}$, ולכן החיתוך אינו $\{0\}$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'inverse', type: 'tf', answer: true,
      text: R`תהי $A=\begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}$. הוכיחו או הפריכו: קיימת מטריצה הפיכה $P$ כך ש-$PA=\begin{pmatrix}0&0\\0&1\\1&0\end{pmatrix}$.`,
      hint: R`ביצוע פעולת שורה = כפל משמאל במטריצה אלמנטרית, ומכפלת אלמנטריות היא הפיכה.`,
      solution: R`<p><b>הטענה נכונה.</b> ניתן להגיע מ-$A$ למטריצה הנתונה בפעולות שורה אלמנטריות:
$$A\xrightarrow[R_3\to R_3-5R_1]{R_2\to R_2-3R_1}\begin{pmatrix}1&2\\0&-2\\0&-4\end{pmatrix}\xrightarrow{R_3\to R_3-2R_2}\begin{pmatrix}1&2\\0&-2\\0&0\end{pmatrix}\xrightarrow{R_1\to R_1+R_2}\begin{pmatrix}1&0\\0&-2\\0&0\end{pmatrix}\xrightarrow{R_2\to-0.5R_2}\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}\xrightarrow{R_1\leftrightarrow R_3}\begin{pmatrix}0&0\\0&1\\1&0\end{pmatrix}$$
לכן קיימות מטריצות אלמנטריות $E_1,\dots,E_k$ כך ש-$E_k\cdots E_1A$ שווה למטריצה המבוקשת. $P=E_k\cdots E_1$ הפיכה כמכפלת הפיכות.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'repr', type: 'tf', answer: true,
      text: R`תהי $M\in\mathbb{R}^{2\times2}$ ויהי $T:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ האופרטור $T(A)=AM$. הוכיחו או הפריכו: אם $\operatorname{rank}(M)=1$ אז $\dim(\operatorname{Im}T)=2$.`,
      hint: R`דרגה 1 – השורות פרופורציונליות: $M=\begin{pmatrix}x&y\\\alpha x&\alpha y\end{pmatrix}$. בנו את $[T]_E$; מימד התמונה = דרגת המטריצה המייצגת.`,
      solution: R`<p><b>הטענה נכונה.</b> $M=\begin{pmatrix}x&y\\\alpha x&\alpha y\end{pmatrix}$ כאשר $x,y$ לא שניהם 0. לפי הבסיס הסטנדרטי:
$T(E_{11})=\begin{pmatrix}x&y\\0&0\end{pmatrix}$, $T(E_{12})=\begin{pmatrix}\alpha x&\alpha y\\0&0\end{pmatrix}$, $T(E_{21})=\begin{pmatrix}0&0\\x&y\end{pmatrix}$, $T(E_{22})=\begin{pmatrix}0&0\\\alpha x&\alpha y\end{pmatrix}$,
$$[T]_E=\begin{pmatrix}x&\alpha x&0&0\\y&\alpha y&0&0\\0&0&x&\alpha x\\0&0&y&\alpha y\end{pmatrix}$$
עמודה 2 כפולה של עמודה 1 ועמודה 4 כפולה של עמודה 3; עמודות 1 ו-3 שונות מאפס ובת"ל. לכן הדרגה 2, וזה מימד התמונה.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: אם ל-$A,B\in\mathbb{R}^{n\times n}$ יש $n$ וקטורים עצמיים משותפים ובלתי תלויים לינארית, אזי $A+B$ לכסינה.`,
      hint: R`אותם ו"ע ⇒ אותה מטריצה מלכסנת $P$.`,
      solution: R`<p><b>הטענה נכונה.</b> מהנתון $A,B$ לכסינות, ומכיוון שאלו אותם ו"ע – יש להן אותה $P$ מלכסנת: $A=PD_AP^{-1}$, $B=PD_BP^{-1}$. לכן $A+B=P(D_A+D_B)P^{-1}$, וסכום אלכסוניות הוא אלכסונית – $A+B$ דומה לאלכסונית.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'ג',
      text: R`יהי $w=z^{2021}(7+i)+(i-7)(\bar z)^{2021}$. אזי לכל $z\in\mathbb{C}$ מתקיים:`,
      options: [R`$w=-1$`, R`$w=0$`, R`$w$ מדומה טהור`, R`$w=1$`, R`$w$ ממשי`],
      hint: R`הוציאו מינוס מהסוגריים השניים וזהו: מספר פחות הצמוד שלו. השתמשו ב-$z-\bar z=2i\operatorname{Im}(z)$.`,
      solution: R`<p>$w=z^{2021}(7+i)-(7-i)(\bar z)^{2021}=z^{2021}(7+i)-\overline{z^{2021}(7+i)}$ – מספר פחות הצמוד שלו, ולכן מדומה טהור. <b>תשובה: ג'.</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'systems', type: 'mc', answer: 'ב',
      text: R`יהיו $v_1,v_2,v_3,v_4\in\mathbb{R}^4$ שונים מ-0, ותהי $A$ המטריצה שעמודותיה הן $v_1,v_2,v_3,v_4$. אזי:`,
      options: [
        R`אם מימד מרחב השורות של $A$ שווה ל-3 אז למערכת $Ax=0$ יש 3 דרגות חופש.`,
        R`אם $\operatorname{sp}\{v_1,v_2\}=\operatorname{sp}\{v_3,v_4\}$ אז למערכת $Ax=v_3$ יש פתרון מהצורה $(\alpha,\beta,0,0)^t$.`,
        R`אם למערכת $Ax=v_3$ יש אינסוף פתרונות, אז $\operatorname{rank}(A)=3$.`,
        R`אם $(1,1,1,1)^t$ הוא פתרון של המערכת $Ax=b$ אז בהכרח $b\neq v_3$.`,
        R`אם למערכת $Ax=v_1+v_2$ יש פתרון, אז $v_1\in\operatorname{sp}\{v_3,v_4\}$.`
      ],
      hint: R`$Ax$ הוא צירוף לינארי של עמודות $A$ עם המקדמים $x$. מספר דרגות החופש $=n-r(A)$.`,
      solution: R`<p>א. לא: $r(A)=3$ ולכן מספר דרגות החופש $4-3=1$.<br>
ב. נכון: $v_3\in\operatorname{sp}\{v_1,v_2\}$, כלומר $v_3=\alpha v_1+\beta v_2$, ולכן $A(\alpha,\beta,0,0)^t=v_3$.<br>
ג. לא: אינסוף פתרונות נותן רק $r(A)\le3$. למשל כל העמודות שוות ל-$v_3$: אינסוף פתרונות, $r(A)=1$.<br>
ד. לא: $v_1=v_2=v_3$, $v_4=-2v_3$ נותן $A(1,1,1,1)^t=v_3$.<br>
ה. לא: $A=\begin{pmatrix}1&0&1&1\\0&1&1&1\\0&0&1&1\\0&0&0&1\end{pmatrix}$ בדרגה 4 ולכן $Ax=b$ פתירה לכל $b$, אבל $v_1\notin\operatorname{sp}\{v_3,v_4\}$.</p>
<p><b>תשובה: ב'.</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'det', type: 'mc', answer: 'ג',
      text: R`תהי $A\in\mathbb{R}^{4\times4}$, כאשר $x$ פרמטר:
$$A=\begin{pmatrix}x^3-4x&x^7-x^2-4&x^2+1&0\\-5&-x-6&x-5&5\\0&-2&2&0\\-10&12-2x&2x-10&10\end{pmatrix}$$
אזי:`,
      options: [
        'קיימים בדיוק 2 ערכים שונים של $x$ עבורם $A$ לא הפיכה וסכומם 1.',
        'קיימים בדיוק 3 ערכים שונים של $x$ עבורם $A$ לא הפיכה וסכומם 1.',
        'קיימים בדיוק 3 ערכים שונים של $x$ עבורם $A$ לא הפיכה וסכומם 0.',
        'קיימים בדיוק 7 ערכים שונים של $x$ עבורם $A$ לא הפיכה וסכומם 4.',
        'קיימים בדיוק 7 ערכים שונים של $x$ עבורם $A$ לא הפיכה וסכומם 0.'
      ],
      hint: R`הפכו את שורה 3 לבעלת איבר אחד שונה מאפס ע"י $C_2\to C_2+C_3$, ופתחו לפיה. אחר כך שימו לב לקשר בין שורה 2 לשורה 4.`,
      solution: R`$$|A|\underset{C_2\to C_2+C_3}{=}\begin{vmatrix}x^3-4x&x^7-3&x^2+1&0\\-5&-11&x-5&5\\0&0&2&0\\-10&2&2x-10&10\end{vmatrix}=2\begin{vmatrix}x^3-4x&x^7-3&0\\-5&-11&5\\-10&2&10\end{vmatrix}\underset{R_3\to R_3-2R_2}{=}2\begin{vmatrix}x^3-4x&x^7-3&0\\-5&-11&5\\0&24&0\end{vmatrix}$$
$$=2\cdot(-5)\cdot\begin{vmatrix}x^3-4x&x^7-3\\0&24\end{vmatrix}=-240\,x(x^2-4)$$
<p>$|A|=0\iff x(x^2-4)=0\iff x=0,2,-2$.</p>
<p>שלושה ערכים שסכומם $0$. <b>תשובה: ג'.</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'eigen', type: 'mc', answer: 'ד',
      text: R`סמנו את הטענה היחידה שהיא נכונה:`,
      options: [
        R`המטריצות $\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}$ ו-$\begin{pmatrix}0&0&-1\\0&0&0\\1&0&0\end{pmatrix}$ דומות.`,
        R`קיימת $A\in\mathbb{R}^{3\times3}$ המקיימת $\det(A+I)=\det(A+2I)=\det(A+3I)=\det(A+4I)=0$.`,
        R`קיימת העתקה לינארית $T:\mathbb{R}_4[x]\to\mathbb{R}^2$ המקיימת $\ker T=\{p\in\mathbb{R}_4[x]\mid p(1)=p(2)=p(3)=0\}$.`,
        R`אם $A\in\mathbb{R}^{2021\times2021}$ מקיימת $A^t=-A$ אז $\dim(\operatorname{Row}A)\le2020$.`,
        R`אם $A\in\mathbb{R}^{m\times n}$ מקיימת $\operatorname{rank}(A)=m$ אז שורות $A$ הן בסיס ל-$\mathbb{R}^n$.`
      ],
      hint: R`א' – השוו פולינומים אופייניים. ב' – כמה ע"ע יכולים להיות למטריצה $3\times3$? ג' – משפט המימדים השני. ד' – $|A|=|A^t|$ ו-$|kA|=k^n|A|$.`,
      solution: R`<p>א. לא: לשתיהן אותה דרגה, עקבה ודטרמיננטה, אבל הפולינום האופייני של השמאלית $t(t^2-1)$ ושל הימנית $t(t^2+1)$.<br>
ב. לא: אז $-1,-2,-3,-4$ היו ע"ע – 4 ע"ע למטריצה מסדר 3, והפ"א ממעלה 3.<br>
ג. לא: $\dim\mathbb{R}_4[x]=5$; גרעין כזה מוגדר ע"י 3 תנאים ב-5 נעלמים – מימדו 2, ולכן מימד התמונה היה 3, אבל התמונה ב-$\mathbb{R}^2$.<br>
ד. נכון: $|A|=|A^t|=|-A|=(-1)^{2021}|A|=-|A|$, לכן $|A|=0$, $A$ לא הפיכה והשורות ת"ל, כלומר $\dim(\operatorname{Row}A)\le2020$.<br>
ה. לא: $A=\begin{pmatrix}1&1&1\\0&1&1\end{pmatrix}$ – $r(A)=2=m$ אבל השורות אינן בסיס ל-$\mathbb{R}^3$.</p>
<p><b>תשובה: ד'.</b></p>`
    },
    {
      exam, q: 'שאלה 8', topic: 'eigen', type: 'mc', answer: 'א',
      text: R`תהי $A\in\mathbb{R}^{3\times3}$ המקיימת $\operatorname{rank}(A-I)=2$. אזי:`,
      options: [
        R`אם $x^2-2x-3$ הוא גורם של הפולינום האופייני של $A$, אז $A$ לכסינה.`,
        R`אם $x^2+2x+1$ הוא גורם של הפולינום האופייני של $A$, אז $A$ לכסינה.`,
        R`ההעתקה $T:\mathbb{R}^3\to\mathbb{R}^3$, $T(v)=Av$, היא הפיכה.`,
        R`ל-$A$ יש ערך עצמי מריבוי גיאומטרי גדול מ-1.`,
        R`אם $\operatorname{trace}(A)=0$ אז $A$ לכסינה.`
      ],
      hint: R`מהנתון: 1 הוא ע"ע מריבוי גיאומטרי $3-2=1$. ו"ע של ע"ע שונים בת"ל; $n$ ע"ע שונים ⇒ לכסינה.`,
      solution: R`<p>1 הוא ע"ע של $A$ מריבוי גיאומטרי 1.<br>
א. נכון: $x^2-2x-3=(x-3)(x+1)$, ולכן ל-$A$ שלושה ע"ע שונים $1,3,-1$ – לכסינה.<br>
ב. לא: $\begin{pmatrix}1&0&0\\0&-1&1\\0&0&-1\end{pmatrix}$ – ל-$-1$ ר"א 2 ור"ג 1.<br>
ג. לא: אם 0 במקום $-1$ באלכסון במטריצה של ג', $A$ לא הפיכה.<br>
ד. לא: $\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$ – ע"ע יחיד מריבוי גיאומטרי 1.<br>
ה. לא: $\begin{pmatrix}1&1&0\\0&1&1\\0&0&-2\end{pmatrix}$ – עקבה 0, אבל ל-1 ר"ג 1 ור"א 2.</p>
<p><b>תשובה: א'.</b></p>`
    }
  );
})();
